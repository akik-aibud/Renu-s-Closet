import Link from "next/link";
import { SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { ProductCard } from "@/components/storefront/product-card";
import { products as allProducts } from "@/lib/product-data";

const categories = [
  { label: "All Sarees", value: "all" },
  { label: "Rajshahi Saree", value: "rajshahi-saree" },
  { label: "Muslin Saree", value: "muslin-saree" },
  { label: "Silk Saree", value: "silk-saree" },
  { label: "Cotton Saree", value: "cotton-saree" },
  { label: "Jamdani", value: "jamdani" },
  { label: "Katan", value: "katan" },
];

const materials = [
  "Pure Silk",
  "Muslin",
  "Cotton",
  "Half Silk",
  "Silk Blend",
];

const priceRanges = [
  { label: "Under 2,000 BDT", value: "0-2000" },
  { label: "2,000 - 5,000 BDT", value: "2000-5000" },
  { label: "5,000 - 10,000 BDT", value: "5000-10000" },
  { label: "Above 10,000 BDT", value: "10000+" },
];

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const currentCategory =
    typeof params.category === "string" ? params.category : "all";

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Shop</span>
      </nav>

      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Our Collection
          </h1>
          <p className="mt-1 text-muted-foreground">
            {allProducts.length} products
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[260px_1fr]">
        {/* Sidebar Filters */}
        <aside className="hidden lg:block">
          <div className="sticky top-32 space-y-6">
            <div>
              <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <SlidersHorizontal className="size-4" />
                Filters
              </h3>
            </div>

            <Separator />

            {/* Category Filter */}
            <div>
              <h4 className="mb-3 text-sm font-medium text-foreground">
                Category
              </h4>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <Link
                    key={cat.value}
                    href={
                      cat.value === "all"
                        ? "/products"
                        : `/products?category=${cat.value}`
                    }
                    className={`block rounded-md px-3 py-1.5 text-sm transition-colors ${
                      currentCategory === cat.value
                        ? "bg-primary/10 font-medium text-primary"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    {cat.label}
                  </Link>
                ))}
              </div>
            </div>

            <Separator />

            {/* Price Range */}
            <div>
              <h4 className="mb-3 text-sm font-medium text-foreground">
                Price Range
              </h4>
              <div className="space-y-2">
                {priceRanges.map((range) => (
                  <label
                    key={range.value}
                    className="flex cursor-pointer items-center gap-2 rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    <input
                      type="checkbox"
                      name="price-range"
                      value={range.value}
                      className="size-3.5 rounded border-border accent-primary"
                    />
                    {range.label}
                  </label>
                ))}
              </div>
            </div>

            <Separator />

            {/* Material */}
            <div>
              <h4 className="mb-3 text-sm font-medium text-foreground">
                Material
              </h4>
              <div className="flex flex-wrap gap-2">
                {materials.map((m) => (
                  <Badge
                    key={m}
                    variant="secondary"
                    className="cursor-pointer transition-colors hover:bg-primary/10 hover:text-primary"
                  >
                    {m}
                  </Badge>
                ))}
              </div>
            </div>

            <Separator />

            <Button variant="outline" className="w-full" size="sm">
              Clear All Filters
            </Button>
          </div>
        </aside>

        {/* Product Grid */}
        <div>
          {/* Sort Bar */}
          <div className="mb-6 flex items-center justify-between rounded-lg border border-border/50 bg-card p-3">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="lg:hidden"
              >
                <SlidersHorizontal className="mr-2 size-4" />
                Filters
              </Button>
              {currentCategory !== "all" && (
                <Badge variant="secondary" className="capitalize">
                  {currentCategory.replace("-", " ")}
                  <Link
                    href="/products"
                    className="ml-1.5 text-muted-foreground hover:text-foreground"
                  >
                    x
                  </Link>
                </Badge>
              )}
            </div>
            <Select defaultValue="newest">
              <SelectTrigger className="w-44">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Grid */}
          <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
            {allProducts.map((product) => (
              <ProductCard key={product.slug} {...product} />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-10 flex items-center justify-center gap-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button size="sm" className="min-w-[36px]">
              1
            </Button>
            <Button variant="outline" size="sm" className="min-w-[36px]">
              2
            </Button>
            <Button variant="outline" size="sm" className="min-w-[36px]">
              3
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
