# Lovla Book Studio

Local route: `/shop`. Added to the existing marketing navigation. No deployment, GitHub push, or paid external request is part of this change. The route is noindex until commerce is ready.

## Working locally

- Batch JPG/PNG/WebP upload (20 MB per file; 30 photos/pages, with a separate fixed cover). Original image data stays in IndexedDB; no customer photos are uploaded to a server.
- Each upload creates a memory page. Drag pages to reorder, or use accessible move-up/down buttons. Cover stays first.
- Photo and text layers support dragging, resize handles, keyboard nudging, numeric positioning, rotation, crop positioning, text styles, color, duplication, deletion, and bring-to-front. Preset layouts and decorations are included.
- Undo/redo, debounced IndexedDB drafts, JSON backup download, and validated backup restore. Errors are visible if saving or decoding fails.
- Physical book preview starts closed, opens to an inside cover and title page, and displays two-page spreads. Mouse and touch drags control the folding page in both directions; arrows and keyboard navigation are also available. It shares the page renderer with the editor and thumbnails. The locally bundled MIT StPageFlip renderer includes an animation-loop cleanup fix; see `lib/shop/vendor/README.md`.
- An explicitly labeled, zero-charge demo of payment → generation → per-page refinement/version selection → approval. Demo proofs are a local image contour filter. Freeform AI instructions are stored with versions but are **not** executed. The UI states this explicitly.
- Approval of each current proof is mandatory. Regeneration or selecting an older version revokes that page's approval. Completing the demo locks editing; “How it works” allows returning to design and resetting proofs.

## Commerce decisions represented

Use one payment before generation. Final approval is a production release, not a second charge. No product price, tax, shipping promise, refund policy, or regeneration allowance has been invented. The preview uses an 8×10 layout; printer specifications still need confirmation.

The website currently has no web shop authentication, order database, Stripe integration, or print fulfillment. The separate mobile app has `supabase/functions/generate-lineart-v2`, but it must not be called unauthenticated or from a client-controlled paid flag. `demoPaid` is UI simulation state only and is not an authorization mechanism.

## Production connection requirements

1. Authenticate the customer and store private original assets in owner-scoped object storage. Preserve full-resolution originals, validate file content server-side, apply quotas, and use expiring asset URLs.
2. Create a server-side, versioned project manifest containing page order, layer positions, crop geometry, text, and a content hash. Calculate price exclusively on the server using the approved product catalog and shipping destination.
3. Start hosted checkout for that exact manifest. Only a signature-verified, idempotent payment webhook can mark it paid and queue generation. Never trust the checkout return URL or a browser flag.
4. Generate asynchronously with per-page jobs, retryable failures, cost limits, and an owner-scoped progress endpoint. Reuse the mobile generation service through an authenticated server adapter after auditing its ownership and payment checks. Composite photo layers before generation; keep text/vector decorations as separate final layers.
5. Save every AI refinement as a version. Bind approval to exact page/version hashes. Reject production submission if any page is missing, unapproved, changed, or not paid. Enforce agreed regeneration limits server-side.
6. Obtain print-provider specs (size, bleed, safe area, minimum/maximum pages, binding, paper, shipping regions), compose a print-resolution PDF, run a preflight, and submit once using an idempotency key. Acknowledge a real order only after durable storage. Display fulfillment status and support/refund options.
7. Connect accounts and cross-device drafts; publish privacy/retention rules, accessible payment errors, recovery flows, and verified shipping/refund terms before enabling live checkout or indexing `/shop`.

## Validation

Run `node scripts/check-shop.mjs`, `npx tsc --noEmit`, `npx eslint app/shop components/shop lib/shop components/common/marketing-header.tsx`, and `npm run build`.

Browser checks cover text editing, undo, page reordering, uploads, saved draft recovery, book preview navigation, demo generation, version history, approval reset, blocking incomplete approval, successful final demo approval, and mobile layout overflow.

Latest preview revision: production build, TypeScript, lint, spread ordering, and renderer cleanup checks pass. Interactive drag verification was blocked by the browser tool URL policy; manual verification remains required.
