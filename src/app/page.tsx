import Link from "next/link";
import { ArrowLink, Cite, Pattern, PortraitFrame, ResearchNote, SectionHeading, VerificationBadge } from "@/components/ui";
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
  const preview = [images.euDeputyGovernor, images.senate, images.farmland, images.lamidoPalace, images.adsuMubi, images.yolaWelcome];
  const latest = timeline.filter((t) => t.era === "later").slice(-3).reverse();
  const coverage = [...sources].filter((s) => s.read && s.date).sort((a, b) => (b.date! > a.date! ? 1 : -1)).slice(0, 4);
  const quote = statements.find((s) => s.direct);

  return (
    <>
      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-navy text-white">
        <Pattern />
        <div className="container relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.25fr_0.75fr] lg:py-28">
          <div>
            <p className="eyebrow-light animate-rise">Former Governor of Adamawa State · Former Senator, Adamawa North</p>
            <h1 className="h-display mt-5 animate-rise text-white [animation-delay:80ms]">{profile.name}</h1>
            <p className="mt-6 max-w-xl animate-rise font-serif text-2xl italic leading-snug text-gold-300 [animation-delay:140ms]">
              Leadership, service and a documented record of public contribution.
            </p>
            <p className="mt-6 max-w-2xl animate-rise text-lg leading-relaxed text-white/75 [animation-delay:200ms]">
              The life, public service and record of Muhammadu Umaru Jibrilla Bindow. He went from business in Mubi to the Senate and then to the governorship of Adamawa State. That career is now part of the state's history.
            </p>
            <div className="mt-10 flex animate-rise flex-wrap gap-4 [animation-delay:260ms]">
              <Link href="/biography" className="btn-gold">Explore His Story</Link>
              <Link href="/achievements" className="btn-ghost-light">Explore His Achievements</Link>
            </div>
          </div>
          <PortraitFrame portrait={portrait} className="mx-auto w-full max-w-sm animate-rise [animation-delay:200ms]" />
        </div>
        <div className="h-1 bg-gradient-to-r from-gold via-gold-300 to-gold" />
      </section>

      {/* 2–3. Introduction + key facts */}
      <section className="container grid gap-14 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
        <div>
          <SectionHeading eyebrow="Introduction" title="A career in business, the Senate and the governorship" />
          <div className="prose-body mt-8">
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
        <dl className="grid content-start gap-px self-start overflow-hidden rounded-sm border border-rule bg-rule sm:grid-cols-2">
          {keyFacts.map((k) => (
            <div key={k.label} className="bg-white p-6">
              <dt className="eyebrow">{k.label}</dt>
              <dd className="mt-3 font-serif text-xl text-navy">{k.value}</dd>
              <dd className="mt-2 text-xs text-charcoal/60"><Cite ids={k.fact.sources} /></dd>
            </div>
          ))}
        </dl>
      </section>

      {/* 4–5. Timeline */}
      <section className="border-y border-rule bg-white py-20 lg:py-28">
        <div className="container">
          <SectionHeading center eyebrow="Milestones" title="A life in public service" intro="The main turning points, each linked to its source. The full timeline also covers his business years and his political life since 2019." />
          <div className="mt-16"><Timeline compact /></div>
          <div className="text-center"><ArrowLink href="/timeline">View the complete timeline</ArrowLink></div>
        </div>
      </section>

      {/* 6–7. Governorship feature */}
      <section className="relative overflow-hidden bg-navy py-20 text-white lg:py-28">
        <Pattern />
        <div className="container relative">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="eyebrow-light">Governorship · 2015–2019</p>
              <h2 className="h-section mt-3 text-white">Four years as Governor of Adamawa State</h2>
              <span className="gold-rule mt-5" />
            </div>
            <p className="text-lg leading-relaxed text-white/70">
              The record below separates projects his administration started from federal projects in the state. Each item also shows whether it rests on a government claim or on independent reporting.
            </p>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-sm bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {featuredSectors.map((s) => (
              <Link key={s.slug} href={`/governorship#${s.slug}`} className="group bg-navy p-7 transition-colors hover:bg-navy-700">
                <p className="font-serif text-4xl text-gold">{String(s.initiatives.length).padStart(2, "0")}</p>
                <p className="mt-1 text-[0.68rem] uppercase tracking-eyebrow text-white/50">Documented items</p>
                <h3 className="mt-6 font-serif text-xl text-white">{s.title}</h3>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-white/60">{s.initiatives[0].title}</p>
                <span className="mt-6 inline-block text-sm font-semibold text-gold group-hover:translate-x-1 transition-transform">Explore →</span>
              </Link>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-6">
            <ArrowLink light href="/governorship">The full governorship record</ArrowLink>
            <ArrowLink light href="/achievements">Achievements and contributions</ArrowLink>
          </div>
        </div>
      </section>

      {/* 7b. Featured projects with images */}
      <section className="container py-20 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Projects" title="Selected projects of the administration" intro="Roads, schools, hospitals, farming and enterprise. Each project's full record gives its location, responsible agency, status and sources." />
          <ArrowLink href="/projects">All {allProjects.length} projects</ArrowLink>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((p) => {
            const img = p.image ? images[p.image] : p.sector.image ? images[p.sector.image] : images.yolaWelcome;
            return (
              <Link key={p.slug} href={`/governorship#${p.slug}`} className="group flex flex-col overflow-hidden rounded-sm border border-rule bg-white transition-shadow hover:shadow-[0_16px_40px_-20px_rgba(16,31,54,.35)]">
                <div className="relative aspect-[16/10] bg-navy">
                  <Image src={img.src} alt={img.alt} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className={`${img.noDerivatives ? "object-contain" : "object-cover"} transition-transform duration-500 group-hover:scale-[1.03]`} />
                  <span className="absolute left-3 top-3 rounded-full bg-navy/85 px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-wider text-gold">{p.sector.title.split(" ")[0].replace(",", "")}</span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="eyebrow">{p.date}</p>
                  <h3 className="mt-2 font-serif text-xl leading-snug">{p.title}</h3>
                  <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-charcoal/75">{p.implemented.text}</p>
                  <span className="mt-4 text-sm font-semibold text-navy-700 group-hover:text-gold-600">Full record →</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 8. Education + offices */}
      <section className="container grid gap-14 py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <SectionHeading eyebrow="Offices held" title="Public and private roles" />
          <ul className="mt-10 divide-y divide-rule border-y border-rule">
            {offices.map((o) => (
              <li key={o.title} className="grid gap-1 py-5 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-6">
                <div>
                  <p className="font-serif text-lg text-navy">{o.title}</p>
                  <p className="text-sm text-charcoal/60">{o.institution}</p>
                </div>
                <p className="text-sm font-medium text-charcoal/70">{o.start} – {o.end}<span className="ml-3 rounded-full bg-navy/5 px-2 py-0.5 text-[0.65rem] uppercase tracking-wider text-navy-700">{o.kind}</span></p>
              </li>
            ))}
          </ul>
          <div className="mt-6"><ArrowLink href="/career">Political and public career</ArrowLink></div>
        </div>
        <div>
          <SectionHeading eyebrow="Education" title="Academic and professional background" />
          <div className="mt-10 space-y-4">
            {education.map((e) => (
              <div key={e.title} className="card">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="eyebrow">{e.kind}</p>
                  <VerificationBadge level={e.fact.verification} />
                </div>
                <p className="mt-2 font-serif text-lg text-navy">{e.title}</p>
              </div>
            ))}
          </div>
          <div className="mt-6"><ArrowLink href="/education">Education record and open questions</ArrowLink></div>
        </div>
      </section>

      {/* 9. Gallery preview */}
      <section className="border-y border-rule bg-white py-20">
        <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <SectionHeading eyebrow="Photo archive" title="A visual record, built with permission" intro="Genuine, captioned and credited photographs of his public life and the places he served, from Yola and Mubi to the Senate in Abuja." />
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {preview.map((im, i) => (
              <Link key={im.src} href="/gallery" className={`group relative overflow-hidden bg-navy-900 ${i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"}`}>
                <Image src={im.src} alt={im.alt} fill sizes="(min-width:1024px) 25vw, 33vw" className={`${im.noDerivatives ? "object-contain" : "object-cover"} transition-transform duration-500 group-hover:scale-105`} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 10–11. Media + leadership */}
      <section className="container grid gap-14 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:py-28">
        <div>
          <SectionHeading eyebrow="Media & press" title="In the press" />
          <ul className="mt-10 grid gap-4">
            {coverage.map((s) => (
              <li key={s.id}>
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="card group block">
                  <p className="eyebrow">{s.outlet} · {s.date}</p>
                  <p className="mt-2 font-serif text-lg text-navy group-hover:text-navy-700">{s.title}</p>
                  <p className="mt-3 text-xs font-semibold text-gold-600">Read at source ↗</p>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6"><ArrowLink href="/media">All media coverage</ArrowLink></div>
        </div>
        <aside className="flex flex-col gap-6">
          <SectionHeading eyebrow="Leadership" title="In his words" />
          {quote && (
            <figure className="relative border-l-2 border-gold bg-white p-8">
              <span aria-hidden className="absolute -top-4 left-6 font-serif text-7xl leading-none text-gold/40">“</span>
              <blockquote className="font-serif text-2xl leading-snug text-navy">{quote.text}</blockquote>
              <figcaption className="mt-4 text-sm text-charcoal/60">
                {quote.context}, {quote.date}. <Cite ids={[quote.source]} />
              </figcaption>
            </figure>
          )}
          {thirdPartyAssessments.map((a) => (
            <p key={a.who} className="text-sm leading-relaxed text-charcoal/70">
              <span className="font-semibold text-navy">{a.who}</span> ({a.date}): {a.text} <Cite ids={[a.source]} />
            </p>
          ))}
          <ArrowLink href="/leadership">Leadership and values</ArrowLink>
        </aside>
      </section>

      {/* 12. Latest */}
      <section className="bg-ivory pb-24">
        <div className="container">
          <div className="rounded-sm border border-rule bg-white p-8 sm:p-12">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionHeading eyebrow="Latest updates" title="Recent public life" />
              <ArrowLink href="/timeline">Full timeline</ArrowLink>
            </div>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {latest.map((t) => (
                <article key={t.title} className="border-t-2 border-gold pt-5">
                  <p className="eyebrow">{t.date}</p>
                  <h3 className="mt-2 font-serif text-xl">{t.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal/75">{t.fact.text}<Cite ids={t.fact.sources} /></p>
                </article>
              ))}
            </div>
          </div>
          <div className="mt-10">
            <ResearchNote>
              <strong className="text-navy">About this record.</strong> This site is still being researched. Every statement is linked to a published source and labelled by how firmly it is established, from <em>Verified</em> to <em>Awaiting confirmation</em>. The research register lists {sources.length} sources so far. Read{" "}
              <Link className="link" href="/sources">how we verify</Link>, including the questions still open for his office. Coverage is cited from{" "}
              {sourceById["wiki"].outlet} and Nigerian news outlets.
            </ResearchNote>
          </div>
        </div>
      </section>
    </>
  );
}
