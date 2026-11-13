import type { Metadata } from "next";
import { Cite, PageHero, ResearchNote, SectionHeading } from "@/components/ui";
import { education, educationContext } from "@/content/content";

export const metadata: Metadata = {
  title: "Education and Academic Background",
  description:
    "The documented education of Jibrilla Bindow, with academic, professional and honorary qualifications kept separate and each with its source.",
  alternates: { canonical: "/education" },
};

const stages = ["Primary education", "Secondary education", "Higher education", "Professional certifications", "Honorary degrees"];

export default function EducationPage() {
  return (
    <>
      <PageHero eyebrow="Education" title="Academic and Professional Background" intro="Academic degrees, professional certificates and honorary awards are listed separately. No institution or qualification appears unless a source names it." />
      <section className="container section grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
        <div>
          <SectionHeading eyebrow="On record" title="What sources report" />
          <div className="mt-10 space-y-5">
            {education.map((e) => (
              <article key={e.title} className="card">
                <p className="eyebrow">{e.kind}</p>
                <h3 className="mt-3 font-serif text-2xl">{e.title}</h3>
                <p className="mt-3 leading-relaxed text-charcoal/80">{e.fact.text}<Cite ids={e.fact.sources} /></p>
              </article>
            ))}
          </div>
          <div className="mt-10">
            <ResearchNote>
              <strong className="text-navy">Context.</strong> {educationContext.text}
              <Cite ids={educationContext.sources} />
            </ResearchNote>
          </div>
        </div>
        <aside>
          <SectionHeading eyebrow="Timeline" title="Academic journey" />
          <ol className="mt-10 space-y-4 border-l border-rule pl-6">
            {stages.map((s) => (
              <li key={s} className="relative">
                <span aria-hidden className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full border border-gold bg-ivory" />
                <p className="font-serif text-lg text-navy">{s}</p>
                <p className="text-sm text-charcoal/70">Institution, years and qualification awaiting documents</p>
              </li>
            ))}
          </ol>
        </aside>
      </section>
    </>
  );
}
