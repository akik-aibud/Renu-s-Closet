import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

function generateOrderNumber(): string {
  const chars = "0123456789";
  let result = "RC-";
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      items,
      shippingName,
      shippingPhone,
      shippingEmail,
      shippingAddress,
      shippingCity,
      shippingZip,
      shippingNote,
      paymentMethod,
      shippingCost,
      subtotal,
      total,
    } = body;

    if (!items?.length || !shippingName || !shippingPhone || !shippingAddress || !shippingCity) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const orderNumber = generateOrderNumber();

    const order = await prisma.order.create({
      data: {
        orderNumber,
        userId: "guest", // TODO: get from session
        shippingName,
        shippingPhone,
        shippingEmail: shippingEmail || null,
        shippingAddress,
        shippingCity,
        shippingZip: shippingZip || null,
        shippingNote: shippingNote || null,
        paymentMethod,
        subtotal,
        shippingCost,
        total,
        items: {
          create: items.map((item: { productId: string; variantId?: string; quantity: number; price: number }) => ({
            productId: item.productId,
            variantId: item.variantId || null,
            quantity: item.quantity,
            price: item.price,
          })),
        },
      },
      include: { items: true },
    });

    return NextResponse.json(
      { orderNumber: order.orderNumber, id: order.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Order creation error:", error);
    return NextResponse.json(
      { error: "Failed to create order" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const orders = await prisma.order.findMany({
      include: {
        items: {
          include: { product: true },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(orders);
  } catch (error) {
    console.error("Orders fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch orders" },
      { status: 500 }
    );
  }
}
