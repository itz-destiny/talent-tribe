import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import BecomeMemberForm from "@/components/BecomeMemberForm";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `Become A Member · ${siteConfig.name}`,
  description:
    "Join our community and unlock exclusive benefits designed for your success.",
};

const benefits = [
  {
    emoji: "📊",
    title: "Personalized Dashboard",
    description: "Login details sent via email for exclusive member access",
  },
  {
    emoji: "🏢",
    title: "Discounted Hub Access",
    description: "Access to hubs/workspaces at special member rates",
  },
  {
    emoji: "💼",
    title: "Job Opportunities",
    description: "First-hand access to exclusive job opportunities",
  },
  {
    emoji: "📚",
    title: "Resources & Events",
    description: "Premium access to resources, webinars, and community events",
  },
];

export default function BecomeMemberPage() {
  return (
    <div>
      <PageHeader
        title="Membership Terms & Benefits"
        description="Join our community and unlock exclusive benefits designed for your success"
      />

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gold-500 p-8 text-center">
          <p className="font-heading text-xs font-bold uppercase tracking-widest text-maroon-900">
            One-Time Membership Fee
          </p>
          <p className="mt-2 font-display text-5xl font-bold text-white">
            ₦2,000
          </p>
          <p className="mt-2 text-sm text-maroon-900">
            Unlock lifetime access to exclusive member benefits
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="flex items-start gap-4 rounded-2xl border border-maroon-900/10 bg-white p-6 shadow-sm"
            >
              <span className="text-2xl">{b.emoji}</span>
              <div>
                <h3 className="font-display text-lg font-bold text-maroon-950">
                  {b.title}
                </h3>
                <p className="mt-1 text-sm text-maroon-800/80">
                  {b.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold text-maroon-950">
              Terms &amp; Conditions
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-maroon-800/80">
              <li>
                • Membership is a one-time payment of ₦2,000 that grants
                lifetime access to Talent Tribe community benefits
              </li>
              <li>
                • Your dashboard login details will be sent to your
                registered email address
              </li>
              <li>
                • All benefits are non-transferable and exclusive to
                registered members
              </li>
              <li>
                • We reserve the right to update community guidelines and
                membership benefits
              </li>
            </ul>

            <h3 className="mt-8 font-display text-xl font-bold text-maroon-950">
              Join Talent Tribe Today
            </h3>
            <p className="mt-3 text-sm text-maroon-800/80">
              Start your journey with ₦2,000 one-time payment and unlock
              exclusive perks that will accelerate your growth in the tech
              ecosystem.
            </p>
            <p className="mt-3 text-sm text-maroon-800/60">
              Questions? Contact our support team at{" "}
              <a
                href={`mailto:${siteConfig.supportEmail}`}
                className="text-gold-600 hover:underline"
              >
                {siteConfig.supportEmail}
              </a>
            </p>
          </div>

          <BecomeMemberForm />
        </div>

        <p className="mt-10 text-center text-sm text-maroon-800/70">
          Already a Community member?{" "}
          <Link href="/login" className="font-semibold text-gold-600 hover:underline">
            Login
          </Link>
        </p>
      </section>
    </div>
  );
}
