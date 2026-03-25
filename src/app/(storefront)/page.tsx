import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Truck, Shield, Headphones, Star, Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { ProductCard } from "@/components/storefront/product-card";
import { products } from "@/lib/product-data";

const featuredCategories = [
  {
    name: "Rajshahi Saree",
    slug: "rajshahi-saree",
    description: "Handwoven silk from Rajshahi",
    count: 42,
    image: "/images/products/632099432_1219348246991447_8360437323766328310_n.jpg",
  },
  {
    name: "Muslin Saree",
    slug: "muslin-saree",
    description: "Lightweight, breathable elegance",
    count: 35,
    image: "/images/products/636692276_1221158410143764_3286136893396369197_n.jpg",
  },
  {
    name: "Silk Saree",
    slug: "silk-saree",
    description: "Luxurious pure silk drapes",
    count: 28,
    image: "/images/products/629231860_1214759754116963_498631737993628965_n.jpg",
  },
  {
    name: "Organza",
    slug: "organza",
    description: "Light & airy floral prints",
    count: 20,
    image: "/images/products/634205615_1221158366810435_6050418944835063452_n.jpg",
  },
  {
    name: "Katan Saree",
    slug: "katan",
    description: "Rich traditional Katan silk",
    count: 18,
    image: "/images/products/633778464_1219350163657922_9108914549240544746_n.jpg",
  },
  {
    name: "Cotton Saree",
    slug: "cotton-saree",
    description: "Everyday comfort and style",
    count: 50,
    image: "/images/products/632078387_1217205327205739_688551072934045568_n.jpg",
  },
];

const newArrivals = products.slice(0, 8);

const testimonials = [
  {
    name: "Fatima Rahman",
    location: "Dhaka",
    text: "The Rajshahi silk saree I ordered was absolutely stunning. The quality exceeded my expectations. Will definitely order again!",
    rating: 5,
  },
  {
    name: "Nusrat Jahan",
    location: "Chittagong",
    text: "Beautiful collection and excellent customer service. My Jamdani saree arrived perfectly packed and on time.",
    rating: 5,
  },
  {
    name: "Tasnim Akter",
    location: "Sylhet",
    text: "I've been a loyal customer for over a year. Renu's Closet always has the latest designs at reasonable prices.",
    rating: 5,
  },
];

const features = [
  {
    icon: Truck,
    title: "Nationwide Delivery",
    description: "Free shipping on orders above 3,000 BDT across Bangladesh",
  },
  {
    icon: Shield,
    title: "Authentic Products",
    description: "100% genuine handcrafted sarees directly from weavers",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Call or WhatsApp us anytime at 01761-400811",
  },
  {
    icon: Star,
    title: "30K+ Happy Customers",
    description: "Trusted by our growing community on Facebook",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero Section — Full-width immersive banner */}
      <section className="relative overflow-hidden">
        {/* Background gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/30 z-10" />
        {/* Hero background image */}
        <Image
          src="/images/products/629231860_1214759754116963_498631737993628965_n.jpg"
          alt="Premium red silk saree with gold embroidery from Renu's Closet"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />

        <div className="relative z-20 mx-auto max-w-7xl px-4 py-20 sm:py-28 lg:py-36">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-foreground backdrop-blur-sm">
              <span className="size-1.5 rounded-full bg-primary animate-pulse" />
              New Collection 2026
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-background sm:text-5xl lg:text-6xl">
              Timeless Elegance in{" "}
              <span className="text-secondary">Every Drape</span>
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-background/80 max-w-lg">
              Discover premium Rajshahi, Muslin &amp; Silk sarees handcrafted by
              Bangladeshi artisans. Trusted by 30,000+ women nationwide.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/products" className={cn(buttonVariants({ size: "lg" }), "h-13 px-10 text-base shadow-lg")}>
                Shop Collection
                <ArrowRight className="ml-2 size-4" />
              </Link>
              <a
                href="https://wa.me/8801761400811"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ size: "lg" }), "h-13 px-8 text-base bg-transparent border-white/60 text-white hover:bg-white/10 hover:text-white")}
              >
                <Phone className="mr-2 size-4" />
                Order via WhatsApp
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex flex-wrap items-center gap-6 text-background/70">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <span className="text-sm font-medium">30K+ Happy Customers</span>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <Truck className="size-4" />
                <span className="text-sm">Free Delivery over &#2547;3,000</span>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <Shield className="size-4" />
                <span className="text-sm">100% Authentic</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Announcement / Promo Strip */}
      <section className="bg-secondary py-3">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="text-sm font-medium text-foreground">
            Free delivery on all orders above &#2547;3,000 &bull; Cash on Delivery available nationwide &bull; Call{" "}
            <a href="tel:+8801761400811" className="underline font-bold">01761-400811</a>
          </p>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Shop by Category
            </h2>
            <p className="mt-3 text-muted-foreground">
              Explore our finest collections of traditional and contemporary
              sarees
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredCategories.map((cat) => (
              <Link key={cat.slug} href={`/products?category=${cat.slug}`}>
                <Card className="group h-full overflow-hidden border-border/50 transition-all hover:border-primary/30 hover:shadow-md">
                  <CardContent className="relative p-0">
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={cat.image}
                        alt={cat.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                        {cat.name}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {cat.description}
                      </p>
                      <p className="mt-2 text-xs font-medium text-primary">
                        {cat.count} Products
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                New Arrivals
              </h2>
              <p className="mt-3 text-muted-foreground">
                The latest additions to our collection
              </p>
            </div>
            <Link href="/products" className={cn(buttonVariants({ variant: "outline" }), "hidden sm:flex")}>
              View All
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {newArrivals.map((product) => (
              <ProductCard key={product.slug} {...product} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link href="/products" className={cn(buttonVariants({ variant: "outline" }))}>
              View All Products
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Shop With Us */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why Shop With Us
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col items-center rounded-xl border border-border/50 bg-card p-6 text-center transition-shadow hover:shadow-md"
              >
                <div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
                  <feature.icon className="size-6 text-primary" />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-primary/5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What Our Customers Say
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <Card
                key={t.name}
                className="border-border/50 bg-card"
              >
                <CardContent className="p-6">
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="size-4 fill-secondary text-secondary"
                      />
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="mt-4 border-t pt-4">
                    <p className="text-sm font-medium text-foreground">
                      {t.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {t.location}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-2xl font-bold text-primary-foreground sm:text-3xl">
            Join 30,000+ Fashion Lovers
          </h2>
          <p className="mt-3 text-primary-foreground/80">
            Follow us on Facebook for new arrivals, exclusive offers, and
            styling tips.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <a
              href="https://facebook.com/renusclosetdhaka"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "h-12 px-8")}
            >
              Follow on Facebook
            </a>
            <a
              href="https://wa.me/8801761400811"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "lg" }), "h-12 px-8 bg-transparent border-white/60 text-white hover:bg-white/10 hover:text-white")}
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
