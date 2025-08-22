export const prerender = true;
export function GET() {
  return new Response(
`User-agent: *
Allow: /
Sitemap: https://smooks.co.uk/sitemap-index.xml`,
    { headers: { 'Content-Type': 'text/plain' } }
  );
}
