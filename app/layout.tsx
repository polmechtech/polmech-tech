import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import AllegroOffersSection from "@/components/AllegroOffersSection";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://polmech.tech"),
  title: {
    default: "PolMech — łuparki przekładniowe i przekładnie do drewna",
    template: "%s | PolMech",
  },
  description:
    "PolMech — łuparki przekładniowe, przekładnie i mechaniczne rozwiązania do przygotowania drewna opałowego. Aktualne ceny, dostępność, sprzedaż Allegro i wysyłka za pobraniem.",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    siteName: "PolMech",
    url: "https://polmech.tech",
    title: "PolMech — łuparki przekładniowe i przekładnie do drewna",
    description:
      "Łuparki przekładniowe i przekładnie do przygotowania drewna opałowego. Aktualne oferty i dostępność.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <AllegroOffersSection />
      </body>
    </html>
  );
}
