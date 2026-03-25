import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/storefront/product-card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Placeholder products
const products = Array.from({ length: 8 }, (_, i) => ({
  slug: `premium-saree-${i + 1}`,
  name: `Premium Saree Collection ${i + 1}`,
  price: 2500 + i * 500,
  originalPrice: 3500 + i * 500,
  image: "/images/products/placeholder.jpg",
  category: "Rajshahi Silk",
  isNew: i < 3,
}));

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const categoryName = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <div className="container mx-auto max-w-6xl px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">{categoryName}</h1>
        <p className="mt-2 text-muted-foreground">
          Showing {products.length} products
        </p>
      </div>

      <div className="mb-6 flex items-center justify-between">
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            All
          </Button>
          <Button variant="ghost" size="sm">
            New Arrivals
          </Button>
          <Button variant="ghost" size="sm">
            Best Sellers
          </Button>
        </div>
        <Select defaultValue="newest">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Newest First</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
            <SelectItem value="popular">Most Popular</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.slug} {...product} />
        ))}
      </div>
    </div>
  );
}
