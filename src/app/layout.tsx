import type { Metadata } from "next";
import { Inter, Hind_Siliguri } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const hindSiliguri = Hind_Siliguri({
  variable: "--font-bengali",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["bengali", "latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Renu's Closet - Premium Sarees & Women's Clothing | Dhaka, Bangladesh",
    template: "%s | Renu's Closet",
  },
  description:
    "Shop premium Rajshahi, Muslin & Silk sarees at Renu's Closet. Authentic Bangladeshi women's clothing with nationwide delivery. Call 01761-400811.",
  keywords: [
    "saree",
    "Rajshahi saree",
    "Muslin saree",
    "Silk saree",
    "Bangladeshi saree",
    "women's clothing",
    "Dhaka",
    "Renu's Closet",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${hindSiliguri.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
