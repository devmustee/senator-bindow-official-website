"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
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
  const closeRef = useRef<HTMLButtonElement>(null);
  const touch = useRef<{ x: number; y: number } | null>(null);
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
  const isOpen = index !== null;
  useEffect(() => {
    if (!isOpen) return;
    const opener = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = "";
      opener?.focus();
    };
  }, [isOpen]);
  const onTouchStart = (e: React.TouchEvent) => (touch.current = { x: e.touches[0].clientX, y: e.touches[0].clientY });
  const onTouchEnd = (e: React.TouchEvent) => {
    if (!touch.current) return;
    const dx = e.changedTouches[0].clientX - touch.current.x;
    const dy = e.changedTouches[0].clientY - touch.current.y;
    touch.current = null;
    if (dy > 80 && Math.abs(dy) > Math.abs(dx)) close();
    else if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
  };

  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:-mx-6 sm:px-6 lg:mx-0 lg:flex-wrap lg:px-0" role="group" aria-label="Filter by collection">
          {["All", ...categories].map((c) => (
            <button key={c} type="button" aria-pressed={cat === c} onClick={() => setCat(c)} className={`chip ${cat === c ? "chip-on" : "chip-off"}`}>
              {c === "All" ? `All (${photos.length})` : `${c} (${counts[c]})`}
            </button>
          ))}
        </div>
        {years.length > 0 && (
          <label className="flex items-center gap-3 text-sm">
            <span className="eyebrow">Year</span>
            <select value={year} onChange={(e) => setYear(e.target.value)} className="min-h-[44px] rounded-md border border-rule bg-white px-3">
              <option>All</option>
              {years.map((y) => <option key={y}>{y}</option>)}
            </select>
          </label>
        )}
      </div>

      {shown.length === 0 ? (
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {(cat === "All" ? categories : [cat]).map((c) => (
            <div key={c} className="flex aspect-[4/3] flex-col justify-between border border-dashed border-gold/50 bg-white p-6">
              <span className="font-serif text-4xl text-gold/40">❖</span>
              <div>
                <p className="font-serif text-xl text-navy">{c}</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-charcoal/70">Awaiting licensed photographs</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <ul className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {shown.map((p, i) => (
            <li key={p.src}>
              <button onClick={() => setIndex(i)} className="group block w-full text-left">
                <span className="relative block aspect-square overflow-hidden rounded-md bg-navy-900 sm:aspect-[4/3]">
                  <Image src={p.src} alt={p.alt} fill unoptimized={p.src.endsWith(".svg")} sizes="(min-width:1024px) 400px, 50vw" className={`${p.noDerivatives ? "object-contain" : "object-cover"} transition-transform duration-500 group-hover:scale-[1.02]`} />
                </span>
                <p className="mt-2 line-clamp-2 text-sm leading-snug text-charcoal/85 sm:line-clamp-none">{p.caption}</p>
                <p className="mt-0.5 hidden text-xs text-charcoal/65 sm:block">{[p.location, p.year, `© ${p.credit}`].filter(Boolean).join(" · ")}</p>
              </button>
            </li>
          ))}
        </ul>
      )}

      {index !== null && shown[index] && (
        <div role="dialog" aria-modal="true" aria-label={shown[index].caption} className="fixed inset-0 z-[60] flex flex-col bg-navy-900/95 p-4 pb-[max(1rem,env(safe-area-inset-bottom))] text-white" onClick={close} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          <div className="flex justify-end">
            <button ref={closeRef} onClick={close} className="min-h-[44px] px-3 text-sm uppercase tracking-wider text-white/80 hover:text-gold">Close ✕</button>
          </div>
          <figure className="mx-auto flex min-h-0 w-full max-w-5xl flex-1 flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <div className="relative min-h-0 w-full flex-1">
              <Image src={shown[index].src} alt={shown[index].alt} fill sizes="100vw" unoptimized={shown[index].src.endsWith(".svg")} className="object-contain" />
            </div>
            <figcaption className="mt-4 max-w-2xl text-center text-sm text-white/80">
              {shown[index].caption}
              <span className="mt-1 block text-xs text-white/65">
                {shown[index].sourceUrl ? <a href={shown[index].sourceUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-gold">{shown[index].credit}</a> : shown[index].credit} · {shown[index].licence}
                {shown[index].noDerivatives && " · shown unaltered"}
              </span>
            </figcaption>
          </figure>
          <div className="flex justify-center gap-3 pt-4">
            <button onClick={(e) => { e.stopPropagation(); step(-1); }} className="btn-ghost-light">← Previous</button>
            <button onClick={(e) => { e.stopPropagation(); step(1); }} className="btn-ghost-light">Next →</button>
          </div>
        </div>
      )}
    </div>
  );
}
