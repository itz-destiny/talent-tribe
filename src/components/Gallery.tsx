import Image from "next/image";
import Link from "next/link";
import { galleryImages } from "@/lib/site";

export default function Gallery() {
  return (
    <section className="bg-cream-soft py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-rule" />
              GALLERY
            </div>
            <h2 className="section-heading mt-3">
              In <span className="text-gold-500">Pictures</span>
            </h2>
          </div>
          <Link
            href="/community"
            className="font-heading text-sm font-bold text-maroon-900 hover:text-gold-600"
          >
            View All →
          </Link>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((img) => (
            <div
              key={img.src + img.label}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl"
            >
              <Image
                src={img.src}
                alt={img.label}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/70 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 text-xs font-heading font-bold uppercase tracking-widest text-white">
                {img.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
