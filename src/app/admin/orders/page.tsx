"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Eye } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const orders = [
  {
    id: "ORD-001",
    customer: "Fatima Akter",
    email: "fatima@example.com",
    total: 3200,
    status: "Processing",
    paymentStatus: "Paid",
    items: 2,
    date: "2026-03-25",
  },
  {
    id: "ORD-002",
    customer: "Nusrat Jahan",
    email: "nusrat@example.com",
    total: 1850,
    status: "Shipped",
    paymentStatus: "Paid",
    items: 1,
    date: "2026-03-24",
  },
  {
    id: "ORD-003",
    customer: "Taslima Begum",
    email: "taslima@example.com",
    total: 5400,
    status: "Delivered",
    paymentStatus: "Paid",
    items: 3,
    date: "2026-03-24",
  },
  {
    id: "ORD-004",
    customer: "Ayesha Rahman",
    email: "ayesha@example.com",
    total: 2100,
    status: "Pending",
    paymentStatus: "Unpaid",
    items: 1,
    date: "2026-03-23",
  },
  {
    id: "ORD-005",
    customer: "Sabrina Islam",
    email: "sabrina@example.com",
    total: 4750,
    status: "Processing",
    paymentStatus: "Paid",
    items: 2,
    date: "2026-03-23",
  },
  {
    id: "ORD-006",
    customer: "Rima Akhter",
    email: "rima@example.com",
    total: 6200,
    status: "Cancelled",
    paymentStatus: "Refunded",
    items: 4,
    date: "2026-03-22",
  },
  {
    id: "ORD-007",
    customer: "Mili Khatun",
    email: "mili@example.com",
    total: 3800,
    status: "Delivered",
    paymentStatus: "Paid",
    items: 2,
    date: "2026-03-21",
  },
];

const statusVariant: Record<string, "default" | "secondary" | "outline" | "destructive"> = {
  Pending: "outline",
  Processing: "default",
  Shipped: "secondary",
  Delivered: "default",
  Cancelled: "destructive",
};

const paymentVariant: Record<string, "default" | "secondary" | "outline" | "destructive"> = {
  Paid: "default",
  Unpaid: "destructive",
  Refunded: "secondary",
};

export default function OrdersPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filtered = orders.filter((o) => {
    const matchesSearch =
      o.id.toLowerCase().includes(search.toLowerCase()) ||
      o.customer.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "all" || o.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">Orders</h1>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">
            {filtered.length} order{filtered.length !== 1 ? "s" : ""}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Filters */}
          <div className="mb-4 flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Search className="text-muted-foreground absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" />
              <Input
                placeholder="Search by order number or customer..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9"
              />
            </div>
            <Select value={statusFilter} onValueChange={(v) => setStatusFilter(v ?? "all")}>
              <SelectTrigger className="w-full sm:w-[160px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="Pending">Pending</SelectItem>
                <SelectItem value="Processing">Processing</SelectItem>
                <SelectItem value="Shipped">Shipped</SelectItem>
                <SelectItem value="Delivered">Delivered</SelectItem>
                <SelectItem value="Cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Table */}
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead className="text-right">Total</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Payment</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="w-12" />
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium">{order.customer}</p>
                        <p className="text-muted-foreground text-xs">
                          {order.email}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      ৳{order.total.toLocaleString()}
                    </TableCell>
                    <TableCell>
                      <Badge variant={statusVariant[order.status]}>
                        {order.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={paymentVariant[order.paymentStatus]}>
                        {order.paymentStatus}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {order.date}
                    </TableCell>
                    <TableCell>
                      <Link href={`/admin/orders/${order.id}`} className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}>
                        <Eye className="h-4 w-4" />
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
