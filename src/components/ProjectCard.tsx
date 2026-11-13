import Image from "next/image";
import { Cite, ImageCredit, VerificationBadge } from "./ui";
import type { Initiative } from "@/content/content";
import { images } from "@/content/images";

export function ProjectCard({ p, sectorTitle }: { p: Initiative; sectorTitle?: string }) {
  const img = p.image ? images[p.image] : undefined;
  return (
    <article id={p.slug} className="scroll-mt-28 overflow-hidden rounded-sm border border-rule bg-white shadow-[0_1px_0_rgba(16,31,54,.04)]">
      <div className={img ? "grid lg:grid-cols-[0.9fr_1.1fr]" : ""}>
        {img && (
          <figure className="relative min-h-[240px] bg-navy-900">
            <Image src={img.src} alt={img.alt} fill sizes="(min-width:1024px) 40vw, 100vw" className={img.noDerivatives ? "object-contain" : "object-cover"} />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-900/95 to-transparent p-4 pt-10 text-[0.7rem] leading-relaxed text-white/80">
              {p.imageIsContext && <span className="mb-1 block font-semibold uppercase tracking-wider text-gold">Location photograph, not of the project itself</span>}
              {img.caption} <ImageCredit image={img} light />
            </figcaption>
          </figure>
        )}
        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-2">
            {sectorTitle && <span className="eyebrow mr-2">{sectorTitle}</span>}
            <span className={`rounded-full px-2.5 py-0.5 text-[0.66rem] font-semibold uppercase tracking-wider ${p.attribution === "Federal Government project" ? "bg-charcoal/10 text-charcoal" : p.attribution === "Partner-funded programme" ? "bg-navy-700/10 text-navy-700" : "bg-navy text-white"}`}>
              {p.attribution}
            </span>
            <VerificationBadge level={p.implemented.verification} />
          </div>
          <h3 className="mt-4 font-serif text-2xl leading-snug">{p.title}</h3>
          <p className="mt-1 text-sm text-charcoal/60">{[p.location, p.date].filter(Boolean).join(" · ")}</p>

          <dl className="mt-6 grid gap-4 text-sm sm:grid-cols-[130px_1fr]">
            {p.agency && (<><dt className="eyebrow pt-0.5">Responsible</dt><dd>{p.agency}</dd></>)}
            {p.objective && (<><dt className="eyebrow pt-0.5">Objective</dt><dd>{p.objective}</dd></>)}
            <dt className="eyebrow pt-0.5">What was done</dt>
            <dd className="space-y-3 leading-relaxed">
              <p>{p.implemented.text}<Cite ids={p.implemented.sources} /></p>
              {p.more?.map((m) => (
                <p key={m.text}>
                  {m.text}
                  <Cite ids={m.sources} />
                  {m.verification !== p.implemented.verification && <span className="ml-2 align-middle"><VerificationBadge level={m.verification} /></span>}
                </p>
              ))}
            </dd>
            <dt className="eyebrow pt-0.5">Status</dt>
            <dd className="font-medium text-navy">{p.status}</dd>
          </dl>
        </div>
      </div>
    </article>
  );
}
