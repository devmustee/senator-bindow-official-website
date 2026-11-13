import { images } from "@/content/images";
import type { Metadata } from "next";
import { Cite, FactLine, PageHero, SectionHeading, VerificationBadge } from "@/components/ui";
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
      <section className="container py-16 lg:py-24">
        <SectionHeading eyebrow="Offices" title="Positions held" />
        <div className="mt-12 grid gap-6">
          {offices.map((o) => (
            <article key={o.title} className="card grid gap-6 md:grid-cols-[220px_1fr]">
              <div>
                <span className={`inline-block rounded-full px-2.5 py-0.5 text-[0.68rem] font-semibold uppercase tracking-wider ${o.kind === "Elected" ? "bg-navy text-white" : "bg-gold-100 text-[#7A5E22]"}`}>{o.kind}</span>
                <p className="mt-4 font-serif text-2xl text-navy">{o.start}</p>
                <p className="text-sm text-charcoal/60">to {o.end}</p>
              </div>
              <div>
                <h2 className="font-serif text-2xl">{o.title}</h2>
                <p className="mt-1 text-charcoal/60">{o.institution}</p>
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

      <section className="border-t border-rule bg-white py-16 lg:py-24">
        <div className="container">
          <SectionHeading eyebrow="Affiliations" title="Party history" intro="His party affiliation has changed several times, as is common in Nigerian politics. The record is set out here in full." />
          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b-2 border-navy text-navy">
                  <th className="py-3 pr-6 font-semibold">Period</th>
                  <th className="py-3 pr-6 font-semibold">Party</th>
                  <th className="py-3 pr-6 font-semibold">Record</th>
                  <th className="py-3 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {partyHistory.map((p) => (
                  <tr key={p.period} className="border-b border-rule align-top">
                    <td className="py-4 pr-6 font-serif text-base text-navy">{p.period}</td>
                    <td className="py-4 pr-6 font-medium">{p.party}</td>
                    <td className="py-4 pr-6 text-charcoal/80">{p.fact.text}<Cite ids={p.fact.sources} /></td>
                    <td className="py-4"><VerificationBadge level={p.fact.verification} /></td>
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
