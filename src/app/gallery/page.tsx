import type { Metadata } from "next";
import { Gallery } from "@/components/Gallery";
import { PageHero, ResearchNote } from "@/components/ui";
import { galleryCategories, photos, type Photo } from "@/content/content";
import { getPortrait } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description: "A licensed photographic archive of the public life of Jibrilla Bindow and the places he served, organised by collection and year.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  const portrait = getPortrait();
  const all: Photo[] = portrait
    ? [{ src: portrait.src, alt: portrait.alt, caption: "Official portrait of Senator Muhammadu Umaru Jibrilla Bindow.", category: "Personal Portraits", credit: "His office", licence: "Used with permission" }, ...photos]
    : photos;
  const used = galleryCategories.filter((c) => all.some((p) => p.category === c));
  const pending = galleryCategories.filter((c) => !used.includes(c));
  return (
    <>
      <PageHero eyebrow="Visual Archive" title="Photo Gallery" intro={`${all.length} captioned, credited photographs of his public life and the places he served. Filter by collection or year and open any image full-screen.`} />
      <section className="container section">
        <Gallery photos={all} categories={used} />
        <div className="mt-16">
          <ResearchNote>
            <strong className="text-navy">Collections still being built:</strong> {pending.join(", ")}. Photographs of him at official events belong to the news organisations or government photographers who took them. They will be added once his office supplies them or the owners grant permission. Each will carry its photographer, date, place and licence. No AI-generated or stand-in images are used.
          </ResearchNote>
        </div>
      </section>
    </>
  );
}
