import type { Metadata } from "next";
import Link from "next/link";
import { Heart, Users, Award, Sparkles } from "lucide-react";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Renu's Closet - your trusted destination for premium Bangladeshi sarees and women's clothing since 2020.",
};

const milestones = [
  {
    year: "2020",
    title: "The Beginning",
    description:
      "Started as a small Facebook page sharing our love for authentic Bangladeshi sarees with friends and family.",
  },
  {
    year: "2021",
    title: "Growing Community",
    description:
      "Reached 10,000 followers on Facebook, built a loyal customer base across Dhaka.",
  },
  {
    year: "2023",
    title: "Nationwide Reach",
    description:
      "Expanded delivery across all 64 districts of Bangladesh. Partnered with local weavers from Rajshahi and Tangail.",
  },
  {
    year: "2025",
    title: "30K Strong",
    description:
      "Crossed 30,000 followers on Facebook and launched our online store for a better shopping experience.",
  },
];

const values = [
  {
    icon: Heart,
    title: "Passion for Tradition",
    description:
      "We celebrate the rich textile heritage of Bangladesh, bringing time-honored weaving traditions to the modern woman.",
  },
  {
    icon: Users,
    title: "Community First",
    description:
      "Our 30,000+ strong community is at the heart of everything we do. Your trust drives our commitment to quality.",
  },
  {
    icon: Award,
    title: "Authentic Quality",
    description:
      "Every saree is handpicked and quality-checked. We work directly with weavers to ensure authenticity.",
  },
  {
    icon: Sparkles,
    title: "Affordable Elegance",
    description:
      "We believe every woman deserves to wear beautiful sarees. Our prices reflect fair value for both customers and artisans.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">About Us</span>
          </nav>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="max-w-xl">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Our Story
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Renu&apos;s Closet was born from a deep love for the
                artistry of Bangladeshi sarees. What started as sharing our
                personal collection on Facebook has grown into a thriving
                community of 30,000+ women who share our passion for timeless
                elegance.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                We work directly with skilled weavers from Rajshahi, Tangail,
                and Dhaka to bring you the finest handwoven sarees &mdash; from
                luxurious Rajshahi silk to delicate Muslin, intricate Jamdani to
                rich Katan silk.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/20 to-accent">
                <div className="flex h-full items-center justify-center text-muted-foreground/40">
                  <span className="text-sm">Brand Image</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-center text-3xl font-bold tracking-tight text-foreground">
            What We Stand For
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <Card
                key={v.title}
                className="border-border/50 text-center transition-shadow hover:shadow-md"
              >
                <CardContent className="p-6">
                  <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-primary/10">
                    <v.icon className="size-6 text-primary" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-foreground">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {v.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-center text-3xl font-bold tracking-tight text-foreground">
            Our Journey
          </h2>
          <div className="mt-10 space-y-8">
            {milestones.map((m, i) => (
              <div key={m.year} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {m.year.slice(2)}
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="mt-2 w-0.5 flex-1 bg-border" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="text-lg font-semibold text-foreground">
                    {m.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {m.year}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Be Part of Our Story
          </h2>
          <p className="mt-4 text-muted-foreground">
            Join our community of 30,000+ saree lovers. Follow us on Facebook
            for new arrivals, styling tips, and exclusive offers.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Link href="/products" className={cn(buttonVariants({ size: "lg" }), "h-12 px-8")}>
              Shop Now
            </Link>
            <a
              href="https://facebook.com/renusclosetdhaka"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-12 px-8")}
            >
              Follow Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
