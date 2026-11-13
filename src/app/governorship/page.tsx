import type { Metadata } from "next";
import Link from "next/link";
import { Figure, FactLine, PageHero, ResearchNote } from "@/components/ui";
import { ProjectCard } from "@/components/ProjectCard";
import { allProjects, offices, sectors } from "@/content/content";
import { images } from "@/content/images";

export const metadata: Metadata = {
  title: "Governorship of Adamawa State (2015–2019): Projects and Record",
  description:
    "Every documented project and policy of the Jibrilla Bindow administration in Adamawa State, 2015–2019: roads, housing, schools, hospitals, tractors and fertiliser, empowerment, security and public finance. Each item gives its location, date, responsible agency, status and source.",
  alternates: { canonical: "/governorship" },
};

export default function GovernorshipPage() {
  const gov = offices[0];
  const count = allProjects.filter((p) => p.attribution !== "Federal Government project").length;
  return (
    <>
      <PageHero
        image={images.yolaWelcome}
        eyebrow="29 May 2015 – 29 May 2019"
        title="Governorship of Adamawa State"
        intro={`${count} documented projects and policies across seven sectors. Each item shows who started it, what is documented to have happened, its status and its source.`}
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/projects" className="btn-gold">Browse all projects</Link>
        </div>
      </PageHero>

      <section className="container py-16">
        <div className="grid gap-px overflow-hidden rounded-sm border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Term", `${gov.start} – ${gov.end}`],
            ["Party", gov.party!],
            ["Predecessor", gov.predecessor!],
            ["Successor", gov.successor!],
          ].map(([k, v]) => (
            <div key={k} className="bg-white p-6">
              <p className="eyebrow">{k}</p>
              <p className="mt-2 font-serif text-lg text-navy">{v}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-3 text-charcoal/80">
            {gov.notes.map((n) => <FactLine key={n.text} fact={n} />)}
          </div>
          <Figure image={images.euDeputyGovernor} />
        </div>
      </section>

      <section className="container pb-8">
        <div className="grid gap-8 lg:grid-cols-[230px_1fr]">
          <nav aria-label="Sectors" className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow">Sectors</p>
            <ul className="mt-4 grid gap-1 text-sm">
              {sectors.map((s) => (
                <li key={s.slug}>
                  <a href={`#${s.slug}`} className="flex justify-between gap-3 rounded-sm px-3 py-2 text-charcoal/75 hover:bg-white hover:text-navy">
                    <span>{s.title}</span>
                    <span className="text-gold-600">{s.initiatives.length}</span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-sm border border-rule bg-white p-5 text-xs leading-relaxed text-charcoal/70">
              <p className="eyebrow mb-3">Reading this record</p>
              <p><strong>Initiated by the administration</strong>: started by the state government during this term.</p>
              <p className="mt-2"><strong>Partner-funded</strong>: co-financed with UNICEF, the World Bank or other partners.</p>
              <p className="mt-2"><strong>Federal Government project</strong>: in the state but not a state initiative.</p>
              <p className="mt-2"><strong>Official claim</strong>: a figure given by the government or its supporters and not independently confirmed.</p>
            </div>
          </nav>

          <div className="space-y-24">
            {sectors.map((s, si) => {
              const img = s.image ? images[s.image] : undefined;
              return (
                <section key={s.slug} id={s.slug} className="scroll-mt-28">
                  <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
                    <div>
                      <p className="eyebrow">Sector {String(si + 1).padStart(2, "0")} · {s.initiatives.length} items</p>
                      <h2 className="h-section mt-2">{s.title}</h2>
                      <span className="gold-rule mt-4" />
                      <p className="mt-5 max-w-prose leading-relaxed text-charcoal/80">{s.summary}</p>
                    </div>
                    {img && <Figure image={img} aspect="aspect-[16/10]" />}
                  </div>
                  <div className="mt-10 grid gap-6">
                    {s.initiatives.map((i) => <ProjectCard key={i.slug} p={i} />)}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container py-16">
        <ResearchNote>
          <strong className="text-navy">About the photographs and figures.</strong> No openly licensed photographs of the projects themselves could be found. Each project card shows a licensed photograph of its location and labels it as such. Photographs from his office or the ministries will replace them once supplied with credits. Costs, kilometres and beneficiary numbers appear only where a source gives them. They are labelled as official claims unless independently confirmed. Opinion articles by supporters are cited as claims, never as confirmation.
        </ResearchNote>
      </section>
    </>
  );
}
