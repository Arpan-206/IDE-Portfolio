export async function GET() {
  const siteUrl = import.meta.env.SITE ?? "https://arpanpandey.dev";

  return new Response(
    `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\nHost: ${siteUrl}\n`,
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    },
  );
}
