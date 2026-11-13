import type { Metadata } from "next";
import { PageHero, ResearchNote } from "@/components/ui";
import { timeline, sectors, videos } from "@/content/content";
import { sources } from "@/content/sources";

export const metadata: Metadata = {
  title: "Media and Press",
  description: "News coverage, reports and video featuring Jibrilla Bindow from Nigerian and international outlets, with links to the original publishers.",
  alternates: { canonical: "/media" },
};

/** Map each source to the first fact on the site that cites it, to use as a one-line summary. */
function summaryFor(id: string) {
  const t = timeline.find((e) => e.fact.sources.includes(id));
  if (t) return t.fact.text;
  for (const s of sectors) for (const i of s.initiatives) if (i.implemented.sources.includes(id)) return i.implemented.text;
  return undefined;
}

export default function MediaPage() {
  const news = sources.filter((s) => s.outlet !== "Wikipedia" && !s.outlet.startsWith("INEC") && s.id !== "stears-2015");
  const byYear = news.reduce<Record<string, typeof news>>((acc, s) => {
    const y = s.date?.slice(0, 4) ?? "Undated";
    (acc[y] ??= []).push(s);
    return acc;
  }, {});
  const years = Object.keys(byYear).sort((a, b) => (a === "Undated" ? 1 : b === "Undated" ? -1 : Number(b) - Number(a)));

  return (
    <>
      <PageHero eyebrow="Media Centre" title="Media and Press" intro="Coverage of his career, newest first. Each entry links to the original publisher. Articles are summarised, not copied." />
      <section className="container section">
        {years.map((y) => (
          <div key={y} className="grid gap-4 border-t border-rule py-8 md:grid-cols-[140px_1fr] md:gap-6 md:py-10">
            <h2 className="font-serif text-4xl text-gold">{y}</h2>
            <ul className="grid gap-4">
              {byYear[y].map((s) => {
                const summary = summaryFor(s.id);
                return (
                  <li key={s.id}>
                    <a href={s.url} target="_blank" rel="noopener noreferrer" className="card group block">
                      <p className="eyebrow">{s.outlet}{s.date ? ` · ${s.date}` : ""}</p>
                      <h3 className="mt-2 font-serif text-xl text-navy group-hover:text-navy-700">{s.title}</h3>
                      {summary && <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-charcoal/70">{summary}</p>}
                      <p className="mt-3 text-xs font-semibold text-gold-700">Original source ↗</p>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
        <div className="mt-6 border-t border-rule pt-10">
          <h2 className="h-section">Video</h2>
          <span className="gold-rule mt-4" />
          {videos.length === 0 ? (
            <div className="mt-8"><ResearchNote>Interviews, documentaries and television appearances will be embedded from the broadcasters&rsquo; official channels once each is identified and its date confirmed.</ResearchNote></div>
          ) : (
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {videos.map((v) => (
                <figure key={v.youtubeId}>
                  <div className="aspect-video">
                    <iframe className="h-full w-full" src={`https://www.youtube-nocookie.com/embed/${v.youtubeId}`} title={v.title} loading="lazy" allowFullScreen />
                  </div>
                  <figcaption className="mt-2 text-sm">{v.title} · {v.outlet}, {v.date}</figcaption>
                </figure>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
