# Lovla search visibility

## Implemented foundation

The preferred origin is `https://www.lovla.app`. Every public page declares its own canonical URL, title, description, Open Graph URL and image, and Twitter card. General pages use a generated 1200 × 630 brand card at `/share-image`; articles use their own artwork. Metadata defaults live in `lib/seo.ts` and `app/layout.tsx`.

The homepage describes Lovla as a couples coloring app and links directly to useful guides. Its WebSite and SoftwareApplication data connect to the sitewide Organization identity. Article pages include Article or BlogPosting data and breadcrumbs. The blog index describes the same article list readers see using CollectionPage and ItemList. No invented ratings, reviews, prices or FAQ rich result promises are included. SoftwareApplication data describes the product; it does not imply eligibility for Google's app rich results, which have additional requirements.

The blog index and image sitemap share `constants/blog/index.ts`. Robots allows public content and assets while excluding API endpoints. Large image previews are enabled. Pages remain statically rendered, with responsive Next.js images and no additional client JavaScript for these SEO changes.

## Before publishing

Run `npm run lint`, `npm run build`, then `npm run check:seo`. The last command inspects generated production HTML for metadata, canonical and social URLs, duplicate titles, H1s, image alt attributes, article/breadcrumb data, internal links and fragments, robots, and sitemap coverage. It is intentionally a separate command so it can be used in CI after building without adding a runtime dependency.

Keep the existing article URLs stable. When a URL must change, add a permanent redirect and update internal links and the sitemap. Preserve publication dates; change modification dates when the article materially changes. Each new article needs a distinct reader problem and useful original content. Do not add city, platform, or competitor variations unless the answer really differs.

## Search Console and Bing setup

No authenticated Search Console integration was available during this work. Indexing status, search demand, actual traffic and field Core Web Vitals have not been measured.

Prefer verifying a Google Search Console Domain property through DNS. An HTML tag verification alternative is supported through the `GOOGLE_SITE_VERIFICATION` deployment environment variable. Set it to the token supplied by Google, not the entire meta tag. Bing's HTML token is supported through `BING_SITE_VERIFICATION`. Neither token is required for normal rendering. Do not invent verification tokens or copy a value from another property. Rebuild after changing these values.

After the approved changes deploy:

1. Submit `https://www.lovla.app/sitemap.xml` in the verified property.
2. Use URL Inspection for the homepage and new articles. Check Google's selected canonical and rendered content, then request indexing where appropriate.
3. Confirm production redirects and metadata. The live apex domain returned a 307 redirect to www on September 19, 2026. In Vercel domain settings, change that to a permanent 308 if www is the intended permanent primary domain; an upstream Vercel redirect may take precedence over application configuration. This setting was not changed during local preview work.
4. Check the representative articles in Google's Rich Results Test. The local check validates presence and JSON syntax, not Google's complete eligibility rules.
5. Review PageSpeed Insights and Search Console Core Web Vitals on production. Track actual LCP, INP and CLS rather than assuming metadata changes improve performance.

## Weekly measurement

Export Search Console Search results for the latest 28 days and compare the preceding 28 days, grouping by query and page. Prioritize relevant queries with impressions and low clicks, pages losing traffic, and overlapping URLs answering the same intent. Record the query, landing page, impressions, clicks, CTR and average position before changing the title or opening answer. Allow time for recrawling before judging changes. Expand winning topics and consolidate redundant pages rather than publishing more of the same.

Earn relevant links through useful original guides and genuine app coverage. Do not buy links or fabricate testimonials. No ranking increase is guaranteed by technical changes alone.

## Primary references

- https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- https://developers.google.com/search/docs/appearance/structured-data/article
- https://developers.google.com/search/docs/appearance/structured-data/software-app
