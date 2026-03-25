import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "12");
    const category = searchParams.get("category");
    const search = searchParams.get("search");
    const sort = searchParams.get("sort") || "newest";
    const status = searchParams.get("status") || "ACTIVE";

    const where: Record<string, unknown> = {};

    if (status) {
      where.status = status;
    }

    if (category) {
      where.category = { slug: category };
    }

    if (search) {
      where.OR = [
        { name: { contains: search, mode: "insensitive" } },
        { nameBn: { contains: search, mode: "insensitive" } },
        { description: { contains: search, mode: "insensitive" } },
      ];
    }

    const orderBy: Record<string, string> = {};
    switch (sort) {
      case "price-low":
        orderBy.price = "asc";
        break;
      case "price-high":
        orderBy.price = "desc";
        break;
      case "oldest":
        orderBy.createdAt = "asc";
        break;
      default:
        orderBy.createdAt = "desc";
    }

    const [products, total] = await Promise.all([
      prisma.product.findMany({
        where,
        include: {
          category: true,
          images: { orderBy: { position: "asc" }, take: 1 },
        },
        orderBy,
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.product.count({ where }),
    ]);

    return NextResponse.json({
      products,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Products fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      nameBn,
      slug,
      description,
      descriptionBn,
      price,
      comparePrice,
      costPrice,
      sku,
      stock,
      categoryId,
      status,
      featured,
      images,
      variants,
      tags,
      metaTitle,
      metaDescription,
    } = body;

    if (!name || !slug || !price) {
      return NextResponse.json(
        { error: "Name, slug and price are required" },
        { status: 400 }
      );
    }

    const product = await prisma.product.create({
      data: {
        name,
        nameBn,
        slug,
        description,
        descriptionBn,
        price,
        comparePrice,
        costPrice,
        sku,
        stock: stock || 0,
        categoryId,
        status: status || "DRAFT",
        featured: featured || false,
        metaTitle,
        metaDescription,
        images: images?.length
          ? {
              create: images.map((img: { url: string; alt?: string }, i: number) => ({
                url: img.url,
                alt: img.alt || name,
                position: i,
              })),
            }
          : undefined,
        variants: variants?.length
          ? {
              create: variants.map((v: { name: string; sku?: string; price?: number; stock?: number; color?: string; size?: string; material?: string }) => ({
                name: v.name,
                sku: v.sku,
                price: v.price,
                stock: v.stock || 0,
                color: v.color,
                size: v.size,
                material: v.material,
              })),
            }
          : undefined,
        tags: tags?.length
          ? {
              connectOrCreate: tags.map((tag: string) => ({
                where: { name: tag },
                create: { name: tag },
              })),
            }
          : undefined,
      },
      include: {
        images: true,
        variants: true,
        category: true,
        tags: true,
      },
    });

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error("Product creation error:", error);
    return NextResponse.json(
      { error: "Failed to create product" },
      { status: 500 }
    );
  }
}
