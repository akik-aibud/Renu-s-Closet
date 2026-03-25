import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Placeholder order data
const orderData: Record<
  string,
  {
    id: string;
    customer: {
      name: string;
      email: string;
      phone: string;
    };
    shipping: {
      address: string;
      city: string;
      district: string;
      method: string;
    };
    items: {
      name: string;
      variant: string;
      qty: number;
      price: number;
    }[];
    subtotal: number;
    shipping_cost: number;
    total: number;
    status: string;
    paymentStatus: string;
    paymentMethod: string;
    date: string;
    notes: string;
  }
> = {
  "ORD-001": {
    id: "ORD-001",
    customer: {
      name: "Fatima Akter",
      email: "fatima@example.com",
      phone: "+880 1712-345678",
    },
    shipping: {
      address: "House 12, Road 5, Dhanmondi",
      city: "Dhaka",
      district: "Dhaka",
      method: "Standard Delivery",
    },
    items: [
      { name: "Banarasi Silk Saree - Red", variant: "Free Size", qty: 1, price: 4500 },
      { name: "Cotton Jamdani - White", variant: "Free Size", qty: 1, price: 3200 },
    ],
    subtotal: 7700,
    shipping_cost: 100,
    total: 7800,
    status: "Processing",
    paymentStatus: "Paid",
    paymentMethod: "bKash",
    date: "2026-03-25",
    notes: "Please gift wrap",
  },
};

// Fallback order for unknown IDs
const fallbackOrder = {
  id: "ORD-000",
  customer: {
    name: "Customer Name",
    email: "customer@example.com",
    phone: "+880 1700-000000",
  },
  shipping: {
    address: "Address",
    city: "Dhaka",
    district: "Dhaka",
    method: "Standard Delivery",
  },
  items: [
    { name: "Sample Saree", variant: "Free Size", qty: 1, price: 3000 },
  ],
  subtotal: 3000,
  shipping_cost: 100,
  total: 3100,
  status: "Pending",
  paymentStatus: "Unpaid",
  paymentMethod: "COD",
  date: "2026-03-25",
  notes: "",
};

const statusVariant: Record<string, "default" | "secondary" | "outline" | "destructive"> = {
  Pending: "outline",
  Processing: "default",
  Shipped: "secondary",
  Delivered: "default",
  Cancelled: "destructive",
};

export default async function OrderDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const order = orderData[id] ?? { ...fallbackOrder, id };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/admin/orders" className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}>
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <div className="flex-1">
          <h1 className="text-2xl font-bold tracking-tight">
            Order {order.id}
          </h1>
          <p className="text-muted-foreground text-sm">
            Placed on {order.date}
          </p>
        </div>
        <Badge variant={statusVariant[order.status]} className="text-sm">
          {order.status}
        </Badge>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Order Items */}
        <div className="space-y-6 lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Order Items</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>Variant</TableHead>
                    <TableHead className="text-right">Qty</TableHead>
                    <TableHead className="text-right">Price</TableHead>
                    <TableHead className="text-right">Total</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {order.items.map((item, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">{item.name}</TableCell>
                      <TableCell className="text-muted-foreground">
                        {item.variant}
                      </TableCell>
                      <TableCell className="text-right">{item.qty}</TableCell>
                      <TableCell className="text-right">
                        ৳{item.price.toLocaleString()}
                      </TableCell>
                      <TableCell className="text-right">
                        ৳{(item.price * item.qty).toLocaleString()}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <Separator className="my-4" />
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>৳{order.subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>৳{order.shipping_cost.toLocaleString()}</span>
                </div>
                <Separator />
                <div className="flex justify-between text-base font-bold">
                  <span>Total</span>
                  <span>৳{order.total.toLocaleString()}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Update Status */}
          <Card>
            <CardHeader>
              <CardTitle>Update Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {["Pending", "Processing", "Shipped", "Delivered", "Cancelled"].map(
                  (s) => (
                    <Button
                      key={s}
                      variant={order.status === s ? "default" : "outline"}
                      size="sm"
                    >
                      {s}
                    </Button>
                  )
                )}
              </div>
            </CardContent>
          </Card>

          {order.notes && (
            <Card>
              <CardHeader>
                <CardTitle>Order Notes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">{order.notes}</p>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Customer Info */}
          <Card>
            <CardHeader>
              <CardTitle>Customer</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p className="font-medium">{order.customer.name}</p>
              <p className="text-muted-foreground">{order.customer.email}</p>
              <p className="text-muted-foreground">{order.customer.phone}</p>
            </CardContent>
          </Card>

          {/* Shipping Info */}
          <Card>
            <CardHeader>
              <CardTitle>Shipping</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p>{order.shipping.address}</p>
              <p>
                {order.shipping.city}, {order.shipping.district}
              </p>
              <Separator />
              <p className="text-muted-foreground">
                Method: {order.shipping.method}
              </p>
            </CardContent>
          </Card>

          {/* Payment Info */}
          <Card>
            <CardHeader>
              <CardTitle>Payment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Status</span>
                <Badge
                  variant={
                    order.paymentStatus === "Paid" ? "default" : "destructive"
                  }
                >
                  {order.paymentStatus}
                </Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Method</span>
                <span className="font-medium">{order.paymentMethod}</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
