import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: siteConfig.name };
  return {
    title: `${post.title} · ${siteConfig.name}`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article>
      <div className="relative h-[360px] w-full">
        <Image src={post.image} alt={post.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-maroon-950/60" />
        <div className="relative mx-auto flex h-full max-w-3xl flex-col justify-end px-4 pb-10 sm:px-6 lg:px-8">
          <p className="text-xs font-heading font-bold uppercase tracking-widest text-gold-500">
            {post.category}
          </p>
          <h1 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-2 text-white/80">{post.subtitle}</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-sm font-heading font-semibold text-maroon-900/60">
          {post.author} · {post.date} · {post.readTime}
        </p>
        <div className="prose prose-maroon mt-6 max-w-none text-maroon-800/90">
          <p>{post.excerpt}</p>
        </div>
        <Link
          href="/blog"
          className="mt-10 inline-block font-heading text-sm font-bold text-gold-600 hover:text-gold-700"
        >
          ← Back to Blog
        </Link>
      </div>
    </article>
  );
}
