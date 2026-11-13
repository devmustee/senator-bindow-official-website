"use client";

import { useEffect, useRef, useState } from "react";

type Sector = { slug: string; title: string; count: number };

/** Highlights the sector currently on screen. */
function useActiveSector(slugs: string[]) {
  const [active, setActive] = useState(slugs[0]);
  useEffect(() => {
    const els = slugs.map((s) => document.getElementById(s)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-130px 0px -55% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [slugs]);
  return active;
}

/** Phones and tablets: a sticky, swipeable chip bar under the site header. */
export function SectorChips({ sectors }: { sectors: Sector[] }) {
  const slugs = useRef(sectors.map((s) => s.slug)).current;
  const active = useActiveSector(slugs);
  const bar = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const chip = bar.current?.querySelector<HTMLElement>(`[data-slug="${active}"]`);
    if (chip && bar.current) bar.current.scrollTo({ left: chip.offsetLeft - 16, behavior: "smooth" });
  }, [active]);
  return (
    <nav aria-label="Sectors" className="sticky top-14 z-30 -mx-4 border-b border-rule bg-ivory/95 backdrop-blur sm:top-16 sm:-mx-6 lg:hidden">
      <div ref={bar} className="no-scrollbar flex gap-2 overflow-x-auto px-4 py-2 sm:px-6">
        {sectors.map((s) => (
          <a
            key={s.slug}
            data-slug={s.slug}
            href={`#${s.slug}`}
            aria-current={active === s.slug ? "location" : undefined}
            className={`chip whitespace-nowrap ${active === s.slug ? "chip-on" : "chip-off"}`}
          >
            {s.title.split(/,| and /)[0]} <span className={`ml-1.5 ${active === s.slug ? "text-gold" : "text-gold-700"}`}>{s.count}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}

/** Desktop: the sticky sidebar list, with the sector on screen highlighted. */
export function SectorList({ sectors }: { sectors: Sector[] }) {
  const slugs = useRef(sectors.map((s) => s.slug)).current;
  const active = useActiveSector(slugs);
  return (
    <ul className="mt-4 grid gap-1 text-sm">
      {sectors.map((s) => (
        <li key={s.slug}>
          <a
            href={`#${s.slug}`}
            aria-current={active === s.slug ? "location" : undefined}
            className={`flex min-h-[40px] items-center justify-between gap-3 rounded-md px-3 ${active === s.slug ? "bg-white font-semibold text-navy shadow-card" : "text-charcoal/75 hover:bg-white hover:text-navy"}`}
          >
            <span>{s.title}</span>
            <span className="text-gold-700">{s.count}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
