import type { Metadata } from "next";
import { Lato, Playfair_Display } from "next/font/google";

import { SiteShell } from "@/components/layout/SiteShell";

import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LD Guest House, Ayodhya | Comfortable Stay in the Holy City",
  description:
    "A peaceful stay for families, pilgrims, tourists and groups — spacious rooms, garden, and banquet hall in Ayodhya.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
