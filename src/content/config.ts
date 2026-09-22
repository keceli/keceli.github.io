import { defineCollection, z } from 'astro:content';

const linksSchema = z
  .object({
    repo: z.string().url().optional(),
    paper: z.string().optional(),
    demo: z.string().url().optional(),
    docs: z.string().url().optional(),
    site: z.string().url().optional(),
  })
  .optional();

// Research projects: the organizing unit of the site. Each project ties
// together a narrative, publications, software, and collaborators.
const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    summary: z.string(),
    period: z.string(),
    order: z.number().default(99),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    icon: z.enum(['agent', 'data', 'flame', 'lattice', 'matrix', 'chat', 'wave', 'students']).default('agent'),
    collaborators: z.array(z.string()).default([]),
    links: linksSchema,
    publications: z.array(z.string()).default([]),
    software: z.array(z.string()).default([]),
    forStudents: z.string().optional(),
  }),
});

// Publications are generated from public/papers/papers.md by
// scripts/generate_content.py. Edit the catalog, then rerun the script.
const areaEnum = z.array(z.enum(['ai', 'hpc', 'quantum'])).default([]);

const publications = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    venue: z.string(),
    year: z.number(),
    date: z.coerce.date(),
    type: z.enum(['journal', 'conference', 'preprint', 'report', 'review', 'supplement']).default('journal'),
    doi: z.string().optional(),
    arxiv: z.string().optional(),
    pdf: z.string().optional(),
    code: z.string().url().optional(),
    project: z.string().optional(),
    topic: z.string(),
    areas: areaEnum,
    keywords: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    summary: z.string(),
  }),
});

// Software entries are generated from public/papers/github_projects.md.
const software = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    fullName: z.string(),
    summary: z.string(),
    repo: z.string().url(),
    docs: z.string().url().optional(),
    language: z.string().optional(),
    stars: z.number().default(0),
    years: z.string().optional(),
    commits: z.number().optional(),
    role: z.string().optional(),
    theme: z.string(),
    areas: areaEnum,
    project: z.string().optional(),
    keywords: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    status: z.enum(['active', 'maintained', 'archived']).default('maintained'),
  }),
});

const talks = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    event: z.string(),
    date: z.coerce.date(),
    dateLabel: z.string().optional(),
    location: z.string().optional(),
    type: z.enum(['invited', 'contributed', 'webinar', 'workshop', 'lecture', 'poster']),
    url: z.string().url().optional(),
    slides: z.string().url().optional(),
    video: z.string().url().optional(),
    tags: z.array(z.string()).default([]),
    summary: z.string().optional(),
  }),
});

const funding = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    agency: z.string(),
    role: z.string(),
    status: z.enum(['ongoing', 'ended']),
    period: z.string(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    summary: z.string(),
    project: z.string().optional(),
  }),
});

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    tags: z.array(z.string()),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  projects,
  publications,
  software,
  talks,
  funding,
  posts,
};
