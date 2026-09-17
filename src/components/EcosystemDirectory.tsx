"use client";

import { useState } from "react";
import { ecosystemEntries, startupCategories } from "@/lib/site";

type Category = (typeof startupCategories)[number]["key"] | "all";

export default function EcosystemDirectory() {
  const [active, setActive] = useState<Category>("all");

  const filtered =
    active === "all"
      ? ecosystemEntries
      : ecosystemEntries.filter((e) => e.category === active);

  const grouped = startupCategories.map((cat) => ({
    ...cat,
    entries: filtered.filter((e) => e.category === cat.key),
  }));

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        <button
          onClick={() => setActive("all")}
          className={`rounded-full px-5 py-2 text-sm font-heading font-semibold transition ${
            active === "all"
              ? "bg-maroon-950 text-white"
              : "bg-gold-50 text-maroon-900 hover:bg-gold-100"
          }`}
        >
          All
        </button>
        {startupCategories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActive(cat.key)}
            className={`rounded-full px-5 py-2 text-sm font-heading font-semibold transition ${
              active === cat.key
                ? "bg-maroon-950 text-white"
                : "bg-gold-50 text-maroon-900 hover:bg-gold-100"
            }`}
          >
            {cat.emoji} {cat.label}
          </button>
        ))}
      </div>

      <div className="mt-12 space-y-14">
        {grouped
          .filter((g) => g.entries.length > 0)
          .map((group) => (
            <div key={group.key}>
              <div className="flex items-center gap-2">
                <span className="text-xl">{group.emoji}</span>
                <h2 className="font-display text-2xl font-bold text-maroon-950">
                  {group.label}
                </h2>
              </div>
              <p className="mt-1 text-sm text-maroon-700/70">
                {group.key === "startups" &&
                  "Innovative companies building the future of tech in Ibadan"}
                {group.key === "workspaces" &&
                  "Collaborative spaces for teams to work, create, and grow"}
                {group.key === "communities" &&
                  "Groups of passionate tech professionals and enthusiasts"}
              </p>

              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
                {group.entries.map((entry) => (
                  <div
                    key={entry.name}
                    className="rounded-2xl border border-maroon-900/10 bg-white p-6 shadow-sm"
                  >
                    <p className="text-xs font-heading font-semibold uppercase tracking-widest text-gold-600">
                      {group.emoji} {group.label}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-bold text-maroon-950">
                      {entry.name}
                    </h3>
                    <p className="mt-2 text-sm text-maroon-800/80">
                      {entry.description}
                    </p>

                    <p className="mt-4 text-xs font-heading font-bold uppercase tracking-widest text-maroon-900/60">
                      Focus Areas:
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {entry.focus.map((f) => (
                        <span
                          key={f}
                          className="rounded-full bg-gold-50 px-3 py-1 text-xs font-medium text-maroon-800"
                        >
                          {f}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 space-y-1 text-sm text-maroon-800/80">
                      {"members" in entry && entry.members && (
                        <p>👥 {entry.members}</p>
                      )}
                      <p>📍 {entry.location}</p>
                      <p>
                        🌐{" "}
                        <a
                          href={entry.website}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="text-gold-600 hover:underline"
                        >
                          Visit Website
                        </a>
                      </p>
                      <p>✉️ {entry.email}</p>
                      <p>📞 {entry.phone}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
