import Link from "next/link";
import { chapters } from "@/lib/site";

export default function ChaptersGrid({
  showHeading = true,
}: {
  showHeading?: boolean;
}) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {showHeading && (
          <>
            <div className="eyebrow">
              <span className="eyebrow-rule" />
              OUR CHAPTERS
            </div>
            <h2 className="section-heading mt-3">Present Everywhere</h2>
            <p className="mt-4 max-w-xl text-maroon-700/80">
              Talent Tribe chapters spreading across Oyo State — creating
              local hubs where builders connect.
            </p>
          </>
        )}

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {chapters.map((chapter) => (
            <div
              key={chapter.name}
              className={`flex items-center justify-between rounded-lg border-l-4 bg-gold-50 px-6 py-5 ${
                chapter.active ? "border-gold-500" : "border-maroon-900/20"
              }`}
            >
              <div>
                <p className="text-xs font-heading font-bold uppercase tracking-widest text-gold-600">
                  {chapter.status}
                </p>
                <p className="mt-1 font-display text-2xl font-bold text-maroon-950">
                  {chapter.name}
                </p>
                <p
                  className={`mt-1 text-sm font-semibold ${
                    chapter.active ? "text-maroon-800" : "text-gold-600"
                  }`}
                >
                  {chapter.members}
                </p>
              </div>
              <Link
                href="/chapters"
                aria-label={`View ${chapter.name} chapter`}
                className="text-maroon-900"
              >
                →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
