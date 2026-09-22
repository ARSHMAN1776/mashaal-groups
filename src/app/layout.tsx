import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

export const metadata: Metadata = {
  title: "MASHAL GROUP — Diversified Parent Corporate Enterprise",
  description:
    "MASHAL GROUP is a diversified holding corporate enterprise governing independent operating businesses across energy forecourts, international freight logistics, consumer food commodities, and mobility.",
  keywords: [
    "Mashal Group",
    "Holding Company",
    "Mashal Petroleum",
    "Mashwani Shipping LLC",
    "Mashal Foods",
    "Mashal Rent A Car",
    "Diversified Conglomerate",
    "Energy and Logistics Group"
  ],
  authors: [{ name: "MASHAL GROUP" }],
  openGraph: {
    title: "MASHAL GROUP — Diversified Parent Corporate Enterprise",
    description:
      "A diversified group of businesses built across energy, mobility, logistics, and emerging markets.",
    url: "https://mashaalgroups.com",
    siteName: "MASHAL GROUP",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#24060C] text-[#F7F3EE] antialiased selection:bg-[#C5A059] selection:text-[#190308] min-h-screen flex flex-col">
        <SmoothScrollProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

