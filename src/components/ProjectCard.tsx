import Image from "next/image";
import { Cite, ImageCredit } from "./ui";
import type { Fact, Initiative } from "@/content/content";
import { images } from "@/content/images";

export function ProjectCard({ p, sectorTitle }: { p: Initiative; sectorTitle?: string }) {
  const img = p.image ? images[p.image] : undefined;
  return (
    <article id={p.slug} className="scroll-mt-14 overflow-hidden rounded-lg border border-rule/80 bg-white shadow-card lg:scroll-mt-4">
      <div className={img ? "grid lg:grid-cols-[0.9fr_1.1fr]" : ""}>
        {img && (
          <figure className="relative aspect-[16/10] bg-navy-900 lg:aspect-auto lg:min-h-[240px]">
            <Image src={img.src} alt={img.alt} fill sizes="(min-width:1024px) 40vw, 100vw" className={img.noDerivatives ? "object-contain" : "object-cover"} />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-900/95 to-transparent p-4 pt-10 text-[0.7rem] leading-relaxed text-white/80">
              {p.imageIsContext && <span className="mb-1 block font-semibold uppercase tracking-wider text-gold">Location photograph, not of the project itself</span>}
              {img.caption} <ImageCredit image={img} light />
            </figcaption>
          </figure>
        )}
        <div className="p-5 sm:p-8">
          {sectorTitle && <p className="eyebrow">{sectorTitle}</p>}
          <h3 className="mt-3 font-serif text-[1.375rem] leading-snug text-navy sm:text-[1.65rem]">{p.title}</h3>
          <p className="mt-1 text-sm text-charcoal/70">{[p.location, p.date, p.attribution === "Federal Government project" || p.attribution === "Partner-funded programme" ? p.attribution : undefined].filter(Boolean).join(" · ")}</p>

          <dl className="mt-6 grid gap-x-6 gap-y-1.5 text-[0.95rem] sm:grid-cols-[130px_1fr] sm:gap-y-4">
            {p.agency && (<><dt className="eyebrow pt-3 sm:pt-1">Responsible</dt><dd>{p.agency}</dd></>)}
            {p.objective && (<><dt className="eyebrow pt-3 sm:pt-1">Objective</dt><dd>{p.objective}</dd></>)}
            <dt className="eyebrow pt-3 sm:pt-1">What was done</dt>
            <dd className="space-y-3 leading-relaxed">
              <p>{p.implemented.text}<Cite ids={p.implemented.sources} /></p>
              {p.more?.slice(0, 1).map((m) => <MoreFact key={m.text} m={m} />)}
              {p.more && p.more.length > 1 && (
                <details className="group/more">
                  <summary className="inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-navy-700">
                    <span className="group-open/more:hidden">More detail ({p.more.length - 1})</span>
                    <span className="hidden group-open/more:inline">Less detail</span>
                    <span aria-hidden className="transition-transform group-open/more:rotate-180">⌄</span>
                  </summary>
                  <div className="mt-2 space-y-3">
                    {p.more.slice(1).map((m) => <MoreFact key={m.text} m={m} />)}
                  </div>
                </details>
              )}
            </dd>
            <dt className="eyebrow pt-3 sm:pt-1">Status</dt>
            <dd className="font-medium text-navy">{p.status}</dd>
          </dl>
        </div>
      </div>
      {p.facebookPosts && p.facebookPosts.length > 0 && (
        <div className="border-t border-rule bg-ivory px-5 py-5 sm:px-8">
          <p className="eyebrow">Photographs posted on Facebook</p>
          <ul className="mt-3 space-y-3 text-sm leading-relaxed text-charcoal/75">
            {p.facebookPosts.map((fb) => (
              <li key={fb.url}>
                <span className="font-semibold text-navy">{fb.poster}, {fb.date}.</span> {fb.note}{" "}
                <a className="link whitespace-nowrap" href={fb.url} target="_blank" rel="noopener noreferrer">
                  View photos on Facebook
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}

function MoreFact({ m }: { m: Fact }) {
  return (
    <p>
      {m.text}
      <Cite ids={m.sources} />
    </p>
  );
}
