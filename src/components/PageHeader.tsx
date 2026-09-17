export default function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="bg-maroon-950 py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        {eyebrow && (
          <div className="eyebrow justify-center text-gold-500">
            <span className="eyebrow-rule" />
            {eyebrow}
          </div>
        )}
        <h1 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
