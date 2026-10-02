import type { Book, BookPage } from "./model";
import { decodePhoto } from "./storage";

// A local contour preview only. This is deliberately not a paid AI integration.
// Production must enqueue generation only after a verified payment webhook.
export async function createDemoProof(
  book: Book,
  page: BookPage,
  detail: "gentle" | "bold" = "gentle",
): Promise<string> {
  const canvas = document.createElement("canvas");
  canvas.width = 720;
  canvas.height = 900;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (!ctx) throw new Error("Your browser could not create the preview.");
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, 720, 900);
  for (const layer of page.layers.filter((item) => item.kind === "photo")) {
    const photo = book.photos.find((item) => item.id === layer.photoId);
    if (!photo)
      throw new Error(
        "A photo is missing. Return to the editor and replace it.",
      );
    const image = await decodePhoto(photo.src);
    const w = layer.w * 7.2,
      h = layer.h * 9;
    const scale = Math.max(w / image.naturalWidth, h / image.naturalHeight);
    const sw = w / scale,
      sh = h / scale;
    const sx = ((image.naturalWidth - sw) * (layer.cropX ?? 50)) / 100;
    const sy = ((image.naturalHeight - sh) * (layer.cropY ?? 50)) / 100;
    ctx.save();
    ctx.translate((layer.x + layer.w / 2) * 7.2, (layer.y + layer.h / 2) * 9);
    ctx.rotate((layer.rotation * Math.PI) / 180);
    ctx.drawImage(image, sx, sy, sw, sh, -w / 2, -h / 2, w, h);
    ctx.restore();
  }
  const source = ctx.getImageData(0, 0, 720, 900);
  const gray = new Float32Array(720 * 900);
  for (let i = 0; i < gray.length; i++)
    gray[i] =
      source.data[i * 4] * 0.299 +
      source.data[i * 4 + 1] * 0.587 +
      source.data[i * 4 + 2] * 0.114;
  const output = ctx.createImageData(720, 900);
  output.data.fill(255);
  const threshold = detail === "bold" ? 28 : 48;
  for (let y = 1; y < 899; y++)
    for (let x = 1; x < 719; x++) {
      const i = y * 720 + x;
      const gx =
        -gray[i - 721] +
        gray[i - 719] -
        2 * gray[i - 1] +
        2 * gray[i + 1] -
        gray[i + 719] +
        gray[i + 721];
      const gy =
        -gray[i - 721] -
        2 * gray[i - 720] -
        gray[i - 719] +
        gray[i + 719] +
        2 * gray[i + 720] +
        gray[i + 721];
      const value = Math.hypot(gx, gy) > threshold ? 42 : 255;
      output.data[i * 4] =
        output.data[i * 4 + 1] =
        output.data[i * 4 + 2] =
          value;
    }
  ctx.putImageData(output, 0, 0);
  return canvas.toDataURL("image/png");
}
