# Landing page imagery

All three couple portraits were created with the built-in OpenAI image generation tool on September 7, 2026. They are illustrative lifestyle imagery, not customer portraits or testimonials. Original generation files remain in Codex generated_images; optimized WebP copies are committed with the site.

- `public/media/couple-cafe.webp`: East Asian man and auburn-haired woman laughing at a café. Prompt direction: candid waist-up professional editorial photograph, 1024 × 1536, 50mm lens, soft window light, visible skin texture, natural asymmetry, fine film grain, plum knitwear, no lettering or logos.
- `public/media/couple-home.webp`: Black couple sharing a phone on their sofa. Prompt direction: natural apartment window light, cream cardigan and charcoal shirt, authentic skin and fabric texture, relaxed closeness, 1024 × 1536, realistic anatomy, no visible screen UI or lettering.
- `public/media/couple-coast.webp`: Latino man and South Asian woman on a coastal walk. Prompt direction: natural dusk lighting, cream linen and dusty pink knitwear, spontaneous portrait, 1024 × 1536, real texture and gentle color grading, no artificial glow or lettering.
- `public/media/lovla-festival.png`: User-supplied 1920 × 1080 festival illustration, copied without modification. Only this landscape version is used.
- `public/media/lovla-hand.png`: Existing OpenAI-generated hand-held phone campaign image, retained from the first redesign.
- `public/media/lovla-mascot-paintbrush.png`: User-supplied `mascotpaywall.png`, copied without modification on September 8, 2026. The transparent artwork replaces the cropped app screenshot in the final download section.

The benefits use CSS gradients over the photographs so copy stays accessible as layouts resize. The source reference is https://monex.framer.ai/: full-bleed portrait benefit cards, fixed translucent navigation, a gradient download panel, and a large footer wordmark, adapted to Lovla's existing plum and lavender palette.

## Testimonials

The home page carousel uses three short excerpts from public [US App Store reviews](https://apps.apple.com/us/app/lovla-couples-coloring-games/id6758548454), verified on September 8, 2026. The displayed usernames are Amourcameron, Reairria, and kkkokooplpp. The first excerpt is a review title; the others are taken from review bodies. Original wording is retained, and each card is marked as an excerpt. No reviews, ratings, customer names, or customer portraits were invented.

The carousel moves from left to right, pauses on hover or with its pause button, and becomes a manually scrollable row for visitors who prefer reduced motion. The duplicate group used for the loop is hidden from assistive technology.
