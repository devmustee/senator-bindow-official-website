import { images } from "@/content/images";
import type { Metadata } from "next";
import { FactLine, PageHero, ResearchNote, SectionHeading } from "@/components/ui";
import { offices, timeline } from "@/content/content";

export const metadata: Metadata = {
  title: "Senatorial Service: Adamawa North (2011–2015)",
  description:
    "Jibrilla Bindow's service as Senator for Adamawa North in the 7th National Assembly, 2011–2015: the 2011 primary and court case, the election result, and the legislative record still being documented.",
  alternates: { canonical: "/senate" },
};

export default function SenatePage() {
  const senate = offices[1];
  const events = timeline.filter((t) => t.era === "senate" && t.year === 2011);
  return (
    <>
      <PageHero image={images.senate} eyebrow="7th National Assembly · 2011–2015" title="Senator for Adamawa North" intro="His election, his term and his legislative record. Committee posts, bills and motions are listed only once official records confirm them." />
      <section className="container grid gap-14 py-16 lg:grid-cols-[1fr_1fr] lg:py-24">
        <div>
          <SectionHeading eyebrow="The seat" title="Election and term" />
          <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-rule bg-rule">
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
      <section className="border-t border-rule bg-white py-16">
        <div className="container grid gap-10 lg:grid-cols-3">
          {[
            ["Committees", "Senate committee memberships and positions from 2011 to 2015."],
            ["Bills & motions", "Bills sponsored or co-sponsored, motions moved and contributions to debate."],
            ["Constituency work", "Projects and interventions for Adamawa North during the term."],
          ].map(([t, d]) => (
            <div key={t} className="card">
              <p className="eyebrow">Being documented</p>
              <h2 className="mt-2 font-serif text-2xl">{t}</h2>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/70">{d}</p>
            </div>
          ))}
        </div>
        <div className="container mt-10">
          <ResearchNote>
            No committee post, bill or motion is listed until it has been confirmed against the official records of the National Assembly (
            <a className="link" href="https://nass.gov.ng/" target="_blank" rel="noopener noreferrer">nass.gov.ng</a>) or the Senate Votes and Proceedings for the 7th Assembly.
          </ResearchNote>
        </div>
      </section>
    </>
  );
}
