import type { Metadata } from "next";
import { PageHero, SectionHeading, VerificationBadge } from "@/components/ui";
import { openQuestions, verificationHelp, type Verification } from "@/content/content";
import { sources } from "@/content/sources";
import { allImages } from "@/content/images";

export const metadata: Metadata = {
  title: "Sources and Verification",
  description: "How this archive verifies information about Jibrilla Bindow, the full register of sources, and the questions still open.",
  alternates: { canonical: "/sources" },
};

export default function SourcesPage() {
  const levels = Object.keys(verificationHelp) as Verification[];
  const sorted = [...sources].sort((a, b) => (a.date ?? "9999").localeCompare(b.date ?? "9999"));
  return (
    <>
      <PageHero eyebrow="Method" title="Sources and Verification" intro="Every statement on this site links to a published source. This page explains how each statement is graded and lists every source used." />
      <section className="container py-16">
        <SectionHeading eyebrow="Standards" title="Verification levels" />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {levels.map((l) => (
            <div key={l} className="card">
              <VerificationBadge level={l} />
              <p className="mt-3 text-sm leading-relaxed text-charcoal/75">{verificationHelp[l]}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-rule bg-white py-16">
        <div className="container">
          <SectionHeading eyebrow="Register" title={`${sources.length} sources`} intro="Primary: an official record. Secondary: a news or reference report. Reported: a claim attributed to a named or unnamed person. “Abstract only” means the full article could not be retrieved during research and must be re-read before its details are relied on." />
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead>
                <tr className="border-b-2 border-navy text-navy">
                  <th className="py-3 pr-4 font-semibold">Date</th>
                  <th className="py-3 pr-4 font-semibold">Outlet</th>
                  <th className="py-3 pr-4 font-semibold">Title</th>
                  <th className="py-3 pr-4 font-semibold">Evidence</th>
                  <th className="py-3 font-semibold">Read</th>
                </tr>
              </thead>
              <tbody>
                {sorted.map((s) => (
                  <tr key={s.id} id={`src-${s.id}`} className="border-b border-rule align-top">
                    <td className="whitespace-nowrap py-3 pr-4 text-charcoal/60">{s.date ?? "n.d."}</td>
                    <td className="py-3 pr-4">{s.outlet}</td>
                    <td className="py-3 pr-4"><a className="link" href={s.url} target="_blank" rel="noopener noreferrer">{s.title}</a></td>
                    <td className="py-3 pr-4 capitalize">{s.evidence}</td>
                    <td className="py-3">{s.read ? "Full text" : "Abstract only"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-b border-rule bg-white py-16">
        <div className="container">
          <SectionHeading eyebrow="Image credits" title="Photographs" intro="Openly licensed photographs, credited to their creators. Images marked BY-ND are shown unaltered." />
          <ul className="mt-8 grid gap-2 text-sm md:grid-cols-2">
            {allImages.map((i) => (
              <li key={i.src} className="border-b border-rule py-2">
                <span className="text-navy">{i.caption}</span>{" "}
                <span className="text-charcoal/60">
                  <a className="link" href={i.sourceUrl} target="_blank" rel="noopener noreferrer">{i.creator}</a>, <a className="link" href={i.licenceUrl} target="_blank" rel="noopener noreferrer">{i.licence}</a>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container py-16">
        <SectionHeading eyebrow="Open questions" title="Still to be documented" intro="Records and confirmations being sought from his office, the National Assembly, the Adamawa State Government and archives." />
        <ol className="mt-10 grid gap-3 md:grid-cols-2">
          {openQuestions.map((q, i) => (
            <li key={q} className="flex gap-4 rounded-sm border border-rule bg-white p-4 text-sm leading-relaxed">
              <span className="font-serif text-lg text-gold-600">{String(i + 1).padStart(2, "0")}</span>
              <span>{q}</span>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
