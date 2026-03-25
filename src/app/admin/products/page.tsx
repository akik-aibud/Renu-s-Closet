"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Plus,
  Search,
  MoreHorizontal,
  Edit,
  Trash2,
  Eye,
} from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const products = [
  {
    id: "1",
    name: "Banarasi Silk Saree",
    nameBn: "বানারসি সিল্ক শাড়ি",
    price: 4500,
    stock: 12,
    status: "Active",
    category: "Silk Saree",
    image: "/placeholder.jpg",
  },
  {
    id: "2",
    name: "Cotton Jamdani Saree",
    nameBn: "সুতি জামদানি শাড়ি",
    price: 3200,
    stock: 1,
    status: "Active",
    category: "Jamdani",
    image: "/placeholder.jpg",
  },
  {
    id: "3",
    name: "Muslin Saree - Cream",
    nameBn: "মসলিন শাড়ি - ক্রিম",
    price: 6800,
    stock: 3,
    status: "Active",
    category: "Muslin",
    image: "/placeholder.jpg",
  },
  {
    id: "4",
    name: "Katan Silk Saree - Navy",
    nameBn: "কাতান সিল্ক শাড়ি - নেভি",
    price: 5200,
    stock: 0,
    status: "Draft",
    category: "Silk Saree",
    image: "/placeholder.jpg",
  },
  {
    id: "5",
    name: "Tant Saree - Yellow",
    nameBn: "তাঁত শাড়ি - হলুদ",
    price: 1800,
    stock: 25,
    status: "Active",
    category: "Tant",
    image: "/placeholder.jpg",
  },
  {
    id: "6",
    name: "Dhakai Jamdani - Pink",
    nameBn: "ঢাকাই জামদানি - গোলাপি",
    price: 8500,
    stock: 5,
    status: "Archived",
    category: "Jamdani",
    image: "/placeholder.jpg",
  },
];

const statusVariant: Record<string, "default" | "secondary" | "outline" | "destructive"> = {
  Active: "default",
  Draft: "secondary",
  Archived: "outline",
};

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [selected, setSelected] = useState<string[]>([]);

  const filtered = products.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.nameBn.includes(search);
    const matchesStatus =
      statusFilter === "all" || p.status === statusFilter;
    const matchesCategory =
      categoryFilter === "all" || p.category === categoryFilter;
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const toggleSelect = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const toggleAll = () => {
    setSelected((prev) =>
      prev.length === filtered.length ? [] : filtered.map((p) => p.id)
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Products</h1>
        <Link href="/admin/products/new" className={cn(buttonVariants())}>
          <Plus className="mr-2 h-4 w-4" />
          Add Product
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">
            {filtered.length} product{filtered.length !== 1 ? "s" : ""}
            {selected.length > 0 && (
              <span className="ml-2 text-sm font-normal text-muted-foreground">
                ({selected.length} selected)
              </span>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Filters */}
          <div className="mb-4 flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Search className="text-muted-foreground absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" />
              <Input
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9"
              />
            </div>
            <Select value={statusFilter} onValueChange={(v) => setStatusFilter(v ?? "all")}>
              <SelectTrigger className="w-full sm:w-[150px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="Active">Active</SelectItem>
                <SelectItem value="Draft">Draft</SelectItem>
                <SelectItem value="Archived">Archived</SelectItem>
              </SelectContent>
            </Select>
            <Select value={categoryFilter} onValueChange={(v) => setCategoryFilter(v ?? "all")}>
              <SelectTrigger className="w-full sm:w-[150px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Silk Saree">Silk Saree</SelectItem>
                <SelectItem value="Jamdani">Jamdani</SelectItem>
                <SelectItem value="Muslin">Muslin</SelectItem>
                <SelectItem value="Tant">Tant</SelectItem>
              </SelectContent>
            </Select>
            {selected.length > 0 && (
              <DropdownMenu>
                <DropdownMenuTrigger render={<Button variant="outline" />}>
                  Bulk Actions
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Set Active</DropdownMenuItem>
                  <DropdownMenuItem>Set Draft</DropdownMenuItem>
                  <DropdownMenuItem>Archive</DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive">
                    Delete Selected
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>

          {/* Table */}
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">
                    <Checkbox
                      checked={
                        filtered.length > 0 &&
                        selected.length === filtered.length
                      }
                      onCheckedChange={toggleAll}
                    />
                  </TableHead>
                  <TableHead>Product</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead className="text-right">Price</TableHead>
                  <TableHead className="text-right">Stock</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="w-12" />
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>
                      <Checkbox
                        checked={selected.includes(product.id)}
                        onCheckedChange={() => toggleSelect(product.id)}
                      />
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-md bg-muted" />
                        <div>
                          <p className="font-medium">{product.name}</p>
                          <p className="text-muted-foreground text-xs">
                            {product.nameBn}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {product.category}
                    </TableCell>
                    <TableCell className="text-right">
                      ৳{product.price.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-right">
                      {product.stock === 0 ? (
                        <span className="text-destructive font-medium">
                          Out of stock
                        </span>
                      ) : product.stock <= 5 ? (
                        <span className="text-amber-600 font-medium">
                          {product.stock}
                        </span>
                      ) : (
                        product.stock
                      )}
                    </TableCell>
                    <TableCell>
                      <Badge variant={statusVariant[product.status]}>
                        {product.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger render={<Button variant="ghost" size="icon" />}>
                          <MoreHorizontal className="h-4 w-4" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Eye className="mr-2 h-4 w-4" />
                            View
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
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
