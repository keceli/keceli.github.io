import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const pubs = (await getCollection('publications')).filter((p) => p.data.type !== 'supplement').sort((a, b) => b.data.year - a.data.year);
  const entries = pubs.map((p) => {
    const d = p.data;
    const key = p.slug.replace(/[^a-z0-9]/gi, '_');
    const lines = [
      `@article{${key},`,
      `  title = {${d.title}},`,
      `  author = {${d.authors.join(' and ')}},`,
      `  journal = {${d.venue}},`,
      `  year = {${d.year}},`,
    ];
    if (d.doi) lines.push(`  doi = {${d.doi}},`);
    if (d.arxiv) lines.push(`  eprint = {${d.arxiv}},`, `  archivePrefix = {arXiv},`);
    lines.push(`  keywords = {${d.keywords.join(', ')}}`, '}');
    return lines.join('\n');
  });
  return new Response(`% Publications of Murat Keçeli — generated from keceli.github.io\n\n${entries.join('\n\n')}\n`, {
    headers: { 'Content-Type': 'application/x-bibtex; charset=utf-8' },
  });
};
