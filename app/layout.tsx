import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { localBusinessSchema } from "@/lib/schema";
import StickyCTA from "@/components/StickyCTA";
import CookieConsent from "@/components/CookieConsent";
import { CookieConsentProvider } from "@/lib/cookie-consent-context";

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
    "Motoros tolókapu és szárnyaskapu automatika, garázskapu motorok, kaputelefon telepítés és szakszerviz Győr-Moson-Sopron megyében. Hívjon most.",
  keywords: [
    "kapuautomatika",
    "tolókapu motor",
    "szárnyaskapu automatika",
    "garázskapu motor",
    "kaputelefon szerelés",
    "kapuautomatika szerviz",
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
      "Motoros kapunyitók, garázskapu automatizálás és kaputelefonok Győr-Moson-Sopron megyében.",
    images: [
      {
        url: "/images/hero-tolokapu.jpg",
        width: 1200,
        height: 630,
        alt: "Modern motoros tolókapu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hermann Automatika",
    description: "Kapuautomatika, garázskapu és kaputelefon telepítés.",
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
      <body className="font-body bg-mist text-ink antialiased">
        <CookieConsentProvider>
          {children}
          <StickyCTA />
          <CookieConsent />
        </CookieConsentProvider>
      </body>
    </html>
  );
}
