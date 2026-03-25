"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Star, Truck, RotateCcw, Shield, Minus, Plus, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { ProductCard } from "@/components/storefront/product-card";
import { products } from "@/lib/product-data";
import { useCartStore } from "@/store/cart-store";

const reviews = [
  {
    name: "Sumaiya Khan",
    date: "March 15, 2026",
    rating: 5,
    text: "Absolutely gorgeous saree! The silk quality is exceptional and the embroidery is so intricate. Wore it to my cousin's wedding and received so many compliments.",
  },
  {
    name: "Reshma Akter",
    date: "March 8, 2026",
    rating: 5,
    text: "Beautiful color and excellent craftsmanship. The drape is perfect. Delivery was also very quick. Thank you Renu's Closet!",
  },
  {
    name: "Nadia Islam",
    date: "February 28, 2026",
    rating: 4,
    text: "Lovely saree, the color is exactly as shown. Only giving 4 stars because the blouse piece could have been a bit longer. Otherwise, perfect!",
  },
];

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCartStore();

  // Unwrap params with React.use() since this is a client component
  const { slug } = require("react").use(params);

  const product = products.find((p) => p.slug === slug) || products[0];
  const relatedProducts = products
    .filter((p) => p.slug !== product.slug)
    .slice(0, 4);

  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;

  function handleAddToCart() {
    addItem({
      id: product.slug,
      name: product.name,
      price: product.price,
      image: product.images[0],
      slug: product.slug,
    });
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/products" className="hover:text-foreground">
          Shop
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{product.name}</span>
      </nav>

      {/* Product Section */}
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Image Gallery */}
        <div className="space-y-3">
          {/* Main Image */}
          <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-muted">
            <Image
              src={product.images[selectedImage]}
              alt={`${product.name} - Image ${selectedImage + 1}`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
            {discount > 0 && (
              <Badge className="absolute left-3 top-3 bg-destructive text-white shadow-md">
                Save {discount}%
              </Badge>
            )}
          </div>
          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(i)}
                aria-label={`View image ${i + 1}`}
                aria-pressed={i === selectedImage}
                className={`relative aspect-square overflow-hidden rounded-lg border-2 transition-all ${
                  i === selectedImage
                    ? "border-primary ring-2 ring-primary/20"
                    : "border-transparent hover:border-border"
                }`}
              >
                <Image
                  src={img}
                  alt={`${product.name} thumbnail ${i + 1}`}
                  fill
                  sizes="120px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {product.category}
              </p>
              <h1 className="mt-1 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                {product.name}
              </h1>
              {product.nameBn && (
                <p className="mt-1 font-bengali text-base text-muted-foreground">
                  {product.nameBn}
                </p>
              )}
            </div>
            <Button variant="ghost" size="icon" aria-label="Add to wishlist">
              <Heart className="size-5" />
            </Button>
          </div>

          {/* Rating */}
          <div className="mt-3 flex items-center gap-2">
            <div className="flex gap-0.5" aria-label={`Rating: ${product.rating} out of 5`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`size-4 ${
                    i < Math.floor(product.rating)
                      ? "fill-secondary text-secondary"
                      : "text-border"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm font-medium text-foreground">
              {product.rating}
            </span>
            <span className="text-sm text-muted-foreground">
              ({product.reviewCount} reviews)
            </span>
          </div>

          {/* Price */}
          <div className="mt-5 flex items-baseline gap-3">
            <span className="text-3xl font-bold text-foreground">
              &#2547;{product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <>
                <span className="text-lg text-muted-foreground line-through">
                  &#2547;{product.originalPrice.toLocaleString()}
                </span>
                <Badge className="bg-destructive text-white">
                  Save {discount}%
                </Badge>
              </>
            )}
          </div>

          <Separator className="my-6" />

          {/* Color Selection */}
          {product.colors && product.colors.length > 0 && (
            <div>
              <h3 className="text-sm font-medium text-foreground">Color</h3>
              <div className="mt-3 flex gap-2">
                {product.colors.map((color, i) => (
                  <button
                    key={color.name}
                    className={`size-9 rounded-full border-2 transition-all focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                      i === 0
                        ? "border-primary ring-2 ring-primary/30"
                        : "border-border hover:border-foreground/30"
                    }`}
                    style={{ backgroundColor: color.value }}
                    title={color.name}
                    aria-label={`Select ${color.name} color`}
                    aria-pressed={i === 0}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Material */}
          <div className="mt-4">
            <span className="text-sm text-muted-foreground">
              Material: <span className="font-medium text-foreground">{product.material}</span>
            </span>
          </div>

          {/* Quantity & Add to Cart */}
          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-foreground">
                Quantity
              </span>
              <div className="flex items-center rounded-lg border">
                <Button
                  variant="ghost"
                  size="icon-sm"
                  className="rounded-r-none"
                  aria-label="Decrease quantity"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                >
                  <Minus className="size-3.5" />
                </Button>
                <span className="flex w-12 items-center justify-center text-sm font-medium">
                  {quantity}
                </span>
                <Button
                  variant="ghost"
                  size="icon-sm"
                  className="rounded-l-none"
                  aria-label="Increase quantity"
                  onClick={() => setQuantity((q) => q + 1)}
                >
                  <Plus className="size-3.5" />
                </Button>
              </div>
            </div>
            <div className="flex gap-3">
              <Button
                size="lg"
                className="h-12 flex-1 text-base"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="h-12 flex-1 text-base"
                onClick={() => {
                  handleAddToCart();
                  window.location.href = "/checkout";
                }}
              >
                Buy Now
              </Button>
            </div>
          </div>

          <Separator className="my-6" />

          {/* Features */}
          <div className="grid grid-cols-3 gap-3">
            <div className="flex flex-col items-center rounded-lg border border-border/50 p-3 text-center">
              <Truck className="size-5 text-primary" />
              <span className="mt-1.5 text-[11px] text-muted-foreground">
                Free Delivery
              </span>
            </div>
            <div className="flex flex-col items-center rounded-lg border border-border/50 p-3 text-center">
              <RotateCcw className="size-5 text-primary" />
              <span className="mt-1.5 text-[11px] text-muted-foreground">
                Easy Returns
              </span>
            </div>
            <div className="flex flex-col items-center rounded-lg border border-border/50 p-3 text-center">
              <Shield className="size-5 text-primary" />
              <span className="mt-1.5 text-[11px] text-muted-foreground">
                Authentic
              </span>
            </div>
          </div>

          <Separator className="my-6" />

          {/* Description */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Description
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {product.description}
            </p>
          </div>

          {/* Details */}
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-foreground">
              Product Details
            </h3>
            <ul className="mt-2 space-y-1.5">
              {product.details.map((detail) => (
                <li
                  key={detail}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary/50" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          Customer Reviews
        </h2>
        <div className="mt-2 flex items-center gap-2">
          <div className="flex gap-0.5" aria-label={`Average rating: ${product.rating} out of 5`}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`size-4 ${
                  i < Math.floor(product.rating)
                    ? "fill-secondary text-secondary"
                    : "text-border"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            Based on {product.reviewCount} reviews
          </span>
        </div>

        <div className="mt-8 space-y-6">
          {reviews.map((review) => (
            <Card key={review.name} className="border-border/50">
              <CardContent className="p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {review.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {review.date}
                    </p>
                  </div>
                  <div className="flex gap-0.5" aria-label={`${review.rating} stars`}>
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="size-3.5 fill-secondary text-secondary"
                      />
                    ))}
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {review.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Related Products */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          You May Also Like
        </h2>
        <div className="mt-6 grid gap-4 grid-cols-2 md:grid-cols-4">
          {relatedProducts.map((p) => (
            <ProductCard key={p.slug} {...p} />
          ))}
        </div>
      </section>
    </div>
  );
}
