import { partners } from "@/lib/site";

export default function Partners() {
  const track = [...partners, ...partners];

  return (
    <section className="bg-cream-soft py-20">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <span className="inline-block rounded-full bg-gold-500 px-5 py-2 font-heading text-xs font-bold uppercase tracking-[0.2em] text-maroon-950">
          Partners
        </span>
        <h2 className="mt-6 font-display text-3xl text-maroon-950 sm:text-4xl">
          Meet our Official Partners
        </h2>
      </div>

      <div className="relative mt-12 overflow-hidden">
        <div className="marquee-track flex w-max gap-6 px-4">
          {track.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="flex h-24 w-40 shrink-0 items-center justify-center rounded-xl border border-maroon-900/10 bg-white p-4 shadow-sm"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={partner.logo}
                alt={partner.name}
                loading="lazy"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
