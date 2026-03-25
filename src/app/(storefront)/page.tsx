import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Truck, Shield, RotateCcw, CreditCard, Star, Phone, CheckCircle } from "lucide-react";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { ProductCard } from "@/components/storefront/product-card";
import { products } from "@/lib/product-data";

// Circular category thumbnails (like Govaly)
const categoryThumbnails = [
  { name: "Rajshahi Silk", slug: "rajshahi-saree", image: "/images/products/632099432_1219348246991447_8360437323766328310_n.jpg" },
  { name: "Muslin", slug: "muslin-saree", image: "/images/products/636692276_1221158410143764_3286136893396369197_n.jpg" },
  { name: "Silk Saree", slug: "silk-saree", image: "/images/products/629231860_1214759754116963_498631737993628965_n.jpg" },
  { name: "Organza", slug: "organza", image: "/images/products/634205615_1221158366810435_6050418944835063452_n.jpg" },
  { name: "Katan", slug: "katan", image: "/images/products/633778464_1219350163657922_9108914549240544746_n.jpg" },
  { name: "Designer", slug: "designer", image: "/images/products/630331575_1217214713871467_6276752738203733599_n.jpg" },
  { name: "Cotton", slug: "cotton-saree", image: "/images/products/632078387_1217205327205739_688551072934045568_n.jpg" },
  { name: "Bridal", slug: "bridal", image: "/images/products/640389985_1226738019585803_1834511869601375658_n.jpg" },
];

// Shop by budget (Govaly-style)
const budgetRanges = [
  { label: "Under ৳3,000", slug: "0-3000", image: "/images/products/632078387_1217205327205739_688551072934045568_n.jpg", tagline: "Everyday Elegance" },
  { label: "Under ৳5,000", slug: "3000-5000", image: "/images/products/642291001_1229410139318591_2235371599286455991_n.jpg", tagline: "Premium Picks" },
  { label: "Under ৳7,000", slug: "5000-7000", image: "/images/products/634205615_1221158366810435_6050418944835063452_n.jpg", tagline: "Luxe Collection" },
  { label: "Under ৳10,000", slug: "7000-10000", image: "/images/products/633105921_1219361513656787_1919393146663509620_n.jpg", tagline: "Designer Exclusive" },
  { label: "৳10,000+", slug: "10000+", image: "/images/products/632723538_1219348196991452_7730524771975732638_n.jpg", tagline: "Bridal & Grand" },
];

// Trust badges (like Govaly's strip)
const trustBadges = [
  { icon: CreditCard, label: "Cash on Delivery" },
  { icon: RotateCcw, label: "Easy Returns" },
  { icon: Truck, label: "Delivery Within 3-5 Days" },
  { icon: Shield, label: "100% Authentic" },
];

const newArrivals = products.slice(0, 8);
const allProducts = products;

const testimonials = [
  { name: "Fatima Rahman", location: "Dhaka", text: "The Rajshahi silk saree I ordered was absolutely stunning. The quality exceeded my expectations. Will definitely order again!", rating: 5 },
  { name: "Nusrat Jahan", location: "Chittagong", text: "Beautiful collection and excellent customer service. My Jamdani saree arrived perfectly packed and on time.", rating: 5 },
  { name: "Tasnim Akter", location: "Sylhet", text: "I've been a loyal customer for over a year. Renu's Closet always has the latest designs at reasonable prices.", rating: 5 },
];

export default function HomePage() {
  return (
    <div>
      {/* ─── HERO BANNER ─── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/30 z-10" />
        <Image
          src="/images/products/629231860_1214759754116963_498631737993628965_n.jpg"
          alt="Premium red silk saree with gold embroidery"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="relative z-20 mx-auto max-w-7xl px-4 py-16 sm:py-24 lg:py-32">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-foreground backdrop-blur-sm">
              <span className="size-1.5 rounded-full bg-primary animate-pulse" />
              New Collection 2026
            </span>
            <h1 className="mt-5 text-3xl font-bold leading-[1.1] tracking-tight text-background sm:text-5xl lg:text-6xl">
              Timeless Elegance in{" "}
              <span className="text-secondary">Every Drape</span>
            </h1>
            <p className="mt-4 text-base leading-relaxed text-background/80 max-w-lg sm:text-lg">
              Premium Rajshahi, Muslin &amp; Silk sarees handcrafted by
              Bangladeshi artisans. Trusted by 30,000+ women nationwide.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/products" className={cn(buttonVariants({ size: "lg" }), "h-12 px-8 text-base shadow-lg")}>
                Shop Now
                <ArrowRight className="ml-2 size-4" />
              </Link>
              <a
                href="https://wa.me/8801761400811"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ size: "lg" }), "h-12 px-6 text-base bg-transparent border border-white/50 text-white hover:bg-white/10 hover:text-white shadow-lg")}
              >
                <Phone className="mr-2 size-4" />
                WhatsApp Order
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TRUST BADGES STRIP (like Govaly) ─── */}
      <section className="border-b bg-card py-4">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="flex items-center justify-center gap-2 text-center">
                <badge.icon className="size-5 shrink-0 text-primary" />
                <span className="text-xs font-medium text-foreground sm:text-sm">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CIRCULAR CATEGORY THUMBNAILS (like Govaly) ─── */}
      <section className="py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide sm:justify-center sm:gap-6 lg:gap-8">
            {categoryThumbnails.map((cat) => (
              <Link
                key={cat.slug}
                href={`/products?category=${cat.slug}`}
                className="group flex flex-col items-center gap-2 shrink-0"
              >
                <div className="relative size-16 overflow-hidden rounded-full border-2 border-primary/20 transition-all group-hover:border-primary group-hover:shadow-md sm:size-20 lg:size-24">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    sizes="96px"
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <span className="text-[11px] font-medium text-foreground/70 text-center whitespace-nowrap group-hover:text-primary transition-colors sm:text-xs">
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NEW ARRIVALS ─── */}
      <section className="pb-12 sm:pb-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                New Arrivals
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Fresh additions to our collection
              </p>
            </div>
            <Link href="/products" className={cn(buttonVariants({ variant: "outline", size: "sm" }), "hidden sm:flex")}>
              View All
              <ArrowRight className="ml-1.5 size-3.5" />
            </Link>
          </div>
          <div className="mt-6 grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-4">
            {newArrivals.map((product) => (
              <ProductCard key={product.slug} {...product} />
            ))}
          </div>
          <div className="mt-6 text-center sm:hidden">
            <Link href="/products" className={cn(buttonVariants({ variant: "outline" }))}>
              View All Products
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── SHOP BY BUDGET (like Govaly's "Affordable and Worth it") ─── */}
      <section className="bg-muted/50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Shop by Budget
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Beautiful sarees for every budget
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 sm:gap-4">
            {budgetRanges.map((range) => (
              <Link
                key={range.slug}
                href={`/products?price=${range.slug}`}
                className="group overflow-hidden rounded-xl border border-border/50 bg-card transition-all hover:shadow-lg hover:border-primary/30"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={range.image}
                    alt={range.label}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-3 text-center">
                    <p className="text-xs text-background/70">{range.tagline}</p>
                    <p className="text-sm font-bold text-background sm:text-base">{range.label}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ALL PRODUCTS GRID ─── */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Our Collection
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                {allProducts.length} premium sarees
              </p>
            </div>
            <Link href="/products" className={cn(buttonVariants({ variant: "outline", size: "sm" }), "hidden sm:flex")}>
              Shop All
              <ArrowRight className="ml-1.5 size-3.5" />
            </Link>
          </div>
          <div className="mt-6 grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-4">
            {allProducts.map((product) => (
              <ProductCard key={product.slug} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY SHOP WITH US ─── */}
      <section className="border-y bg-card py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Why Choose Renu&apos;s Closet
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-start gap-3 rounded-xl border border-border/50 p-4 transition-shadow hover:shadow-sm">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Truck className="size-5 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground">Nationwide Delivery</h3>
                <p className="mt-0.5 text-xs text-muted-foreground">Free shipping over &#2547;3,000 across Bangladesh</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-border/50 p-4 transition-shadow hover:shadow-sm">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Shield className="size-5 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground">100% Authentic</h3>
                <p className="mt-0.5 text-xs text-muted-foreground">Genuine handcrafted sarees from skilled weavers</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-border/50 p-4 transition-shadow hover:shadow-sm">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Phone className="size-5 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground">WhatsApp Support</h3>
                <p className="mt-0.5 text-xs text-muted-foreground">Call or message us anytime at 01761-400811</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-border/50 p-4 transition-shadow hover:shadow-sm">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle className="size-5 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground">30K+ Happy Customers</h3>
                <p className="mt-0.5 text-xs text-muted-foreground">Trusted by our growing Facebook community</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            What Our Customers Say
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <Card key={t.name} className="border-border/50">
                <CardContent className="p-5">
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="size-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="mt-3 border-t pt-3">
                    <p className="text-sm font-medium text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="bg-primary py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-2xl font-bold text-primary-foreground sm:text-3xl">
            Join 30,000+ Fashion Lovers
          </h2>
          <p className="mt-2 text-sm text-primary-foreground/80 sm:text-base">
            Follow us on Facebook for new arrivals, exclusive offers, and styling tips
          </p>
          <div className="mt-5 flex justify-center gap-3">
            <a
              href="https://facebook.com/renusclosetdhaka"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "h-11 px-6")}
            >
              Follow on Facebook
            </a>
            <a
              href="https://wa.me/8801761400811"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "lg" }), "h-11 px-6 bg-transparent border border-white/50 text-white hover:bg-white/10 hover:text-white")}
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
