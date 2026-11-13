import { images } from "@/content/images";
import type { Metadata } from "next";
import { Cite, FactLine, PageHero, SectionHeading } from "@/components/ui";
import { offices, partyHistory } from "@/content/content";

export const metadata: Metadata = {
  title: "Political and Public Service Career",
  description:
    "Offices held by Jibrilla Bindow: Senator for Adamawa North (2011–2015) and Governor of Adamawa State (2015–2019), with dates, predecessors, successors, election results and party affiliations.",
  alternates: { canonical: "/career" },
};

export default function CareerPage() {
  return (
    <>
      <PageHero image={images.nassMace} eyebrow="Public Service" title="Political and Public Career" intro="Elected offices, private-sector roles and party affiliations in date order. Each is sourced, and elected roles are kept separate from private ones." />
      <section className="container section">
        <SectionHeading eyebrow="Offices" title="Positions held" />
        <div className="mt-12 grid gap-6">
          {offices.map((o) => (
            <article key={o.title} className="card grid gap-6 md:grid-cols-[220px_1fr]">
              <div>
                <p className="eyebrow">{o.kind}</p>
                <p className="mt-4 font-serif text-2xl text-navy">{o.start}</p>
                <p className="text-sm text-charcoal/70">to {o.end}</p>
              </div>
              <div>
                <h2 className="font-serif text-2xl">{o.title}</h2>
                <p className="mt-1 text-charcoal/70">{o.institution}</p>
                {(o.party || o.predecessor) && (
                  <dl className="mt-5 grid gap-x-8 gap-y-2 text-sm sm:grid-cols-3">
                    {o.party && <div><dt className="eyebrow">Party</dt><dd className="mt-1">{o.party}</dd></div>}
                    {o.predecessor && <div><dt className="eyebrow">Preceded by</dt><dd className="mt-1">{o.predecessor}</dd></div>}
                    {o.successor && <div><dt className="eyebrow">Succeeded by</dt><dd className="mt-1">{o.successor}</dd></div>}
                  </dl>
                )}
                <div className="mt-5 space-y-2 text-[0.95rem] text-charcoal/80">
                  {o.notes.map((n) => <FactLine key={n.text} fact={n} />)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-rule bg-white section">
        <div className="container">
          <SectionHeading eyebrow="Affiliations" title="Party history" intro="His party affiliation has changed several times, as is common in Nigerian politics. The record is set out here in full." />
          <div className="mt-10 md:mt-12">
            <table className="block w-full text-left text-sm md:table">
              <thead className="hidden md:table-header-group">
                <tr className="border-b-2 border-navy text-navy">
                  <th className="py-3 pr-6 font-semibold">Period</th>
                  <th className="py-3 pr-6 font-semibold">Party</th>
                  <th className="py-3 font-semibold">Record</th>
                </tr>
              </thead>
              <tbody className="grid gap-3 md:table-row-group">
                {partyHistory.map((p) => (
                  <tr key={p.period} className="grid gap-3 rounded-md border border-rule bg-white p-4 md:table-row md:rounded-none md:border-x-0 md:border-t-0 md:p-0 md:align-top">
                    <td data-label="Period" className="block font-serif text-base text-navy md:table-cell md:py-4 md:pr-6 before:mb-0.5 before:block before:text-[0.65rem] before:font-semibold before:uppercase before:tracking-eyebrow before:text-gold-700 before:content-[attr(data-label)] md:before:hidden">{p.period}</td>
                    <td data-label="Party" className="block font-medium md:table-cell md:py-4 md:pr-6 before:mb-0.5 before:block before:text-[0.65rem] before:font-semibold before:uppercase before:tracking-eyebrow before:text-gold-700 before:content-[attr(data-label)] md:before:hidden">{p.party}</td>
                    <td data-label="Record" className="block text-charcoal/80 md:table-cell md:py-4 md:pr-6 before:mb-0.5 before:block before:text-[0.65rem] before:font-semibold before:uppercase before:tracking-eyebrow before:text-gold-700 before:content-[attr(data-label)] md:before:hidden">{p.fact.text}<Cite ids={p.fact.sources} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
