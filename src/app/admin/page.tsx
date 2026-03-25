"use client";

import {
  DollarSign,
  ShoppingCart,
  Package,
  Users,
  AlertTriangle,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const stats = [
  {
    title: "Total Revenue",
    value: "৳1,24,500",
    change: "+12.5%",
    icon: DollarSign,
  },
  {
    title: "Orders",
    value: "156",
    change: "+8.2%",
    icon: ShoppingCart,
  },
  {
    title: "Products",
    value: "84",
    change: "+3",
    icon: Package,
  },
  {
    title: "Customers",
    value: "312",
    change: "+24",
    icon: Users,
  },
];

const recentOrders = [
  {
    id: "ORD-001",
    customer: "Fatima Akter",
    total: "৳3,200",
    status: "Processing",
    date: "2026-03-25",
  },
  {
    id: "ORD-002",
    customer: "Nusrat Jahan",
    total: "৳1,850",
    status: "Shipped",
    date: "2026-03-24",
  },
  {
    id: "ORD-003",
    customer: "Taslima Begum",
    total: "৳5,400",
    status: "Delivered",
    date: "2026-03-24",
  },
  {
    id: "ORD-004",
    customer: "Ayesha Rahman",
    total: "৳2,100",
    status: "Pending",
    date: "2026-03-23",
  },
  {
    id: "ORD-005",
    customer: "Sabrina Islam",
    total: "৳4,750",
    status: "Processing",
    date: "2026-03-23",
  },
];

const lowStockProducts = [
  { name: "Banarasi Silk Saree - Red", stock: 2, sku: "SAR-BAN-001" },
  { name: "Cotton Jamdani - White", stock: 1, sku: "SAR-JAM-005" },
  { name: "Muslin Saree - Cream", stock: 3, sku: "SAR-MUS-012" },
  { name: "Katan Silk - Navy Blue", stock: 0, sku: "SAR-KAT-008" },
];

const statusColor: Record<string, string> = {
  Pending: "outline",
  Processing: "default",
  Shipped: "secondary",
  Delivered: "default",
};

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-muted-foreground text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-muted-foreground text-xs">
                <span className="text-green-600">{stat.change}</span> from last
                month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Recent Orders */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentOrders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell>{order.customer}</TableCell>
                    <TableCell>{order.total}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          (statusColor[order.status] as
                            | "default"
                            | "secondary"
                            | "outline"
                            | "destructive") ?? "default"
                        }
                      >
                        {order.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {order.date}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Low Stock Alerts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-amber-500" />
              Low Stock Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {lowStockProducts.map((product) => (
                <div
                  key={product.sku}
                  className="flex items-center justify-between"
                >
                  <div>
                    <p className="text-sm font-medium">{product.name}</p>
                    <p className="text-muted-foreground text-xs">
                      {product.sku}
                    </p>
                  </div>
                  <Badge
                    variant={product.stock === 0 ? "destructive" : "outline"}
                  >
                    {product.stock === 0 ? "Out of stock" : `${product.stock} left`}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
