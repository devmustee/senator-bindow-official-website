// Regenerates docs/research-register.md from the site's content files.
// Run: npm run register
import { writeFileSync, mkdirSync } from "node:fs";
import { sources } from "../src/content/sources.ts";
import { timeline, sectors, offices, partyHistory, education, keyFacts, openQuestions, verificationLabel } from "../src/content/content.ts";

type Row = { subject: string; info: string; date: string; sources: string[]; verification: string; section: string };
const rows: Row[] = [];
const v = (x: keyof typeof verificationLabel) => verificationLabel[x];

for (const k of keyFacts) rows.push({ subject: k.label, info: k.fact.text, date: k.value, sources: k.fact.sources, verification: v(k.fact.verification), section: "Home" });
for (const t of timeline) rows.push({ subject: t.title, info: t.fact.text, date: t.date, sources: t.fact.sources, verification: v(t.fact.verification), section: "Timeline" });
for (const o of offices) for (const n of o.notes) rows.push({ subject: o.title, info: n.text, date: `${o.start} – ${o.end}`, sources: n.sources, verification: v(n.verification), section: "Career" });
for (const p of partyHistory) rows.push({ subject: `Party: ${p.party}`, info: p.fact.text, date: p.period, sources: p.fact.sources, verification: v(p.fact.verification), section: "Career" });
for (const s of sectors) for (const i of s.initiatives) rows.push({ subject: i.title, info: `${i.attribution}. ${i.implemented.text}`, date: i.date, sources: i.implemented.sources, verification: v(i.implemented.verification), section: `Governorship / ${s.title}` });
for (const e of education) rows.push({ subject: e.title, info: e.fact.text, date: "—", sources: e.fact.sources, verification: v(e.fact.verification), section: "Education" });

const byId = Object.fromEntries(sources.map((s) => [s.id, s]));
const esc = (s: string) => s.replace(/\|/g, "\\|");

let md = `# Research & Verification Register: Muhammadu Umaru Jibrilla Bindow\n\n_Generated from \`src/content\` on ${new Date().toISOString().slice(0, 10)}. Do not edit by hand; edit the content files and run \`npm run register\`._\n\n`;
md += `## Facts\n\n| Subject | Information | Date | Source(s) | Evidence type | Verification | Website section |\n|---|---|---|---|---|---|---|\n`;
for (const r of rows) {
  const src = r.sources.map((id) => `[${byId[id].outlet.split(",")[0]}](${byId[id].url})`).join("; ");
  const ev = Array.from(new Set(r.sources.map((id) => byId[id].evidence))).join(", ");
  md += `| ${esc(r.subject)} | ${esc(r.info)} | ${esc(r.date)} | ${src} | ${ev} | ${r.verification} | ${r.section} |\n`;
}
md += `\n## Sources\n\n| ID | Outlet | Title | Date | Evidence | Full text read |\n|---|---|---|---|---|---|\n`;
for (const s of sources) md += `| ${s.id} | ${esc(s.outlet)} | [${esc(s.title)}](${s.url}) | ${s.date ?? "n.d."} | ${s.evidence} | ${s.read ? "yes" : "no (abstract only)"} |\n`;
md += `\n## Open questions for his office\n\n${openQuestions.map((q) => `- ${q}`).join("\n")}\n`;

mkdirSync("docs", { recursive: true });
writeFileSync("docs/research-register.md", md);
console.log(`Wrote ${rows.length} facts and ${sources.length} sources to docs/research-register.md`);
