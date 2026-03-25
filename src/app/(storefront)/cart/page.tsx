"use client";

import Link from "next/link";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";

const cartItems = [
  {
    id: "1",
    slug: "royal-rajshahi-silk-maroon",
    name: "Royal Rajshahi Silk - Maroon & Gold",
    price: 4500,
    originalPrice: 5200,
    quantity: 1,
    color: "Maroon",
    category: "Rajshahi Saree",
  },
  {
    id: "2",
    slug: "pure-muslin-ivory-floral",
    name: "Pure Muslin Ivory Floral Print",
    price: 3800,
    quantity: 2,
    color: "Ivory",
    category: "Muslin Saree",
  },
];

export default function CartPage() {
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal >= 3000 ? 0 : 120;
  const total = subtotal + shipping;

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Shopping Cart</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-foreground">
        Shopping Cart
      </h1>
      <p className="mt-1 text-muted-foreground">
        {cartItems.length} item{cartItems.length !== 1 && "s"} in your cart
      </p>

      {cartItems.length > 0 ? (
        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_380px]">
          {/* Cart Items */}
          <div className="space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id} className="border-border/50">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex gap-4">
                    {/* Image */}
                    <div className="size-24 shrink-0 overflow-hidden rounded-lg bg-muted sm:size-28">
                      <div className="flex h-full items-center justify-center text-muted-foreground/20">
                        <span className="text-[10px]">Image</span>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="flex flex-1 flex-col">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                            {item.category}
                          </p>
                          <Link href={`/products/${item.slug}`}>
                            <h3 className="mt-0.5 text-sm font-semibold text-foreground hover:text-primary sm:text-base">
                              {item.name}
                            </h3>
                          </Link>
                          <p className="mt-1 text-xs text-muted-foreground">
                            Color: {item.color}
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon-sm"
                          className="text-muted-foreground hover:text-destructive"
                          aria-label={`Remove ${item.name}`}
                        >
                          <Trash2 className="size-4" />
                        </Button>
                      </div>

                      <div className="mt-auto flex items-end justify-between pt-3">
                        {/* Quantity */}
                        <div className="flex items-center rounded-lg border">
                          <Button
                            variant="ghost"
                            size="icon-xs"
                            className="rounded-r-none"
                            aria-label="Decrease"
                          >
                            <Minus className="size-3" />
                          </Button>
                          <span className="flex w-10 items-center justify-center text-sm font-medium">
                            {item.quantity}
                          </span>
                          <Button
                            variant="ghost"
                            size="icon-xs"
                            className="rounded-l-none"
                            aria-label="Increase"
                          >
                            <Plus className="size-3" />
                          </Button>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <p className="text-base font-bold text-foreground">
                            &#2547;
                            {(item.price * item.quantity).toLocaleString()}
                          </p>
                          {item.originalPrice && (
                            <p className="text-xs text-muted-foreground line-through">
                              &#2547;
                              {(
                                item.originalPrice * item.quantity
                              ).toLocaleString()}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Continue Shopping */}
            <div className="pt-2">
              <Link href="/products" className={cn(buttonVariants({ variant: "ghost" }))}>
                <ShoppingBag className="mr-2 size-4" />
                Continue Shopping
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <Card className="sticky top-32 border-border/50">
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold text-foreground">
                  Order Summary
                </h2>

                <div className="mt-5 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">
                      &#2547;{subtotal.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-medium">
                      {shipping === 0 ? (
                        <span className="text-green-600">Free</span>
                      ) : (
                        `\u09F3${shipping}`
                      )}
                    </span>
                  </div>
                  {shipping > 0 && (
                    <p className="text-xs text-muted-foreground">
                      Free shipping on orders above 3,000 BDT
                    </p>
                  )}
                </div>

                {/* Coupon */}
                <div className="mt-5">
                  <label htmlFor="coupon-code" className="text-sm font-medium text-foreground">
                    Coupon Code
                  </label>
                  <div className="mt-1.5 flex gap-2">
                    <Input id="coupon-code" placeholder="Enter code" className="h-9" />
                    <Button variant="outline" size="lg" className="h-9 shrink-0">
                      Apply
                    </Button>
                  </div>
                </div>

                <Separator className="my-5" />

                <div className="flex justify-between">
                  <span className="text-base font-semibold text-foreground">
                    Total
                  </span>
                  <span className="text-xl font-bold text-foreground">
                    &#2547;{total.toLocaleString()}
                  </span>
                </div>

                <Link href="/checkout" className={cn(buttonVariants({ size: "lg" }), "mt-5 h-12 w-full text-base")}>
                  Proceed to Checkout
                  <ArrowRight className="ml-2 size-4" />
                </Link>

                <p className="mt-3 text-center text-xs text-muted-foreground">
                  Cash on delivery available nationwide
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      ) : (
        /* Empty Cart */
        <div className="mt-16 flex flex-col items-center text-center">
          <div className="flex size-20 items-center justify-center rounded-full bg-muted">
            <ShoppingBag className="size-8 text-muted-foreground" />
          </div>
          <h2 className="mt-6 text-xl font-semibold text-foreground">
            Your cart is empty
          </h2>
          <p className="mt-2 text-muted-foreground">
            Looks like you haven&apos;t added any sarees yet.
          </p>
          <Link href="/products" className={cn(buttonVariants({ size: "lg" }), "mt-6 h-12 px-8")}>
            Start Shopping
          </Link>
        </div>
      )}
    </div>
  );
}
