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
      className={`${dmSans.className} relative isolate flex min-h-[78vh] flex-col items-center justify-center overflow-hidden bg-white px-4 py-24 text-center`}
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle, #bfdbfe 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 -z-10 h-[420px] w-[720px] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/70 blur-3xl"
      />

      <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-5 py-2 text-sm font-medium text-blue-600 shadow-[0_8px_30px_rgba(37,99,235,0.18)]">
        <span className="h-2 w-2 animate-pulse rounded-full bg-blue-600" />
        Work in Progress
      </span>

      <h1
        className={`${archivo.className} mt-10 text-6xl font-extrabold leading-[1.02] tracking-tight text-[#0b1736] sm:text-8xl lg:text-9xl`}
        style={{ fontVariationSettings: '"wdth" 125' }}
      >
        Coming
        <br />
        <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
          Soon
        </span>
      </h1>

      <p className="mt-10 max-w-sm text-lg text-slate-600">
        We&apos;re building something great here. Check back soon.
      </p>

      <Link
        href="/"
        className="mt-10 inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-[0_10px_30px_rgba(37,99,235,0.35)] transition hover:bg-blue-700"
      >
        ← Back to Home
      </Link>
    </section>
  );
}
