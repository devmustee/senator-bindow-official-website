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
    const img = p.image ? images[p.image] : p.sector.image ? images[p.sector.image] : undefined;
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
      image: img ? { src: img.src, alt: img.alt, contain: img.noDerivatives } : undefined,
    };
  });
  return (
    <>
      <PageHero image={images.jimetaMarket} eyebrow="Governorship 2015–2019" title="Projects and Programmes" intro={`${rows.length} documented projects and policies. Filter by sector or search by place, then open any card for its full record.`} />
      <section className="container py-16 lg:py-20">
        <ProjectIndex rows={rows} sectors={sectors.map((s) => ({ slug: s.slug, title: s.title }))} />
        <div className="mt-14">
          <ResearchNote>
            Card images are licensed photographs of each project's sector or location, not of the project itself unless the full record says so. Photographs of the completed works are being sought from his office and the state ministries.
          </ResearchNote>
        </div>
      </section>
    </>
  );
}
