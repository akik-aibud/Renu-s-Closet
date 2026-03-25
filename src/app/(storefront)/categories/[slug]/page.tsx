import { redirect } from "next/navigation";
import { products } from "@/lib/product-data";

// Map URL slugs to category names
const slugToCategory: Record<string, string> = {
  "rajshahi-silk": "Rajshahi Saree",
  "rajshahi-saree": "Rajshahi Saree",
  "muslin": "Muslin Saree",
  "muslin-saree": "Muslin Saree",
  "silk-saree": "Silk Saree",
  "organza": "Organza Saree",
  "katan": "Katan Saree",
  "cotton": "Cotton Saree",
  "cotton-saree": "Cotton Saree",
  "designer": "Designer Saree",
  "half-silk": "Silk Saree",
  "banarasi": "Silk Saree",
  "bridal": "Silk Saree",
  "tissue": "Tissue Saree",
};

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = slugToCategory[slug];

  if (category) {
    redirect(`/products?category=${encodeURIComponent(category)}`);
  }

  // Fallback: redirect to all products
  redirect("/products");
}
