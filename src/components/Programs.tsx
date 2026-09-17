import Image from "next/image";
import Link from "next/link";
import { programs } from "@/lib/site";

export default function Programs() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="eyebrow">
          <span className="eyebrow-rule" />
          PROGRAMS &amp; EVENTS
        </div>
        <h2 className="section-heading mt-3 max-w-xl">
          Where Talent
          <br />
          Gets Activated
        </h2>
        <p className="mt-4 max-w-xl text-maroon-700/80">
          From hackathons to mentorship sessions, our programs are designed
          to unlock potential at every stage of your tech journey.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <div
              key={program.title}
              className="overflow-hidden rounded-2xl border border-maroon-900/10 bg-cream-soft shadow-sm"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover"
                />
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-heading font-bold uppercase tracking-widest text-maroon-900">
                  {program.status}
                </span>
              </div>
              <div className="p-6">
                <p className="text-xs font-heading font-semibold uppercase tracking-widest text-gold-600">
                  {program.kind} · {program.tag}
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold text-maroon-950">
                  {program.title}
                </h3>
                <p className="mt-3 text-sm text-maroon-800/80">
                  {program.description}
                </p>
                <Link
                  href={program.href}
                  className="mt-4 inline-block font-heading text-sm font-bold text-gold-600 hover:text-gold-700"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
