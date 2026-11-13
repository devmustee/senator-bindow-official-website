"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import type { Photo } from "@/content/content";

export function Gallery({ photos, categories }: { photos: Photo[]; categories: string[] }) {
  const [cat, setCat] = useState<string>("All");
  const [year, setYear] = useState<string>("All");
  const [index, setIndex] = useState<number | null>(null);

  const years = useMemo(() => Array.from(new Set(photos.map((p) => p.year).filter(Boolean))).sort() as number[], [photos]);
  const shown = useMemo(
    () => photos.filter((p) => (cat === "All" || p.category === cat) && (year === "All" || String(p.year) === year)),
    [photos, cat, year],
  );
  const counts = useMemo(() => Object.fromEntries(categories.map((c) => [c, photos.filter((p) => p.category === c).length])), [photos, categories]);

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback((d: number) => setIndex((i) => (i === null ? i : (i + d + shown.length) % shown.length)), [shown.length]);
  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, close, step]);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <label className="grid gap-1 text-sm">
          <span className="eyebrow">Collection</span>
          <select value={cat} onChange={(e) => setCat(e.target.value)} className="rounded-sm border border-rule bg-white px-3 py-2.5 sm:min-w-[320px]">
            <option>All</option>
            {categories.map((c) => <option key={c} value={c}>{c} ({counts[c]})</option>)}
          </select>
        </label>
        <label className="grid gap-1 text-sm">
          <span className="eyebrow">Year</span>
          <select value={year} onChange={(e) => setYear(e.target.value)} className="rounded-sm border border-rule bg-white px-3 py-2.5" disabled={years.length === 0}>
            <option>All</option>
            {years.map((y) => <option key={y}>{y}</option>)}
          </select>
        </label>
      </div>

      {shown.length === 0 ? (
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {(cat === "All" ? categories : [cat]).map((c) => (
            <div key={c} className="flex aspect-[4/3] flex-col justify-between border border-dashed border-gold/50 bg-white p-6">
              <span className="font-serif text-4xl text-gold/40">❖</span>
              <div>
                <p className="font-serif text-xl text-navy">{c}</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-charcoal/50">Awaiting licensed photographs</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <ul className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {shown.map((p, i) => (
            <li key={p.src} className="mb-4 break-inside-avoid">
              <button onClick={() => setIndex(i)} className="group block w-full text-left">
                <Image src={p.src} alt={p.alt} width={800} height={600} unoptimized={p.src.endsWith(".svg")} sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="h-auto w-full bg-navy-900 transition-opacity group-hover:opacity-90" loading="lazy" />
                <p className="mt-2 text-sm text-charcoal/80">{p.caption}</p>
                <p className="text-xs text-charcoal/50">{[p.location, p.year, `© ${p.credit}`].filter(Boolean).join(" · ")}</p>
              </button>
            </li>
          ))}
        </ul>
      )}

      {index !== null && shown[index] && (
        <div role="dialog" aria-modal="true" aria-label={shown[index].caption} className="fixed inset-0 z-[60] flex flex-col bg-navy-900/95 p-4 text-white" onClick={close}>
          <div className="flex justify-end">
            <button onClick={close} className="px-3 py-2 text-sm uppercase tracking-wider text-white/70 hover:text-gold">Close ✕</button>
          </div>
          <figure className="mx-auto flex min-h-0 w-full max-w-5xl flex-1 flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <div className="relative min-h-0 w-full flex-1">
              <Image src={shown[index].src} alt={shown[index].alt} fill sizes="100vw" unoptimized={shown[index].src.endsWith(".svg")} className="object-contain" />
            </div>
            <figcaption className="mt-4 max-w-2xl text-center text-sm text-white/80">
              {shown[index].caption}
              <span className="mt-1 block text-xs text-white/50">
                {shown[index].sourceUrl ? <a href={shown[index].sourceUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-gold">{shown[index].credit}</a> : shown[index].credit} · {shown[index].licence}
                {shown[index].noDerivatives && " · shown unaltered"}
              </span>
            </figcaption>
          </figure>
          <div className="flex justify-center gap-4 pt-4">
            <button onClick={(e) => { e.stopPropagation(); step(-1); }} className="btn-ghost-light">← Previous</button>
            <button onClick={(e) => { e.stopPropagation(); step(1); }} className="btn-ghost-light">Next →</button>
          </div>
        </div>
      )}
    </div>
  );
}
