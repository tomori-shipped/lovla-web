import type { Book, Photo } from "./model";
import { uid, parseDraft } from "./model";

function database(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("lovla-book-studio", 1);
    request.onupgradeneeded = () => request.result.createObjectStore("drafts");
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}
export async function loadDraft(): Promise<Book | undefined> {
  const db = await database();
  return new Promise((resolve, reject) => {
    const request = db
      .transaction("drafts", "readonly")
      .objectStore("drafts")
      .get("current");
    request.onsuccess = () => {
      db.close();
      try {
        resolve(request.result ? parseDraft(request.result) : undefined);
      } catch (error) {
        reject(error);
      }
    };
    request.onerror = () => {
      db.close();
      reject(request.error);
    };
  });
}
export async function saveDraft(book: Book): Promise<void> {
  const db = await database();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction("drafts", "readwrite");
    transaction.objectStore("drafts").put(book, "current");
    transaction.oncomplete = () => {
      db.close();
      resolve();
    };
    transaction.onerror = () => {
      db.close();
      reject(transaction.error);
    };
    transaction.onabort = () => {
      db.close();
      reject(transaction.error);
    };
  });
}
export async function readPhoto(file: File): Promise<Photo> {
  if (!["image/jpeg", "image/png", "image/webp"].includes(file.type))
    throw new Error(
      `${file.name}: choose a JPG, PNG, or WebP image. Export HEIC photos as JPG first.`,
    );
  if (file.size > 20 * 1024 * 1024)
    throw new Error(`${file.name}: please use an image smaller than 20 MB.`);
  const src = await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(new Error(`Could not read ${file.name}.`));
    reader.readAsDataURL(file);
  });
  const image = await decodePhoto(src);
  return {
    id: uid(),
    src,
    name: file.name,
    width: image.naturalWidth,
    height: image.naturalHeight,
  };
}
export function decodePhoto(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () =>
      reject(
        new Error("This photo could not be opened. Try a different image."),
      );
    image.src = src;
  });
}
