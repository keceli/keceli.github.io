import { getCollection } from 'astro:content';

export async function GET({ site }) {
  const posts = (await getCollection('posts'))
    .filter((entry) => !entry.data.draft)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  const items = posts
    .map(
      (entry) => `<item>
  <title>${entry.data.title}</title>
  <link>${new URL(`blog/${entry.slug}/`, site)}</link>
  <guid>${new URL(`blog/${entry.slug}/`, site)}</guid>
  <pubDate>${entry.data.date.toUTCString()}</pubDate>
  <description>${entry.data.summary}</description>
</item>`,
    )
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Murat Keçeli — Notes</title>
    <link>${site}</link>
    <description>Short notes on AI for science, HPC, software, and computational chemistry.</description>
${items}
  </channel>
</rss>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
