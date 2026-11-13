import { images } from "@/content/images";
import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import { Timeline } from "@/components/Timeline";

export const metadata: Metadata = {
  title: "Milestones and Life Timeline",
  description: "An interactive timeline of the life and career of Muhammadu Umaru Jibrilla Bindow, from his business years in Mubi through the Senate and the governorship to his public life since 2019.",
  alternates: { canonical: "/timeline" },
};

export default function TimelinePage() {
  return (
    <>
      <PageHero image={images.benueYola} eyebrow="Chronology" title="Milestones and Life Timeline" intro="Each entry is sourced. Filter by period to follow a single chapter of his life." />
      <section className="container py-16 lg:py-24"><Timeline /></section>
    </>
  );
}
