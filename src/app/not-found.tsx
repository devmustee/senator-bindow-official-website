import Link from "next/link";
import { PageHero } from "@/components/ui";

export default function NotFound() {
  return (
    <PageHero eyebrow="404" title="This page is not in the archive" intro="It may have moved, or the record has not been published yet.">
      <Link href="/" className="btn-gold mt-10">Return home</Link>
    </PageHero>
  );
}
