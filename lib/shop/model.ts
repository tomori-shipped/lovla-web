export type Photo = {
  id: string;
  src: string;
  name: string;
  width: number;
  height: number;
  sample?: boolean;
};
export type Layer = {
  id: string;
  kind: "photo" | "text" | "sticker";
  x: number;
  y: number;
  w: number;
  h: number;
  rotation: number;
  photoId?: string;
  text?: string;
  font?: "serif" | "sans" | "hand";
  fontSize?: number;
  color?: string;
  cropX?: number;
  cropY?: number;
};
export type Revision = { src: string; prompt: string };
export type BookPage = {
  id: string;
  kind: "cover" | "page";
  background: string;
  layers: Layer[];
  revisions: Revision[];
  revision: number;
  approved: boolean;
};
export type Book = {
  version: 1;
  title: string;
  subtitle: string;
  photos: Photo[];
  pages: BookPage[];
  stage: "design" | "review" | "complete";
  demoPaid: boolean;
};
export const MAX_PAGES = 30;
export const uid = () => crypto.randomUUID();
export const clamp = (value: number, low: number, high: number) =>
  Math.min(high, Math.max(low, value));
export const photoLayer = (photoId: string): Layer => ({
  id: uid(),
  kind: "photo",
  photoId,
  x: 10,
  y: 13,
  w: 80,
  h: 64,
  rotation: 0,
  cropX: 50,
  cropY: 50,
});
export const textLayer = (text = "A little moment, just ours."): Layer => ({
  id: uid(),
  kind: "text",
  text,
  x: 10,
  y: 81,
  w: 80,
  h: 12,
  rotation: 0,
  font: "serif",
  fontSize: 5,
  color: "#4b164c",
});
export function newPage(photoId?: string): BookPage {
  return {
    id: uid(),
    kind: "page",
    background: "#fffdf7",
    layers: photoId ? [photoLayer(photoId), textLayer()] : [],
    revisions: [],
    revision: 0,
    approved: false,
  };
}
export function blankBook(): Book {
  return {
    version: 1,
    title: "Our little book of us",
    subtitle: "Made with love, for us.",
    photos: [],
    pages: [
      {
        ...newPage(),
        kind: "cover",
        background: "#eedce6",
        layers: [
          {
            ...textLayer("Our little\nbook of us"),
            y: 10,
            h: 28,
            fontSize: 11,
          },
          {
            ...textLayer("A COLORING BOOK OF OUR FAVORITE MOMENTS"),
            y: 85,
            h: 7,
            font: "sans",
            fontSize: 2.8,
          },
          { ...textLayer("♡"), kind: "sticker", y: 43, h: 32, fontSize: 24 },
        ],
      },
    ],
    stage: "design",
    demoPaid: false,
  };
}
export function sampleBook(): Book {
  const book = blankBook();
  book.photos = [
    {
      id: "coast",
      src: "/media/couple-coast.webp",
      name: "That evening by the sea",
      width: 1024,
      height: 1536,
      sample: true,
    },
    {
      id: "cafe",
      src: "/media/couple-cafe.webp",
      name: "Coffee & nowhere to be",
      width: 1024,
      height: 1536,
      sample: true,
    },
    {
      id: "home",
      src: "/media/couple-home.webp",
      name: "My favorite place is you",
      width: 1024,
      height: 1536,
      sample: true,
    },
  ];
  book.pages[0].layers = [
    {
      ...textLayer("The little\nthings, with you."),
      y: 9,
      h: 22,
      fontSize: 9.5,
    },
    { ...photoLayer("coast"), x: 18, y: 35, w: 64, h: 44, rotation: -4 },
    {
      ...textLayer("OUR MEMORIES, WAITING FOR COLOR"),
      y: 88,
      h: 5,
      font: "sans",
      fontSize: 2.5,
    },
    {
      ...textLayer("✳"),
      kind: "sticker",
      x: 77,
      y: 27,
      w: 17,
      h: 17,
      fontSize: 13,
      color: "#7e875b",
      rotation: 10,
    },
  ];
  book.title = "The little things, with you";
  book.pages.push(
    ...book.photos.map((photo) => {
      const page = newPage(photo.id);
      page.layers[1].text = photo.name;
      return page;
    }),
  );
  return book;
}
export function reorderPages(pages: BookPage[], from: number, to: number) {
  if (from < 1 || to < 1 || from >= pages.length || to >= pages.length)
    return pages;
  const result = [...pages];
  const [moved] = result.splice(from, 1);
  result.splice(to, 0, moved);
  return result;
}
export function validateBook(book: Book): string[] {
  const errors: string[] = [];
  if (book.pages.length < 2)
    errors.push("Add at least one memory page to your book.");
  book.pages.forEach((page, index) => {
    if (index > 0 && !page.layers.some((layer) => layer.kind === "photo"))
      errors.push(`Page ${index} needs a photo.`);
    if (
      page.layers.some(
        (layer) =>
          layer.kind === "photo" &&
          !book.photos.some((photo) => photo.id === layer.photoId),
      )
    )
      errors.push(`Page ${index || "cover"} has a missing photo.`);
  });
  return errors;
}
export function canApproveOrder(book: Book) {
  return (
    book.demoPaid &&
    book.stage === "review" &&
    book.pages.length > 1 &&
    book.pages
      .slice(1)
      .every((page) => page.approved && page.revisions.length > 0)
  );
}

export function parseDraft(input: unknown): Book {
  const fail = () => {
    throw new Error("This file is not a valid Lovla book draft.");
  };
  const object = (value: unknown): value is Record<string, unknown> =>
    !!value && typeof value === "object";
  const string = (value: unknown, max = 160): value is string =>
    typeof value === "string" && value.length <= max;
  const number = (value: unknown, min: number, max: number): value is number =>
    typeof value === "number" &&
    Number.isFinite(value) &&
    value >= min &&
    value <= max;
  const source = (value: unknown) =>
    typeof value === "string" &&
    (/^data:image\/(png|jpeg|webp);base64,[A-Za-z0-9+/=]+$/.test(value) ||
      [
        "/media/couple-coast.webp",
        "/media/couple-cafe.webp",
        "/media/couple-home.webp",
      ].includes(value));
  if (
    !object(input) ||
    input.version !== 1 ||
    !string(input.title, 80) ||
    !string(input.subtitle) ||
    !["design", "review", "complete"].includes(String(input.stage)) ||
    typeof input.demoPaid !== "boolean" ||
    !Array.isArray(input.photos) ||
    input.photos.length > MAX_PAGES ||
    !Array.isArray(input.pages) ||
    !input.pages.length ||
    input.pages.length > MAX_PAGES + 1
  )
    return fail();
  const photoIds = new Set<string>();
  for (const photo of input.photos) {
    if (
      !object(photo) ||
      !string(photo.id) ||
      photoIds.has(photo.id) ||
      !source(photo.src) ||
      !string(photo.name, 500) ||
      !number(photo.width, 1, 100000) ||
      !number(photo.height, 1, 100000)
    )
      return fail();
    photoIds.add(photo.id);
  }
  const pageIds = new Set<string>();
  for (const [index, page] of input.pages.entries()) {
    if (
      !object(page) ||
      !string(page.id) ||
      pageIds.has(page.id) ||
      page.kind !== (index === 0 ? "cover" : "page") ||
      typeof page.background !== "string" ||
      !/^#[0-9a-f]{6}$/i.test(page.background) ||
      typeof page.approved !== "boolean" ||
      !Array.isArray(page.layers) ||
      page.layers.length > 40 ||
      !Array.isArray(page.revisions) ||
      page.revisions.length > 5 ||
      !number(page.revision, 0, Math.max(0, page.revisions.length - 1)) ||
      !Number.isInteger(page.revision)
    )
      return fail();
    pageIds.add(page.id);
    const layerIds = new Set<string>();
    for (const layer of page.layers) {
      if (
        !object(layer) ||
        !string(layer.id) ||
        layerIds.has(layer.id) ||
        !["photo", "text", "sticker"].includes(String(layer.kind)) ||
        !number(layer.x, 0, 100) ||
        !number(layer.y, 0, 100) ||
        !number(layer.w, 1, 100) ||
        !number(layer.h, 1, 100) ||
        !number(layer.rotation, -180, 180)
      )
        return fail();
      layerIds.add(layer.id);
      if (layer.kind === "photo") {
        if (
          typeof layer.photoId !== "string" ||
          !photoIds.has(layer.photoId) ||
          !number(layer.cropX ?? 50, 0, 100) ||
          !number(layer.cropY ?? 50, 0, 100)
        )
          return fail();
      } else if (
        !string(layer.text) ||
        !["serif", "sans", "hand"].includes(String(layer.font)) ||
        !number(layer.fontSize, 2, 24) ||
        typeof layer.color !== "string" ||
        !/^#[0-9a-f]{6}$/i.test(layer.color)
      )
        return fail();
    }
    for (const revision of page.revisions)
      if (
        !object(revision) ||
        !source(revision.src) ||
        !string(revision.prompt, 500)
      )
        return fail();
  }
  return input as unknown as Book;
}
