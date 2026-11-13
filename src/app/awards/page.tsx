import type { Metadata } from "next";
import { Cite, PageHero, ResearchNote, VerificationBadge } from "@/components/ui";
import { awards, education } from "@/content/content";

export const metadata: Metadata = {
  title: "Awards and Recognition",
  description: "Verified national, state, institutional and traditional honours conferred on Jibrilla Bindow, each with its awarding body and date.",
  alternates: { canonical: "/awards" },
};

export default function AwardsPage() {
  const honorary = education.filter((e) => e.kind === "Honorary");
  return (
    <>
      <PageHero eyebrow="Honours" title="Awards and Recognition" intro="Official awards, honorary degrees, traditional titles and informal recognition are listed separately, each with the awarding body and date." />
      <section className="container py-16 lg:py-24">
        {awards.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2">
            {awards.map((a) => (
              <article key={a.title} className="card">
                <p className="eyebrow">{a.kind} · {a.date}</p>
                <h2 className="mt-2 font-serif text-2xl">{a.title}</h2>
                <p className="text-sm text-charcoal/60">{a.body}</p>
                <p className="mt-3 text-sm">{a.fact.text}<Cite ids={a.fact.sources} /></p>
              </article>
            ))}
          </div>
        ) : (
          <ResearchNote>No award has yet been confirmed with its awarding body and date. Honours will appear here once documented.</ResearchNote>
        )}
        {honorary.length > 0 && (
          <div className="mt-12">
            <h2 className="h-section">Reported, awaiting confirmation</h2>
            <span className="gold-rule mt-4" />
            <div className="mt-8 grid gap-5">
              {honorary.map((h) => (
                <article key={h.title} className="card">
                  <div className="flex flex-wrap justify-between gap-2"><p className="eyebrow">Honorary degree</p><VerificationBadge level={h.fact.verification} /></div>
                  <h3 className="mt-2 font-serif text-xl">{h.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/80">{h.fact.text}<Cite ids={h.fact.sources} /></p>
                </article>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
