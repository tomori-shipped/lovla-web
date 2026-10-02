import assert from "node:assert/strict";
import fs from "node:fs";
import ts from "typescript";
const source = fs.readFileSync("lib/shop/model.ts", "utf8");
const compiled = ts.transpileModule(source, {
  compilerOptions: {
    module: ts.ModuleKind.ES2022,
    target: ts.ScriptTarget.ES2022,
  },
}).outputText;
const {
  sampleBook,
  blankBook,
  parseDraft,
  reorderPages,
  validateBook,
  canApproveOrder,
} = await import(
  `data:text/javascript;base64,${Buffer.from(compiled).toString("base64")}`
);
const book = sampleBook();
assert.deepEqual(parseDraft(JSON.parse(JSON.stringify(book))), book);
assert.equal(validateBook(blankBook()).length, 1);
assert.equal(validateBook(book).length, 0);
assert.equal(
  reorderPages(book.pages, 0, 2),
  book.pages,
  "cover cannot be moved",
);
assert.equal(
  reorderPages(book.pages, 1, 0),
  book.pages,
  "memory cannot replace cover",
);
assert.equal(reorderPages(book.pages, 1, 2)[2].id, book.pages[1].id);
assert.equal(canApproveOrder(book), false, "design cannot be approved");
const review = {
  ...book,
  demoPaid: true,
  stage: "review",
  pages: book.pages.map((p) => ({
    ...p,
    approved: true,
    revisions: [{ src: "data:image/png;base64,AA==", prompt: "test" }],
  })),
};
assert.equal(canApproveOrder(review), true);
assert.equal(canApproveOrder({ ...review, demoPaid: false }), false);
assert.equal(
  canApproveOrder({
    ...review,
    pages: review.pages.map((p, i) =>
      i === 1 ? { ...p, approved: false } : p,
    ),
  }),
  false,
);
assert.equal(
  canApproveOrder({
    ...review,
    pages: review.pages.map((p, i) => (i === 1 ? { ...p, revisions: [] } : p)),
  }),
  false,
);
assert.throws(() =>
  parseDraft({
    ...book,
    photos: [{ ...book.photos[0], src: "https://untrusted.example/track.jpg" }],
  }),
);
assert.throws(() =>
  parseDraft({
    ...book,
    pages: [
      { ...book.pages[0], layers: [{ ...book.pages[0].layers[0], x: NaN }] },
    ],
  }),
);
assert.throws(() =>
  parseDraft({
    ...book,
    pages: [{ ...book.pages[0], background: "url(https://untrusted.example)" }],
  }),
);
assert.throws(() => parseDraft({ ...book, photos: [] }));
console.log(
  "Shop checks passed: draft validation, fixed cover order, required photos, and approval gating.",
);

const previewSource = fs.readFileSync("lib/shop/preview-leaves.ts", "utf8");
const previewModule = ts.transpileModule(previewSource, { compilerOptions: { module: ts.ModuleKind.ES2022 } }).outputText;
const { buildPreviewLeaves } = await import(`data:text/javascript;base64,${Buffer.from(previewModule).toString("base64")}`);
for (const count of [0, 1, 2, 3, 29, 30]) {
  const leaves = buildPreviewLeaves(count);
  assert.equal(leaves[0].kind, "cover");
  assert.equal(leaves.at(-1).kind, "back");
  assert.equal(leaves.length % 2, 0, "interior pages pair into complete spreads");
  assert.deepEqual(leaves.filter(p => p.kind === "memory").map(p => p.page), Array.from({length:count}, (_,i) => i+1));
  assert.deepEqual(leaves.slice(1,3).map(p => p.kind), ["endpaper", "title"]);
}
const vendorSource = fs.readFileSync("lib/shop/vendor/page-flip.js", "utf8");
const { PageFlip } = await import(`data:text/javascript;base64,${Buffer.from(vendorSource).toString("base64")}`);
const cleanup = [];
PageFlip.prototype.destroy.call({ render: {stop: () => cleanup.push("stop")}, ui: {destroy: () => cleanup.push("ui")}, block: {remove: () => cleanup.push("host")} });
assert.deepEqual(cleanup, ["stop", "ui", "host"], "closing a preview stops its animation loop before removing the DOM");
console.log("Book preview checks passed: closed covers, complete spreads, preserved page order, and animation cleanup.");
