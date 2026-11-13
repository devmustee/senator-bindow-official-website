import type { Metadata } from "next";
import { Cite, PageHero, ResearchNote, SectionHeading } from "@/components/ui";
import { statements, thirdPartyAssessments } from "@/content/content";

export const metadata: Metadata = {
  title: "Leadership Philosophy and Values",
  description: "The documented leadership priorities and values of Jibrilla Bindow, drawn only from his recorded statements, with every quotation linked to its original source.",
  alternates: { canonical: "/leadership" },
};

const themes = [
  {
    title: "Infrastructure first",
    body: "In his first months as governor he named poor infrastructure as the main obstacle and put roads at the front of the programme.",
    source: "blueprint-2015-roads",
  },
  {
    title: "Restraint in public pay",
    body: "Faced with falling revenue, he said he had cut his own salary by about half and reduced the pay of his deputy and principal officers.",
    source: "newsexpress-2015-roads",
  },
  {
    title: "Governing for everyone",
    body: "He said he would serve all citizens regardless of socio-political differences.",
    source: "eagle-2016-girei",
  },
  {
    title: "Recovery after insurgency",
    body: "He framed agriculture as central to restoring livelihoods in areas where farmers had lost planting seasons to insecurity.",
    source: "thisday-2017-food",
  },
];

export default function LeadershipPage() {
  const direct = statements.filter((s) => s.direct);
  return (
    <>
      <PageHero eyebrow="Leadership" title="Philosophy and Values" intro="Drawn only from what he has said on the record. Quotation marks are used only for words a source attributes to him directly." />
      <section className="container section">
        <SectionHeading eyebrow="Themes" title="Priorities he set out in office" />
        <div className="mt-12 grid gap-px overflow-hidden rounded-md border border-rule bg-rule md:grid-cols-2">
          {themes.map((t, i) => (
            <article key={t.title} className="bg-white p-8">
              <span className="font-serif text-3xl text-gold/70">{String(i + 1).padStart(2, "0")}</span>
              <h2 className="mt-3 font-serif text-2xl">{t.title}</h2>
              <p className="mt-3 leading-relaxed text-charcoal/80">{t.body}<Cite ids={[t.source]} /></p>
            </article>
          ))}
        </div>
      </section>
      {direct.map((q) => (
        <section key={q.text} className="section bg-navy text-white">
          <figure className="container max-w-3xl text-center">
            <blockquote className="font-serif text-3xl leading-snug sm:text-4xl">&ldquo;{q.text}&rdquo;</blockquote>
            <figcaption className="mt-6 text-sm text-white/60">{q.context}, {q.date} <Cite ids={[q.source]} /></figcaption>
          </figure>
        </section>
      ))}
      <section className="container section-tight">
        <SectionHeading eyebrow="As others saw it" title="Contemporary assessments" />
        <div className="mt-8 space-y-4">
          {thirdPartyAssessments.map((a) => (
            <p key={a.who} className="max-w-prose leading-relaxed"><strong className="text-navy">{a.who}</strong>, {a.date}: {a.text}<Cite ids={[a.source]} /></p>
          ))}
        </div>
        <div className="mt-10"><ResearchNote>Assessments are attributed to the person who made them. They are the views of contemporaries, not findings of this archive.</ResearchNote></div>
      </section>
    </>
  );
}
