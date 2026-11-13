import type { Metadata } from "next";
import { Cite, PageHero, ResearchNote } from "@/components/ui";
import { sectors, timeline } from "@/content/content";

export const metadata: Metadata = {
  title: "Achievements and Contributions",
  description:
    "Documented achievements and contributions of Jibrilla Bindow in infrastructure, health, agriculture, governance, political leadership and public service, each with its date, location and source.",
  alternates: { canonical: "/achievements" },
};

export default function AchievementsPage() {
  const gov = sectors.flatMap((s) =>
    s.initiatives
      .filter((i) => i.attribution !== "Federal Government project")
      .map((i) => ({ category: s.title, title: i.title, date: i.date, location: i.location, fact: i.implemented })),
  );
  const political = timeline
    .filter((t) => t.milestone && ["senate", "governor"].includes(t.era) && !t.title.startsWith("Loses"))
    .map((t) => ({ category: "Political Leadership", title: t.title, date: t.date, location: "Adamawa State", fact: t.fact }));
  const items = [...political, ...gov];
  const categories = Array.from(new Set(items.map((i) => i.category)));

  return (
    <>
      <PageHero eyebrow="Record of Service" title="Achievements and Contributions" intro="Ordered by category. Each entry shows whether the outcome has been independently reported or rests on an official claim." />
      <div className="container section">
        {categories.map((c) => (
          <section key={c} className="mb-16">
            <h2 className="h-section">{c}</h2>
            <span className="gold-rule mt-4" />
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {items.filter((i) => i.category === c).map((i) => (
                <article key={i.title} className="card flex flex-col">
                  <p className="eyebrow">{i.date}</p>
                  <h3 className="mt-3 font-serif text-xl">{i.title}</h3>
                  {i.location && <p className="text-sm text-charcoal/70">{i.location}</p>}
                  <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-charcoal/80">{i.fact.text}</p>
                  <div className="mt-4 border-t border-rule pt-3 text-xs text-charcoal/70">Source <Cite ids={i.fact.sources} /></div>
                </article>
              ))}
            </div>
          </section>
        ))}
        <ResearchNote>
          Achievements in education, youth and women&rsquo;s development, the economy, legislation and community development will be added once each is documented with a date, location and source. Photographs will be added only with a licence.
        </ResearchNote>
      </div>
    </>
  );
}
