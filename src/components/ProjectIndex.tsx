"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { type Verification, verificationLabel } from "@/content/content";

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
  image?: { src: string; alt: string; contain?: boolean };
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
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 md:mx-0 md:flex-wrap md:px-0">
          {[{ slug: "all", title: "All sectors" }, ...sectors].map((s) => (
            <button
              key={s.slug}
              onClick={() => setSector(s.slug)}
              aria-pressed={sector === s.slug}
              className={`shrink-0 rounded-full border px-4 py-2 text-xs font-semibold tracking-wide transition-colors ${sector === s.slug ? "border-navy bg-navy text-white" : "border-rule bg-white text-charcoal/70 hover:border-gold"}`}
            >
              {s.title}
            </button>
          ))}
        </div>
        <label className="grid gap-1 text-sm md:w-72">
          <span className="eyebrow">Search projects</span>
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="e.g. Mubi, hospital, tractors" className="rounded-sm border border-rule bg-white px-3 py-2.5" />
        </label>
      </div>
      <p className="mt-6 text-sm text-charcoal/60">{shown.length} of {rows.length} projects</p>
      <ul className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {shown.map((r) => (
          <li key={r.slug}>
            <Link href={`/governorship#${r.slug}`} className="group flex h-full flex-col overflow-hidden rounded-sm border border-rule bg-white transition-shadow hover:shadow-[0_16px_40px_-20px_rgba(16,31,54,.35)]">
              <div className="relative aspect-[16/9] bg-navy">
                {r.image ? (
                  <Image src={r.image.src} alt={r.image.alt} fill sizes="(min-width:1280px) 33vw, (min-width:640px) 50vw, 100vw" className={`${r.image.contain ? "object-contain" : "object-cover"} transition-transform duration-500 group-hover:scale-[1.03]`} />
                ) : (
                  <div className="flex h-full items-center justify-center font-serif text-5xl text-gold/40">❖</div>
                )}
                <span className="absolute left-3 top-3 rounded-full bg-navy/85 px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-wider text-gold">{r.sector}</span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="eyebrow">{r.date}</p>
                <h3 className="mt-2 font-serif text-xl leading-snug text-navy">{r.title}</h3>
                {r.location && <p className="mt-1 text-xs text-charcoal/55">{r.location}</p>}
                <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-charcoal/75">{r.summary}</p>
                <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-rule pt-3 text-[0.68rem] uppercase tracking-wider">
                  <span className="text-charcoal/55">{r.attribution}</span>
                  <span className="font-semibold text-gold-600">{verificationLabel[r.verification]}</span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
