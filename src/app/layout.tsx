import type { Metadata, Viewport } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { site } from "@/lib/site";
import { profile } from "@/content/content";
import { getLogo, getPortrait } from "@/lib/assets";

const serif = Source_Serif_4({ subsets: ["latin"], variable: "--font-serif", display: "swap", axes: ["opsz"] });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name}: Biography, Career and Public Service`, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: { type: "website", siteName: site.name, locale: "en_NG", url: "/" },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#101F36" };

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  alternateName: profile.alsoKnownAs,
  honorificPrefix: profile.honorific,
  nationality: { "@type": "Country", name: "Nigeria" },
  url: site.url,
  description: site.description,
  hasOccupation: [
    { "@type": "Role", roleName: "Governor of Adamawa State", startDate: "2015-05-29", endDate: "2019-05-29" },
    { "@type": "Role", roleName: "Senator for Adamawa North", startDate: "2011-06-06", endDate: "2015-05-29" },
  ],
  sameAs: ["https://en.wikipedia.org/wiki/Bindow_Jibrilla", "https://www.wikidata.org/wiki/Q4914035"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const logo = getLogo();
  const portrait = getPortrait();
  const ld = portrait ? { ...personLd, image: `${site.url}${portrait.src}` } : personLd;
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
        <SiteHeader logo={logo} />
        <main id="main">{children}</main>
        <SiteFooter logo={logo} />
      </body>
    </html>
  );
}
