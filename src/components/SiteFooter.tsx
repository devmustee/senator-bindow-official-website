import Image from "next/image";
import Link from "next/link";
import { footerNav, site } from "@/lib/site";
import { contact } from "@/content/content";

export function SiteFooter({ logo }: { logo?: string | null }) {
  return (
    <footer className="bg-navy-900 text-white/70">
      <div className="h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      <div className="container grid gap-12 py-16 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          {logo ? (
            <Image src={logo} alt={`${site.name}: Former Governor, Adamawa State and Former Senator, Adamawa North`} width={220} height={220} className="h-44 w-44 rounded-sm border border-gold/40" />
          ) : (
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center border border-gold/70 font-serif text-gold">MJB</span>
              <span className="font-serif text-xl text-white">{site.name}</span>
            </div>
          )}
          <p className="mt-5 max-w-sm text-sm leading-relaxed">
            A documented record of his life and public service. Every factual statement on this site links to its source and carries a verification level.
          </p>
          <Link href="/sources" className="mt-5 inline-block text-sm font-semibold text-gold hover:text-gold-300">
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
        {footerNav.map((g) => (
          <nav key={g.heading} aria-label={g.heading}>
            <p className="eyebrow-light">{g.heading}</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {g.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-gold">{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="container flex flex-col gap-2 py-6 text-xs text-white/45 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Third-party articles belong to their publishers and are linked, not reproduced.</p>
        </div>
      </div>
    </footer>
  );
}
