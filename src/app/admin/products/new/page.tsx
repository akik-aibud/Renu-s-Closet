"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Upload, Plus, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const productSchema = z.object({
  nameEn: z.string().min(1, "Product name is required"),
  nameBn: z.string().optional(),
  descriptionEn: z.string().optional(),
  descriptionBn: z.string().optional(),
  price: z.coerce.number().min(0, "Price must be positive"),
  comparePrice: z.coerce.number().optional(),
  costPrice: z.coerce.number().optional(),
  sku: z.string().optional(),
  barcode: z.string().optional(),
  stock: z.coerce.number().min(0).default(0),
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
});

type ProductFormData = z.infer<typeof productSchema>;

type Variant = {
  id: string;
  color: string;
  size: string;
  material: string;
  stock: number;
  price: number;
};

export default function NewProductPage() {
  const [status, setStatus] = useState("Draft");
  const [category, setCategory] = useState("");
  const [featured, setFeatured] = useState(false);
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");
  const [variants, setVariants] = useState<Variant[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductFormData>();

  const onSubmit = (data: ProductFormData) => {
    console.log("Product data:", {
      ...data,
      status,
      category,
      featured,
      tags,
      variants,
    });
  };

  const addTag = () => {
    const trimmed = tagInput.trim();
    if (trimmed && !tags.includes(trimmed)) {
      setTags([...tags, trimmed]);
      setTagInput("");
    }
  };

  const removeTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };

  const addVariant = () => {
    setVariants([
      ...variants,
      {
        id: crypto.randomUUID(),
        color: "",
        size: "",
        material: "",
        stock: 0,
        price: 0,
      },
    ]);
  };

  const updateVariant = (id: string, field: keyof Variant, value: string | number) => {
    setVariants(
      variants.map((v) => (v.id === id ? { ...v, [field]: value } : v))
    );
  };

  const removeVariant = (id: string) => {
    setVariants(variants.filter((v) => v.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/admin/products" className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}>
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <h1 className="text-2xl font-bold tracking-tight">Add New Product</h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main Content */}
          <div className="space-y-6 lg:col-span-2">
            {/* Basic Info */}
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="nameEn">Product Name (English) *</Label>
                    <Input
                      id="nameEn"
                      placeholder="e.g. Banarasi Silk Saree"
                      {...register("nameEn")}
                    />
                    {errors.nameEn && (
                      <p className="text-destructive text-sm">
                        {errors.nameEn.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="nameBn">Product Name (Bengali)</Label>
                    <Input
                      id="nameBn"
                      placeholder="e.g. বানারসি সিল্ক শাড়ি"
                      {...register("nameBn")}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="descriptionEn">Description (English)</Label>
                  <Textarea
                    id="descriptionEn"
                    rows={4}
                    placeholder="Product description in English..."
                    {...register("descriptionEn")}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="descriptionBn">Description (Bengali)</Label>
                  <Textarea
                    id="descriptionBn"
                    rows={4}
                    placeholder="বাংলায় পণ্যের বিবরণ..."
                    {...register("descriptionBn")}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Images */}
            <Card>
              <CardHeader>
                <CardTitle>Images</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex min-h-[200px] cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/25 p-8 text-center transition-colors hover:border-muted-foreground/50">
                  <Upload className="text-muted-foreground mb-4 h-10 w-10" />
                  <p className="text-sm font-medium">
                    Drag & drop images here, or click to browse
                  </p>
                  <p className="text-muted-foreground mt-1 text-xs">
                    PNG, JPG, WEBP up to 5MB. Will integrate UploadThing later.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Pricing */}
            <Card>
              <CardHeader>
                <CardTitle>Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="space-y-2">
                    <Label htmlFor="price">Price (৳) *</Label>
                    <Input
                      id="price"
                      type="number"
                      placeholder="0"
                      {...register("price")}
                    />
                    {errors.price && (
                      <p className="text-destructive text-sm">
                        {errors.price.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="comparePrice">Compare at Price (৳)</Label>
                    <Input
                      id="comparePrice"
                      type="number"
                      placeholder="0"
                      {...register("comparePrice")}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="costPrice">Cost Price (৳)</Label>
                    <Input
                      id="costPrice"
                      type="number"
                      placeholder="0"
                      {...register("costPrice")}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Inventory */}
            <Card>
              <CardHeader>
                <CardTitle>Inventory</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="space-y-2">
                    <Label htmlFor="sku">SKU</Label>
                    <Input
                      id="sku"
                      placeholder="SAR-BAN-001"
                      {...register("sku")}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="barcode">Barcode</Label>
                    <Input
                      id="barcode"
                      placeholder="Barcode number"
                      {...register("barcode")}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="stock">Stock Quantity</Label>
                    <Input
                      id="stock"
                      type="number"
                      placeholder="0"
                      {...register("stock")}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Variants */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Variants</CardTitle>
                <Button type="button" variant="outline" size="sm" onClick={addVariant}>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Variant
                </Button>
              </CardHeader>
              <CardContent>
                {variants.length === 0 ? (
                  <p className="text-muted-foreground text-sm">
                    No variants added. Click &quot;Add Variant&quot; to create
                    size/color options.
                  </p>
                ) : (
                  <div className="space-y-4">
                    {variants.map((variant, index) => (
                      <div key={variant.id}>
                        {index > 0 && <Separator className="mb-4" />}
                        <div className="flex items-start gap-3">
                          <div className="grid flex-1 gap-3 sm:grid-cols-5">
                            <div className="space-y-1">
                              <Label className="text-xs">Color</Label>
                              <Input
                                placeholder="Red"
                                value={variant.color}
                                onChange={(e) =>
                                  updateVariant(variant.id, "color", e.target.value)
                                }
                              />
                            </div>
                            <div className="space-y-1">
                              <Label className="text-xs">Size</Label>
                              <Input
                                placeholder="Free Size"
                                value={variant.size}
                                onChange={(e) =>
                                  updateVariant(variant.id, "size", e.target.value)
                                }
                              />
                            </div>
                            <div className="space-y-1">
                              <Label className="text-xs">Material</Label>
                              <Input
                                placeholder="Silk"
                                value={variant.material}
                                onChange={(e) =>
                                  updateVariant(
                                    variant.id,
                                    "material",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                            <div className="space-y-1">
                              <Label className="text-xs">Stock</Label>
                              <Input
                                type="number"
                                placeholder="0"
                                value={variant.stock}
                                onChange={(e) =>
                                  updateVariant(
                                    variant.id,
                                    "stock",
                                    parseInt(e.target.value) || 0
                                  )
                                }
                              />
                            </div>
                            <div className="space-y-1">
                              <Label className="text-xs">Price (৳)</Label>
                              <Input
                                type="number"
                                placeholder="0"
                                value={variant.price}
                                onChange={(e) =>
                                  updateVariant(
                                    variant.id,
                                    "price",
                                    parseInt(e.target.value) || 0
                                  )
                                }
                              />
                            </div>
                          </div>
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="mt-5 shrink-0"
                            onClick={() => removeVariant(variant.id)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* SEO */}
            <Card>
              <CardHeader>
                <CardTitle>SEO</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="metaTitle">Meta Title</Label>
                  <Input
                    id="metaTitle"
                    placeholder="SEO title"
                    {...register("metaTitle")}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="metaDescription">Meta Description</Label>
                  <Textarea
                    id="metaDescription"
                    rows={3}
                    placeholder="SEO description"
                    {...register("metaDescription")}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Status */}
            <Card>
              <CardHeader>
                <CardTitle>Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Select value={status} onValueChange={(v) => setStatus(v ?? "Draft")}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Draft">Draft</SelectItem>
                    <SelectItem value="Active">Active</SelectItem>
                    <SelectItem value="Archived">Archived</SelectItem>
                  </SelectContent>
                </Select>
                <div className="flex items-center justify-between">
                  <Label htmlFor="featured" className="cursor-pointer">
                    Featured Product
                  </Label>
                  <Switch
                    id="featured"
                    checked={featured}
                    onCheckedChange={setFeatured}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Category */}
            <Card>
              <CardHeader>
                <CardTitle>Category</CardTitle>
              </CardHeader>
              <CardContent>
                <Select value={category} onValueChange={(v) => setCategory(v ?? "")}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="silk-saree">Silk Saree</SelectItem>
                    <SelectItem value="jamdani">Jamdani</SelectItem>
                    <SelectItem value="muslin">Muslin</SelectItem>
                    <SelectItem value="tant">Tant</SelectItem>
                    <SelectItem value="cotton">Cotton</SelectItem>
                    <SelectItem value="katan">Katan</SelectItem>
                    <SelectItem value="half-silk">Half Silk</SelectItem>
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            {/* Tags */}
            <Card>
              <CardHeader>
                <CardTitle>Tags</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex gap-2">
                  <Input
                    placeholder="Add a tag"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        addTag();
                      }
                    }}
                  />
                  <Button type="button" variant="outline" size="sm" onClick={addTag}>
                    Add
                  </Button>
                </div>
                {tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="cursor-pointer"
                        onClick={() => removeTag(tag)}
                      >
                        {tag}
                        <X className="ml-1 h-3 w-3" />
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Actions */}
            <div className="flex flex-col gap-2">
              <Button type="submit" onClick={() => setStatus("Active")}>
                Publish
              </Button>
              <Button
                type="submit"
                variant="outline"
                onClick={() => setStatus("Draft")}
              >
                Save as Draft
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
