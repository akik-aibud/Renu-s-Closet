"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">Settings</h1>

      <div className="grid gap-6">
        {/* Store Info */}
        <Card>
          <CardHeader>
            <CardTitle>Store Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="storeName">Store Name</Label>
                <Input id="storeName" defaultValue="Renu's Closet" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="storeNameBn">Store Name (Bengali)</Label>
                <Input id="storeNameBn" defaultValue="রেণু'স ক্লোজেট" />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  defaultValue="+880 1700-000000"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue="info@renuscloset.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Textarea
                id="address"
                defaultValue="Dhaka, Bangladesh"
                rows={2}
              />
            </div>
          </CardContent>
        </Card>

        {/* Shipping */}
        <Card>
          <CardHeader>
            <CardTitle>Shipping Rates</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="insideDhaka">Inside Dhaka (৳)</Label>
                <Input
                  id="insideDhaka"
                  type="number"
                  defaultValue="60"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="outsideDhaka">Outside Dhaka (৳)</Label>
                <Input
                  id="outsideDhaka"
                  type="number"
                  defaultValue="120"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="freeShipping">
                Free Shipping Minimum Order (৳)
              </Label>
              <Input
                id="freeShipping"
                type="number"
                defaultValue="3000"
              />
              <p className="text-muted-foreground text-xs">
                Orders above this amount get free shipping. Set 0 to disable.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Social Media */}
        <Card>
          <CardHeader>
            <CardTitle>Social Media</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="facebook">Facebook</Label>
                <Input
                  id="facebook"
                  placeholder="https://facebook.com/renuscloset"
                  defaultValue="https://facebook.com/renuscloset"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="instagram">Instagram</Label>
                <Input
                  id="instagram"
                  placeholder="https://instagram.com/renuscloset"
                />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="youtube">YouTube</Label>
                <Input
                  id="youtube"
                  placeholder="https://youtube.com/@renuscloset"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="whatsapp">WhatsApp</Label>
                <Input
                  id="whatsapp"
                  placeholder="+880 1700-000000"
                  defaultValue="+880 1700-000000"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Banner Management */}
        <Card>
          <CardHeader>
            <CardTitle>Banner Management</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground text-sm">
              Manage homepage banners and promotional sliders.
            </p>
            <Separator />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex h-32 flex-col items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/25 text-center transition-colors hover:border-muted-foreground/50"
                >
                  <p className="text-muted-foreground text-sm">Banner {i}</p>
                  <p className="text-muted-foreground text-xs">
                    Click to upload
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Save */}
        <div className="flex justify-end">
          <Button>Save Settings</Button>
        </div>
      </div>
    </div>
  );
}
