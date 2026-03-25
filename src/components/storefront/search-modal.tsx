"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Search, X, ArrowRight, TrendingUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/product-data";

const trendingSearches = [
  "Rajshahi Silk",
  "Bridal Saree",
  "Organza",
  "Muslin",
  "Under 5000",
  "Designer",
];

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

export function SearchModal({ open, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Focus input when modal opens
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery("");
    }
  }, [open]);

  // Close on Escape
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  // Live search results
  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return products
      .filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          (p.nameBn && p.nameBn.includes(q)) ||
          p.category.toLowerCase().includes(q) ||
          p.material.toLowerCase().includes(q)
      )
      .slice(0, 6);
  }, [query]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/products?search=${encodeURIComponent(query.trim())}`);
      onClose();
    }
  }

  function handleProductClick() {
    onClose();
  }

  function handleTrendingClick(term: string) {
    setQuery(term);
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-foreground/60 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative mx-auto mt-0 max-w-2xl animate-in slide-in-from-top-4 fade-in duration-300 sm:mt-20">
        <div className="mx-2 rounded-xl bg-background shadow-2xl sm:mx-0">
          {/* Search Input */}
          <form onSubmit={handleSubmit} className="relative">
            <Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search sarees, collections, materials..."
              className="w-full rounded-t-xl border-b bg-transparent py-4 pl-12 pr-12 text-base text-foreground outline-none placeholder:text-muted-foreground sm:text-lg"
            />
            <button
              type="button"
              onClick={onClose}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground"
              aria-label="Close search"
            >
              <X className="size-5" />
            </button>
          </form>

          {/* Results / Suggestions */}
          <div className="max-h-[60vh] overflow-y-auto p-3">
            {query.trim() ? (
              results.length > 0 ? (
                <div>
                  <p className="mb-2 px-2 text-xs font-medium text-muted-foreground">
                    {results.length} result{results.length !== 1 && "s"} found
                  </p>
                  <div className="space-y-1">
                    {results.map((product) => (
                      <Link
                        key={product.slug}
                        href={`/products/${product.slug}`}
                        onClick={handleProductClick}
                        className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-muted"
                      >
                        <div className="relative size-14 shrink-0 overflow-hidden rounded-lg bg-muted">
                          <Image
                            src={product.images[0]}
                            alt={product.name}
                            fill
                            sizes="56px"
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-foreground truncate">
                            {product.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {product.category} &bull; {product.material}
                          </p>
                          <div className="mt-0.5 flex items-baseline gap-2">
                            <span className="text-sm font-bold text-primary">
                              &#2547;{product.price.toLocaleString()}
                            </span>
                            {product.originalPrice && (
                              <span className="text-xs text-muted-foreground line-through">
                                &#2547;{product.originalPrice.toLocaleString()}
                              </span>
                            )}
                          </div>
                        </div>
                        <ArrowRight className="size-4 shrink-0 text-muted-foreground" />
                      </Link>
                    ))}
                  </div>

                  {/* View all results link */}
                  <button
                    onClick={handleSubmit as any}
                    className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg border border-border/50 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-muted"
                  >
                    View all results for &ldquo;{query}&rdquo;
                    <ArrowRight className="size-3.5" />
                  </button>
                </div>
              ) : (
                <div className="py-10 text-center">
                  <Search className="mx-auto size-8 text-muted-foreground/30" />
                  <p className="mt-3 text-sm font-medium text-foreground">
                    No results for &ldquo;{query}&rdquo;
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Try a different search term
                  </p>
                </div>
              )
            ) : (
              /* Default state — trending + popular products */
              <div>
                {/* Trending searches */}
                <div className="mb-4">
                  <p className="mb-2 px-2 text-xs font-medium text-muted-foreground flex items-center gap-1.5">
                    <TrendingUp className="size-3.5" />
                    Trending Searches
                  </p>
                  <div className="flex flex-wrap gap-2 px-1">
                    {trendingSearches.map((term) => (
                      <button
                        key={term}
                        onClick={() => handleTrendingClick(term)}
                        className="rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Popular products */}
                <div>
                  <p className="mb-2 px-2 text-xs font-medium text-muted-foreground">
                    Popular Products
                  </p>
                  <div className="space-y-1">
                    {products.slice(0, 4).map((product) => (
                      <Link
                        key={product.slug}
                        href={`/products/${product.slug}`}
                        onClick={handleProductClick}
                        className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-muted"
                      >
                        <div className="relative size-12 shrink-0 overflow-hidden rounded-lg bg-muted">
                          <Image
                            src={product.images[0]}
                            alt={product.name}
                            fill
                            sizes="48px"
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-foreground truncate">
                            {product.name}
                          </p>
                          <span className="text-xs font-bold text-primary">
                            &#2547;{product.price.toLocaleString()}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
