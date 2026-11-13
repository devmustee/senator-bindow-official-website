import Image from "next/image";
import Link from "next/link";
import type { SiteImage } from "@/content/images";
import { useId, type ReactNode } from "react";
import { sourceById } from "@/content/sources";
import type { Fact } from "@/content/content";

/**
 * Inline source references: small numbered markers. Clicking one opens a centred card
 * (native popover) naming the source, with a link to it. Each marker is at least 24px tall.
 */
export function Cite({ ids }: { ids: string[] }) {
  const baseId = useId();
  const list = ids.map((id) => sourceById[id]).filter(Boolean);
  if (list.length === 0) return null;
  return (
    <span className="ml-0.5 inline-flex align-super">
      {list.map((s, i) => {
        const pid = `${baseId}-src-${i}`;
        return (
          <span key={s.id}>
            <button
              type="button"
              popoverTarget={pid}
              aria-label={`Source: ${s.outlet}`}
              title={`${s.outlet}${s.date ? ` (${s.date})` : ""}`}
              className="cite-mark"
            >
              {i + 1}
            </button>
            <span
              id={pid}
              popover="auto"
              className="m-auto w-[min(24rem,calc(100vw-2rem))] rounded-lg border border-rule bg-white p-6 text-left text-sm leading-relaxed text-charcoal shadow-raised backdrop:bg-navy-900/50 backdrop:backdrop-blur-sm"
            >
              <span className="eyebrow block">Source</span>
              <span className="mt-2 block font-serif text-xl leading-snug text-navy">{s.outlet}</span>
              <span className="mt-1.5 block text-charcoal/75">{s.title}{s.date ? ` (${s.date})` : ""}</span>
              <span className="mt-5 flex items-center justify-between gap-3">
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="btn-gold">Open source ↗</a>
                <button type="button" popoverTarget={pid} popoverTargetAction="hide" className="btn-ghost">Close</button>
              </span>
            </span>
          </span>
        );
      })}
    </span>
  );
}

export function FactLine({ fact }: { fact: Fact }) {
  return (
    <p className="leading-relaxed">
      {fact.text}
      <Cite ids={fact.sources} />
    </p>
  );
}

export function Figure({ image, className = "", aspect = "aspect-[3/2]", priority }: { image: SiteImage; className?: string; aspect?: string; priority?: boolean }) {
  return (
    <figure className={className}>
      <div className={`relative overflow-hidden bg-navy-900 ${aspect}`}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority={priority}
          sizes="(min-width:1024px) 50vw, 100vw"
          className={image.noDerivatives ? "object-contain" : "object-cover"}
        />
      </div>
      <figcaption className="mt-2 text-xs leading-relaxed text-charcoal/70">
        {image.caption} <ImageCredit image={image} />
      </figcaption>
    </figure>
  );
}

export function ImageCredit({ image, light }: { image: SiteImage; light?: boolean }) {
  return (
    <span className={light ? "text-white/50" : "text-charcoal/70"}>
      Photo:{" "}
      <a href={image.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline decoration-dotted underline-offset-2 hover:text-gold-700">
        {image.creator}
      </a>
      ,{" "}
      <a href={image.licenceUrl} target="_blank" rel="noopener noreferrer" className="underline decoration-dotted underline-offset-2 hover:text-gold-700">
        {image.licence}
      </a>
    </span>
  );
}

export function PageHero({ eyebrow, title, intro, children, image }: { eyebrow: string; title: string; intro?: string; children?: ReactNode; image?: SiteImage }) {
  return (
    <header className="relative overflow-hidden bg-navy text-white">
      {image && (
        <>
          <Image src={image.src} alt="" fill priority sizes="100vw" className={`${image.noDerivatives ? "object-contain" : "object-cover"} opacity-30`} />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/40" />
        </>
      )}
      {!image && <Pattern />}
      <div aria-hidden className="hero-glow" />
      {image && (
        <p className="absolute bottom-2 right-4 z-10 max-w-[80%] text-right text-[0.65rem]">
          <ImageCredit image={image} light />
        </p>
      )}
      <div className="container relative py-10 sm:py-16 lg:py-24">
        <p className="eyebrow-light">{eyebrow}</p>
        <h1 className="h-display mt-3 max-w-4xl text-white sm:mt-5">{title}</h1>
        <span className="gold-rule mt-5 sm:mt-6" />
        {intro && <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:mt-6 sm:text-lg">{intro}</p>}
        {children}
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
    </header>
  );
}

/** Quiet geometric texture used behind navy panels; references Adamawa's highland contours without imagery. */
export function Pattern({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden className={`pointer-events-none absolute inset-0 h-full w-full opacity-[0.07] ${className}`} preserveAspectRatio="xMidYMid slice" viewBox="0 0 800 400">
      {Array.from({ length: 14 }).map((_, i) => (
        <path
          key={i}
          d={`M-20 ${300 - i * 18} C 160 ${230 - i * 16}, 260 ${330 - i * 14}, 420 ${260 - i * 16} S 700 ${200 - i * 12}, 820 ${250 - i * 15}`}
          fill="none"
          stroke="#C7A45B"
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}

export function SectionHeading({ eyebrow, title, intro, center }: { eyebrow: string; title: string; intro?: string; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="h-section mt-3">{title}</h2>
      <span className={`gold-rule mt-4 sm:mt-5 ${center ? "mx-auto" : ""}`} />
      {intro && <p className="mt-4 leading-relaxed text-charcoal/75 sm:mt-5">{intro}</p>}
    </div>
  );
}

export function ResearchNote({ children }: { children: ReactNode }) {
  return (
    <div className="flex gap-4 rounded-md border border-dashed border-gold-600/50 bg-gold-100/40 p-5 text-sm leading-relaxed text-charcoal/80">
      <span aria-hidden className="mt-0.5 font-serif text-xl leading-none text-gold-700">§</span>
      <div>{children}</div>
    </div>
  );
}

export function ArrowLink({ href, children, light }: { href: string; children: ReactNode; light?: boolean }) {
  return (
    <Link href={href} className={`group inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold ${light ? "text-gold" : "text-navy-700"} hover:text-gold-700`}>
      {children}
      <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
    </Link>
  );
}

/** Monogram used where a licensed portrait has not yet been supplied. Never a likeness. */
export function PortraitFrame({ portrait, className = "", desktopOnly = false }: { portrait: null | { src: string; alt: string; credit: string }; className?: string; desktopOnly?: boolean }) {
  if (portrait) {
    return (
      <figure className={className}>
        <div className="relative border border-gold/50 p-2.5 shadow-[0_40px_80px_-30px_rgba(0,0,0,.75)] ring-1 ring-gold/15 ring-offset-8 ring-offset-transparent">
          <div className="relative aspect-square overflow-hidden">
            <Image src={portrait.src} alt={portrait.alt} fill priority sizes={desktopOnly ? "(min-width:1024px) 400px, 1px" : "(min-width:1024px) 400px, 90vw"} className="object-cover object-top" />
          </div>
        </div>
        <figcaption className="mt-3 text-center text-[0.68rem] uppercase tracking-eyebrow text-white/50">{portrait.credit}</figcaption>
      </figure>
    );
  }
  return (
    <div className={`relative flex aspect-[4/5] items-center justify-center overflow-hidden border border-gold/40 bg-navy-900 ${className}`}>
      <Pattern className="!opacity-[0.12]" />
      <div className="absolute inset-3 border border-gold/25" />
      <div className="relative text-center">
        <div className="font-serif text-7xl tracking-wide text-gold sm:text-8xl">MJB</div>
        <div className="mx-auto mt-4 h-px w-12 bg-gold/60" />
        <p className="mt-4 px-8 text-[0.68rem] uppercase tracking-eyebrow text-white/50">Official portrait to be supplied</p>
      </div>
    </div>
  );
}
