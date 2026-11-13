import Link from "next/link";
import { ArrowLink, Cite, Pattern, PortraitFrame, ResearchNote, SectionHeading } from "@/components/ui";
import { Timeline } from "@/components/Timeline";
import Image from "next/image";
import { allProjects, education, keyFacts, offices, profile, sectors, statements, thirdPartyAssessments, timeline } from "@/content/content";
import { images } from "@/content/images";
import { getPortrait } from "@/lib/assets";
import { sourceById, sources } from "@/content/sources";

export default function Home() {
  const featuredSectors = sectors.filter((s) => s.initiatives.length > 0).slice(0, 4);
  const portrait = getPortrait();
  const featuredProjects = ["township-roads", "education-emergency", "tractors", "numan-general-hospital", "bsc-scheme", "housing-estate"].map((slug) => allProjects.find((p) => p.slug === slug)!).filter(Boolean);
  const preview = [images.euDeputyGovernor, images.senate, images.farmland, images.nassMace, images.euMalakohi, images.yolaWelcome];
  const latest = timeline.filter((t) => t.era === "later").slice(-3).reverse();
  const coverage = [...sources].filter((s) => s.read && s.date).sort((a, b) => (b.date! > a.date! ? 1 : -1)).slice(0, 4);
  const quote = statements.find((s) => s.direct);

  return (
    <>
      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-navy text-white">
        <Pattern />
        <div aria-hidden className="hero-glow" />
        <div className="container relative grid items-center gap-12 py-10 sm:py-20 lg:grid-cols-[1.25fr_0.75fr] lg:py-28">
          <div>
            {portrait && (
              <div className="relative mb-6 h-24 w-24 overflow-hidden rounded-full border-2 border-gold/70 shadow-raised sm:h-28 sm:w-28 lg:hidden">
                <Image src={portrait.src} alt={portrait.alt} fill priority sizes="112px" className="object-cover object-top" />
              </div>
            )}
            <p className="eyebrow-light">Former Governor of Adamawa State · Former Senator, Adamawa North</p>
            <h1 className="h-display mt-4 text-white sm:mt-5">{profile.name}</h1>
            <p className="mt-4 max-w-xl font-serif text-xl italic leading-snug text-gold-300 sm:mt-6 sm:text-2xl">
              Leadership, service and a documented record of public contribution.
            </p>
            <p className="mt-6 hidden max-w-2xl text-lg leading-relaxed text-white/75 sm:block">
              The life, public service and record of Muhammadu Umaru Jibrilla Bindow. He went from business in Mubi to the Senate and then to the governorship of Adamawa State. That career is now part of the state's history.
            </p>
            <div className="mt-8 grid gap-3 sm:mt-10 sm:flex sm:flex-wrap sm:gap-4">
              <Link href="/biography" className="btn-gold">Explore His Story</Link>
              <Link href="/achievements" className="btn-ghost-light">Explore His Achievements</Link>
            </div>
          </div>
          <PortraitFrame portrait={portrait} desktopOnly={!!portrait} className={`mx-auto w-full max-w-sm ${portrait ? "hidden lg:block" : ""}`} />
        </div>
        <div className="h-1 bg-gradient-to-r from-gold via-gold-300 to-gold" />
      </section>

      {/* 2–3. Introduction + key facts */}
      <section className="container section grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <div>
          <SectionHeading eyebrow="Introduction" title="A career in business, the Senate and the governorship" />
          <div className="prose-body mt-6 sm:mt-8">
            <p>
              Before entering politics, Jibrilla Bindow was known as an industrialist in Mubi. Reports from 2010 and 2011 credit him with founding three companies there that employed about 400 people.
              <Cite ids={["nd-2011-industrialist", "dt-2010-tycoon"]} />
            </p>
            <p>
              In April 2011 he was elected Senator for Adamawa North on the platform of the Peoples Democratic Party.
              <Cite ids={["punch-2011-result", "inec-2011"]} /> Four years later, as the candidate of the All Progressives Congress, he was elected Governor of Adamawa State and served from 29 May 2015 to 29 May 2019.
              <Cite ids={["wiki", "stears-2015"]} />
            </p>
            <p>
              His administration began with road building in Yola, Jimeta and Mubi. It took office while falling federal allocations and the aftermath of insurgency in the north of the state were straining public finances and farming.
              <Cite ids={["blueprint-2015-roads", "thisday-2017-food"]} />
            </p>
          </div>
          <div className="mt-8"><ArrowLink href="/biography">Read the full biography</ArrowLink></div>
        </div>
        <dl className="grid grid-cols-2 content-start gap-px self-start overflow-hidden rounded-md border border-rule bg-rule">
          {keyFacts.map((k) => (
            <div key={k.label} className="bg-white p-4 sm:p-6">
              <dt className="eyebrow leading-snug">{k.label}</dt>
              <dd className="mt-2 font-serif text-base leading-snug text-navy sm:mt-3 sm:text-xl">{k.value}</dd>
              <dd className="mt-2 text-xs text-charcoal/70"><Cite ids={k.fact.sources} /></dd>
            </div>
          ))}
        </dl>
      </section>

      {/* 4–5. Timeline */}
      <section className="border-y border-rule bg-white section">
        <div className="container">
          <SectionHeading center eyebrow="Milestones" title="A life in public service" intro="The main turning points, each linked to its source. The full timeline also covers his business years and his political life since 2019." />
          <div className="mt-10 sm:mt-16"><Timeline compact /></div>
          <div className="text-center"><ArrowLink href="/timeline">View the complete timeline</ArrowLink></div>
        </div>
      </section>

      {/* 6–7. Governorship feature */}
      <section className="section relative overflow-hidden bg-navy text-white">
        <Pattern />
        <div className="container relative">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-10">
            <div>
              <p className="eyebrow-light">Governorship · 2015–2019</p>
              <h2 className="h-section mt-3 text-white">Four years as Governor of Adamawa State</h2>
              <span className="gold-rule mt-5" />
            </div>
            <p className="leading-relaxed text-white/75 sm:text-lg">
              The record below separates projects his administration started from federal projects in the state. Each item also shows whether it rests on a government claim or on independent reporting.
            </p>
          </div>
          <div className="snap-row mt-10 md:grid-cols-2 md:gap-4 lg:mt-14 lg:grid-cols-4">
            {featuredSectors.map((s) => (
              <Link key={s.slug} href={`/governorship#${s.slug}`} className="group flex flex-col rounded-md border border-white/10 bg-navy-900/60 p-6 transition-colors hover:bg-navy-700">
                <p className="font-serif text-4xl text-gold">{String(s.initiatives.length).padStart(2, "0")}</p>
                <p className="mt-1 text-[0.68rem] uppercase tracking-eyebrow text-white/65">Documented items</p>
                <h3 className="mt-6 font-serif text-xl text-white">{s.title}</h3>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-white/70">{s.initiatives[0].title}</p>
                <span className="mt-auto inline-block pt-6 text-sm font-semibold text-gold group-hover:translate-x-1 transition-transform">Explore →</span>
              </Link>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-1 lg:mt-10">
            <ArrowLink light href="/governorship">The full governorship record</ArrowLink>
            <ArrowLink light href="/achievements">Achievements and contributions</ArrowLink>
          </div>
        </div>
      </section>

      {/* 7b. Featured projects with images */}
      <section className="container section">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Projects" title="Selected projects of the administration" intro="Roads, schools, hospitals, farming and enterprise. Each project's full record gives its location, responsible agency, status and sources." />
          <ArrowLink href="/projects">All {allProjects.length} projects</ArrowLink>
        </div>
        <div className="snap-row mt-8 md:grid-cols-2 md:gap-6 lg:mt-12 lg:grid-cols-3">
          {featuredProjects.map((p) => {
            const img = p.image ? images[p.image] : undefined;
            return (
              <Link key={p.slug} href={`/governorship#${p.slug}`} className="card-link group flex flex-col overflow-hidden !p-0">
                {img && (
                  <div className="relative aspect-[16/10] bg-navy">
                    <Image src={img.src} alt={img.alt} fill sizes="(min-width:1024px) 380px, (min-width:768px) 50vw, 85vw" className={img.noDerivatives ? "object-contain" : "object-cover"} />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <p className="eyebrow">{p.date}</p>
                  <h3 className="h-card mt-3">{p.title}</h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-charcoal/80">{p.implemented.text}</p>
                  <span className="mt-auto inline-flex pt-4 min-h-[44px] items-center text-sm font-semibold text-navy-700 group-hover:text-gold-700">Full record →</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 8. Education + offices */}
      <section className="container section grid gap-12 lg:grid-cols-2 lg:gap-14">
        <div>
          <SectionHeading eyebrow="Offices held" title="Public and private roles" />
          <ul className="mt-8 divide-y divide-rule border-y border-rule sm:mt-10">
            {offices.map((o) => (
              <li key={o.title} className="grid gap-1 py-4 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-6 sm:py-5">
                <div>
                  <p className="font-serif text-lg text-navy">{o.title}</p>
                  <p className="text-sm text-charcoal/70">{o.institution}</p>
                </div>
                <p className="text-sm font-medium text-charcoal/70">{o.start}{o.end && o.end !== "—" ? ` – ${o.end}` : ""}</p>
              </li>
            ))}
          </ul>
          <div className="mt-6"><ArrowLink href="/career">Political and public career</ArrowLink></div>
        </div>
        <div>
          <SectionHeading eyebrow="Education" title="Academic and professional background" />
          <ul className="mt-8 divide-y divide-rule border-y border-rule sm:mt-10">
            {education.map((e) => (
              <li key={e.title} className="py-4 sm:py-5">
                <p className="eyebrow">{e.kind}</p>
                <p className="mt-1.5 font-serif text-lg leading-snug text-navy">{e.title}</p>
              </li>
            ))}
          </ul>
          <div className="mt-6"><ArrowLink href="/education">Education record and open questions</ArrowLink></div>
        </div>
      </section>

      {/* 9. Gallery preview */}
      <section className="section-tight border-y border-rule bg-white lg:py-20">
        <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <SectionHeading eyebrow="Photo archive" title="A visual record, built with permission" intro="Genuine, captioned and credited photographs of his public life and the places he served, from Yola and Mubi to the Senate in Abuja." />
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {preview.map((im, i) => (
              <Link key={im.src} href="/gallery" aria-label={`Open the photo gallery: ${im.alt}`} className={`group relative overflow-hidden rounded-md bg-navy-900 ${i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"}`}>
                <Image src={im.src} alt="" fill sizes="(min-width:1024px) 240px, 33vw" className={`${im.noDerivatives ? "object-contain" : "object-cover"} transition-transform duration-500 group-hover:scale-105`} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 10–11. Media + leadership */}
      <section className="container section grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
        <div>
          <SectionHeading eyebrow="Media & press" title="In the press" />
          <ul className="mt-8 grid gap-3 sm:mt-10 sm:gap-4">
            {coverage.map((s, i) => (
              <li key={s.id} className={i > 2 ? "hidden sm:block" : undefined}>
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="card-link group">
                  <p className="eyebrow">{s.outlet} · {s.date}</p>
                  <p className="mt-2 font-serif text-lg text-navy group-hover:text-navy-700">{s.title}</p>
                  <p className="mt-3 text-xs font-semibold text-gold-700">Read at source ↗</p>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6"><ArrowLink href="/media">All media coverage</ArrowLink></div>
        </div>
        <aside className="flex flex-col gap-6">
          <SectionHeading eyebrow="Leadership" title="In his words" />
          {quote && (
            <figure className="relative rounded-r-md border-l-2 border-gold bg-white p-6 sm:p-8">
              <span aria-hidden className="absolute -top-4 left-6 font-serif text-7xl leading-none text-gold/40">“</span>
              <blockquote className="font-serif text-xl leading-snug text-navy sm:text-2xl">{quote.text}</blockquote>
              <figcaption className="mt-4 text-sm text-charcoal/70">
                {quote.context}, {quote.date}. <Cite ids={[quote.source]} />
              </figcaption>
            </figure>
          )}
          {thirdPartyAssessments.map((a) => (
            <p key={a.who} className="hidden text-sm leading-relaxed text-charcoal/75 sm:block">
              <span className="font-semibold text-navy">{a.who}</span> ({a.date}): {a.text} <Cite ids={[a.source]} />
            </p>
          ))}
          <ArrowLink href="/leadership">Leadership and values</ArrowLink>
        </aside>
      </section>

      {/* 12. Latest */}
      <section className="bg-ivory pb-14 sm:pb-24">
        <div className="container">
          <div className="rounded-md border border-rule bg-white p-5 sm:p-12">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionHeading eyebrow="Latest updates" title="Recent public life" />
              <ArrowLink href="/timeline">Full timeline</ArrowLink>
            </div>
            <div className="mt-8 grid gap-6 md:mt-10 md:grid-cols-3 md:gap-8">
              {latest.map((t) => (
                <article key={t.title} className="border-t-2 border-gold pt-4 sm:pt-5">
                  <p className="eyebrow">{t.date}</p>
                  <h3 className="mt-1.5 font-serif text-lg leading-snug sm:mt-2 sm:text-xl">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/80 sm:mt-3">{t.fact.text}<Cite ids={t.fact.sources} /></p>
                </article>
              ))}
            </div>
          </div>
          <div className="mt-10">
            <ResearchNote>
              <strong className="text-navy">About this record.</strong> This site is still being researched. Every statement is linked to a published source. The research register lists {sources.length} sources so far. Read{" "}
              <Link className="link" href="/sources">how we verify</Link>, including the questions still open for his office. Coverage is cited from{" "}
              {sourceById["wiki"].outlet} and Nigerian news outlets.
            </ResearchNote>
          </div>
        </div>
      </section>
    </>
  );
}
