# Muhammadu Umaru Jibrilla Bindow: Digital Biography & Legacy Archive

A static Next.js 15 site (App Router, TypeScript, Tailwind). There is no admin panel or database. All content lives in two typed files.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (all pages static)
npm run register   # regenerate docs/research-register.md from the content files
```

Set `NEXT_PUBLIC_SITE_URL` to the real domain before deploying. It drives canonical URLs, the sitemap and Open Graph tags. The value in `src/lib/site.ts` is a placeholder.

## Editing content

| What | Where |
|---|---|
| Sources (every citation) | `src/content/sources.ts` |
| Timeline, offices, party history, governorship sectors, education, statements, awards, photos, videos, contact, open questions | `src/content/content.ts` |

Rules the code enforces by convention:

- Every fact is a `{ text, sources, verification }` object. A source id must exist in `sources.ts`.
- `verification` is one of `verified`, `reported`, `claim` or `unconfirmed`, and the site shows it as a badge.
- Governorship items carry an `attribution` (initiated by the administration, Federal Government project, and so on). Federal projects are never presented as state achievements.
- Photos: add licensed files to `public/gallery/` and an entry to `photos` with credit and licence. The gallery filters, lightbox and lazy loading then work automatically.
- Portrait: set `profile.portrait` to show a licensed portrait in place of the monogram.

## Research status

See `docs/research-register.md` and the `/sources` page. The main gaps are date of birth, schooling, Senate committees and bills, final project outcomes, awards, licensed photographs and official contact channels. They are listed as open questions for his office.
