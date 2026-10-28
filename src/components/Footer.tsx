import Link from "next/link";
import Image from "next/image";
import NewsletterForm from "@/components/NewsletterForm";
import { footerNav } from "@/lib/site";

export default function Footer() {
  return (
    <footer>
      <section className="bg-gold-500">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="mb-2 font-heading text-xs font-bold uppercase tracking-[0.2em] text-white/80">
            The Dispatch
          </p>
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <h2 className="font-display text-4xl font-bold text-white sm:text-5xl">
                Subscribe to
                <br />
                our newsletter
              </h2>
              <p className="mt-4 max-w-md text-sm text-white/90">
                Fresh opportunities, community stories and practical updates
                from the BuildwithRivers community.
              </p>
            </div>
            <NewsletterForm />
          </div>
        </div>
      </section>

      <div
        className="h-10 bg-maroon-950 bg-[length:40px_40px] bg-center"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent 0 20px, rgba(96,165,250,0.35) 20px 20.5px)",
        }}
        aria-hidden
      />

      <section className="bg-maroon-950 text-white/80">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.svg"
                alt="BuildwithRivers"
                width={26}
                height={26}
              />
              <span className="font-display text-[11px] font-bold leading-[1.15] tracking-wider text-white">
                BUILDWITH
                <br />
                <span className="text-sky-300">RIVERS</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm">
              Building the tech community across Rivers State through
              learning, collaboration and shared purpose.
            </p>
            <div className="mt-4 flex gap-3">
              {["facebook", "instagram", "linkedin", "slack", "twitter"].map(
                (name) => (
                  <span
                    key={name}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-xs uppercase"
                    aria-hidden
                  >
                    {name[0]}
                  </span>
                ),
              )}
            </div>
          </div>

          <FooterColumn title="Navigate" items={footerNav.navigate} />
          <FooterColumn title="Programs" items={footerNav.programs} />
          <FooterColumn title="Connect" items={footerNav.connect} />
        </div>

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 border-t border-white/10 px-4 py-6 text-xs text-white/60 sm:flex-row sm:px-6 lg:px-8">
          <p>© 2026 BuildwithRivers. All rights reserved.</p>
          <p className="font-heading uppercase tracking-[0.2em]">
            Learn · Grow · Connect
          </p>
        </div>
      </section>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="mb-4 font-heading text-xs font-bold uppercase tracking-[0.2em] text-white">
        {title}
      </p>
      <ul className="space-y-3 text-sm">
        {items.map((item) => (
          <li key={item.label}>
            <Link href={item.href} className="hover:text-sky-300">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
