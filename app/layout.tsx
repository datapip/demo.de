import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { CartProvider } from "@/components/cart/cart-context";
import { Toaster } from "@/components/ui/sonner";
import { DataLayer } from "../components/analytics/data-layer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col min-w-screen min-h-screen ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <DataLayer />

        <CartProvider>
          <Navbar />

          <main className="flex-1 container mx-auto px-4 py-8">{children}</main>

          <Footer />
        </CartProvider>

        <Toaster />
      </body>
    </html>
  );
}
