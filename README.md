# keceli.github.io — research website of Murat Keçeli

Static site built with [Astro 5](https://astro.build) and content collections, deployed to GitHub Pages.
Light theme by default with a dark-mode toggle; blue palette; no client-side framework — the only
JavaScript is the theme toggle, the mobile menu, and the publication/software filters.

## Quick start

```bash
npm install          # once
npm run dev          # http://localhost:4321 with live reload
npm run build        # static output in dist/
npm run linkcheck    # verify internal links in dist/ (run after build)
```

Node 20+ is required (Homebrew `node` works; `nvm use 20` is fine too).

## Site map

| Route | Source | Content |
|---|---|---|
| `/` | `src/pages/index.astro` | Hero, three pillars, facts, featured projects, vision, selected papers, software, students callout, news, notes |
| `/research/` and `/research/<slug>/` | `src/pages/research/`, `src/content/projects/*.md` | Eight research projects with narrative, papers, code, collaborators, funding, and a "for students" note |
| `/publications/` and `/publications/<slug>/` | `src/pages/publications/`, `src/content/publications/*.md` | Filterable list (year, topic, role, search) and per-paper pages with BibTeX; `/publications.bib` exports everything |
| `/software/` | `src/pages/software/index.astro`, `src/content/software/*.md` | Repositories grouped by theme with status/search filters and organization footprint |
| `/talks/` | `src/content/talks/*.md` | Timeline by year, filter by type |
| `/students/` | `src/pages/students.astro`, `src/data/cv.ts` | Programs, starter projects, per-project contribution ideas, mentoring record |
| `/cv/` | `src/pages/cv.astro`, `src/data/cv.ts`, `src/content/funding/*.md` | Online CV with PDF download (`public/Murat_Keceli_CV_m.pdf`) |
| `/blog/` | `src/content/posts/*.md` | Notes; `/rss.xml` feed |
| `/contact/` | `src/pages/contact.astro` | Email, office, profiles |

## Editing content

**Identity, navigation, pillars, career timeline, quick facts, news** — `src/data/site.ts`.
Add a news item to the `news` array (newest first); the home page shows all of them.

**CV data (education, appointments, awards, service, mentoring, skills, book chapters, press)** — `src/data/cv.ts`.

**Research projects** — one Markdown file per project in `src/content/projects/`. Front matter fields are
validated by `src/content/config.ts`. `publications` and `software` lists reference entry slugs
(publication slug = PDF file stem; software slug = lowercase repo name). `forStudents` renders as a callout.

**Publications and software are generated, not hand-written.** The source of truth is the two catalogs in
`public/papers/`:

1. Drop the new PDF into `public/papers/` named `year_firstauthorlastname_shorttitle.pdf`.
2. Add an entry to `public/papers/papers.md` (copy an existing block: title, authors, venue with DOI, role, summary, keywords).
3. Add the stem to `PAPER_MAP` in `scripts/generate_content.py` (project slug, topic, featured flag, type) and, if there is code, to `PAPER_CODE`.
4. For software, add or edit a bullet in `public/papers/github_projects.md` under the right theme heading (the parser expects the exact `- **[owner/repo](url)** · language · ★stars · years · ~N commits by keceli · role` line followed by an indented description and `*Keywords:*` line).
5. Run `npm run content` (or `python3 scripts/generate_content.py`) and rebuild.

Generated files carry a `<!-- generated ... -->` header. Remove that header from a file if you want to hand-edit it; the generator will then leave it alone.

**Talks** — one small Markdown file per talk in `src/content/talks/` (title, event, date, dateLabel, location, type, optional url/slides/video).

**Funding** — `src/content/funding/*.md`; the `project` field links a grant to a project page.

**Notes/blog** — `src/content/posts/*.md` with `draft: true` to hide.

**Portrait** — `public/images/portrait.jpg` (square crop works best; current file is 843×771).

## Design

Tokens live at the top of `src/styles/global.css`. The palette is navy `#0b2a5b`, cobalt `#1d4ed8`, sky `#0ea5e9` on a cool off-white `#f4f7fc`; the dark theme swaps the same variables. Headings use Newsreader (serif) and body text Inter, loaded from Google Fonts with system fallbacks; remove the two `<link>` tags in `src/layouts/BaseLayout.astro` for a fully self-hosted build. Motion respects `prefers-reduced-motion`.

## Deploying to GitHub Pages (keceli.github.io)

The workflow in `.github/workflows/deploy.yml` builds on every push to `main` and publishes with the official Pages actions. The site URL is set in `astro.config.mjs` (`site: 'https://keceli.github.io'`).

Two options:

**A. Replace the current keceli.github.io repository (recommended, root domain, no base path).**

```bash
# in this folder
git init -b main
git add -A
git commit -m "New Astro research website"
# back up the old Quarto site first, e.g. rename the existing repo to keceli.github.io-quarto on GitHub,
# then create a new empty repo named keceli.github.io and push:
git remote add origin git@github.com:keceli/keceli.github.io.git
git push -u origin main
```

Then in the repository settings → Pages, set **Source: GitHub Actions**. The first workflow run publishes the site.

**B. Keep a differently named repository (e.g. `research-hub`).** Set `base: '/research-hub'` in `astro.config.mjs`, change `site` to `https://keceli.github.io`, and prefix internal links with `import.meta.env.BASE_URL` — or simpler, add a custom domain. Option A avoids all of this.

Analytics: the site uses [GoatCounter](https://www.goatcounter.com/) (cookie-free, no consent banner). Set the repository variable `PUBLIC_GOATCOUNTER_CODE` to your GoatCounter site code (the `<code>` in `<code>.goatcounter.com`); the dashboard lives at `https://<code>.goatcounter.com`. `PUBLIC_GA_MEASUREMENT_ID` still enables Google Analytics if ever wanted. Both are read at build time in `src/components/Analytics.astro`; leave them unset for no tracking.

## Repository size note

`public/papers/` holds 37 PDFs (~120 MB). GitHub Pages allows 1 GB, but if the repository grows, consider moving PDFs to a release asset or Zenodo and pointing the `pdf` field at those URLs.

## Layout

```
public/            static assets (papers/, images/, favicon.svg, CV PDF)
public/papers/     PDFs + papers.md + github_projects.md + github_repos_inventory.csv (catalogs)
scripts/           generate_content.py (catalog → collections), check_links.py
src/content/       collections: projects, publications*, software*, talks, funding, posts   (* generated)
src/data/          site.ts (identity, nav, pillars, timeline, news), cv.ts
src/components/    Header, Footer, Icon, HeroGraphic, PageHead, ProjectCard, PublicationItem, SoftwareCard, Analytics
src/layouts/       BaseLayout.astro (head, SEO, JSON-LD, theme bootstrap)
src/pages/         routes
src/styles/        global.css (design tokens and components)
```

## Draft sections (not published yet)

Research, Outreach & Training, and CV exist in the source tree but are not built or linked.
They are controlled in two places:

1. `draftSections` in `src/data/site.ts` — listing a section there removes it from the navigation,
   the sitemap, and every internal link (project links on papers/software, hero buttons, home sections).
2. The page files are renamed with a leading underscore so Astro skips them:
   `src/pages/_research/`, `src/pages/_outreach.astro`, `src/pages/_cv.astro`.

To publish a section: delete its name from `draftSections` **and** rename the file(s) back
(`_research` → `research`, `_outreach.astro` → `outreach.astro`, `_cv.astro` → `cv.astro`), then rebuild.
Content (`src/content/projects/*.md`, `activities` in `src/data/cv.ts`, `src/data/cv.ts`) is untouched and can be edited meanwhile.
