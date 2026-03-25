import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MapPin, Mail, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Renu's Closet. Call us at 01761-400811 or visit our store in Dhaka, Bangladesh.",
};

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["01761-400811"],
    action: { label: "Call Now", href: "tel:+8801761400811" },
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    details: ["01761-400811", "Quick responses, 9 AM - 10 PM"],
    action: {
      label: "Chat on WhatsApp",
      href: "https://wa.me/8801761400811",
    },
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@renuscloset.com"],
    action: { label: "Send Email", href: "mailto:info@renuscloset.com" },
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["Dhaka, Bangladesh 1230"],
    action: { label: "Get Directions", href: "#map" },
  },
];

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/10 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Contact</span>
          </nav>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-3 max-w-xl text-lg text-muted-foreground">
            Have a question about our products, need help with an order, or
            just want to say hello? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 lg:grid-cols-[1fr_420px]">
            {/* Contact Form */}
            <Card className="border-border/50">
              <CardContent className="p-6 sm:p-8">
                <h2 className="text-xl font-semibold text-foreground">
                  Send Us a Message
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Fill out the form below and we&apos;ll get back to you
                  within 24 hours.
                </p>

                <form className="mt-6 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-foreground"
                      >
                        Full Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        className="mt-1.5"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="text-sm font-medium text-foreground"
                      >
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="01XXX-XXXXXX"
                        className="mt-1.5"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-foreground"
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className="mt-1.5"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium text-foreground"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="What is this about?"
                      className="mt-1.5"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-foreground"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      rows={5}
                      placeholder="Tell us how we can help..."
                      className="mt-1.5"
                      required
                    />
                  </div>

                  <Button size="lg" className="h-11 w-full sm:w-auto sm:px-10">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-5">
              {contactInfo.map((info) => (
                <Card key={info.title} className="border-border/50">
                  <CardContent className="flex items-start gap-4 p-5">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <info.icon className="size-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold text-foreground">
                        {info.title}
                      </h3>
                      {info.details.map((d) => (
                        <p
                          key={d}
                          className="mt-0.5 text-sm text-muted-foreground"
                        >
                          {d}
                        </p>
                      ))}
                      <a
                        href={info.action.href}
                        target={
                          info.action.href.startsWith("http")
                            ? "_blank"
                            : undefined
                        }
                        rel={
                          info.action.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="mt-2 inline-block text-sm font-medium text-primary hover:underline"
                      >
                        {info.action.label}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Business Hours */}
              <Card className="border-border/50">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Clock className="size-5 text-primary" />
                    </div>
                    <h3 className="text-sm font-semibold text-foreground">
                      Business Hours
                    </h3>
                  </div>
                  <div className="mt-4 space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Saturday - Thursday
                      </span>
                      <span className="font-medium text-foreground">
                        9:00 AM - 10:00 PM
                      </span>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Friday</span>
                      <span className="font-medium text-foreground">
                        2:00 PM - 10:00 PM
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social */}
              <Card className="border-border/50 bg-primary/5">
                <CardContent className="p-5">
                  <h3 className="text-sm font-semibold text-foreground">
                    Follow Us
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Join 30,000+ followers for updates and exclusive offers.
                  </p>
                  <a
                    href="https://facebook.com/renusclosetdhaka"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(buttonVariants({ variant: "outline", size: "lg" }), "mt-4 h-10 w-full")}
                  >
                    <svg className="mr-2 size-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
                    Facebook Page
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="mt-12" id="map">
            <h2 className="text-xl font-semibold text-foreground">
              Find Us
            </h2>
            <div className="mt-4 aspect-[21/9] overflow-hidden rounded-xl border border-border/50 bg-muted">
              <div className="flex h-full items-center justify-center text-muted-foreground/40">
                <div className="text-center">
                  <MapPin className="mx-auto size-8" />
                  <p className="mt-2 text-sm">Map will be displayed here</p>
                  <p className="text-xs">Dhaka, Bangladesh 1230</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
