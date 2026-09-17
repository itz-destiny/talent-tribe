import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import EcosystemDirectory from "@/components/EcosystemDirectory";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `Ecosystem · ${siteConfig.name}`,
  description:
    "Discover startups, workspaces, and communities shaping Ibadan's tech future. Connect, collaborate, and grow with us.",
};

export default function EcosystemPage() {
  return (
    <div>
      <PageHeader
        eyebrow="TECH ECOSYSTEM"
        title="Thriving Tech Ecosystem in Ibadan"
        description="Discover startups, workspaces, and communities shaping Ibadan's tech future. Connect, collaborate, and grow with us."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <EcosystemDirectory />
      </section>
    </div>
  );
}
