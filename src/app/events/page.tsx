import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { events, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `Events · ${siteConfig.name}`,
  description: "Upcoming events from Talent Tribe.",
};

export default function EventsPage() {
  return (
    <div>
      <PageHeader
        eyebrow="PROGRAMS & EVENTS"
        title="Upcoming Events"
        description="Hackathons, mentorship sessions and technical series designed to unlock potential at every stage of your tech journey."
      />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {events.map((event) => (
            <div
              key={event.slug}
              className="rounded-2xl border border-maroon-900/10 bg-white p-8 shadow-sm"
            >
              <span className="rounded-full bg-gold-100 px-3 py-1 text-xs font-heading font-bold uppercase tracking-widest text-gold-600">
                {event.status}
              </span>
              <h2 className="mt-4 font-display text-2xl font-bold text-maroon-950">
                {event.title}
              </h2>
              <div className="mt-4 space-y-1 text-sm text-maroon-800/80">
                <p>📅 {event.date}</p>
                <p>🕕 {event.time}</p>
                <p>📍 {event.location}</p>
              </div>
              <button type="button" className="btn-gold mt-6">
                Register Now
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
