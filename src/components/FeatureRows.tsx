import Image from "next/image";
import Link from "next/link";

const rows = [
  {
    id: "mission",
    eyebrow: "MISSION",
    title: "Our Mission",
    label: "Mission",
    image: "/images/aboutfr.png",
    paragraphs: [
      "Talent Tribe is a community for Oyo Tech Talent to collaborate, innovate, and foster growth and opportunity. A platform to connect, create, and cultivate a culture of innovation.",
      "We create opportunities for Oyo's tech-savvy to develop essential skills, collaborate with like-minded peers, and launch successful careers in technology.",
    ],
    href: "/about#mission",
    reverse: false,
  },
  {
    id: "vision",
    eyebrow: "VISION",
    title: "Our Vision",
    label: "Vision",
    image: "/images/mission.png",
    paragraphs: [
      "Driving innovation and opportunity for Oyo's Tech Talent through collaboration and community.",
      "We nurture well-rounded individuals with strong academic foundations, creative thinking skills, and a global perspective on what's possible.",
    ],
    href: "/about#vision",
    reverse: true,
  },
  {
    id: "community",
    eyebrow: "COMMUNITY",
    title: "Our Community",
    label: "Community",
    image: "/images/teambg.png",
    paragraphs: [
      "Our community is a safe, enabling environment on Telegram chat, consisting of diverse people all working together to grow a collaborative system.",
      "Currently we have smaller communities called chapters in various cities across Oyo State, each driving local impact.",
    ],
    href: "/community",
    reverse: false,
  },
];

export default function FeatureRows() {
  return (
    <section className="bg-cream-soft">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="eyebrow justify-center">
            <span className="eyebrow-rule" />
            WHO WE ARE
            <span className="eyebrow-rule" />
          </div>
          <h2 className="section-heading mt-3">
            Built for <span className="text-gold-500">Builders</span>
          </h2>
          <p className="mt-4 text-maroon-700/80">
            From first-year Tech Talent to seasoned professionals — everyone
            has a place in the tribe.
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-20">
          {rows.map((row) => (
            <div
              key={row.id}
              id={row.id}
              className={`flex flex-col items-center gap-10 lg:flex-row ${
                row.reverse ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="card-image-frame w-full lg:w-1/2">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={row.image}
                    alt={row.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="absolute bottom-4 left-4 rounded-full bg-maroon-950/70 px-3 py-1 text-xs font-heading font-semibold uppercase tracking-widest text-sky-300">
                  {row.label}
                </span>
              </div>

              <div className="w-full lg:w-1/2">
                <span className="eyebrow rounded-full bg-gold-100 px-3 py-1">
                  {row.eyebrow}
                </span>
                <h3 className="mt-4 font-display text-3xl font-bold text-maroon-950 sm:text-4xl">
                  {row.title}
                </h3>
                <span className="mt-3 block h-1 w-12 bg-gold-500" />
                <div className="mt-4 space-y-3 text-sm text-maroon-800/80">
                  {row.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
                <Link href={row.href} className="btn-gold mt-6">
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
