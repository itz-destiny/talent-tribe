import { communityStats } from "@/lib/site";

export default function StatsRow() {
  return (
    <section className="bg-maroon-950">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        {communityStats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-display text-4xl font-bold text-gold-500">
              {stat.value}
            </p>
            <p className="mt-2 text-xs font-heading uppercase tracking-[0.2em] text-white/70">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
