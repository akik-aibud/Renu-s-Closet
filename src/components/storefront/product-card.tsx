"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export interface ProductCardProps {
  slug: string;
  name: string;
  price: number;
  originalPrice?: number;
  images?: string[];
  image?: string; // single image fallback
  category?: string;
  isNew?: boolean;
  isSoldOut?: boolean;
}

export function ProductCard({
  slug,
  name,
  price,
  originalPrice,
  images,
  image,
  category,
  isNew,
  isSoldOut,
}: ProductCardProps) {
  const allImages = images?.length ? images : image ? [image] : [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  const nextImage = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setCurrentIndex((prev) => (prev + 1) % allImages.length);
    },
    [allImages.length]
  );

  const prevImage = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setCurrentIndex((prev) =>
        prev === 0 ? allImages.length - 1 : prev - 1
      );
    },
    [allImages.length]
  );

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl border border-border/50 bg-card transition-all hover:shadow-lg hover:border-primary/20">
      {/* Image with slider */}
      <div
        className="relative aspect-[3/4] overflow-hidden bg-muted"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setCurrentIndex(0);
        }}
      >
        <Link
          href={`/products/${slug}`}
          aria-label={`View ${name}`}
          className="block h-full w-full"
        >
          {allImages.length > 0 ? (
            <div className="relative h-full w-full">
              {/* Image slides */}
              {allImages.map((img, i) => (
                <Image
                  key={img}
                  src={img}
                  alt={`${name} - Image ${i + 1}`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className={`object-cover transition-opacity duration-500 ${
                    i === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                  priority={i === 0}
                />
              ))}
            </div>
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-muted to-muted/60 text-muted-foreground/30">
              <span className="text-xs">Product Image</span>
            </div>
          )}
        </Link>

        {/* Image navigation arrows — show on hover if multiple images */}
        {allImages.length > 1 && isHovered && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-1.5 top-1/2 z-10 flex size-7 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 shadow-sm backdrop-blur-sm transition-all hover:bg-background"
              aria-label="Previous image"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-1.5 top-1/2 z-10 flex size-7 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 shadow-sm backdrop-blur-sm transition-all hover:bg-background"
              aria-label="Next image"
            >
              <ChevronRight className="size-4" />
            </button>
          </>
        )}

        {/* Dot indicators */}
        {allImages.length > 1 && (
          <div className="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 gap-1">
            {allImages.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setCurrentIndex(i);
                }}
                className={`size-1.5 rounded-full transition-all ${
                  i === currentIndex
                    ? "w-3 bg-background shadow-sm"
                    : "bg-background/60"
                }`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        )}

        {/* Badges */}
        <div className="absolute left-2 top-2 z-10 flex flex-col gap-1.5">
          {isNew && (
            <Badge className="bg-primary text-primary-foreground text-[10px] px-2 py-0.5 shadow-sm">
              New
            </Badge>
          )}
          {discount > 0 && (
            <Badge className="bg-destructive text-white text-[10px] px-2 py-0.5 shadow-sm">
              -{discount}%
            </Badge>
          )}
          {isSoldOut && (
            <Badge variant="secondary" className="text-[10px] px-2 py-0.5">
              Sold Out
            </Badge>
          )}
        </div>

        {/* Wishlist */}
        <Button
          variant="ghost"
          size="icon-xs"
          className="absolute right-2 top-2 z-10 bg-background/80 backdrop-blur-sm text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100 hover:text-primary"
          aria-label={`Add ${name} to wishlist`}
        >
          <Heart className="size-3.5" />
        </Button>

        {/* Quick Add overlay on hover */}
        {!isSoldOut && (
          <div className="absolute inset-x-0 bottom-0 z-10 flex justify-center pb-8 opacity-0 transition-all group-hover:opacity-100">
            <Button
              size="sm"
              className="translate-y-2 shadow-lg transition-transform group-hover:translate-y-0"
              aria-label={`Quick add ${name} to cart`}
            >
              <ShoppingBag className="mr-1.5 size-3.5" />
              Quick Add
            </Button>
          </div>
        )}
      </div>

      {/* Details */}
      <div className="flex flex-1 flex-col p-3 sm:p-4">
        {category && (
          <span className="mb-1 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
            {category}
          </span>
        )}
        <Link href={`/products/${slug}`}>
          <h3 className="text-sm font-medium leading-snug text-foreground line-clamp-2 transition-colors group-hover:text-primary">
            {name}
          </h3>
        </Link>
        <div className="mt-auto flex items-baseline gap-2 pt-3">
          <span className="text-base font-bold text-foreground">
            &#2547;{price.toLocaleString()}
          </span>
          {originalPrice && (
            <span className="text-xs text-muted-foreground line-through">
              &#2547;{originalPrice.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
