import { images } from "@/content/images";
import type { Metadata } from "next";
import { Cite, FactLine, Figure, PageHero, ResearchNote, SectionHeading, VerificationBadge } from "@/components/ui";
import { constituencyWork, legislation, offices, senateContext, senateRoles, timeline } from "@/content/content";

export const metadata: Metadata = {
  title: "Senatorial Service: Adamawa North (2011–2015)",
  description:
    "Jibrilla Bindow in the 7th Senate, 2011–2015: election, roles and committees, the constitution alteration bill SB. 235 he sponsored, motions he co-sponsored, and constituency work, each linked to Senate papers or press reports.",
  alternates: { canonical: "/senate" },
};

export default function SenatePage() {
  const senate = offices[1];
  const events = timeline.filter((t) => t.era === "senate" && t.year === 2011);
  return (
    <>
      <PageHero
        image={images.senate}
        eyebrow="7th National Assembly · 2011–2015"
        title="Senator for Adamawa North"
        intro="His election, roles, legislation and constituency work. Items taken from the Senate's own Order and Notice Papers are marked as verified; press reports are labelled as such."
      />

      <section className="container section grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
        <div>
          <SectionHeading eyebrow="The seat" title="Election and term" />
          <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-rule bg-rule">
            {[
              ["Constituency", "Adamawa North"],
              ["Party", "PDP"],
              ["Sworn in", senate.start],
              ["Term ended", senate.end],
              ["Preceded by", senate.predecessor!],
              ["Succeeded by", senate.successor!],
            ].map(([k, v]) => (
              <div key={k} className="bg-white p-5">
                <dt className="eyebrow">{k}</dt>
                <dd className="mt-2 font-serif text-lg text-navy">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div>
          <SectionHeading eyebrow="2011" title="Road to the Senate" />
          <ol className="mt-10 space-y-6 border-l border-gold/50 pl-6">
            {events.map((e) => (
              <li key={e.title}>
                <p className="eyebrow">{e.date}</p>
                <p className="mt-1 font-serif text-xl text-navy">{e.title}</p>
                <div className="mt-2 text-[0.95rem] text-charcoal/80"><FactLine fact={e.fact} /></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="roles" className="scroll-mt-24 border-t border-rule bg-white section">
        <div className="container">
          <SectionHeading eyebrow="Roles and committees" title="Positions in the Senate" intro="The only committee post found so far comes from a 2015 magazine profile. It stays marked unconfirmed until the 7th Senate committee list is located." />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {senateRoles.map((r) => (
              <article key={r.title} className="card flex flex-col">
                <div className="flex items-start justify-between gap-3">
                  <p className="eyebrow">{r.period}</p>
                  <VerificationBadge level={r.fact.verification} />
                </div>
                <h3 className="mt-3 font-serif text-xl leading-snug text-navy">{r.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/75">
                  {r.fact.text}
                  <Cite ids={r.fact.sources} />
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="legislation" className="container scroll-mt-24 section">
        <SectionHeading eyebrow="Bills and motions" title="Legislative record" intro="Found in the Senate's printed Order and Notice Papers for 2013, held in the Policy and Legal Advocacy Centre (PLAC) archive. This is a partial record; other sessions are still being searched." />
        <div className="mt-10 space-y-6">
          {legislation.map((l) => (
            <article key={l.title} className="grid gap-6 rounded-md border border-rule bg-white p-6 lg:grid-cols-[220px_1fr] lg:p-8">
              <div className="space-y-3 border-b border-rule pb-5 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-6">
                <p className="font-serif text-3xl text-gold-700">{l.ref ?? l.kind}</p>
                <p className="text-xs font-semibold uppercase tracking-eyebrow text-navy">{l.kind} · {l.role}</p>
                <p className="text-sm text-charcoal/70">{l.date}</p>
                <VerificationBadge level={l.fact.verification} />
              </div>
              <div>
                <h3 className="font-serif text-xl leading-snug text-navy">{l.title}</h3>
                <dl className="mt-4 grid gap-x-6 gap-y-2 text-sm sm:grid-cols-[auto_1fr]">
                  <dt className="font-semibold text-navy">Stage</dt>
                  <dd className="text-charcoal/80">{l.stage}</dd>
                  {l.lead && (
                    <>
                      <dt className="font-semibold text-navy">Lead sponsor</dt>
                      <dd className="text-charcoal/80">{l.lead}</dd>
                    </>
                  )}
                </dl>
                <p className="mt-4 leading-relaxed text-charcoal/80">{l.summary}</p>
                <div className="mt-4 text-sm text-charcoal/70"><FactLine fact={l.fact} showBadge={false} /></div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="constituency" className="scroll-mt-24 border-y border-rule bg-white section">
        <div className="container">
          <SectionHeading eyebrow="Adamawa North" title="Constituency work" intro="Few contemporary reports name his Senate-era projects. What has been found is listed below exactly as reported, including criticism." />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {constituencyWork.map((c) => (
              <article key={c.title} className="card">
                <div className="flex items-start justify-between gap-3">
                  <p className="eyebrow">{c.date}</p>
                  <VerificationBadge level={c.fact.verification} />
                </div>
                <h3 className="mt-3 font-serif text-xl text-navy">{c.title}</h3>
                {c.location && <p className="mt-1 text-xs uppercase tracking-eyebrow text-charcoal/70">{c.location}</p>}
                <div className="mt-4 space-y-3 text-sm text-charcoal/80">
                  <FactLine fact={c.fact} showBadge={false} />
                  {c.more?.map((m) => <FactLine key={m.text} fact={m} showBadge={false} />)}
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 space-y-4">
            {senateContext.map((f) => (
              <div key={f.text} className="border-l-2 border-gold pl-5 text-sm text-charcoal/80">
                <p className="eyebrow mb-1">Context · 2014</p>
                <FactLine fact={f} />
              </div>
            ))}
            <ResearchNote>
              Constituency projects in Nigeria were listed each year in the federal budget's zonal intervention schedules. Those lists, and his office's own records, are being sought so that each project can be given its location, agency, cost and status.
            </ResearchNote>
          </div>
        </div>
      </section>

      <section id="photographs" className="container scroll-mt-24 section">
        <SectionHeading eyebrow="At the National Assembly" title="Photographs" intro="The images below show the National Assembly complex where he served. They are openly licensed photographs of the building, not of him." />
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <Figure image={images.senate} />
          <Figure image={images.nassMace} />
        </div>
        <div className="mt-10">
          <ResearchNote>
            No openly licensed photograph of him in the Senate (2011–2015) has been found in Wikimedia Commons, Openverse or other public archives. Press agency photographs exist but are copyrighted. Photographs supplied by his office, with photographer, date and occasion, will be added here.
          </ResearchNote>
        </div>
      </section>
    </>
  );
}
