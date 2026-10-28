"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { mainNav } from "@/lib/site";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-maroon-800/60 bg-maroon-950/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="BuildwithRivers"
            width={28}
            height={28}
          />
          <span className="font-display text-[11px] font-bold leading-[1.15] tracking-wider text-white">
            BUILDWITH
            <br />
            <span className="text-sky-300">RIVERS</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {mainNav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-heading text-sm font-medium transition ${
                  active ? "text-sky-300" : "text-white/90 hover:text-sky-300"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/become-member" className="btn-outline-gold py-2 text-xs">
            Become A Member
          </Link>
          <Link href="/login" className="btn-gold py-2 text-xs">
            Login
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="flex flex-col gap-1.5 lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="h-0.5 w-6 bg-white" />
          <span className="h-0.5 w-6 bg-white" />
          <span className="h-0.5 w-6 bg-white" />
        </button>
      </div>

      {open && (
        <div className="border-t border-maroon-800/60 bg-maroon-950 px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-4">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-heading text-sm font-medium text-white/90 hover:text-sky-300"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-2">
              <Link
                href="/become-member"
                onClick={() => setOpen(false)}
                className="btn-outline-gold justify-center py-2 text-xs"
              >
                Become A Member
              </Link>
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="btn-gold justify-center py-2 text-xs"
              >
                Login
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
