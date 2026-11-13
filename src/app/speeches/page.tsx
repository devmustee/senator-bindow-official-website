import type { Metadata } from "next";
import { Cite, PageHero, ResearchNote } from "@/components/ui";
import { statements } from "@/content/content";

export const metadata: Metadata = {
  title: "Speeches and Public Addresses",
  description: "A library of speeches, addresses and public remarks by Jibrilla Bindow. Each links to the original report or recording.",
  alternates: { canonical: "/speeches" },
};

export default function SpeechesPage() {
  return (
    <>
      <PageHero eyebrow="Library" title="Speeches and Public Addresses" intro="Official speeches, addresses and remarks. If no transcript exists, we link to the original report or recording and do not write one." />
      <section className="container section">
        <h2 className="h-section">Reported remarks</h2>
        <span className="gold-rule mt-4" />
        <div className="mt-10 grid gap-6">
          {statements.map((s) => (
            <article key={s.date} className="card grid gap-4 md:grid-cols-[200px_1fr]">
              <div>
                <p className="eyebrow">{s.date}</p>
                <p className="mt-2 text-sm text-charcoal/70">{s.context}</p>
              </div>
              <div>
                {s.direct ? (
                  <blockquote className="font-serif text-2xl leading-snug text-navy">&ldquo;{s.text}&rdquo;</blockquote>
                ) : (
                  <p className="leading-relaxed text-charcoal/85"><span className="eyebrow mr-2">Paraphrase</span>{s.text}</p>
                )}
                <p className="mt-3 text-xs text-charcoal/70">As reported by <Cite ids={[s.source]} /></p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12">
          <ResearchNote>
            Being sought: the inaugural address of 29 May 2015, budget presentations to the Adamawa State House of Assembly, and any Senate floor contributions from 2011 to 2015. Each will be added with its full text or recording once a primary source is found.
          </ResearchNote>
        </div>
      </section>
    </>
  );
}
