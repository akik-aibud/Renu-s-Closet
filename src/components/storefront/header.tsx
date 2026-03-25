"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Search,
  ShoppingBag,
  User,
  Menu,
  Phone,
  Heart,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCartStore } from "@/store/cart-store";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Shop All" },
  { href: "/categories", label: "Categories" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const categories = [
  { href: "/products?category=rajshahi-saree", label: "Rajshahi Saree" },
  { href: "/products?category=muslin-saree", label: "Muslin Saree" },
  { href: "/products?category=silk-saree", label: "Silk Saree" },
  { href: "/products?category=organza", label: "Organza" },
  { href: "/products?category=cotton-saree", label: "Cotton Saree" },
  { href: "/products?category=katan", label: "Katan" },
  { href: "/products?category=designer", label: "Designer" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const totalItems = useCartStore((s) => s.totalItems);
  const cartCount = totalItems();

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery("");
    }
  }

  return (
    <header className="sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <Phone className="size-3.5" />
            <a href="tel:+8801761400811" className="hover:underline">
              01761-400811
            </a>
          </div>
          <div className="hidden sm:block text-center">
            Free delivery on orders over &#2547;3,000
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/8801761400811"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              WhatsApp
            </a>
            <span className="text-primary-foreground/40">|</span>
            <a
              href="https://facebook.com/renusclosetdhaka"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label="Facebook"
            >
              <svg className="size-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="border-b border-border/60 bg-background/95 backdrop-blur-md supports-backdrop-filter:bg-background/80">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3">
          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden shrink-0"
                  aria-label="Open menu"
                />
              }
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="left" className="w-80 p-0">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col h-full">
                <div className="border-b px-6 py-5">
                  <Link href="/" onClick={() => setMobileOpen(false)}>
                    <Image
                      src="/images/logo.png"
                      alt="Renu's Closet"
                      width={130}
                      height={53}
                      className="h-8 w-auto"
                    />
                  </Link>
                </div>
                {/* Mobile Search */}
                <div className="px-4 pt-4">
                  <form onSubmit={(e) => { handleSearch(e); setMobileOpen(false); }}>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        placeholder="Search sarees..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </form>
                </div>
                <nav className="flex-1 px-4 py-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="mt-4 border-t pt-4">
                    <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Categories
                    </p>
                    {categories.map((cat) => (
                      <Link
                        key={cat.href}
                        href={cat.href}
                        onClick={() => setMobileOpen(false)}
                        className="block rounded-lg px-3 py-2 text-sm text-foreground/70 transition-colors hover:bg-muted hover:text-foreground"
                      >
                        {cat.label}
                      </Link>
                    ))}
                  </div>
                </nav>
                <div className="border-t px-6 py-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="size-4" />
                    <a href="tel:+8801761400811">01761-400811</a>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/images/logo.png"
              alt="Renu's Closet"
              width={140}
              height={57}
              className="h-9 w-auto sm:h-10"
              priority
            />
          </Link>

          {/* Desktop Search Bar — prominent like Govaly */}
          <form
            onSubmit={handleSearch}
            className="hidden md:flex flex-1 max-w-lg mx-auto"
          >
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search sarees, collections..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-10 pl-10 pr-20 rounded-full border-primary/30 focus-visible:border-primary"
              />
              <Button
                type="submit"
                size="sm"
                className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full h-8 px-4"
              >
                Search
              </Button>
            </div>
          </form>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5 shrink-0">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-2.5 py-2 text-sm font-medium text-foreground/70 transition-colors hover:bg-muted hover:text-foreground whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-0.5 shrink-0">
            {/* Mobile search toggle */}
            <Button
              variant="ghost"
              size="icon"
              aria-label="Search"
              className="md:hidden"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              {searchOpen ? <X className="size-5" /> : <Search className="size-5" />}
            </Button>

            <Link href="/account" className="hidden sm:inline-flex">
              <Button variant="ghost" size="icon" aria-label="Wishlist">
                <Heart className="size-5" />
              </Button>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger
                render={<Button variant="ghost" size="icon" aria-label="Account" />}
              >
                <User className="size-5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-44">
                <DropdownMenuItem render={<Link href="/login" />}>
                  Sign In
                </DropdownMenuItem>
                <DropdownMenuItem render={<Link href="/register" />}>
                  Create Account
                </DropdownMenuItem>
                <DropdownMenuItem render={<Link href="/account/orders" />}>
                  My Orders
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/cart">
              <Button
                variant="ghost"
                size="icon"
                className="relative"
                aria-label={`Cart${cartCount > 0 ? ` (${cartCount} items)` : ""}`}
              >
                <ShoppingBag className="size-5" />
                {cartCount > 0 && (
                  <Badge className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full p-0 text-[10px]">
                    {cartCount}
                  </Badge>
                )}
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Search Dropdown */}
        {searchOpen && (
          <div className="border-t px-4 pb-3 md:hidden">
            <form onSubmit={handleSearch}>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search sarees..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-16"
                  autoFocus
                />
                <Button
                  type="submit"
                  size="sm"
                  className="absolute right-1 top-1/2 -translate-y-1/2 h-7"
                >
                  Search
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </header>
  );
}
