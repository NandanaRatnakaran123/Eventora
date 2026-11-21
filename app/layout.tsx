import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Eventora – Event Planning & Management",
    template: "%s | Eventora",
  },
  description:
    "Eventora plans, styles and produces weddings, corporate events and private celebrations end to end.",
  openGraph: {
    title: "Eventora – Event Planning & Management",
    description:
      "Weddings, corporate gatherings and private celebrations, planned and produced end to end.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
