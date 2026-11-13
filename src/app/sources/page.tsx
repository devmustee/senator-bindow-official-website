import type { Metadata } from "next";
import { PageHero, SectionHeading } from "@/components/ui";
import { openQuestions } from "@/content/content";
import { sources } from "@/content/sources";
import { allImages } from "@/content/images";

export const metadata: Metadata = {
  title: "Sources",
  description: "How this archive verifies information about Jibrilla Bindow, the full register of sources, and the questions still open.",
  alternates: { canonical: "/sources" },
};

export default function SourcesPage() {
  const sorted = [...sources].sort((a, b) => (a.date ?? "9999").localeCompare(b.date ?? "9999"));
  return (
    <>
      <PageHero eyebrow="Method" title="Sources" intro="Every statement on this site links to a published source. This page lists every source used and the questions still open." />
      <section className="border-y border-rule bg-white section-tight">
        <div className="container">
          <SectionHeading eyebrow="Register" title={`${sources.length} sources`} intro="Primary: an official record. Secondary: a news or reference report. Reported: a claim attributed to a named or unnamed person. “Abstract only” means the full article could not be retrieved during research and must be re-read before its details are relied on." />
          <div className="mt-10">
            <table className="block w-full text-left text-sm md:table">
              <thead className="hidden md:table-header-group">
                <tr className="border-b-2 border-navy text-navy">
                  <th className="py-3 pr-4 font-semibold">Date</th>
                  <th className="py-3 pr-4 font-semibold">Outlet</th>
                  <th className="py-3 pr-4 font-semibold">Title</th>
                  <th className="py-3 pr-4 font-semibold">Evidence</th>
                  <th className="py-3 font-semibold">Read</th>
                </tr>
              </thead>
              <tbody className="grid gap-3 md:table-row-group">
                {sorted.map((s) => (
                  <tr key={s.id} id={`src-${s.id}`} className="grid grid-cols-2 gap-x-4 gap-y-2 rounded-md border border-rule bg-ivory/60 p-4 md:table-row md:rounded-none md:border-x-0 md:border-t-0 md:bg-transparent md:p-0 md:align-top">
                    <td className="order-1 col-span-2 block text-xs text-charcoal/70 md:table-cell md:whitespace-nowrap md:py-3 md:pr-4 md:text-sm">{s.date ?? "n.d."}</td>
                    <td className="order-2 col-span-2 block font-semibold text-navy md:table-cell md:py-3 md:pr-4 md:font-normal md:text-charcoal">{s.outlet}</td>
                    <td className="order-3 col-span-2 block md:table-cell md:py-3 md:pr-4"><a className="link" href={s.url} target="_blank" rel="noopener noreferrer">{s.title}</a></td>
                    <td data-label="Evidence" className="order-4 block capitalize md:table-cell md:py-3 md:pr-4 before:mb-0.5 before:block before:text-[0.65rem] before:font-semibold before:uppercase before:tracking-eyebrow before:text-gold-700 before:content-[attr(data-label)] md:before:hidden">{s.evidence}</td>
                    <td data-label="Read" className="order-5 block md:table-cell md:py-3 before:mb-0.5 before:block before:text-[0.65rem] before:font-semibold before:uppercase before:tracking-eyebrow before:text-gold-700 before:content-[attr(data-label)] md:before:hidden">{s.read ? "Full text" : "Abstract only"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-b border-rule bg-white section-tight">
        <div className="container">
          <SectionHeading eyebrow="Image credits" title="Photographs" intro="Openly licensed photographs, credited to their creators. Images marked BY-ND are shown unaltered." />
          <ul className="mt-8 grid gap-2 text-sm md:grid-cols-2">
            {allImages.map((i) => (
              <li key={i.src} className="border-b border-rule py-2">
                <span className="text-navy">{i.caption}</span>{" "}
                <span className="text-charcoal/70">
                  <a className="link" href={i.sourceUrl} target="_blank" rel="noopener noreferrer">{i.creator}</a>, <a className="link" href={i.licenceUrl} target="_blank" rel="noopener noreferrer">{i.licence}</a>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container section-tight">
        <SectionHeading eyebrow="Open questions" title="Still to be documented" intro="Records and confirmations being sought from his office, the National Assembly, the Adamawa State Government and archives." />
        <ol className="mt-10 grid gap-3 md:grid-cols-2">
          {openQuestions.map((q, i) => (
            <li key={q} className="flex gap-4 rounded-md border border-rule bg-white p-4 text-sm leading-relaxed">
              <span className="font-serif text-lg text-gold-700">{String(i + 1).padStart(2, "0")}</span>
              <span>{q}</span>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
