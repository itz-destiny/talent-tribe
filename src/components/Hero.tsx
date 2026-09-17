"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site";

const slides = [
  {
    image: "/images/ttheroimage.png",
    lines: [
      { text: "Community of Talent", accent: false },
      { text: "Shaping the", accent: true },
      { text: "Oyo Ecosystem", accent: false },
    ],
  },
  {
    image: "/images/firstbgr.png",
    lines: [
      { text: "Learn. Grow.", accent: false },
      { text: "Connect.", accent: true },
      { text: "With Your Tribe", accent: false },
    ],
  },
  {
    image: "/images/teambg.png",
    lines: [
      { text: "Building", accent: false },
      { text: "Tomorrow's", accent: true },
      { text: "Tech Leaders", accent: false },
    ],
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const slide = slides[index];

  return (
    <section className="relative min-h-[640px] overflow-hidden bg-maroon-950">
      {slides.map((s, i) => (
        <Image
          key={s.image}
          src={s.image}
          alt=""
          fill
          priority={i === 0}
          className={`object-cover transition-opacity duration-700 ${
            i === index ? "opacity-40" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-950/70 to-maroon-950/20" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-6 px-4 py-28 sm:px-6 lg:px-8">
        <div className="eyebrow">
          <span className="eyebrow-rule" />
          OYO STATE · NIGERIA · 2026
        </div>

        <h1 className="max-w-2xl font-display text-5xl font-bold leading-tight text-white sm:text-6xl">
          {slide.lines.map((line) => (
            <span
              key={line.text}
              className={`block ${line.accent ? "text-gold-500" : ""}`}
            >
              {line.text}
            </span>
          ))}
        </h1>

        <p className="max-w-lg text-white/80">
          A platform for Oyo Tech Talents to connect, create, and cultivate a
          culture of innovation and growth. For both newbies and
          professionals in the ecosystem.
        </p>

        <div className="flex flex-wrap gap-3">
          <a href={siteConfig.joinFormUrl} className="btn-gold">
            Join Community
          </a>
          <a href={siteConfig.donateUrl} className="btn-outline-gold">
            Donate For a Talent ♥
          </a>
        </div>
        <div>
          <a
            href={siteConfig.joinFormUrl}
            className="btn-gold inline-flex w-fit"
          >
            Become A Community Member
          </a>
        </div>

        <div className="mt-6 flex gap-2">
          {slides.map((s, i) => (
            <button
              key={s.image}
              aria-label={`Slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-8 bg-gold-500" : "w-4 bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
