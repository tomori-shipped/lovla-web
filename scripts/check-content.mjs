import assert from "node:assert/strict";

// Run against a local production server: node scripts/check-content.mjs
// This deliberately does not submit a valid email or call any external service.
const origin = new URL(process.argv[2] ?? "http://localhost:3000");
assert(["localhost", "127.0.0.1"].includes(origin.hostname), "Checks must target a local server");
const slug = "/blog/long-distance-relationship-activities";
const questionsSlug = "/blog/who-knows-me-better-questions-for-couples";
const routes = ["/", "/blog", slug, questionsSlug, "/blog/best-apps-for-couples", "/contact-us", "/privacy-policy", "/terms-and-conditions", "/sitemap.xml", "/robots.txt"];
const pages = new Map(await Promise.all(routes.map(async (route) => {
  const response = await fetch(new URL(route, origin));
  assert.equal(response.status, 200, `${route} returns 200`);
  return [route, await response.text()];
})));

const home = pages.get("/");
assert(!home.includes("Why Couples Love Lovla"), "Feature section is removed from homepage");
assert(!home.includes("Frequently Asked Questions"), "FAQ section is removed from homepage");
assert(!home.includes("FAQPage"), "No obsolete homepage FAQ schema");
assert(home.includes("android-waitlist"), "Waitlist remains available");
assert(pages.get("/blog").includes(`href="${slug}"`), "Blog index links to the new post");
assert(pages.get("/blog").includes(`href="${questionsSlug}"`), "Blog index links to the questions post");
assert(pages.get("/sitemap.xml").includes(`https://www.lovla.app${slug}`), "Sitemap includes the new post");
assert(pages.get("/sitemap.xml").includes(`https://www.lovla.app${questionsSlug}`), "Sitemap includes the questions post");

const article = pages.get(slug);
const visibleMarkup = article.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "");
assert.equal((visibleMarkup.match(/<h1\b/g) ?? []).length, 1, "One article H1");
assert.equal((visibleMarkup.match(/<h3\b/g) ?? []).length, 45, "Exactly 45 activities");
assert.equal((visibleMarkup.match(/<ol\b/g) ?? []).length, 5, "Five activity groups");
assert(visibleMarkup.includes("The Lovla Team"), "Correct visible author");
assert(article.includes(`rel="canonical" href="https://www.lovla.app${slug}"`), "Correct canonical");
assert(article.includes('property="og:type" content="article"'), "Article Open Graph tags");
assert(article.includes('name="twitter:card" content="summary_large_image"'), "Large image social card");
assert(article.includes('name="description"'), "Meta description exists");
assert(!/<meta[^>]+content="[^"]*noindex/.test(article), "Article is indexable");
const json = [...article.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((match) => JSON.parse(match[1]));
const schema = json.flatMap((value) => value["@graph"] ?? [value]);
const posting = schema.find((value) => value["@type"] === "BlogPosting");
assert(posting, "BlogPosting structured data is valid JSON");
assert.equal(posting.author.name, "The Lovla Team");
assert.equal(posting.mainEntityOfPage["@id"], `https://www.lovla.app${slug}`);
assert(schema.some((value) => value["@type"] === "BreadcrumbList"), "Breadcrumb schema exists");
for (const [, href] of visibleMarkup.matchAll(/href="(https:\/\/apps\.apple\.com[^\"]+)"/g)) {
  assert(href.includes("id6758548454"), "Only Lovla App Store links in new post");
}
const questionsArticle = pages.get(questionsSlug);
const visibleQuestionsMarkup = questionsArticle.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "");
assert.equal((visibleQuestionsMarkup.match(/<h1\b/g) ?? []).length, 1, "One questions article H1");
assert.equal((visibleQuestionsMarkup.match(/data-question="true"/g) ?? []).length, 101, "Exactly 101 questions");
assert(visibleQuestionsMarkup.includes("The Lovla Team"), "Correct questions article author");
assert(questionsArticle.includes(`rel="canonical" href="https://www.lovla.app${questionsSlug}"`), "Correct questions article canonical");
assert(questionsArticle.includes('property="og:type" content="article"'), "Questions article Open Graph tags");
assert(questionsArticle.includes('name="twitter:card" content="summary_large_image"'), "Questions article large image social card");
assert(!/<meta[^>]+content="[^"]*noindex/.test(questionsArticle), "Questions article is indexable");
assert(visibleQuestionsMarkup.includes('href="/blog/turn-photo-into-coloring-page"'), "Questions article links to photo guide");
assert(visibleQuestionsMarkup.includes('href="/blog/long-distance-relationship-activities"'), "Questions article links to activities guide");
for (const [, href] of visibleQuestionsMarkup.matchAll(/href="(https:\/\/apps\.apple\.com[^\"]+)"/g)) {
  assert(href.includes("id6758548454"), "Only Lovla App Store links in questions post");
}
const questionsJson = [...questionsArticle.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((match) => JSON.parse(match[1]));
const questionsSchema = questionsJson.flatMap((value) => value["@graph"] ?? [value]);
const questionsPosting = questionsSchema.find((value) => value["@type"] === "BlogPosting");
assert(questionsPosting, "Questions BlogPosting structured data is valid JSON");
assert.equal(questionsPosting.author.name, "The Lovla Team");
assert.equal(questionsPosting.mainEntityOfPage["@id"], `https://www.lovla.app${questionsSlug}`);
assert(questionsSchema.some((value) => value["@type"] === "BreadcrumbList"), "Questions breadcrumb schema exists");
for (const asset of ["/blog/long-distance-relationship-activities.webp", "/blog/who-knows-me-better-questions-for-couples.webp", "/screenshots/lovla-photo-to-art.webp", "/screenshots/lovla-shared-coloring.webp"]) {
  const response = await fetch(new URL(asset, origin));
  assert.equal(response.status, 200, `${asset} is available`);
  assert(response.headers.get("content-type")?.includes("image/webp"), `${asset} is WebP`);
}
const invalidEmail = await fetch(new URL("/api/waitlist", origin), {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email: "not-an-email" }),
});
assert.equal(invalidEmail.status, 400, "Invalid waitlist email is rejected before sending");
console.log(`PASS: ${routes.length} routes, homepage removals, article structures, SEO, images, internal discovery, and invalid-email validation.`);
