"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { Verification } from "@/content/content";

export interface ProjectRow {
  slug: string;
  title: string;
  sector: string;
  sectorSlug: string;
  location?: string;
  date: string;
  attribution: string;
  verification: Verification;
  status: string;
  summary: string;
  image?: { src: string; alt: string; contain?: boolean; context?: boolean };
}

export function ProjectIndex({ rows, sectors }: { rows: ProjectRow[]; sectors: { slug: string; title: string }[] }) {
  const [sector, setSector] = useState("all");
  const [q, setQ] = useState("");
  const shown = useMemo(() => {
    const t = q.trim().toLowerCase();
    return rows.filter(
      (r) => (sector === "all" || r.sectorSlug === sector) && (!t || [r.title, r.location, r.summary].join(" ").toLowerCase().includes(t)),
    );
  }, [rows, sector, q]);

  return (
    <div>
      <label className="grid gap-1.5">
        <span className="eyebrow">Search projects</span>
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="e.g. Mubi, hospital, tractors"
          className="min-h-[48px] w-full rounded-md border border-rule bg-white px-4 text-base md:max-w-md"
        />
      </label>
      <div className="no-scrollbar -mx-4 mt-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:-mx-6 sm:px-6 md:mx-0 md:flex-wrap md:px-0" role="group" aria-label="Filter by sector">
        {[{ slug: "all", title: "All sectors" }, ...sectors].map((s) => (
          <button key={s.slug} type="button" onClick={() => setSector(s.slug)} aria-pressed={sector === s.slug} className={`chip ${sector === s.slug ? "chip-on" : "chip-off"}`}>
            {s.title}
          </button>
        ))}
      </div>
      <p className="mt-6 text-sm text-charcoal/70" aria-live="polite">
        {shown.length} of {rows.length} projects
      </p>
      <ul className="mt-4 grid gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
        {shown.map((r) => (
          <li key={r.slug}>
            <Link href={`/governorship#${r.slug}`} className="card-link group flex h-full flex-col overflow-hidden !p-0">
              {r.image && (
                <div className="relative aspect-[16/9] bg-navy">
                  <Image src={r.image.src} alt={r.image.alt} fill sizes="(min-width:1280px) 380px, (min-width:640px) 50vw, 100vw" className={r.image.contain ? "object-contain" : "object-cover"} />
                  {r.image.context && <span className="absolute bottom-2 left-2 rounded bg-navy/85 px-2 py-0.5 text-[0.62rem] font-semibold uppercase tracking-wider text-white/90">Location photo</span>}
                </div>
              )}
              <div className="flex flex-1 flex-col p-5">
                <p className="eyebrow">{r.sector}</p>
                <h3 className="h-card mt-3 text-navy">{r.title}</h3>
                <p className="mt-1 text-xs text-charcoal/70">{[r.location, r.date].filter(Boolean).join(" · ")}</p>
                <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-charcoal/80">{r.summary}</p>
                <p className="mt-3 flex-1 border-l-2 border-gold/60 pl-3 text-xs leading-relaxed text-charcoal/75">{r.status}</p>
                <span className="mt-4 inline-flex min-h-[44px] items-center text-sm font-semibold text-navy-700 group-hover:text-gold-700">Full record →</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
