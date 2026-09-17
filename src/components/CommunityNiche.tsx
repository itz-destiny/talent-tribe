import { communityNiches, siteConfig } from "@/lib/site";

export default function CommunityNiche() {
  return (
    <section className="relative overflow-hidden bg-cream-soft py-20">
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-8 right-0 select-none font-display text-[220px] font-bold leading-none text-gold-100"
      >
        TRIBE
      </span>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-rule" />
              OUR COMMUNITY
            </div>
            <h2 className="section-heading mt-3">
              Find Your
              <br />
              <span className="text-gold-500">Niche</span> in the Tribe
            </h2>
            <p className="mt-4 max-w-md text-maroon-700/80">
              A safe, enabling environment on Telegram and in-person,
              consisting of diverse people all working together to grow a
              collaborative system.
            </p>
            <a href={siteConfig.joinFormUrl} className="btn-gold mt-6">
              Join our Community →
            </a>
          </div>

          <ul className="flex flex-col gap-3">
            {communityNiches.map((niche) => (
              <li
                key={niche.label}
                className="flex items-center justify-between rounded-lg bg-gold-50 px-6 py-4"
              >
                <span className="font-heading font-semibold text-maroon-900">
                  {niche.label}
                </span>
                <span className="font-display text-lg font-bold text-gold-600">
                  {niche.count}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
