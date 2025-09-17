import type { Metadata } from "next";
import { Open_Sans, Mr_Dafoe } from "next/font/google";

import "@/styles/tokens.scss";
import "@/styles/typography.scss";
import "./globals.scss";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-sans" });
const mrDafoe = Mr_Dafoe({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
});

export const metadata: Metadata = {
  title: "rent-a-car",
  description: "Rent a car in minutes — SSR optimized.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="tr"
      className={`${openSans.variable} ${mrDafoe.variable} ${openSans.className}`}
    >
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
