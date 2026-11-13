"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, footerNav } from "@/lib/site";

export function SiteHeader({ logo }: { logo?: string | null }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className={`sticky top-0 z-50 border-b transition-colors ${scrolled || open ? "border-white/10 bg-navy-900/95 backdrop-blur" : "border-transparent bg-navy"}`}>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:bg-gold focus:px-3 focus:py-2 focus:text-navy">
        Skip to content
      </a>
      <div className="container flex h-16 items-center justify-between gap-6 lg:h-20">
        <Link href="/" className="group flex items-center gap-3" aria-label="Home">
          {logo ? (
            <Image src={logo} alt="" width={44} height={44} className="h-10 w-10 rounded-full border border-gold/70 object-cover lg:h-11 lg:w-11" priority />
          ) : (
            <span className="flex h-9 w-9 items-center justify-center border border-gold/70 font-serif text-sm text-gold">MJB</span>
          )}
          <span className="leading-tight">
            <span className="block font-serif text-[1.05rem] text-white">Jibrilla Bindow</span>
            <span className="hidden text-[0.62rem] uppercase tracking-eyebrow text-gold/80 sm:block">Life · Service · Record</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {nav.map((n) => {
              const active = pathname === n.href || pathname.startsWith(n.href + "/");
              return (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative py-2 text-[0.82rem] font-medium tracking-wide transition-colors ${active ? "text-gold" : "text-white/80 hover:text-white"}`}
                  >
                    {n.label}
                    {active && <span className="absolute -bottom-0.5 left-0 h-px w-full bg-gold" />}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/biography" className="hidden rounded-sm border border-gold/60 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-gold hover:bg-gold hover:text-navy xl:inline-block">
            Read the Biography
          </Link>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center text-white lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <span className="relative block h-3 w-6">
              <span className={`absolute left-0 h-px w-6 bg-current transition ${open ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-1.5 h-px w-6 bg-current transition ${open ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 h-px w-6 bg-current transition ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-white/10 bg-navy-900 lg:hidden">
          <div className="container grid gap-8 py-8">
            {footerNav.map((g) => (
              <div key={g.heading}>
                <p className="eyebrow-light">{g.heading}</p>
                <ul className="mt-3 grid gap-1">
                  {g.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="block py-2 font-serif text-xl text-white/90 hover:text-gold">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
