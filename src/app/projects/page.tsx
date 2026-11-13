import type { Metadata } from "next";
import { PageHero, ResearchNote } from "@/components/ui";
import { ProjectIndex, type ProjectRow } from "@/components/ProjectIndex";
import { allProjects, sectors } from "@/content/content";
import { images } from "@/content/images";

export const metadata: Metadata = {
  title: "Projects: Jibrilla Bindow Adamawa Projects 2015–2019",
  description:
    "Search every documented project of the Bindow administration in Adamawa State by sector: township roads in Yola, Jimeta and Mubi, the Bindow Housing Estate, school renovations, Numan General Hospital, the tractor programme, the BSC empowerment scheme and more.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  const rows: ProjectRow[] = allProjects.map((p) => {
    const img = p.image ? images[p.image] : undefined;
    return {
      slug: p.slug,
      title: p.title,
      sector: p.sector.title.split(" ")[0].replace(",", ""),
      sectorSlug: p.sector.slug,
      location: p.location,
      date: p.date,
      attribution: p.attribution,
      verification: p.implemented.verification,
      status: p.status,
      summary: p.implemented.text,
      image: img ? { src: img.src, alt: img.alt, contain: img.noDerivatives, context: p.imageIsContext } : undefined,
    };
  });
  return (
    <>
      <PageHero eyebrow="Governorship 2015–2019" title="Projects and Programmes" intro={`${rows.length} documented projects and policies. Filter by sector or search by place, then open any card for its full record.`} />
      <section className="container section">
        <h2 className="sr-only">Project list</h2>
        <ProjectIndex rows={rows} sectors={sectors.map((s) => ({ slug: s.slug, title: s.title }))} />
        <div className="mt-14">
          <ResearchNote>
            Most projects have no photograph yet. Where a card has one, it is a licensed photograph of the event or location, labelled as such. Photographs of the completed works are being sought from his office, the state ministries and the people who photographed them.
          </ResearchNote>
        </div>
      </section>
    </>
  );
}
