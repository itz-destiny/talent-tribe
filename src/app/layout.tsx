import type { Metadata } from "next";
import {
  Fraunces,
  Inter,
  Space_Grotesk,
  Baloo_Thambi_2,
} from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/site";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const baloo = Baloo_Thambi_2({
  subsets: ["latin"],
  variable: "--font-baloo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.name,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/TalentTibeColorLogo1.webp",
        width: 1200,
        height: 630,
        alt: "Talent Tribe Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/images/TalentTibeColorLogo1.webp"],
  },
  icons: {
    icon: "/talent_tribe_logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${inter.variable} ${spaceGrotesk.variable} ${baloo.variable} ${GeistSans.variable} font-sans`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ToastContainer position="top-right" />
      </body>
    </html>
  );
}
