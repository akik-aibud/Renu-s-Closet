"use client";

import { useState, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { SlidersHorizontal, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { ProductCard } from "@/components/storefront/product-card";
import { products as allProductData } from "@/lib/product-data";

const categories = [
  { label: "All Sarees", value: "all" },
  { label: "Rajshahi Saree", value: "Rajshahi Saree" },
  { label: "Muslin Saree", value: "Muslin Saree" },
  { label: "Muslin Silk", value: "Muslin Silk" },
  { label: "Silk Saree", value: "Silk Saree" },
  { label: "Organza Saree", value: "Organza Saree" },
  { label: "Designer Saree", value: "Designer Saree" },
  { label: "Katan Saree", value: "Katan Saree" },
  { label: "Tissue Saree", value: "Tissue Saree" },
  { label: "Cotton Saree", value: "Cotton Saree" },
];

const materials = [
  "Muslin Silk",
  "Pure Silk",
  "Organza",
  "Net",
  "Tissue Silk",
  "Cotton Silk",
  "Katan Silk",
];

const priceRanges = [
  { label: "Under ৳3,000", min: 0, max: 3000 },
  { label: "৳3,000 - ৳5,000", min: 3000, max: 5000 },
  { label: "৳5,000 - ৳8,000", min: 5000, max: 8000 },
  { label: "Above ৳8,000", min: 8000, max: Infinity },
];

const sortOptions = [
  { label: "Newest First", value: "newest" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Name: A-Z", value: "name-asc" },
];

export function ProductsClient() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Read initial state from URL
  const initialCategory = searchParams.get("category") || "all";
  const initialSearch = searchParams.get("search") || "";
  const initialPrice = searchParams.get("price") || "";

  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState<number | null>(
    initialPrice ? priceRanges.findIndex((r) => {
      const [min, max] = initialPrice.split("-").map(Number);
      return r.min === min || (initialPrice.includes("+") && r.max === Infinity);
    }) : null
  );
  const [sortBy, setSortBy] = useState("newest");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...allProductData];

    // Search filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          (p.nameBn && p.nameBn.includes(q)) ||
          p.category.toLowerCase().includes(q) ||
          p.material.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    // Category filter
    if (selectedCategory !== "all") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Material filter
    if (selectedMaterials.length > 0) {
      result = result.filter((p) =>
        selectedMaterials.includes(p.material)
      );
    }

    // Price range filter
    if (selectedPriceRange !== null) {
      const range = priceRanges[selectedPriceRange];
      result = result.filter(
        (p) => p.price >= range.min && p.price < range.max
      );
    }

    // Sort
    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default: // newest — keep original order
        break;
    }

    return result;
  }, [searchQuery, selectedCategory, selectedMaterials, selectedPriceRange, sortBy]);

  const activeFilterCount =
    (selectedCategory !== "all" ? 1 : 0) +
    selectedMaterials.length +
    (selectedPriceRange !== null ? 1 : 0) +
    (searchQuery.trim() ? 1 : 0);

  function clearAllFilters() {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedMaterials([]);
    setSelectedPriceRange(null);
    setSortBy("newest");
    router.push("/products");
  }

  function toggleMaterial(mat: string) {
    setSelectedMaterials((prev) =>
      prev.includes(mat) ? prev.filter((m) => m !== mat) : [...prev, mat]
    );
  }

  // Shared filter UI for desktop sidebar and mobile sheet
  function FilterContent() {
    return (
      <div className="space-y-6">
        {/* Search within results */}
        <div>
          <h4 className="mb-2 text-sm font-medium text-foreground">Search</h4>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search sarees..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <Separator />

        {/* Category Filter */}
        <div>
          <h4 className="mb-3 text-sm font-medium text-foreground">Category</h4>
          <div className="space-y-1">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => {
                  setSelectedCategory(cat.value);
                  setMobileFilterOpen(false);
                }}
                className={`block w-full rounded-md px-3 py-1.5 text-left text-sm transition-colors ${
                  selectedCategory === cat.value
                    ? "bg-primary/10 font-medium text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <Separator />

        {/* Price Range */}
        <div>
          <h4 className="mb-3 text-sm font-medium text-foreground">Price Range</h4>
          <div className="space-y-1">
            {priceRanges.map((range, i) => (
              <button
                key={range.label}
                onClick={() =>
                  setSelectedPriceRange(selectedPriceRange === i ? null : i)
                }
                className={`block w-full rounded-md px-3 py-1.5 text-left text-sm transition-colors ${
                  selectedPriceRange === i
                    ? "bg-primary/10 font-medium text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {range.label}
              </button>
            ))}
          </div>
        </div>

        <Separator />

        {/* Material */}
        <div>
          <h4 className="mb-3 text-sm font-medium text-foreground">Material</h4>
          <div className="flex flex-wrap gap-2">
            {materials.map((m) => (
              <button
                key={m}
                onClick={() => toggleMaterial(m)}
                className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
                  selectedMaterials.includes(m)
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        <Separator />

        <Button
          variant="outline"
          className="w-full"
          size="sm"
          onClick={clearAllFilters}
          disabled={activeFilterCount === 0}
        >
          Clear All Filters
          {activeFilterCount > 0 && ` (${activeFilterCount})`}
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Shop</span>
      </nav>

      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Our Collection
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {filteredProducts.length} of {allProductData.length} products
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-8 lg:grid-cols-[260px_1fr]">
        {/* Desktop Sidebar Filters */}
        <aside className="hidden lg:block">
          <div className="sticky top-32">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <SlidersHorizontal className="size-4" />
                Filters
              </h3>
              {activeFilterCount > 0 && (
                <Badge variant="secondary" className="text-xs">
                  {activeFilterCount} active
                </Badge>
              )}
            </div>
            <FilterContent />
          </div>
        </aside>

        {/* Product Grid */}
        <div>
          {/* Sort & Filter Bar */}
          <div className="mb-4 flex items-center justify-between rounded-lg border border-border/50 bg-card px-3 py-2.5">
            <div className="flex items-center gap-2">
              {/* Mobile filter trigger */}
              <Sheet open={mobileFilterOpen} onOpenChange={setMobileFilterOpen}>
                <SheetTrigger
                  render={
                    <Button variant="outline" size="sm" className="lg:hidden" />
                  }
                >
                  <SlidersHorizontal className="mr-1.5 size-3.5" />
                  Filters
                  {activeFilterCount > 0 && (
                    <Badge className="ml-1.5 size-5 rounded-full p-0 text-[10px]">
                      {activeFilterCount}
                    </Badge>
                  )}
                </SheetTrigger>
                <SheetContent side="left" className="w-80 overflow-y-auto">
                  <SheetTitle className="mb-4">Filters</SheetTitle>
                  <FilterContent />
                </SheetContent>
              </Sheet>

              {/* Active filter badges */}
              <div className="hidden sm:flex items-center gap-1.5 flex-wrap">
                {selectedCategory !== "all" && (
                  <Badge variant="secondary" className="gap-1">
                    {selectedCategory}
                    <button
                      onClick={() => setSelectedCategory("all")}
                      aria-label="Remove category filter"
                    >
                      <X className="size-3" />
                    </button>
                  </Badge>
                )}
                {selectedPriceRange !== null && (
                  <Badge variant="secondary" className="gap-1">
                    {priceRanges[selectedPriceRange].label}
                    <button
                      onClick={() => setSelectedPriceRange(null)}
                      aria-label="Remove price filter"
                    >
                      <X className="size-3" />
                    </button>
                  </Badge>
                )}
                {selectedMaterials.map((m) => (
                  <Badge key={m} variant="secondary" className="gap-1">
                    {m}
                    <button
                      onClick={() => toggleMaterial(m)}
                      aria-label={`Remove ${m} filter`}
                    >
                      <X className="size-3" />
                    </button>
                  </Badge>
                ))}
                {searchQuery.trim() && (
                  <Badge variant="secondary" className="gap-1">
                    &ldquo;{searchQuery}&rdquo;
                    <button
                      onClick={() => setSearchQuery("")}
                      aria-label="Remove search filter"
                    >
                      <X className="size-3" />
                    </button>
                  </Badge>
                )}
              </div>
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2">
              <span className="hidden text-xs text-muted-foreground sm:inline">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="h-8 rounded-md border border-input bg-background px-2 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results */}
          {filteredProducts.length > 0 ? (
            <div className="grid gap-3 grid-cols-2 md:grid-cols-3 sm:gap-4">
              {filteredProducts.map((product) => (
                <ProductCard key={product.slug} {...product} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <Search className="size-12 text-muted-foreground/30" />
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                No products found
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Try adjusting your filters or search query
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={clearAllFilters}
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
