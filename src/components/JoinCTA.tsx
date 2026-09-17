import { siteConfig } from "@/lib/site";

export default function JoinCTA() {
  return (
    <section className="relative overflow-hidden bg-gold-500">
      <div className="relative mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-4xl font-bold text-white sm:text-5xl">
          Ready to Join
          <br />
          the Tribe?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-maroon-900">
          A community for both newbies and professionals. No gatekeepers —
          just people passionate about Oyo&apos;s tech future.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={siteConfig.joinFormUrl} className="btn-maroon">
            Join Community Now →
          </a>
          <a
            href={siteConfig.donateUrl}
            className="inline-flex items-center gap-2 rounded-md border border-maroon-950 px-6 py-3 text-sm font-heading font-bold text-maroon-950 transition hover:bg-maroon-950 hover:text-gold-400"
          >
            Donate For a Talent
          </a>
        </div>
        <p className="mt-8 font-heading text-xs font-bold uppercase tracking-[0.3em] text-maroon-900">
          Learn · Grow · Connect
        </p>
      </div>
    </section>
  );
}
