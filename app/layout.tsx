import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { localBusinessSchema } from "@/lib/schema";
import StickyCTA from "@/components/StickyCTA";

const display = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://www.hermannautomatika.hu";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hermann Automatika | Kapuautomatika Győr-Moson-Sopron megyében",
    template: "%s | Hermann Automatika",
  },
  description:
    "Motoros tolókapu és szárnyaskapu automatika, garázskapu motorok, kaputelefon, kamerarendszer és okosotthon telepítés Győr-Moson-Sopron megyében. Hívjon most, vagy írjon WhatsAppon.",
  keywords: [
    "kapuautomatika",
    "tolókapu motor",
    "szárnyaskapu automatika",
    "garázskapu motor",
    "kaputelefon szerelés",
    "kamerarendszer telepítés",
    "okosotthon Győr",
    "Hermann Automatika",
  ],
  authors: [{ name: "Hermann Automatika" }],
  openGraph: {
    type: "website",
    locale: "hu_HU",
    url: siteUrl,
    siteName: "Hermann Automatika",
    title: "Hermann Automatika | Automatizáljuk kapuját. Egyszerűen. Biztonságosan.",
    description:
      "Motoros kapunyitók, garázskapu automatizálás, kaputelefonok, kamerarendszerek és okosotthon megoldások Győr-Moson-Sopron megyében.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Modern motoros tolókapu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hermann Automatika",
    description: "Kapuautomatika, garázskapu, kaputelefon és kamerarendszer telepítés.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="font-body bg-ink text-mist antialiased">
        {children}
        <StickyCTA />
      </body>
    </html>
  );
}
