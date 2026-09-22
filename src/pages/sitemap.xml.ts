import { getCollection } from 'astro:content';

import { isLive } from '../data/site';

const staticPages = ['', 'research/', 'publications/', 'software/', 'talks/', 'outreach/', 'blog/', 'cv/', 'contact/'].filter((p) => isLive(p.replace('/', '') || 'home'));

export async function GET({ site }: { site: URL }) {
  const [projects, publications, posts] = await Promise.all([getCollection('projects'), getCollection('publications'), getCollection('posts')]);
  const urls = [
    ...staticPages.map((p) => new URL(p, site).toString()),
    ...(isLive('research') ? projects.map((p) => new URL(`research/${p.slug}/`, site).toString()) : []),
    ...publications.map((p) => new URL(`publications/${p.slug}/`, site).toString()),
    ...posts.filter((p) => !p.data.draft).map((p) => new URL(`blog/${p.slug}/`, site).toString()),
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `  <url><loc>${u}</loc></url>`).join('\n')}\n</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
