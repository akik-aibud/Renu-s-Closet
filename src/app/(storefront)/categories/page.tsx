import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    name: "Rajshahi Silk Saree",
    nameBn: "রাজশাহী সিল্ক শাড়ি",
    slug: "rajshahi-silk",
    description: "Premium Rajshahi silk sarees with traditional designs",
    color: "bg-rose-50",
  },
  {
    name: "Muslin Saree",
    nameBn: "মসলিন শাড়ি",
    slug: "muslin",
    description: "Finest muslin fabric sarees from Bangladesh",
    color: "bg-amber-50",
  },
  {
    name: "Jamdani Saree",
    nameBn: "জামদানি শাড়ি",
    slug: "jamdani",
    description: "Handwoven Jamdani sarees with intricate patterns",
    color: "bg-violet-50",
  },
  {
    name: "Katan Saree",
    nameBn: "কাতান শাড়ি",
    slug: "katan",
    description: "Classic Katan silk sarees for special occasions",
    color: "bg-emerald-50",
  },
  {
    name: "Cotton Saree",
    nameBn: "সুতি শাড়ি",
    slug: "cotton",
    description: "Comfortable cotton sarees for everyday wear",
    color: "bg-blue-50",
  },
  {
    name: "Banarasi Saree",
    nameBn: "বেনারসি শাড়ি",
    slug: "banarasi",
    description: "Luxurious Banarasi sarees with gold zari work",
    color: "bg-yellow-50",
  },
  {
    name: "Half Silk Saree",
    nameBn: "হাফ সিল্ক শাড়ি",
    slug: "half-silk",
    description: "Affordable silk blend sarees",
    color: "bg-pink-50",
  },
  {
    name: "Designer Saree",
    nameBn: "ডিজাইনার শাড়ি",
    slug: "designer",
    description: "Exclusive designer collection sarees",
    color: "bg-indigo-50",
  },
];

export default function CategoriesPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold">Shop by Category</h1>
        <p className="mt-2 text-muted-foreground">
          Explore our curated collection of premium sarees
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {categories.map((category) => (
          <Link key={category.slug} href={`/categories/${category.slug}`}>
            <Card className="group overflow-hidden transition-all hover:shadow-lg">
              <div
                className={`${category.color} flex aspect-square items-center justify-center`}
              >
                <div className="text-center p-4">
                  <p className="text-4xl mb-2 opacity-60">🥻</p>
                  <p className="text-lg font-semibold text-foreground/80 group-hover:text-primary transition-colors">
                    {category.nameBn}
                  </p>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold">{category.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {category.description}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
