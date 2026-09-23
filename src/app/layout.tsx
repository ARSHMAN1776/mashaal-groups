import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL("https://mashaalgroups.com"),
  title: "MASHAAL GROUP — Diversified Parent Corporate Enterprise",
  description:
    "MASHAAL GROUP (mashaalgroups.com) is an institutional parent corporate enterprise governing independent operating businesses across energy forecourts (Mashaal Petroleum), global maritime freight forwarding (Mashwani Shipping L.L.C.), consumer food commodities (Mashaal Foods), and executive mobility (Mashaal Rent A Car).",
  keywords: [
    "Mashaal Group",
    "Mashaal Groups",
    "Mashaal Group",
    "Holding Company",
    "Mashaal Petroleum",
    "Mashwani Shipping LLC",
    "Mashaal Foods",
    "Mashaal Rent A Car",
    "Diversified Conglomerate",
    "Dubai Logistics",
    "Pakistan Energy Forecourts"
  ],
  authors: [{ name: "MASHAAL GROUP", url: "https://mashaalgroups.com" }],
  creator: "MASHAAL GROUP",
  publisher: "MASHAAL GROUP",
  alternates: {
    canonical: "https://mashaalgroups.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "MASHAAL GROUP — Diversified Parent Corporate Enterprise",
    description:
      "A diversified group of businesses built across energy forecourts, global maritime trade, food staples, and mobility across UAE and Pakistan.",
    url: "https://mashaalgroups.com",
    siteName: "MASHAAL GROUP",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero-architecture.jpg",
        width: 1200,
        height: 630,
        alt: "MASHAAL GROUP Monumental Corporate Holding Architecture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MASHAAL GROUP — Diversified Parent Corporate Enterprise",
    description:
      "A diversified holding enterprise governing physical energy assets, maritime logistics, consumer food, and mobility.",
    images: ["/images/hero-architecture.jpg"],
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <JsonLd />
      </head>
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

