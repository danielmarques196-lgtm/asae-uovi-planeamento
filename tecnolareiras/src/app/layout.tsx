import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { CartProvider } from "@/context/cart-context";
import { CartSidebar } from "@/components/cart/cart-sidebar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Tecnolareiras | Recuperadores de Calor, Salamandras e Lareiras",
    template: "%s | Tecnolareiras",
  },
  description:
    "Especialistas em recuperadores de calor, salamandras a lenha e pellets, lareiras e churrasqueiras. Instalação e manutenção profissional em Portugal.",
  keywords: [
    "recuperadores de calor",
    "salamandras",
    "lareiras",
    "pellets",
    "aquecimento",
    "instalação",
    "Portugal",
  ],
  authors: [{ name: "Tecnolareiras" }],
  creator: "Tecnolareiras",
  publisher: "Tecnolareiras",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "https://tecnolareiras.pt",
    siteName: "Tecnolareiras",
    title: "Tecnolareiras | Recuperadores de Calor, Salamandras e Lareiras",
    description:
      "Especialistas em recuperadores de calor, salamandras, lareiras e churrasqueiras. Instalação e manutenção profissional.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tecnolareiras",
    description: "Especialistas em aquecimento a biomassa em Portugal",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={inter.variable}>
      <body className="min-h-screen flex flex-col antialiased">
        <CartProvider>
          {children}
          <CartSidebar />
        </CartProvider>
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
