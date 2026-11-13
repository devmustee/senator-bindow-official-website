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
        <div role="tablist" aria-label="Filter by period" className="-mx-4 mb-12 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
          {(["all", ...eras] as const).map((e) => (
            <button
              key={e}
              role="tab"
              aria-selected={era === e}
              onClick={() => setEra(e)}
              className={`shrink-0 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
                era === e ? "border-navy bg-navy text-white" : "border-rule bg-white text-charcoal/70 hover:border-gold"
              }`}
            >
              {e === "all" ? "All periods" : eraLabel[e]}
            </button>
          ))}
        </div>
      )}

      <ol className="relative">
        {/* spine: left on mobile, centred on desktop */}
        <span aria-hidden className="absolute bottom-0 left-[7px] top-2 w-px bg-gradient-to-b from-gold via-gold/40 to-transparent md:left-1/2" />
        {items.map((t, i) => {
          const right = i % 2 === 1;
          return (
            <li key={`${t.date}-${t.title}`} className="relative pb-12 pl-10 md:grid md:grid-cols-2 md:gap-16 md:pl-0">
              <span
                aria-hidden
                className={`absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 md:left-1/2 md:-translate-x-1/2 ${
                  t.milestone ? "border-gold bg-gold" : "border-gold bg-ivory"
                }`}
              />
              <div className={`${right ? "md:col-start-2" : "md:text-right"}`}>
                <p className="eyebrow">{t.date}</p>
                <h3 className="mt-2 font-serif text-xl sm:text-2xl">{t.title}</h3>
                <p className={`mt-1 text-xs uppercase tracking-wider text-charcoal/50`}>{eraLabel[t.era]}</p>
              </div>
              <div className={`mt-3 md:mt-0 ${right ? "md:col-start-1 md:row-start-1 md:text-right" : ""}`}>
                <div className="text-[0.97rem] leading-relaxed text-charcoal/80">
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
