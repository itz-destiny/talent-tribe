import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { blogPosts, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `Blog · ${siteConfig.name}`,
  description: "Stories, insights and updates from Oyo's growing tech ecosystem.",
};

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <div>
      <PageHeader
        eyebrow="THE TRIBE DISPATCH"
        title="Stories from the Tribe"
        description="Insights, community stories and practical updates from Oyo's growing tech ecosystem."
      />

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        {featured && (
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid gap-8 overflow-hidden rounded-2xl border border-maroon-900/10 bg-white shadow-sm lg:grid-cols-2"
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover"
              />
              <span className="absolute left-4 top-4 rounded-full bg-maroon-950/80 px-3 py-1 text-[10px] font-heading font-bold uppercase tracking-widest text-gold-500">
                {featured.category}
              </span>
              {featured.featured && (
                <span className="absolute right-4 top-4 rounded-full bg-gold-500 px-3 py-1 text-[10px] font-heading font-bold uppercase tracking-widest text-maroon-950">
                  Featured
                </span>
              )}
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-10">
              <h2 className="font-display text-2xl font-bold text-maroon-950 group-hover:text-gold-600 sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-3 text-maroon-800/80">{featured.subtitle}</p>
              <p className="mt-6 text-sm font-heading font-semibold text-maroon-900/70">
                {featured.author} · {featured.date} · {featured.readTime}
              </p>
              <span className="btn-gold mt-6 inline-flex w-fit">
                Read Story
              </span>
            </div>
          </Link>
        )}

        {rest.length > 0 && (
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="rounded-2xl border border-maroon-900/10 bg-white p-6 shadow-sm hover:shadow-md"
              >
                <p className="text-xs font-heading font-bold uppercase tracking-widest text-gold-600">
                  {post.category}
                </p>
                <h3 className="mt-2 font-display text-xl font-bold text-maroon-950">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-maroon-800/80">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
