import { Suspense } from "react";
import { ProductsClient } from "./products-client";

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-7xl px-4 py-16 text-center">
          <div className="animate-pulse text-muted-foreground">Loading products...</div>
        </div>
      }
    >
      <ProductsClient />
    </Suspense>
  );
}
