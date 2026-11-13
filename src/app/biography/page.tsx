import type { Metadata } from "next";
import Link from "next/link";
import { Cite, PageHero, ResearchNote, VerificationBadge } from "@/components/ui";
import { statements, profile } from "@/content/content";

export const metadata: Metadata = {
  title: "Biography: His Life Story",
  description:
    "The biography of Muhammadu Umaru Jibrilla Bindow: his business career in Mubi, his election as Senator for Adamawa North in 2011, his term as Governor of Adamawa State from 2015 to 2019, and his public life since.",
  alternates: { canonical: "/biography" },
};

type Chapter = { id: string; n: number; title: string; date?: string; body: React.ReactNode };

const chapters: Chapter[] = [
  {
    id: "early-life",
    n: 1,
    title: "Early Life and Family Background",
    body: (
      <>
        <p>
          Muhammadu Umaru Jibrilla Bindow was born in Adamawa State in north-eastern Nigeria. Published sources do not agree on the year. Some give 15 April 1965 and others 16 June 1963.
          <Cite ids={["wiki"]} /> <VerificationBadge level="unconfirmed" />
        </p>
        <p>
          The press writes his name in several ways, including <em>Bindow Jibrilla</em>, <em>Bindo Jibrilla</em> and <em>Mohammed Umar Jibrilla Bindow</em>. They all refer to the same man.
        </p>
      </>
    ),
  },
  {
    id: "birthplace",
    n: 2,
    title: "Birthplace, Childhood and Heritage",
    body: (
      <p>
        His public life has centred on Mubi, the commercial town of northern Adamawa. He founded businesses there and still holds his party membership at his ward there.
        <Cite ids={["nd-2011-industrialist", "dailytrust-2026-apc"]} /> By 2010 he held the traditional title of Sardauna of Mubi Emirate.
        <Cite ids={["tide-2010-sardauna"]} /> Details of his childhood, family heritage and upbringing will be added once his family or office has confirmed them.
      </p>
    ),
  },
  {
    id: "influences",
    n: 3,
    title: "Early Influences and Personal Values",
    body: (
      <p>
        This chapter will draw on interviews and first-hand accounts. It will not attribute values to him that he has not expressed himself.
        His own statements in office are collected under <Link href="/leadership" className="link">Leadership & Values</Link>.
      </p>
    ),
  },
  {
    id: "education",
    n: 4,
    title: "Education and Academic Development",
    body: (
      <p>
        His academic record has not yet been documented from primary sources. A 2018 report says he is believed to hold a diploma in business administration from a foreign institution. A government official quoted in the same report said he holds an honorary doctorate from Crescent University.
        <Cite ids={["vanguard-2018-qualification"]} /> <VerificationBadge level="unconfirmed" /> The full record and the questions still open are on the{" "}
        <Link href="/education" className="link">Education</Link> page.
      </p>
    ),
  },
  {
    id: "business",
    n: 5,
    title: "Business and Entrepreneurial Journey",
    date: "Before 2011",
    body: (
      <p>
        He came to public attention as a businessman. In 2010 and 2011 the press described him as an industrialist and a business tycoon who was new to politics, and said he had founded three companies in Mubi employing about 400 people.
        <Cite ids={["dt-2010-tycoon", "nd-2011-industrialist"]} /> His reported interests have included farming and oil and gas.
        <Cite ids={["vanguard-2018-qualification"]} /> <VerificationBadge level="reported" />
      </p>
    ),
  },
  {
    id: "public-service",
    n: 6,
    title: "Entry into Public Service",
    date: "2011",
    body: (
      <>
        <p>
          He entered elective politics in the 2011 cycle. In January 2011 he won the Peoples Democratic Party primary for Adamawa North with 626 votes, ahead of the incumbent senator, Mohammed Mana, who had 474.
          <Cite ids={["pd-2011-primary"]} /> The result was challenged, and in March 2011 a Federal High Court in Abuja affirmed him as the party's candidate.
          <Cite ids={["channels-2011-court"]} />
        </p>
        <p>
          On 9 April 2011 he won the seat with 75,112 votes against 70,890 for Boni Haruna, a former governor of the state.
          <Cite ids={["punch-2011-result", "inec-2011"]} /> He sat in the 7th National Assembly from June 2011 to May 2015.
          <Cite ids={["wiki"]} />
        </p>
      </>
    ),
  },
  {
    id: "political-journey",
    n: 7,
    title: "Political Journey",
    date: "2014–2015",
    body: (
      <p>
        By September 2014 he had joined the All Progressives Congress, which named him its candidate for a governorship election then planned for October 2014.
        <Cite ids={["channels-2014-candidate"]} /> In the general election of 11 April 2015 he won the governorship as the APC candidate. His opponents included Markus Gundiri of the SDP and Nuhu Ribadu.
        <Cite ids={["stears-2015", "wiki"]} />
      </p>
    ),
  },
  {
    id: "governorship",
    n: 8,
    title: "Governorship of Adamawa State",
    date: "2015–2019",
    body: (
      <>
        <p>
          He was sworn in on 29 May 2015, with Martins Babale as deputy governor.
          <Cite ids={["wiki"]} /> Federal allocations were falling and much of northern Adamawa was recovering from insurgency. The governor said the state had used overdrafts to pay salaries. He said he had cut his own pay by about half and was clearing arrears owed to workers.
          <Cite ids={["blueprint-2015-roads", "newsexpress-2015-roads"]} /> <VerificationBadge level="claim" />
        </p>
        <p>
          He put roads first, starting with township roads in Yola, Jimeta and Mubi. Rural routes followed, among them the 27.5 km Girei–Pariya–Wuro Boki road started in 2016. He said schools, hospitals and agriculture would come next.
          <Cite ids={["blueprint-2015-roads", "eagle-2016-girei"]} /> He won the APC ticket again in October 2018.
          <Cite ids={["newsguru-2018-primary"]} /> In March 2019 he lost the governorship to Ahmadu Umaru Fintiri of the PDP, by 336,386 votes to 376,552, after a supplementary poll.
          <Cite ids={["ngf-fintiri", "premiumtimes-2019"]} /> He later conceded and congratulated his successor.
          <Cite ids={["thecable-2019-concede"]} />
        </p>
        <p><Link href="/governorship" className="link">Read the full governorship record →</Link></p>
      </>
    ),
  },
  {
    id: "philosophy",
    n: 9,
    title: "Leadership Philosophy",
    body: (
      <p>
        Only his recorded words are used here. In office he said he would serve all citizens regardless of socio-political differences.
        <Cite ids={["eagle-2016-girei"]} /> In 2026, on returning to the APC, he said: &ldquo;{statements.find((s) => s.direct)?.text}&rdquo;
        <Cite ids={["dailytrust-2026-apc"]} />
      </p>
    ),
  },
  {
    id: "later",
    n: 10,
    title: "Later Public Activities",
    date: "2019–present",
    body: (
      <p>
        He has stayed active in Adamawa politics. He came third in the APC governorship primary of May 2022 and left the party in January 2023.
        <Cite ids={["thecable-2022-primary", "channels-2023-pdp"]} /> In late 2025 he joined the African Democratic Congress coalition. He withdrew from its governorship race in May 2026 and resigned from the party in July 2026.
        <Cite ids={["saharareporters-2025-adc", "dailytrust-2026-apc", "blueprint-2026-adc-exit"]} /> In August 2026 he re-registered with the APC at his ward in Mubi ahead of the 2027 elections.
        <Cite ids={["dailytrust-2026-apc", "arise-2026-apc"]} />
      </p>
    ),
  },
  {
    id: "legacy",
    n: 11,
    title: "Personal Legacy",
    body: (
      <p>
        He has served Adamawa both in the National Assembly and as its governor. This archive leaves the judgement of his legacy to the reader. It sets out his record, the claims made for it and the evidence behind each.
      </p>
    ),
  },
];

export default function BiographyPage() {
  return (
    <>
      <PageHero eyebrow="Biography" title="His Life Story" intro={`${profile.name}: businessman, Senator for Adamawa North and Governor of Adamawa State.`} />
      <div className="container section grid gap-8 lg:grid-cols-[240px_1fr] lg:gap-12">
        <details className="rounded-md border border-rule bg-white lg:hidden">
          <summary className="flex min-h-[48px] items-center justify-between px-4 text-sm font-semibold text-navy">
            Jump to a chapter <span aria-hidden className="text-gold-700">+</span>
          </summary>
          <ol className="grid border-t border-rule px-4 py-2 text-sm">
            {chapters.map((c) => (
              <li key={c.id}>
                <a href={`#${c.id}`} className="-ml-px flex min-h-[40px] items-center border-l border-transparent pl-4 text-charcoal/75 hover:border-gold hover:text-navy">
                  {c.title}
                </a>
              </li>
            ))}
          </ol>
        </details>
        <nav aria-label="Chapters" className="hidden lg:sticky lg:top-28 lg:block lg:self-start">
          <p className="eyebrow">Chapters</p>
          <ol className="mt-4 grid gap-1 border-l border-rule text-sm">
            {chapters.map((c) => (
              <li key={c.id}>
                <a href={`#${c.id}`} className="-ml-px flex min-h-[40px] items-center border-l border-transparent pl-4 text-charcoal/75 hover:border-gold hover:text-navy">
                  {c.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <article className="max-w-3xl">
          {chapters.map((c) => (
            <section key={c.id} id={c.id} className="border-b border-rule py-10 first:pt-0 last:border-0 sm:py-12">
              <div className="flex items-baseline gap-4">
                <span className="font-serif text-3xl text-gold-700/70 sm:text-4xl">{String(c.n).padStart(2, "0")}</span>
                <div>
                  {c.date && <p className="eyebrow">{c.date}</p>}
                  <h2 className="font-serif text-2xl leading-tight sm:text-3xl">{c.title}</h2>
                </div>
              </div>
              <div className="prose-body mt-5 sm:mt-6">{c.body}</div>
            </section>
          ))}
          <ResearchNote>
            Biographical chapters with little detail are waiting for documents from his office or family. Nothing has been filled in by assumption. Corrections and documentary evidence are welcome through the{" "}
            <Link href="/contact" className="link">contact page</Link>.
          </ResearchNote>
        </article>
      </div>
    </>
  );
}
