import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `About Us · ${siteConfig.name}`,
  description:
    "Talent Tribe is building a thriving tech ecosystem in Oyo by connecting ambitious individuals, fostering collaboration, and creating real opportunities for growth, innovation, and impact.",
};

const offers = [
  {
    title: "Skill Development",
    description:
      "Access to workshops, technical sessions, and hands-on learning opportunities designed to build real-world skills.",
    emoji: "🛠️",
  },
  {
    title: "Opportunities",
    description:
      "Get early access to job opportunities, internships, and collaborations within the ecosystem.",
    emoji: "🚀",
  },
  {
    title: "Community & Network",
    description:
      "Connect with like-minded individuals, mentors, and industry professionals who are building and growing together.",
    emoji: "🤝",
  },
];

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        title="Building the Future of Tech Talent in Oyo"
        description="Talent Tribe is building a thriving tech ecosystem in Oyo by connecting ambitious individuals, fostering collaboration, and creating real opportunities for growth, innovation, and impact."
      />

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-bold text-maroon-950">
              Who We Are
            </h2>
            <p className="mt-4 text-maroon-800/80">
              Talent Tribe is a fast-growing community of developers,
              designers, and innovators across Oyo State. We exist to bridge
              the gap between learning and real-world opportunities by
              creating an environment where tech talents can connect,
              collaborate, and build meaningful solutions.
            </p>
            <p className="mt-4 text-maroon-800/80">
              Beyond just a community, we are a movement focused on
              empowering individuals with the skills, network, and exposure
              needed to thrive in today&apos;s global tech ecosystem.
            </p>
          </div>
          <div className="card-image-frame relative aspect-[4/3]">
            <Image
              src="/images/aboutfr.png"
              alt="Talent Tribe community"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-5xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="eyebrow rounded-full bg-gold-100 px-3 py-1">
              MISSION
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-maroon-950">
              Our Mission
            </h2>
            <p className="mt-4 text-maroon-800/80">
              Our mission is to create opportunities for tech talent in Oyo
              to grow through collaboration, hands-on learning, and access to
              real-world projects.
            </p>
            <p className="mt-4 text-maroon-800/80">
              We are committed to helping individuals develop practical
              skills, build strong portfolios, and gain the confidence needed
              to compete and succeed in the global tech space.
            </p>
          </div>
          <div>
            <span className="eyebrow rounded-full bg-gold-100 px-3 py-1">
              VISION
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-maroon-950">
              Our Vision
            </h2>
            <p className="mt-4 text-maroon-800/80">
              Our vision is to become the leading tech ecosystem in Oyo,
              recognized for producing highly skilled and globally
              competitive talent.
            </p>
            <p className="mt-4 text-maroon-800/80">
              We aim to create a future where innovation thrives locally, and
              where individuals have access to the resources, mentorship,
              and opportunities needed to build impactful careers.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="section-heading text-center">What We Offer</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {offers.map((offer) => (
            <div
              key={offer.title}
              className="rounded-2xl border border-maroon-900/10 bg-cream-soft p-6 text-center"
            >
              <span className="text-3xl">{offer.emoji}</span>
              <h3 className="mt-4 font-display text-xl font-bold text-maroon-950">
                {offer.title}
              </h3>
              <p className="mt-2 text-sm text-maroon-800/80">
                {offer.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="section-heading">Our Community</h2>
          <p className="mt-4 text-maroon-800/80">
            Talent Tribe is more than a platform, it&apos;s an active and
            supportive ecosystem. Our community brings together individuals
            from different backgrounds who are united by a shared goal of
            growth and innovation.
          </p>
          <p className="mt-4 text-maroon-800/80">
            Through our online channels and physical meetups, members get
            access to mentorship, collaboration opportunities, and hands-on
            learning experiences.
          </p>
          <p className="mt-4 text-maroon-800/80">
            We are also building local chapters across Oyo, creating smaller
            hubs where members can connect, learn, and grow within their
            immediate environment.
          </p>
        </div>
      </section>

      <section className="bg-maroon-950 py-16 text-center">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-white">
            Join the Movement
          </h2>
          <p className="mt-4 text-white/70">
            Whether you&apos;re just getting started or looking to level up,
            Talent Tribe provides the environment, support, and
            opportunities to help you grow.
          </p>
          <a href={siteConfig.joinFormUrl} className="btn-gold mt-6 inline-flex">
            Join Community
          </a>
        </div>
      </section>
    </div>
  );
}
