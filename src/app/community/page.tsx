import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CommunityNiche from "@/components/CommunityNiche";
import StatsRow from "@/components/StatsRow";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `Community · ${siteConfig.name}`,
  description:
    "Talent Tribe is committed to empowering individuals across Oyo to build successful careers in technology and innovation.",
};

export default function CommunityPage() {
  return (
    <div>
      <PageHeader
        eyebrow="OUR COMMUNITY"
        title="A Tribe Built on Local Leadership"
        description="Talent Tribe is committed to empowering individuals across Oyo to build successful careers in technology and innovation."
      />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-5 text-maroon-800/80">
          <p>
            We believe that fostering innovation and growth requires strong
            leadership and mentorship, which is why we invest heavily in
            community-building.
          </p>
          <p>
            That&apos;s why we&apos;re working with leaders to establish
            chapters in their respective regions. If you have the skills and
            capability to lead a community-focused initiative, we encourage
            you to apply.
          </p>
          <p>
            <strong className="text-maroon-950">Local Engagement:</strong>{" "}
            Real success comes from both virtual and in-person events,
            workshops, and training sessions that help build skills and
            foster connections within our community.
          </p>
          <p>
            We encourage knowledge-sharing and innovation within these
            chapters across our regions.
          </p>
        </div>
        <a href={siteConfig.joinFormUrl} className="btn-gold mt-8 inline-flex">
          Join Community
        </a>
      </section>

      <CommunityNiche />
      <StatsRow />
    </div>
  );
}
