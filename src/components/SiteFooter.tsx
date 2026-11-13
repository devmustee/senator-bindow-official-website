import Image from "next/image";
import Link from "next/link";
import { footerNav, site } from "@/lib/site";
import { contact } from "@/content/content";

export function SiteFooter({ logo }: { logo?: string | null }) {
  return (
    <footer className="bg-navy-900 text-white/70">
      <div className="h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      <div className="container grid gap-10 py-12 md:grid-cols-[1.4fr_repeat(3,1fr)] md:gap-12 md:py-16">
        <div>
          {logo ? (
            <Image src={logo} alt={`${site.name}: Former Governor, Adamawa State and Former Senator, Adamawa North`} width={220} height={220} className="h-16 w-16 rounded-md border border-gold/40 md:h-44 md:w-44" />
          ) : (
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center border border-gold/70 font-serif text-gold">MJB</span>
              <span className="font-serif text-xl text-white">{site.name}</span>
            </div>
          )}
          <p className="mt-5 max-w-sm text-sm leading-relaxed">
            A documented record of his life and public service. Every factual statement on this site links to its source and carries a verification level.
          </p>
          <Link href="/sources" className="mt-3 inline-flex min-h-[44px] items-center text-sm font-semibold text-gold hover:text-gold-300">
            How we verify →
          </Link>
          {contact.length > 0 && (
            <ul className="mt-6 space-y-1 text-sm">
              {contact.map((c) => (
                <li key={c.label}>
                  <a href={c.href} className="hover:text-gold">{c.label}: {c.value}</a>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="divide-y divide-white/10 border-y border-white/10 md:hidden">
          {footerNav.map((g) => (
            <details key={g.heading} className="group">
              <summary className="flex min-h-[52px] items-center justify-between">
                <span className="eyebrow-light">{g.heading}</span>
                <span aria-hidden className="text-gold transition-transform group-open:rotate-45">+</span>
              </summary>
              <ul className="pb-3">
                {g.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="flex min-h-[44px] items-center text-[0.95rem] text-white/80 hover:text-gold">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>
        {footerNav.map((g) => (
          <nav key={g.heading} aria-label={g.heading} className="hidden md:block">
            <p className="eyebrow-light">{g.heading}</p>
            <ul className="mt-4 space-y-1 text-sm">
              {g.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="inline-flex min-h-[32px] items-center hover:text-gold">{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="container flex flex-col gap-2 py-6 text-xs text-white/60 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Third-party articles belong to their publishers and are linked, not reproduced.</p>
        </div>
      </div>
    </footer>
  );
}
