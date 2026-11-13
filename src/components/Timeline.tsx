"use client";

import { useMemo, useState } from "react";
import { type Era, eraLabel, timeline } from "@/content/content";
import { Cite, VerificationBadge } from "./ui";

const eras = Object.keys(eraLabel) as Era[];

export function Timeline({ compact = false }: { compact?: boolean }) {
  const [era, setEra] = useState<Era | "all">("all");
  const items = useMemo(() => {
    const list = era === "all" ? timeline : timeline.filter((t) => t.era === era);
    return compact ? list.filter((t) => t.milestone) : list;
  }, [era, compact]);

  return (
    <div>
      {!compact && (
        <div role="tablist" aria-label="Filter by period" className="no-scrollbar -mx-4 mb-10 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0 lg:mb-12">
          {(["all", ...eras] as const).map((e) => (
            <button
              key={e}
              role="tab"
              aria-selected={era === e}
              onClick={() => setEra(e)}
              className={`chip uppercase tracking-wider ${era === e ? "chip-on" : "chip-off"}`}
            >
              {e === "all" ? "All periods" : eraLabel[e]}
            </button>
          ))}
        </div>
      )}

      <ol className="relative">
        {/* spine: left on mobile, centred on desktop */}
        <span aria-hidden className="absolute bottom-0 left-[7px] top-2 w-px bg-gradient-to-b from-gold via-gold/40 to-transparent lg:left-1/2" />
        {items.map((t, i) => {
          const right = i % 2 === 1;
          return (
            <li key={`${t.date}-${t.title}`} className="relative pb-10 pl-8 sm:pl-10 lg:grid lg:pb-12 lg:grid-cols-2 lg:gap-16 lg:pl-0">
              <span
                aria-hidden
                className={`absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 lg:left-1/2 lg:-translate-x-1/2 ${
                  t.milestone ? "border-gold bg-gold" : "border-gold bg-ivory"
                }`}
              />
              <div className={`${right ? "lg:col-start-2" : "lg:text-right"}`}>
                <p className="eyebrow">{t.date}</p>
                <h3 className="mt-1.5 font-serif text-xl leading-snug sm:text-2xl">{t.title}</h3>
                <p className={`mt-1 text-xs uppercase tracking-wider text-charcoal/65`}>{eraLabel[t.era]}</p>
              </div>
              <div className={`mt-3 lg:mt-0 ${compact ? "hidden sm:block" : ""} ${right ? "lg:col-start-1 lg:row-start-1 lg:text-right" : ""}`}>
                <div className="leading-relaxed text-charcoal/80">
                  {t.fact.text}
                  <Cite ids={t.fact.sources} />
                </div>
                {t.fact.verification !== "verified" && (
                  <div className="mt-2">
                    <VerificationBadge level={t.fact.verification} />
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
