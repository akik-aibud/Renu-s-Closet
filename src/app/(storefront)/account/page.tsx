import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import { Package, MapPin, Heart, User, LogOut } from "lucide-react";

export default function AccountPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">My Account</h1>

      <div className="grid gap-6 sm:grid-cols-2">
        <Link href="/account/orders">
          <Card className="transition-shadow hover:shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Package className="h-5 w-5 text-primary" />
                My Orders
              </CardTitle>
              <CardDescription>
                View your order history and track shipments
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>

        <Card className="transition-shadow hover:shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary" />
              Addresses
            </CardTitle>
            <CardDescription>
              Manage your shipping addresses
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="transition-shadow hover:shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Heart className="h-5 w-5 text-primary" />
              Wishlist
            </CardTitle>
            <CardDescription>
              Products you&apos;ve saved for later
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="transition-shadow hover:shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <User className="h-5 w-5 text-primary" />
              Profile Settings
            </CardTitle>
            <CardDescription>
              Update your name, email and password
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div className="mt-8">
        <Card>
          <CardContent className="flex items-center justify-between py-4">
            <div>
              <p className="font-medium">Need help?</p>
              <p className="text-sm text-muted-foreground">
                Call us at 01761-400811 or message on WhatsApp
              </p>
            </div>
            <a href="https://wa.me/8801761400811" target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "outline" }))}>
              WhatsApp
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
