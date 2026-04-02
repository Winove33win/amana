import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Amana Interiores | Móveis de Alto Padrão",
  description: "Há 30 anos realizando sonhos de famílias com móveis sob medida, designer e planejados em Jaguariúna.",
  keywords: "móveis alto padrão, sob medida, planejados, designer, Jaguariúna",
  openGraph: {
    title: "Amana Interiores | Móveis de Alto Padrão",
    description: "Há 30 anos realizando sonhos de famílias com móveis sob medida, designer e planejados.",
    images: ["/images/ambiente-1.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
