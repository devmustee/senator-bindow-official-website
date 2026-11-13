import Image from "next/image";
import Link from "next/link";
import type { SiteImage } from "@/content/images";
import type { ReactNode } from "react";
import { sourceById } from "@/content/sources";
import { type Fact, type Verification, verificationHelp, verificationLabel } from "@/content/content";

const badgeTone: Record<Verification, string> = {
  verified: "border-emerald-700/25 bg-emerald-50 text-emerald-800",
  reported: "border-navy-700/20 bg-navy-700/5 text-navy-700",
  claim: "border-gold-600/40 bg-gold-100 text-[#7A5E22]",
  unconfirmed: "border-rose-700/25 bg-rose-50 text-rose-800",
};

export function VerificationBadge({ level }: { level: Verification }) {
  return (
    <span
      title={verificationHelp[level]}
      className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[0.68rem] font-semibold uppercase tracking-wider ${badgeTone[level]}`}
    >
      {verificationLabel[level]}
    </span>
  );
}

/** Inline source references: numbered superscript-style chips linking to the original. */
export function Cite({ ids }: { ids: string[] }) {
  return (
    <span className="ml-1 inline-flex flex-wrap gap-1 align-middle">
      {ids.map((id) => {
        const s = sourceById[id];
        if (!s) return null;
        return (
          <a
            key={id}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            title={`${s.outlet}: ${s.title}${s.date ? ` (${s.date})` : ""}`}
            className="rounded-sm border border-rule bg-ivory px-1.5 py-px text-[0.65rem] font-medium text-navy-700 no-underline hover:border-gold hover:text-gold-600"
          >
            {s.outlet.split(",")[0]}
          </a>
        );
      })}
    </span>
  );
}

export function FactLine({ fact, showBadge = true }: { fact: Fact; showBadge?: boolean }) {
  return (
    <p className="leading-relaxed">
      {fact.text}
      <Cite ids={fact.sources} />
      {showBadge && fact.verification !== "verified" && (
        <span className="ml-2 align-middle">
          <VerificationBadge level={fact.verification} />
        </span>
      )}
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
      <figcaption className="mt-2 text-xs leading-relaxed text-charcoal/60">
        {image.caption} <ImageCredit image={image} />
      </figcaption>
    </figure>
  );
}

export function ImageCredit({ image, light }: { image: SiteImage; light?: boolean }) {
  return (
    <span className={light ? "text-white/50" : "text-charcoal/45"}>
      Photo:{" "}
      <a href={image.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline decoration-dotted underline-offset-2 hover:text-gold-600">
        {image.creator}
      </a>
      ,{" "}
      <a href={image.licenceUrl} target="_blank" rel="noopener noreferrer" className="underline decoration-dotted underline-offset-2 hover:text-gold-600">
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
      {image && (
        <p className="absolute bottom-3 right-4 z-10 max-w-[70%] text-right text-[0.65rem]">
          <ImageCredit image={image} light />
        </p>
      )}
      <div className="container relative py-16 sm:py-24">
        <p className="eyebrow-light animate-rise">{eyebrow}</p>
        <h1 className="h-display mt-4 max-w-4xl animate-rise text-white [animation-delay:80ms]">{title}</h1>
        {intro && <p className="mt-6 max-w-2xl animate-rise text-lg leading-relaxed text-white/75 [animation-delay:160ms]">{intro}</p>}
        {children}
      </div>
      <div className="h-1 bg-gradient-to-r from-gold via-gold-300 to-gold" />
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
      <span className={`gold-rule mt-5 ${center ? "mx-auto" : ""}`} />
      {intro && <p className="mt-5 text-[1.05rem] leading-relaxed text-charcoal/75">{intro}</p>}
    </div>
  );
}

export function ResearchNote({ children }: { children: ReactNode }) {
  return (
    <div className="flex gap-4 rounded-sm border border-dashed border-gold-600/50 bg-gold-100/40 p-5 text-sm leading-relaxed text-charcoal/80">
      <span aria-hidden className="mt-0.5 font-serif text-xl leading-none text-gold-600">§</span>
      <div>{children}</div>
    </div>
  );
}

export function ArrowLink({ href, children, light }: { href: string; children: ReactNode; light?: boolean }) {
  return (
    <Link href={href} className={`group inline-flex items-center gap-2 text-sm font-semibold ${light ? "text-gold" : "text-navy-700"} hover:text-gold-600`}>
      {children}
      <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
    </Link>
  );
}

/** Monogram used where a licensed portrait has not yet been supplied. Never a likeness. */
export function PortraitFrame({ portrait, className = "" }: { portrait: null | { src: string; alt: string; credit: string }; className?: string }) {
  if (portrait) {
    return (
      <figure className={className}>
        <div className="relative border border-gold/50 p-2 shadow-[0_30px_60px_-30px_rgba(0,0,0,.6)]">
          <div className="relative aspect-square overflow-hidden">
            <Image src={portrait.src} alt={portrait.alt} fill priority sizes="(min-width:1024px) 400px, 90vw" className="object-cover object-top" />
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
