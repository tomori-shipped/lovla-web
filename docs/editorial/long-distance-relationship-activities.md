# Release brief — long-distance relationship activities

Prepared September 5, 2026. Author: **The Lovla Team**.

## Release boundary

User requested this approved post immediately, plus a minimal homepage refresh,
with a GitHub handoff so they can publish on Vercel. This work is prepared on
`codex/ldr-activities-minimal-home`; do not treat a pushed branch as a live post.
Do not deploy, promote, merge to production, or create a duplicate post on the
next scheduled run. First check this branch/PR, `main`, and the production URL.
If the post is still awaiting the user's release, report that status.

The next approved topics after this post remain the photo-to-coloring-page guide
and couples conversation questions. Reuse their individually approved artwork.
Do not reorder the remaining queue just because this first article was moved up.

## Search intent and editorial choice

- Primary query: `long distance relationship activities`.
- Supporting phrases: `long distance date ideas`, `virtual date ideas`,
  `things to do in a long distance relationship`.
- Intent: actionable things to do together, beyond passive movie watching.
- The user explicitly approved the topic and illustration before this release.
- Public search results checked September 5, 2026 continue to include activity
  lists and requests for practical ideas. This is qualitative intent evidence,
  **not verified keyword volume or proof that the query is currently trending**.
  No Search Console, paid keyword-volume dataset, or comparable trend series was
  available for this update. Do not invent volume, difficulty, or growth numbers.
- Distinct angle: 45 concrete activities grouped by available time and synchronous
  versus asynchronous participation, including low-energy and low-budget options.
- No competing apps, competitor store links, testimonials, clinical promises,
  unverified success rates, or claims of firsthand testing.
- The article is original practical guidance; it does not quote third-party lists.

Intent reference checked: [27 Long Distance Date Ideas](https://www.endlessdistances.com/27-long-distance-date-ideas/)
(published 2020; updated June 4, 2024). This is an evergreen comparison of search
intent, not a current trend signal.

Product facts checked against [Lovla’s official App Store listing](https://apps.apple.com/gb/app/lovla-couples-coloring-games/id6758548454):
photo-to-coloring, real-time shared coloring, and saving artwork in a journal.
The listing contains inconsistent legacy price/export text, so this update makes
no printing, free-trial, subscription-price, or export claims.

## SEO and conversion

- Route: `/blog/long-distance-relationship-activities`.
- Canonical: `https://www.lovla.app/blog/long-distance-relationship-activities`.
- Dedicated title, description, article Open Graph/Twitter tags, BlogPosting and
  BreadcrumbList structured data; one visible H1 and a crawlable guide navigation.
- Dates: September 5, 2026. If actual publication is later, update article dates
  and relevant sitemap timestamps to the real release date before publishing.
- Discovery: blog index, homepage inspiration link, and sitemap.
- Conversion: one contextual in-article Lovla activity and an end-of-guide iOS CTA.
- Existing article retained. No unsupported install-attribution claim; this change
  does not install an analytics SDK or create App Store campaign tokens.

## Approved article image

- Approved source: `exec-b68a0cfb-892c-4a19-9eb5-8895a74e40b3.png`.
- Published asset: `public/blog/long-distance-relationship-activities.webp`.
- Same composition, typography, palette, and content; format optimization only.
- 1672 × 941; descriptive alt text and explicit intrinsic dimensions.

## Homepage assets

The new homepage frames the photo and corresponding line art from Lovla's own
official screenshots. These are real product examples, not invented app screens.
CSS presentation windows exclude the surrounding legacy promotional copy.

- Photo source: https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/00/61/e2/0061e218-120f-37ad-9a0f-31e21aad5d25/2.png/600x1300bb.webp
- Artwork source: https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/cf/c7/7b/cfc77b86-c597-1df9-a243-851b8bcc227a/3.png/600x1300bb.webp

Homepage removes FAQ, “Why Couples Love Lovla,” oversized mascot sections, and the
redundant download panel. It preserves the iOS CTA, Android/web waitlist, legal
links, contact link, and blog discovery. Legacy components remain available for
other routes; the compact footer is opt-in.

## Validation and release handoff

- `npm run lint`: passed.
- Production build and TypeScript: passed. This workspace's Google Fonts TLS
  chain required the documented local build flag
  `NEXT_TURBOPACK_EXPERIMENTAL_USE_SYSTEM_TLS_CERTS=1`; no TLS checks were disabled
  and no environment-specific setting was added to the application.
- `node scripts/check-release.mjs`: passed against a local production server.
  Checks nine routes, exact activity count, canonical/social metadata, JSON-LD,
  image responses, sitemap/index/home discovery, section removals, and rejection
  of an invalid waitlist email. No email was sent.
- The cloud browser could not access the local preview (`ERR_BLOCKED_BY_CLIENT`).
  Desktop/mobile visual and valid-email delivery checks remain for the user's
  Vercel preview. Do not report those as passed.
- Check `/`, `/blog`, and the new article on Vercel Preview before production.
  Check the waitlist at narrow phone widths and verify the approved hero is
  uncropped. The existing email backend and production environment variables
  are unchanged.
