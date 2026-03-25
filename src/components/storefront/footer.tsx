import Link from "next/link";
import { Phone, MapPin, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const quickLinks = [
  { href: "/products", label: "Shop All" },
  { href: "/products?category=rajshahi-saree", label: "Rajshahi Sarees" },
  { href: "/products?category=muslin-saree", label: "Muslin Sarees" },
  { href: "/products?category=silk-saree", label: "Silk Sarees" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

const customerService = [
  { href: "/account/orders", label: "Track Order" },
  { href: "/shipping", label: "Shipping Policy" },
  { href: "/returns", label: "Returns & Exchange" },
  { href: "/faq", label: "FAQ" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background/80">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h2 className="text-xl font-bold tracking-tight text-background">
              Renu&apos;s Closet
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-background/60">
              Premium Bangladeshi sarees and women&apos;s clothing. We bring you
              the finest Rajshahi, Muslin, and Silk sarees with authentic
              craftsmanship and timeless elegance.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://facebook.com/renusclosetdhaka"
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-9 items-center justify-center rounded-full bg-background/10 transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Facebook"
              >
                <svg className="size-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-background">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/60 transition-colors hover:text-background"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-background">
              Customer Service
            </h3>
            <ul className="mt-4 space-y-2.5">
              {customerService.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/60 transition-colors hover:text-background"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-background">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-background/60">
                <Phone className="mt-0.5 size-4 shrink-0" />
                <div>
                  <a href="tel:+8801761400811" className="hover:text-background">
                    01761-400811
                  </a>
                  <br />
                  <a
                    href="https://wa.me/8801761400811"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-background"
                  >
                    WhatsApp
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-background/60">
                <MapPin className="mt-0.5 size-4 shrink-0" />
                <span>Dhaka, Bangladesh 1230</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-background/60">
                <Mail className="mt-0.5 size-4 shrink-0" />
                <a
                  href="mailto:info@renuscloset.com"
                  className="hover:text-background"
                >
                  info@renuscloset.com
                </a>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="text-sm font-medium text-background">
                Newsletter
              </h4>
              <p className="mt-1 text-xs text-background/50">
                Get updates on new collections and offers.
              </p>
              <form className="mt-3 flex gap-2" aria-label="Newsletter signup">
                <label htmlFor="footer-email" className="sr-only">Email address</label>
                <Input
                  id="footer-email"
                  type="email"
                  placeholder="Your email"
                  required
                  className="h-9 border-background/20 bg-background/10 text-background placeholder:text-background/40 focus-visible:border-primary"
                />
                <Button size="lg" className="h-9 shrink-0 bg-primary hover:bg-primary/90">
                  Join
                </Button>
              </form>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-background/10" />

        <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row">
          <p className="text-xs text-background/50">
            &copy; {new Date().getFullYear()} Renu&apos;s Closet. All rights
            reserved.
          </p>
          <p className="text-xs text-background/40">
            Proudly Bangladeshi
          </p>
        </div>
      </div>
    </footer>
  );
}
