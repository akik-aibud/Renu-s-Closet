import { Header } from "@/components/storefront/header";
import { Footer } from "@/components/storefront/footer";
import { WhatsAppFloat } from "@/components/storefront/whatsapp-float";

export default function StorefrontLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
