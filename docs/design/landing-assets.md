# Landing page imagery

All three couple portraits were created with the built-in OpenAI image generation tool on September 7, 2026. They are illustrative lifestyle imagery, not customer portraits or testimonials. Original generation files remain in Codex generated_images; optimized WebP copies are committed with the site.

- `public/media/couple-cafe.webp`: East Asian man and auburn-haired woman laughing at a café. Prompt direction: candid waist-up professional editorial photograph, 1024 × 1536, 50mm lens, soft window light, visible skin texture, natural asymmetry, fine film grain, plum knitwear, no lettering or logos.
- `public/media/couple-home.webp`: Black couple sharing a phone on their sofa. Prompt direction: natural apartment window light, cream cardigan and charcoal shirt, authentic skin and fabric texture, relaxed closeness, 1024 × 1536, realistic anatomy, no visible screen UI or lettering.
- `public/media/couple-coast.webp`: Latino man and South Asian woman on a coastal walk. Prompt direction: natural dusk lighting, cream linen and dusty pink knitwear, spontaneous portrait, 1024 × 1536, real texture and gentle color grading, no artificial glow or lettering.
- `public/media/lovla-festival.png`: User-supplied 1920 × 1080 festival illustration, copied without modification. Only this landscape version is used.
- `public/media/lovla-hand.png`: Existing OpenAI-generated hand-held phone campaign image, retained from the first redesign.
- `public/media/lovla-hand-beach.png`: Updated 1024 × 1536 landing-page hero mockup, created with the built-in OpenAI image generation tool on September 9, 2026. Uses the user-approved half-colored beach-couple screenshot with matching photographic profile avatars. The original mockup remains available for the existing press kit.
- `public/media/lovla-mascot-paintbrush.png`: User-supplied `mascotpaywall.png`, copied without modification on September 8, 2026. The transparent artwork replaces the cropped app screenshot in the final download section.

The benefits use CSS gradients over the photographs so copy stays accessible as layouts resize. The source reference is https://monex.framer.ai/: full-bleed portrait benefit cards, fixed translucent navigation, a gradient download panel, and a large footer wordmark, adapted to Lovla's existing plum and lavender palette.

### Beach-couple handheld mockup prompt

Edit the existing 1024 × 1536 handheld campaign image. Preserve the photorealistic dark-brown hand, grip, frontal black phone bezel, phone placement, pale lavender background, lighting, shadows, skin texture, and overall footprint. Replace the entire displayed screen with the approved screenshot, fitted within the bezel. Preserve the half-colored beach-couple illustration and white gaps, matching photographic avatars, 21% badge, 1:47 status bar, single Dynamic Island, back/undo/redo/menu controls, yellow gradient slider, bottom drawing tools, and home indicator. Include the complete screen without clipped controls. Remove the old illustration and color-dot palette. No extra text or watermark.

## Testimonials

The home page carousel uses three short excerpts from public [US App Store reviews](https://apps.apple.com/us/app/lovla-couples-coloring-games/id6758548454), verified on September 8, 2026. The displayed usernames are Amourcameron, Reairria, and kkkokooplpp. The first excerpt is a review title; the others are taken from review bodies. Original wording and usernames are retained. Each card identifies the App Store as the source and the section links to the original reviews. No reviews, ratings, or customer names were invented.

The three `public/media/sample-lifestyle-*.png` assets are fictional illustrative people, generated with the built-in OpenAI image generation tool on September 9, 2026, at 1254 × 1254. They replace the studio-style portraits and do not depict the named reviewers. The section visibly states "Portraits are illustrative." Images have empty alternative text because they are decorative. Reairria uses the female café portrait. The other scenes are a neighborhood walk and a beach snapshot.

Final generation prompts:

1. Use case: photorealistic-natural. Generate one square casual lifestyle profile photo of a fictional adult Black woman in her late twenties with natural curls, laughing on a neighborhood walk, denim jacket and everyday T-shirt. A spontaneous snapshot taken by her partner on an ordinary phone, slightly off-center loose upper-body framing, visible leafy street and brick homes, natural uneven daylight, normal skin texture and flyaway hairs, relaxed unposed expression. Face clearly readable for a small circular avatar. Looks like a personal camera-roll memory, not a professional headshot or an advertising shoot. No studio backdrop, no beauty retouching, no dramatic shallow depth of field, no text, logos, watermark, collage, or border.

2. Use case: photorealistic-natural. Generate one square casual lifestyle profile photo of a fictional adult woman in her mid twenties with dark wavy hair loosely tied back, sitting at a cafe patio with a coffee cup, wearing an ordinary soft sage sweatshirt. Candid happy mid-conversation moment captured by a friend using an ordinary smartphone. Loose chest-up framing, face in central area readable in a small circular avatar, recognizable cafe table and street background, soft overcast daylight, realistic skin and small imperfections, casual slightly imperfect composition and ordinary phone photo depth of field. Female subject. Personal camera-roll feel. No professional headshot, no studio lighting, no seamless backdrop, no glamour retouching, no logos, text, watermark, collage, or border.

3. Use case: photorealistic-natural. Generate one square casual lifestyle profile photo of a fictional adult man in his late twenties, dark hair and light stubble, wearing a faded navy T-shirt and casual baseball cap, smiling during a breezy beach walk. A quick candid snapshot taken by his partner on an ordinary smartphone, loose chest-up composition, his face centered enough to crop as a small circular avatar, sea and beach visibly present, imperfect natural light, normal skin texture and wind-tousled hair. Relaxed personal vacation-photo feel, not an influencer campaign or professional headshot. No studio backdrop, beauty retouching, dramatic cinematic blur, logos, text, watermark, collage, or border.

The carousel moves from left to right, pauses on hover or with its pause button, and becomes a manually scrollable row for visitors who prefer reduced motion. The duplicate group used for the loop is hidden from assistive technology.

## September 9 typography and motion refinement

Inter supplies navigation, body text, and the main heading structure; Instrument Serif supplies selected italic headline phrases and editorial card text. Phosphor's regular and duotone icons replace the landing page's Lucide icons, using individual SSR imports to keep the icon bundle small. The Lovla wordmark remains unchanged.

The entrance is adapted from direct browser observation of https://monex.framer.ai/: copy starts at 80px down and 90% scale, the phone rises from 350px down and 60% scale, side cards fan out from the center at 70% scale, and a soft background halo expands from 50% scale. Staggered CSS animations settle within 2.2 seconds, and reduced-motion preferences disable the entrance. No additional animation dependency is used.

The Android/web waitlist section and public waitlist references, including the couples-apps article link, were removed at the user's request. The unused backend endpoint and reusable component remain outside the public landing page.
