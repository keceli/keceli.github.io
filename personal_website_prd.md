# Product Requirements Document (PRD)
## Personal Academic Website

### 1. Overview
Build a modern, minimalist personal academic website for Murat Keceli that showcases research, projects, publications, talks, proposals, software, collaborators, and selected writing. The site should be fast, easy to maintain, SEO-friendly, and deployable as a static website on GitHub Pages.

The website should present the user as a computational scientist working at the intersection of AI, HPC, computational chemistry, and materials science. It should feel professional, current, and technically polished.

### 2. Goals
- Create a clean personal website that serves as a research and professional hub.
- Make it easy to add and update content without editing many pages manually.
- Support structured sections for research projects, proposals, talks, publications, software, collaborators, and blog posts.
- Include analytics to measure visits, engagement time, and top pages.
- Host the site on GitHub Pages with a custom domain.
- Keep the architecture static-first to minimize maintenance.

### 3. Non-Goals
- No user accounts or login system.
- No server-side database in the initial version.
- No comments system in version 1.
- No complex CMS in version 1.
- No private/restricted content in version 1.

### 4. Recommended Tech Stack
- Framework: Astro
- Styling: Tailwind CSS
- Content: Markdown / MDX collections
- Hosting: GitHub Pages
- Analytics: Plausible or Google Analytics 4
- Optional search: pagefind or local static search
- CI/CD: GitHub Actions

### 5. Why This Stack
- Astro is ideal for fast content-heavy sites.
- Tailwind supports a modern minimalist design system.
- Markdown/MDX makes it easy to maintain papers, talks, projects, and blog posts.
- GitHub Pages keeps hosting simple and low-maintenance.
- Analytics can be added with a lightweight script while remaining compatible with static hosting.

### 6. Target Users
Primary users:
- Academic collaborators
- Students and postdocs
- Funding agencies and proposal reviewers
- Conference organizers
- Potential recruits
- Researchers interested in software/tools developed by the user

Secondary users:
- General professional visitors
- Industry researchers
- Journal editors or media contacts

### 7. User Needs
Visitors should be able to:
- Quickly understand who Murat is and what he works on
- Browse current and past research projects
- View publications and access links
- See talks and presentation materials
- Learn about software/tools and access code repositories
- Discover collaborators
- Read selected blog posts or notes
- Find contact information and CV
- Navigate easily on desktop and mobile

Site owner should be able to:
- Add content by creating markdown files
- Update metadata centrally
- Deploy automatically from GitHub
- Review basic analytics and engagement metrics
- Extend the site later without a major rewrite

### 8. Information Architecture
Top-level navigation:
- Home
- Research
- Projects
- Publications
- Talks
- Proposals
- Software
- Collaborators
- Blog
- CV
- Contact

Optional future pages:
- Teaching / Mentoring
- Media
- Resources
- Lab / Group

### 9. Page Requirements

#### 9.1 Home
Purpose:
- Introduce Murat and highlight core areas of expertise.

Must include:
- Name and title
- Short professional summary
- Main research themes
- Featured projects
- Selected recent publications
- Links to software/tools
- CTA buttons such as “View Research”, “Publications”, “Software”, “Contact”

Optional:
- Professional portrait or abstract hero graphic
- News/recent updates section

#### 9.2 Research
Purpose:
- Present key research themes in a structured way.

Suggested sections:
- AI for science
- HPC workflows
- Computational chemistry
- Materials science
- Scientific agents / autonomous workflows
- Quantum chemistry and ML potentials

Each theme should support:
- Title
- Summary
- Related projects
- Related papers
- Related software

#### 9.3 Projects
Purpose:
- Highlight active and past research/software projects.

Each project entry should support:
- Title
- Short description
- Long description
- Status (active/completed)
- Date or date range
- Tags
- Collaborators
- Related repositories
- Related papers
- Related talks
- Image or diagram
- External links

Examples:
- ChemGraph
- AutoMech
- IQC
- HPC workflow tooling
- AI-agent projects

#### 9.4 Publications
Purpose:
- Provide a searchable/filterable publications page.

Each publication should support:
- Title
- Authors
- Venue
- Year
- Abstract
- DOI
- PDF link
- Code link
- Project link
- Tags
- Highlight flag
- BibTeX block (optional)
- Open access indicator

Features:
- Filter by year
- Filter by topic
- Sort by newest first
- Highlight selected papers on top

#### 9.5 Talks
Purpose:
- Showcase invited talks, seminars, workshops, and presentations.

Each talk should support:
- Title
- Event
- Date
- Location
- Type (invited/conference/workshop/internal)
- Abstract or summary
- Slides link
- Video link
- Related project/paper

#### 9.6 Proposals
Purpose:
- Showcase selected proposal work and research directions.

Each proposal entry should support:
- Title
- Program/funder
- Date
- Status (submitted/awarded/concept)
- Role
- Summary
- Themes/tags
- Related collaborators
- Optional public-facing description only

Important:
- Sensitive or confidential content should not be included.
- This section should allow high-level summaries without exposing restricted proposal details.

#### 9.7 Software
Purpose:
- Present tools, codes, dashboards, and workflows.

Each software entry should support:
- Name
- One-line description
- Longer summary
- GitHub/GitLab link
- Documentation link
- License
- Tech stack
- Status
- Screenshots or diagrams
- Related papers/projects

#### 9.8 Collaborators
Purpose:
- Display collaboration network in a curated way.

Each collaborator should support:
- Name
- Affiliation
- Short description
- Relationship/context
- Website link
- Related projects
- Optional headshot

Could also support grouping by:
- Argonne
- Universities
- National labs
- External collaborators

#### 9.9 Blog
Purpose:
- Publish short posts, technical notes, essays, project updates, or reflections.

Each post should support:
- Title
- Date
- Summary
- Tags
- Reading time
- Hero image (optional)
- Body content in markdown/MDX

Features:
- Tag filtering
- Related posts
- RSS feed
- Syntax highlighting for code

#### 9.10 CV
Purpose:
- Provide a clean online CV and downloadable PDF.

Must include:
- Current role
- Education
- Appointments
- Selected honors
- Selected publications
- Mentoring/teaching/service (optional)
- Download PDF button

#### 9.11 Contact
Purpose:
- Make it easy to reach out.

Must include:
- Email
- Professional links (GitHub, Google Scholar, ORCID, LinkedIn)
- Optional contact form only if using third-party static form solution
- Affiliation and location

### 10. Content Model
All major content types should be implemented as content collections.

Required collections:
- projects
- publications
- talks
- proposals
- software
- collaborators
- posts

Example frontmatter fields:

Project:
```yaml
title:
summary:
date:
endDate:
status:
tags: []
featured: false
collaborators: []
links:
  repo:
  paper:
  demo:
image:
```

Publication:
```yaml
title:
authors: []
venue:
year:
date:
doi:
pdf:
code:
project:
tags: []
featured: false
abstract:
```

Talk:
```yaml
title:
event:
date:
location:
type:
slides:
video:
tags: []
summary:
```

Post:
```yaml
title:
date:
summary:
tags: []
draft: false
featured: false
```

### 11. Design Requirements
Visual style:
- Modern
- Minimalist
- Academic/professional
- Clean spacing
- Strong typography
- Light theme by default, optional dark mode later

Layout principles:
- Generous whitespace
- Clear hierarchy
- Simple navigation
- Limited color palette
- Subtle hover interactions
- Responsive cards and lists
- Fast loading

Suggested visual direction:
- Neutral background
- Dark text
- One restrained accent color
- Sans-serif typography for UI
- Optional serif for headings if elegant and clean

Components needed:
- Navbar
- Footer
- Hero section
- Content cards
- Tag badges
- Filter controls
- Search input
- Publication list item
- Timeline/list layouts
- CTA buttons
- Social link icons

### 12. Functional Requirements

#### 12.1 Navigation
- Responsive top navigation
- Mobile menu
- Active page highlighting
- Footer navigation

#### 12.2 Search and Filtering
- Search across publications, projects, and blog posts
- Filter publications by year/topic
- Filter projects by tag/status
- Filter blog posts by tag

#### 12.3 SEO
- Page-specific title and meta description
- Open Graph tags
- Twitter card tags
- Sitemap
- RSS for blog
- Structured metadata where practical

#### 12.4 Analytics
Need visibility into:
- Total visits
- Unique visitors
- Page views
- Top pages
- Referral sources
- Approximate engagement time/time on page
- Bounce/engagement indicators

Acceptable implementations:
- Plausible
- Google Analytics 4
- Optional future self-hosted analytics

Important note:
Because the site is static, analytics should be script-based. “Time spent” will be approximate and depend on the provider’s engagement measurement model.

#### 12.5 Performance
- Lighthouse-friendly implementation
- Optimized images
- Minimal JavaScript
- Static generation for all content pages
- Good mobile performance

#### 12.6 Accessibility
- Semantic HTML
- Keyboard-navigable menus
- Good color contrast
- Accessible labels for icons/forms
- Reasonable heading order

### 13. Hosting and Deployment
Initial hosting:
- GitHub Pages

Requirements:
- Deploy automatically on push to main
- Build using GitHub Actions
- Support custom domain
- Add CNAME configuration if needed

Why GitHub Pages first:
- Low maintenance
- Good fit for static content
- Free/low-cost
- Easy version control

Future migration path:
- If server-side features become necessary, site can later move to Vercel, Netlify, or a personal server.

### 14. Admin / Update Workflow
Owner workflow should be simple:
1. Add or edit markdown files in content collections
2. Commit/push to GitHub
3. GitHub Actions builds and deploys automatically

Nice-to-have:
- Templates for new publications/projects/posts
- Scripts to import publication metadata
- Optional BibTeX-to-markdown conversion script

### 15. Suggested Homepage Content
Hero:
- Name
- Title
- One-sentence identity statement

Example positioning:
“Computational scientist working at the intersection of AI, high-performance computing, computational chemistry, and materials design.”

Featured sections:
- Research themes
- Featured projects
- Selected publications
- Software/tools
- Recent talks or posts

### 16. MVP Scope
Version 1 should include:
- Home
- Research
- Projects
- Publications
- Talks
- Software
- Blog
- CV
- Contact
- Analytics integration
- Search/filter for at least publications and posts
- GitHub Pages deployment

Version 1 can defer:
- Proposals
- Collaborators page
- Dark mode
- Contact form
- Complex publication import tooling

### 17. Future Enhancements
- Dark mode
- Auto-import publications from BibTeX/ORCID/Google Scholar export
- Interactive collaborator graph
- Better site-wide search
- Embedded PDFs/slides
- News feed on homepage
- Teaching/mentoring section
- Project timelines
- Self-hosted privacy-friendly analytics
- Simple admin tooling for content generation

### 18. Acceptance Criteria

#### Content and Structure
- Site includes all MVP pages
- Each page has a clear visual hierarchy
- Content types are driven by structured markdown/MDX collections
- Publications, projects, and posts can be added without editing page templates

#### Design
- Site looks modern, minimal, and professional
- Fully responsive on desktop and mobile
- Consistent typography, spacing, and card/list components

#### Technical
- Site builds successfully with Astro
- Site deploys automatically to GitHub Pages via GitHub Actions
- Custom domain is supported
- Analytics script is integrated and reporting data
- SEO metadata exists for all major pages
- Performance is good on a representative Lighthouse run

#### Usability
- Visitors can find publications, projects, and software within a few clicks
- Search/filter works for at least two content types
- External links to papers/code are easy to access
- Contact information is easy to find

### 19. Open Questions
- Should publications be manually curated or imported from BibTeX?
- Should the proposals page launch in MVP or later?
- Should collaborators be a dedicated page or embedded within project pages first?
- Which analytics provider should be used in version 1: Plausible or GA4?
- Should blog posts be formal essays, short notes, or both?
- Is dark mode needed in version 1?

### 20. Cursor Implementation Guidance
Build the project as a production-ready Astro site with Tailwind and content collections.

Priorities:
1. Set up base Astro project structure
2. Configure Tailwind and global layout
3. Create shared components
4. Define content collections and schemas
5. Build homepage and top-level pages
6. Implement publication/project/post listing and detail pages
7. Add search/filter
8. Add analytics hook
9. Configure GitHub Actions deployment to GitHub Pages
10. Polish SEO, accessibility, and responsiveness

Suggested folder structure:
```text
src/
  components/
  layouts/
  pages/
  content/
    projects/
    publications/
    talks/
    software/
    posts/
  styles/
public/
```

### 21. Deliverable
A polished static academic personal website that can be hosted on GitHub Pages, updated through markdown content, and extended over time without major architectural changes.
