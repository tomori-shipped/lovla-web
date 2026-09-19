import fs from "node:fs";
import path from "node:path";

// Audit the generated HTML Google can read, rather than only configuration files.
const base = "https://www.lovla.app";
const output = ".next/server/app";
const errors = [];
const assert = (condition, message) => {
  if (!condition) errors.push(message);
};
const walk = (directory) =>
  fs
    .readdirSync(directory, { withFileTypes: true })
    .flatMap((entry) =>
      entry.isDirectory()
        ? walk(path.join(directory, entry.name))
        : [path.join(directory, entry.name)],
    );
const decode = (value) =>
  value
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#x27;", "'");
const attrs = (tag) =>
  Object.fromEntries(
    [...tag.matchAll(/([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)')/g)].map((m) => [
      m[1],
      decode(m[2] ?? m[3]),
    ]),
  );
const tags = (html, tag) =>
  [...html.matchAll(new RegExp(`<${tag}\\b[^>]*>`, "g"))].map((m) =>
    attrs(m[0]),
  );
if (!fs.existsSync(output))
  throw new Error("Run npm run build before the SEO check.");
const pages = new Map(
  walk(output)
    .filter(
      (file) =>
        file.endsWith(".html") && !path.relative(output, file).startsWith("_"),
    )
    .map((file) => {
      const pathname =
        "/" +
        path
          .relative(output, file)
          .replace(/\.html$/, "")
          .replace(/^index$/, "");
      const html = fs.readFileSync(file, "utf8");
      const metadata = Object.fromEntries(
        tags(html, "meta").map((a) => [a.name || a.property, a.content]),
      );
      const canonical = tags(html, "link").filter((a) => a.rel === "canonical");
      const schema = [
        ...html.matchAll(
          /<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g,
        ),
      ].flatMap((m) => {
        try {
          const value = JSON.parse(m[1]);
          return value["@graph"] || [value];
        } catch {
          errors.push(`${pathname}: invalid JSON-LD`);
          return [];
        }
      });
      return [pathname, { html, metadata, canonical, schema }];
    }),
);
const titles = new Set();
for (const [pathname, { html, metadata: m, canonical, schema }] of pages) {
  const title = decode(html.match(/<title>(.*?)<\/title>/s)?.[1] || "");
  assert(
    title && !titles.has(title),
    `${pathname}: missing or duplicate title`,
  );
  titles.add(title);
  assert(
    (html.match(/<h1\b/g) || []).length === 1,
    `${pathname}: must have one H1`,
  );
  assert(
    canonical.length === 1 &&
      canonical[0].href === base + (pathname === "/" ? "" : pathname),
    `${pathname}: missing or incorrect canonical`,
  );
  for (const key of [
    "description",
    "og:title",
    "og:description",
    "og:url",
    "og:image",
    "twitter:title",
    "twitter:description",
    "twitter:image",
  ])
    assert(m[key], `${pathname}: missing ${key}`);
  assert(
    m["og:url"] === base + (pathname === "/" ? "" : pathname),
    `${pathname}: incorrect social URL`,
  );
  assert(
    !/noindex/.test(m.robots || ""),
    `${pathname}: unintentionally noindex`,
  );
  assert(
    /max-image-preview:large/.test(m.googlebot || ""),
    `${pathname}: large search image preview not enabled`,
  );
  for (const img of tags(html, "img"))
    assert("alt" in img, `${pathname}: image without alt attribute`);
  for (const image of [m["og:image"], m["twitter:image"]].filter(Boolean)) {
    const url = new URL(image, base);
    if (url.origin === base)
      assert(
        url.pathname === "/share-image" ||
          fs.existsSync("public" + decodeURIComponent(url.pathname)),
        `${pathname}: missing social image ${url.pathname}`,
      );
  }
  if (pathname.startsWith("/blog/")) {
    const article = schema.find((v) =>
      ["Article", "BlogPosting"].includes(v["@type"]),
    );
    assert(
      article?.headline &&
        article?.image &&
        article?.author?.name &&
        article?.datePublished &&
        article?.dateModified,
      `${pathname}: incomplete article schema`,
    );
    assert(
      schema.some((v) => v["@type"] === "BreadcrumbList"),
      `${pathname}: missing breadcrumb schema`,
    );
  }
  for (const a of tags(html, "a")) {
    if (!a.href || /^(mailto:|tel:)/.test(a.href)) continue;
    const url = new URL(a.href, base + (pathname === "/" ? "" : pathname));
    if (url.origin !== base) continue;
    const target = pages.get(url.pathname);
    assert(
      target ||
        fs.existsSync("public" + decodeURIComponent(url.pathname)) ||
        url.pathname === "/share-image",
      `${pathname}: broken internal link ${a.href}`,
    );
    if (target && url.hash)
      assert(
        tags(target.html, "[a-zA-Z][a-zA-Z0-9]*").some(
          (t) => t.id === decodeURIComponent(url.hash.slice(1)),
        ),
        `${pathname}: broken fragment ${a.href}`,
      );
  }
}
const sitemap = fs.readFileSync(path.join(output, "sitemap.xml.body"), "utf8");
const locations = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) =>
  decode(m[1]),
);
assert(
  new Set(locations).size === locations.length,
  "Sitemap contains duplicate URLs",
);
for (const pathname of pages.keys())
  assert(
    locations.includes(base + (pathname === "/" ? "" : pathname)),
    `${pathname}: not in sitemap`,
  );
for (const url of locations)
  assert(
    pages.has(new URL(url).pathname),
    `Sitemap points to missing page: ${url}`,
  );
const sitemapEntries = [...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)].map(
  (match) => match[1],
);
for (const [, page] of pages) {
  const canonical = page.canonical[0]?.href;
  if (canonical?.includes("/blog/")) {
    const entry = sitemapEntries.find((entry) =>
      entry.includes(`<loc>${canonical}</loc>`),
    );
    assert(
      entry?.includes("<image:loc>"),
      `${canonical}: missing image sitemap entry`,
    );
  }
}
const robots = fs.readFileSync(path.join(output, "robots.txt.body"), "utf8");
assert(
  robots.includes(`Sitemap: ${base}/sitemap.xml`),
  "Robots sitemap is incorrect",
);
assert(!/^Disallow: \/$/m.test(robots), "Robots blocks the website");
if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log(
  `SEO check passed: ${pages.size} pages, unique titles, metadata, canonicals, social images, headings, article schema, breadcrumbs, internal links, robots, and sitemap.`,
);
