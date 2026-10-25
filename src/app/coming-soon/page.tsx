import type { Metadata } from "next";
import Link from "next/link";
import { Archivo, DM_Sans } from "next/font/google";
import { siteConfig } from "@/lib/site";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `Coming Soon · ${siteConfig.name}`,
  description: "We're building something great here. Check back soon.",
};

export default function ComingSoonPage() {
  return (
    <section
      className={`${dmSans.className} flex min-h-[70vh] flex-col items-center justify-center bg-white px-4 py-20 text-center`}
    >
      <span className="rounded-full border border-[#ffe9a3] bg-white px-5 py-2 text-sm font-medium text-[#ffcc00] shadow-[0_0_24px_rgba(255,204,0,0.35)]">
        Work in Progress
      </span>

      <h1
        className={`${archivo.className} mt-10 text-6xl font-extrabold leading-[1.05] tracking-tight text-[#0d0d0d] sm:text-8xl lg:text-9xl`}
        style={{ fontVariationSettings: '"wdth" 125' }}
      >
        Coming
        <br />
        <span className="text-[#ffcc00]">Soon</span>
      </h1>

      <p className="mt-10 max-w-xs text-base text-[#111]">
        We&apos;re building something great here. Check back soon.
      </p>

      <Link
        href="/"
        className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#ffcc00] px-8 py-4 text-base font-semibold text-[#0d0d0d] transition hover:bg-[#f5c000]"
      >
        ← Back to Home
      </Link>
    </section>
  );
}
