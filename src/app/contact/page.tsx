import type { Metadata } from "next";
import { PageHero, ResearchNote } from "@/components/ui";
import { contact } from "@/content/content";

export const metadata: Metadata = {
  title: "Contact and Official Enquiries",
  description: "Official channels for media enquiries, speaking invitations, corrections to the record and general correspondence.",
  alternates: { canonical: "/contact" },
};

const kinds = [
  ["Media enquiries", "Interview requests, statements and press accreditation."],
  ["Speaking & events", "Invitations to lectures, conferences and public events."],
  ["Corrections & archives", "Documents, photographs or corrections that improve the record."],
  ["General enquiries", "All other correspondence."],
];

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Correspondence" title="Contact and Official Enquiries" />
      <section className="container section grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
        <div className="grid gap-4 sm:grid-cols-2">
          {kinds.map(([t, d]) => (
            <div key={t} className="card">
              <h2 className="font-serif text-xl">{t}</h2>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/70">{d}</p>
            </div>
          ))}
        </div>
        <div>
          <h2 className="h-section">Official channels</h2>
          <span className="gold-rule mt-4" />
          {contact.length > 0 ? (
            <ul className="mt-8 space-y-3">
              {contact.map((c) => (
                <li key={c.label}><span className="eyebrow mr-3">{c.label}</span><a className="link" href={c.href}>{c.value}</a></li>
              ))}
            </ul>
          ) : (
            <div className="mt-8">
              <ResearchNote>
                Official email addresses, office details and social-media accounts will be published here once his office confirms them. No private contact details are published.
              </ResearchNote>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
