"use client";

import { useState } from "react";
import { Search } from "lucide-react";
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

const customers = [
  {
    id: "1",
    name: "Fatima Akter",
    email: "fatima@example.com",
    phone: "+880 1712-345678",
    orders: 5,
    totalSpent: 18500,
    lastOrder: "2026-03-25",
    status: "Active",
  },
  {
    id: "2",
    name: "Nusrat Jahan",
    email: "nusrat@example.com",
    phone: "+880 1812-456789",
    orders: 3,
    totalSpent: 9200,
    lastOrder: "2026-03-24",
    status: "Active",
  },
  {
    id: "3",
    name: "Taslima Begum",
    email: "taslima@example.com",
    phone: "+880 1912-567890",
    orders: 8,
    totalSpent: 32400,
    lastOrder: "2026-03-24",
    status: "Active",
  },
  {
    id: "4",
    name: "Ayesha Rahman",
    email: "ayesha@example.com",
    phone: "+880 1612-678901",
    orders: 1,
    totalSpent: 2100,
    lastOrder: "2026-03-23",
    status: "Active",
  },
  {
    id: "5",
    name: "Sabrina Islam",
    email: "sabrina@example.com",
    phone: "+880 1512-789012",
    orders: 12,
    totalSpent: 48700,
    lastOrder: "2026-03-23",
    status: "Active",
  },
  {
    id: "6",
    name: "Rima Akhter",
    email: "rima@example.com",
    phone: "+880 1412-890123",
    orders: 2,
    totalSpent: 7800,
    lastOrder: "2026-03-10",
    status: "Inactive",
  },
  {
    id: "7",
    name: "Mili Khatun",
    email: "mili@example.com",
    phone: "+880 1312-901234",
    orders: 6,
    totalSpent: 21300,
    lastOrder: "2026-03-21",
    status: "Active",
  },
];

export default function CustomersPage() {
  const [search, setSearch] = useState("");

  const filtered = customers.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase()) ||
      c.phone.includes(search)
  );

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">Customers</h1>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">
            {filtered.length} customer{filtered.length !== 1 ? "s" : ""}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <div className="relative max-w-sm">
              <Search className="text-muted-foreground absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" />
              <Input
                placeholder="Search by name, email, or phone..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead className="text-right">Orders</TableHead>
                  <TableHead className="text-right">Total Spent</TableHead>
                  <TableHead>Last Order</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.map((customer) => (
                  <TableRow key={customer.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium">{customer.name}</p>
                        <p className="text-muted-foreground text-xs">
                          {customer.email}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {customer.phone}
                    </TableCell>
                    <TableCell className="text-right">
                      {customer.orders}
                    </TableCell>
                    <TableCell className="text-right">
                      ৳{customer.totalSpent.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {customer.lastOrder}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          customer.status === "Active" ? "default" : "secondary"
                        }
                      >
                        {customer.status}
                      </Badge>
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
