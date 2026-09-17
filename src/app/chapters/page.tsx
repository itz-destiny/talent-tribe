import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ChaptersGrid from "@/components/ChaptersGrid";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `Chapters · ${siteConfig.name}`,
  description:
    "Talent Tribe chapters spreading across Oyo State — creating local hubs where builders connect.",
};

export default function ChaptersPage() {
  return (
    <div>
      <PageHeader
        eyebrow="OUR CHAPTERS"
        title="Present Everywhere"
        description="Talent Tribe chapters spreading across Oyo State — creating local hubs where builders connect."
      />
      <ChaptersGrid showHeading={false} />
    </div>
  );
}
