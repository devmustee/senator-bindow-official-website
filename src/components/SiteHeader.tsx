"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { nav } from "@/lib/site";
import { MobileMenu } from "./MobileMenu";

export function SiteHeader({ logo }: { logo?: string | null }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 border-b transition-colors ${scrolled || open ? "border-white/10 bg-navy-900/95 backdrop-blur" : "border-transparent bg-navy"}`}>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:bg-gold focus:px-3 focus:py-2 focus:text-navy">
        Skip to content
      </a>
      <div className="container flex h-14 items-center justify-between gap-4 sm:h-16 lg:h-20">
        <Link href="/" className="group flex min-h-[44px] items-center gap-3" aria-label="Home">
          {logo ? (
            <Image src={logo} alt="" width={44} height={44} className="h-9 w-9 rounded-full border border-gold/70 object-cover sm:h-10 sm:w-10 lg:h-11 lg:w-11" priority />
          ) : (
            <span className="flex h-9 w-9 items-center justify-center border border-gold/70 font-serif text-sm text-gold">MJB</span>
          )}
          <span className="leading-tight">
            <span className="block font-serif text-[1.05rem] text-white">Jibrilla Bindow</span>
            <span className="hidden text-[0.62rem] uppercase tracking-eyebrow text-gold/80 sm:block">Life · Service · Record</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-6 xl:gap-7">
            {nav.map((n) => {
              const active = pathname === n.href || pathname.startsWith(n.href + "/");
              return (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative inline-flex min-h-[44px] items-center text-[0.82rem] font-medium tracking-wide transition-colors ${active ? "text-gold" : "text-white/80 hover:text-white"}`}
                  >
                    {n.label}
                    {active && <span className="absolute bottom-2 left-0 h-px w-full bg-gold" />}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/biography" className="hidden min-h-[40px] items-center rounded-md border border-gold/60 px-4 text-xs font-semibold uppercase tracking-wider text-gold hover:bg-gold hover:text-navy xl:inline-flex">
            Read the Biography
          </Link>
          <button
            ref={toggleRef}
            type="button"
            className="-mr-2 flex h-11 w-11 items-center justify-center text-white lg:hidden"
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

      <MobileMenu open={open} onClose={close} pathname={pathname} toggleRef={toggleRef} />
    </header>
  );
}
