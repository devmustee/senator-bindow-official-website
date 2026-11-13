"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { footerNav } from "@/lib/site";

/**
 * Full-height navigation sheet for phones and tablets.
 * Closes on Escape or link tap, keeps keyboard focus inside while open, and hands focus back to the toggle.
 */
export function MobileMenu({ open, onClose, pathname, toggleRef }: { open: boolean; onClose: () => void; pathname: string; toggleRef: React.RefObject<HTMLButtonElement | null> }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;
    const sheet = ref.current;
    const toggle = toggleRef.current;
    document.body.style.overflow = "hidden";
    sheet?.querySelector<HTMLElement>("a")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== "Tab" || !sheet) return;
      const items = [toggle, ...sheet.querySelectorAll<HTMLElement>("a")].filter(Boolean) as HTMLElement[];
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      toggle?.focus();
    };
  }, [open, onClose, toggleRef]);

  if (!open) return null;
  return (
    <nav ref={ref} id="mobile-nav" aria-label="Site" className="h-[calc(100dvh-3.5rem)] overflow-y-auto overscroll-contain border-t border-white/10 bg-navy-900 sm:h-[calc(100dvh-4rem)] lg:hidden">
      <div className="container grid gap-8 py-6 pb-[max(2rem,env(safe-area-inset-bottom))] sm:grid-cols-3 sm:gap-6">
        {footerNav.map((g) => (
          <div key={g.heading}>
            <p className="eyebrow-light">{g.heading}</p>
            <ul className="mt-2 divide-y divide-white/10">
              {g.links.map((l) => {
                const active = pathname === l.href;
                return (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      onClick={onClose}
                      aria-current={active ? "page" : undefined}
                      className={`flex min-h-[48px] items-center justify-between font-serif text-lg ${active ? "text-gold" : "text-white/90 hover:text-gold"}`}
                    >
                      {l.label}
                      <span aria-hidden className={active ? "text-gold" : "text-white/30"}>→</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
}
