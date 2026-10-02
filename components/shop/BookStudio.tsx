"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  BookOpen,
  Check,
  CheckCheck,
  ChevronLeft,
  ChevronRight,
  CloudCheck,
  Copy,
  Download,
  Eye,
  GripVertical,
  Heart,
  Images,
  Layers,
  LayoutTemplate,
  LoaderCircle,
  LockKeyhole,
  Minus,
  MousePointer2,
  Plus,
  Redo2,
  RotateCcw,
  Sparkles,
  Trash2,
  Type,
  Undo2,
  Upload,
  X,
} from "lucide-react";
import BookCanvas from "./BookCanvas";
import BookPreview from "./BookPreview";
import Modal from "./Modal";
import {
  blankBook,
  canApproveOrder,
  clamp,
  MAX_PAGES,
  newPage,
  photoLayer,
  reorderPages,
  parseDraft,
  sampleBook,
  textLayer,
  uid,
  validateBook,
  type Book,
  type BookPage,
  type Layer,
} from "@/lib/shop/model";
import { loadDraft, readPhoto, saveDraft } from "@/lib/shop/storage";
import styles from "./shop.module.css";

type Panel = "photos" | "text" | "layouts" | "pages";
type Dialog = "preview" | "checkout" | "help" | "reset" | "finish" | null;
const colors = [
  { name: "Rose linen", value: "#eedce6" },
  { name: "Warm ivory", value: "#fffdf7" },
  { name: "Sage", value: "#e0e6d4" },
  { name: "Lilac", value: "#e7e0ee" },
  { name: "Butter", value: "#f4e6b4" },
];
const panels = [
  { id: "photos", title: "Photos", icon: Images },
  { id: "text", title: "Text", icon: Type },
  { id: "layouts", title: "Layouts", icon: LayoutTemplate },
  { id: "pages", title: "Pages", icon: Layers },
] as const;

export default function BookStudio() {
  const [book, setBook] = useState<Book | null>(null);
  const [active, setActive] = useState(0);
  const [selection, setSelection] = useState("");
  const [panel, setPanel] = useState<Panel>("photos");
  const [dialog, setDialog] = useState<Dialog>(null);
  const [previewMode, setPreviewMode] = useState<"photos" | "proof">("photos");
  const [saveStatus, setSaveStatus] = useState("Opening your studio…");
  const [notice, setNotice] = useState("");
  const [uploading, setUploading] = useState(false);
  const [busy, setBusy] = useState("");
  const [prompt, setPrompt] = useState("");
  const [detail, setDetail] = useState<"gentle" | "bold">("gentle");
  const [zoom, setZoom] = useState(100);
  const [historyCount, setHistoryCount] = useState({ undo: 0, redo: 0 });
  const [storageReady, setStorageReady] = useState(false);
  const [checkoutAccepted, setCheckoutAccepted] = useState(false);
  const [finishAccepted, setFinishAccepted] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const past = useRef<Book[]>([]);
  const future = useRef<Book[]>([]);
  const input = useRef<HTMLInputElement>(null);
  const importInput = useRef<HTMLInputElement>(null);
  const library = useRef<HTMLElement>(null);
  const dragPage = useRef<number | null>(null);
  const current = useRef<Book | null>(null);
  const uploadLock = useRef(false);
  const operationLock = useRef(false);
  const saveQueue = useRef(Promise.resolve());
  const version = useRef(0);

  useEffect(() => {
    let alive = true;
    loadDraft()
      .then((draft) => {
        if (alive) {
          const value = draft ?? sampleBook();
          current.current = value;
          setBook(value);
          setStorageReady(true);
        }
      })
      .catch(() => {
        if (alive) {
          const value = sampleBook();
          current.current = value;
          setBook(value);
          setStorageReady(true);
          setNotice(
            "Browser storage is unavailable. Keep this tab open and download your draft before leaving.",
          );
        }
      });
    return () => {
      alive = false;
    };
  }, []);

  useEffect(() => {
    if (!book || !storageReady) return;
    const revision = ++version.current;
    const timeout = setTimeout(() => {
      setSaveStatus("Saving on this device…");
      saveQueue.current = saveQueue.current
        .catch(() => {})
        .then(() => saveDraft(book))
        .then(() => {
          if (version.current === revision)
            setSaveStatus("Saved on this device");
        })
        .catch(() => {
          if (version.current === revision)
            setSaveStatus("Not saved · download a backup");
        });
    }, 400);
    return () => clearTimeout(timeout);
  }, [book, storageReady]);

  useEffect(() => {
    const guard = (event: BeforeUnloadEvent) => {
      if (
        saveStatus !== "Saved on this device" ||
        operationLock.current ||
        uploadLock.current
      ) {
        event.preventDefault();
      }
    };
    window.addEventListener("beforeunload", guard);
    return () => window.removeEventListener("beforeunload", guard);
  }, [saveStatus]);

  function refreshHistory() {
    setHistoryCount({ undo: past.current.length, redo: future.current.length });
  }
  function checkpoint() {
    if (!current.current) return;
    past.current = [...past.current.slice(-29), current.current];
    future.current = [];
    refreshHistory();
  }
  function replace(next: Book, remember = true) {
    if (remember) checkpoint();
    current.current = next;
    setBook(next);
    setSaveStatus("Saving on this device…");
  }
  function changePage(update: (page: BookPage) => BookPage, remember = true) {
    const value = current.current;
    if (!value) return;
    replace(
      {
        ...value,
        pages: value.pages.map((page, index) =>
          index === active ? update(page) : page,
        ),
      },
      remember,
    );
  }
  function updateLayer(patch: Partial<Layer>, remember = true) {
    changePage(
      (page) => ({
        ...page,
        layers: page.layers.map((layer) =>
          layer.id === selection ? { ...layer, ...patch } : layer,
        ),
      }),
      remember,
    );
  }
  function undo(redo = false) {
    const source = redo ? future : past,
      target = redo ? past : future;
    const next = source.current.pop();
    if (!next || !current.current) return;
    target.current.push(current.current);
    replace(next, false);
    setActive((index) => Math.min(index, next.pages.length - 1));
    setSelection("");
    refreshHistory();
  }
  function selectPage(index: number) {
    setActive(index);
    setSelection("");
    setPrompt("");
  }
  function addPhoto(photoId: string) {
    if (book?.stage !== "design") return;
    if (page.layers.length >= 40) {
      setNotice("This page has 40 layers. Remove one before adding more.");
      return;
    }
    const layer = photoLayer(photoId);
    changePage((page) => ({ ...page, layers: [...page.layers, layer] }));
    setSelection(layer.id);
  }
  function addText(text?: string, sticker = false) {
    if (page.layers.length >= 40) {
      setNotice("This page has 40 layers. Remove one before adding more.");
      return;
    }
    const layer = {
      ...textLayer(text),
      ...(sticker
        ? {
            kind: "sticker" as const,
            text: text ?? "♡",
            x: 65,
            y: 18,
            w: 22,
            h: 20,
            fontSize: 16,
          }
        : {}),
    };
    changePage((page) => ({ ...page, layers: [...page.layers, layer] }));
    setSelection(layer.id);
  }
  function addPage(photoId?: string) {
    if (!book || book.pages.length > MAX_PAGES) {
      setNotice(`Your book can have up to ${MAX_PAGES} memory pages.`);
      return;
    }
    const page = newPage(photoId);
    replace({ ...book, pages: [...book.pages, page] });
    selectPage(book.pages.length);
  }
  async function upload(files: FileList | File[] | null) {
    if (
      !files ||
      uploadLock.current ||
      !current.current ||
      current.current.stage !== "design"
    )
      return;
    uploadLock.current = true;
    setUploading(true);
    const slots = MAX_PAGES - current.current.photos.length;
    const picked = Array.from(files).slice(0, slots);
    const results = [];
    // Decode sequentially to keep memory bounded when selecting many large photos.
    for (const file of picked) {
      try {
        const photo = await readPhoto(file);
        const total =
          current.current.photos.reduce(
            (sum, item) => sum + item.src.length,
            0,
          ) +
          results.reduce(
            (sum, item) => sum + (item.photo?.src.length ?? 0),
            0,
          ) +
          photo.src.length;
        if (total > 70 * 1024 * 1024)
          throw new Error(
            "This draft is getting large. Use smaller photo files so it can be saved and backed up reliably.",
          );
        results.push({ photo, error: "" });
      } catch (error) {
        results.push({
          photo: null,
          error:
            error instanceof Error
              ? error.message
              : "Could not read that image.",
        });
      }
    }
    const photos = results.flatMap((result) =>
      result.photo ? [result.photo] : [],
    );
    const value = current.current;
    if (photos.length) {
      const remaining = MAX_PAGES - (value.pages.length - 1);
      const addedPages = photos
        .slice(0, remaining)
        .map((photo) => newPage(photo.id));
      replace({
        ...value,
        photos: [...value.photos, ...photos],
        pages: [...value.pages, ...addedPages],
      });
      if (addedPages.length) selectPage(value.pages.length);
    }
    const errors = results
      .filter((result) => result.error)
      .map((result) => result.error);
    setNotice(
      [
        photos.length
          ? `${photos.length} photo${photos.length === 1 ? "" : "s"} added. Each gets its own page; drag the pages to change their order.`
          : "",
        files.length > slots ? `The library holds ${MAX_PAGES} photos.` : "",
        ...errors,
      ]
        .filter(Boolean)
        .join(" "),
    );
    setUploading(false);
    uploadLock.current = false;
    if (input.current) input.current.value = "";
  }
  function movePage(from: number, to: number) {
    if (!book || book.stage !== "design") return;
    const pages = reorderPages(book.pages, from, to);
    if (pages !== book.pages) {
      replace({ ...book, pages });
      selectPage(to);
    }
  }
  function downloadDraft() {
    if (!book) return;
    const url = URL.createObjectURL(
      new Blob([JSON.stringify(book)], { type: "application/json" }),
    );
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "lovla-book-draft.json";
    anchor.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setNotice(
      "Draft downloaded. It includes your photos; keep it somewhere private.",
    );
  }
  async function importDraft(file?: File) {
    if (!file) return;
    try {
      if (file.size > 100 * 1024 * 1024)
        throw new Error("Choose a draft smaller than 100 MB.");
      const restored = parseDraft(JSON.parse(await file.text()));
      replace(restored);
      selectPage(0);
      setDialog(null);
      setNotice(
        "Your draft has been restored, including its photos and page layouts.",
      );
    } catch (error) {
      setNotice(
        error instanceof Error
          ? error.message
          : "This draft could not be opened.",
      );
    }
    if (importInput.current) importInput.current.value = "";
  }
  async function generate(onePage?: number) {
    const value = current.current;
    if (!value || operationLock.current) return;
    operationLock.current = true;
    setDialog(null);
    const isFirst = onePage === undefined;
    setBusy(
      isFirst ? "Preparing your local preview…" : "Making another version…",
    );
    try {
      const { createDemoProof } = await import("@/lib/shop/demo-proof");
      const pages = [...value.pages];
      const indexes =
        onePage === undefined
          ? pages.map((_, index) => index).slice(1)
          : [onePage];
      for (const index of indexes) {
        setBusy(`Previewing page ${index} of ${pages.length - 1}…`);
        const src = await createDemoProof(value, pages[index], detail);
        const revisions = [
          ...pages[index].revisions,
          {
            src,
            prompt:
              prompt.trim() ||
              (detail === "bold" ? "Bolder outlines" : "Gentle outlines"),
          },
        ].slice(-5);
        pages[index] = {
          ...pages[index],
          revisions,
          revision: revisions.length - 1,
          approved: false,
        };
      }
      replace({ ...value, pages, stage: "review", demoPaid: true });
      past.current = [];
      future.current = [];
      refreshHistory();
      if (isFirst) selectPage(1);
      setNotice(
        "Preview simulation only. The local outline filter uses your detail setting. Descriptive AI changes are saved with the version, but require the live generation service.",
      );
    } catch (error) {
      setNotice(
        error instanceof Error
          ? error.message
          : "Preview failed. Your photos and edits are safe; please try again.",
      );
    } finally {
      setBusy("");
      operationLock.current = false;
    }
  }
  function applyLayout(layout: "full" | "frame" | "postcard") {
    changePage((page) => ({
      ...page,
      layers: page.layers.map((layer) =>
        layer.kind === "photo"
          ? {
              ...layer,
              rotation: 0,
              ...(layout === "full"
                ? { x: 0, y: 0, w: 100, h: 100 }
                : layout === "frame"
                  ? { x: 10, y: 10, w: 80, h: 68 }
                  : { x: 15, y: 16, w: 70, h: 58, rotation: -4 }),
            }
          : layer,
      ),
    }));
  }

  if (!book)
    return (
      <main className={styles.loading}>
        <span className={styles.logo}>Lovla.</span>
        <LoaderCircle className={styles.spin} />
        <p>Opening a little space for your memories…</p>
      </main>
    );
  const page = book.pages[active] ?? book.pages[0];
  const selected = page.layers.find((layer) => layer.id === selection);
  const editable = book.stage === "design" && !busy && !uploading;
  const errors = validateBook(book);
  const approvedCount = book.pages
    .slice(1)
    .filter((item) => item.approved).length;
  const selectedPhoto = book.photos.find(
    (photo) => photo.id === selected?.photoId,
  );
  const pageLabel = active === 0 ? "Front cover" : `Page ${active}`;
  const review = book.stage !== "design";

  return (
    <main className={styles.studio}>
      <header className={styles.header}>
        <div className={styles.brandGroup}>
          <Link href="/" className={styles.logo} aria-label="Lovla home">
            Lovla.
          </Link>
          <span className={styles.brandDivider} />
          <span className={styles.shopLabel}>THE BOOK STUDIO</span>
        </div>
        <div className={styles.saveState}>
          <CloudCheck size={15} />
          <span role="status">{saveStatus}</span>
        </div>
        <div className={styles.headerActions}>
          <button onClick={() => setDialog("help")}>How it works</button>
          <button
            className={styles.avatar}
            onClick={downloadDraft}
            aria-label="Download draft backup"
          >
            <Download size={17} />
          </button>
        </div>
      </header>
      <div className={styles.progressBar}>
        {["Make it yours", "Create the magic", "Review & approve"].map(
          (step, index) => (
            <div
              key={step}
              className={`${styles.step} ${(index === 0 && !review) || (index === 2 && review) ? styles.currentStep : ""}`}
            >
              <span>
                {review && index < 2 ? <Check size={13} /> : index + 1}
              </span>
              {step}
              {index < 2 && <i />}
            </div>
          ),
        )}
        <span className={styles.previewBadge}>STUDIO PREVIEW · NO CHARGES</span>
      </div>
      <div className={styles.bookBar}>
        <div className={styles.bookTitle}>
          <BookOpen size={21} />
          <div>
            <input
              aria-label="Book title"
              maxLength={80}
              value={book.title}
              readOnly={!editable}
              onChange={(event) =>
                replace({ ...book, title: event.target.value })
              }
            />
            <p>
              {book.pages.length - 1} memory pages <span>·</span> 8 × 10 in{" "}
              <span>·</span> Made for your kind of together
            </p>
          </div>
        </div>
        <div className={styles.bookActions}>
          <button
            className={styles.secondaryButton}
            onClick={() => {
              setPreviewMode(review ? "proof" : "photos");
              setDialog("preview");
            }}
          >
            <Eye size={16} /> Flip through
          </button>
          <button
            className={styles.primaryButton}
            disabled={!!busy || uploading || book.stage === "complete"}
            onClick={() => {
              setCheckoutAccepted(false);
              setFinishAccepted(false);
              setDialog(review ? "finish" : "checkout");
            }}
          >
            {book.stage === "complete" ? (
              <>
                <CheckCheck size={16} /> Demo approved
              </>
            ) : review ? (
              <>
                Approve book <ArrowRight size={16} />
              </>
            ) : (
              <>
                Create my coloring book <ArrowRight size={16} />
              </>
            )}
          </button>
        </div>
      </div>
      {notice && (
        <div className={styles.notice} role="status">
          <span>{notice}</span>
          <button onClick={() => setNotice("")} aria-label="Dismiss message">
            <X size={15} />
          </button>
        </div>
      )}
      <div className={styles.workspace}>
        <nav className={styles.toolRail} aria-label="Editor tools">
          {panels.map(({ id, title, icon: Icon }) => (
            <button
              key={id}
              className={panel === id ? styles.activeTool : ""}
              aria-pressed={panel === id}
              onClick={() => {
                setPanel(id);
                if (window.matchMedia("(max-width: 760px)").matches)
                  library.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
              }}
            >
              <Icon size={21} strokeWidth={1.6} />
              <span>{title}</span>
            </button>
          ))}
          <div className={styles.railBottom}>
            <Heart size={18} />
          </div>
        </nav>
        <aside
          ref={library}
          className={styles.library}
          aria-label={`${panel} panel`}
        >
          <div className={styles.panelHeading}>
            <h2>
              {panel === "photos"
                ? "Your little moments"
                : panel === "text"
                  ? "Put it into words"
                  : panel === "layouts"
                    ? "Room for your story"
                    : "Every chapter of you"}
            </h2>
            <p>
              {panel === "photos"
                ? "Big adventures. Ordinary Tuesdays. All yours."
                : panel === "text"
                  ? "The place, the date, the inside joke."
                  : panel === "layouts"
                    ? "A starting point. Make it your own."
                    : "Drag pages into the perfect order."}
            </p>
          </div>
          {panel === "photos" && (
            <>
              <div
                className={`${styles.dropzone} ${dragOver ? styles.dragOver : ""}`}
                onDragOver={(event) => {
                  event.preventDefault();
                  setDragOver(true);
                }}
                onDragLeave={() => setDragOver(false)}
                onDrop={(event) => {
                  event.preventDefault();
                  setDragOver(false);
                  void upload(event.dataTransfer.files);
                }}
              >
                <button
                  className={styles.uploadButton}
                  disabled={!editable}
                  onClick={() => input.current?.click()}
                >
                  {uploading ? (
                    <LoaderCircle className={styles.spin} size={17} />
                  ) : (
                    <Upload size={17} />
                  )}{" "}
                  {uploading ? "Adding photos…" : "Upload your photos"}
                </button>
                <small>or drop them here · JPG, PNG, WebP</small>
                <input
                  ref={input}
                  type="file"
                  multiple
                  accept="image/jpeg,image/png,image/webp"
                  hidden
                  onChange={(event) => void upload(event.target.files)}
                />
              </div>
              <div className={styles.libraryLabel}>
                <span>{book.photos.length} PHOTOS</span>
                <span>
                  {book.photos.some((photo) => photo.sample)
                    ? "Sample memories"
                    : "Only on this device"}
                </span>
              </div>
              <div className={styles.photoGrid}>
                {book.photos.map((photo) => (
                  <button
                    key={photo.id}
                    disabled={!editable}
                    className={styles.photoTile}
                    title={`Add ${photo.name} to this page`}
                    aria-label={`Add ${photo.name} to this page`}
                    onClick={() => addPhoto(photo.id)}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.name}
                      fill
                      unoptimized
                      sizes="130px"
                    />
                    <span className={styles.photoAdd}>
                      <Plus size={14} />
                    </span>
                    {book.pages.some((p) =>
                      p.layers.some((l) => l.photoId === photo.id),
                    ) && (
                      <span className={styles.usedPhoto}>
                        <Check size={10} />
                      </span>
                    )}
                  </button>
                ))}
                <button
                  className={styles.addPhotoTile}
                  disabled={!editable}
                  onClick={() => input.current?.click()}
                  aria-label="Upload more photos"
                >
                  <Plus size={24} />
                  <span>Add photos</span>
                </button>
              </div>
              <div className={styles.tip}>
                <Sparkles size={18} />
                <p>
                  <strong>A little photo tip</strong>Clear faces and good light
                  make the loveliest coloring pages.
                </p>
              </div>
              {book.photos.some((photo) => photo.sample) && (
                <button
                  className={styles.textButton}
                  disabled={!editable}
                  onClick={() => setDialog("reset")}
                >
                  Start fresh with my own photos <ArrowRight size={14} />
                </button>
              )}
            </>
          )}
          {panel === "text" && (
            <div className={styles.textTools}>
              <button
                disabled={!editable}
                onClick={() => addText("Our kind of magic")}
                className={styles.addHeading}
              >
                Add a heading <Plus size={18} />
              </button>
              <button
                disabled={!editable}
                onClick={() => addText("A little moment, just ours.")}
              >
                Add a little note <Plus size={17} />
              </button>
              <span className={styles.sectionLabel}>THE LITTLE EXTRAS</span>
              <div className={styles.stickers}>
                {["♡", "✳", "✦", "☺", "❀", "∞"].map((symbol) => (
                  <button
                    key={symbol}
                    disabled={!editable}
                    onClick={() => addText(symbol, true)}
                    aria-label={`Add ${symbol} decoration`}
                  >
                    {symbol}
                  </button>
                ))}
              </div>
              <p className={styles.smallText}>
                Move words anywhere on the page. Select a layer to change its
                size, color, or lettering.
              </p>
            </div>
          )}
          {panel === "layouts" && (
            <>
              <div className={styles.layoutGrid}>
                {(["frame", "postcard", "full"] as const).map((layout) => (
                  <button
                    key={layout}
                    disabled={
                      !editable ||
                      !page.layers.some((layer) => layer.kind === "photo")
                    }
                    onClick={() => applyLayout(layout)}
                  >
                    <span className={`${styles.layoutDemo} ${styles[layout]}`}>
                      <i />
                    </span>
                    <span>
                      {layout === "frame"
                        ? "A little breathing room"
                        : layout === "postcard"
                          ? "Wish you were here"
                          : "The whole picture"}
                    </span>
                  </button>
                ))}
              </div>
              <span className={styles.sectionLabel}>PAPER PALETTE</span>
              <div className={styles.swatches}>
                {colors.map((color) => (
                  <button
                    key={color.value}
                    disabled={!editable}
                    aria-label={`Use ${color.name} background`}
                    aria-pressed={page.background === color.value}
                    style={{ background: color.value }}
                    onClick={() =>
                      changePage((p) => ({ ...p, background: color.value }))
                    }
                  >
                    {page.background === color.value && <Check size={16} />}
                  </button>
                ))}
              </div>
              <p className={styles.smallText}>
                Choose a color for your cover or photo layout. Coloring proofs
                use white paper.
              </p>
            </>
          )}
          {panel === "pages" && (
            <div className={styles.pageList}>
              {book.pages.map((item, index) => (
                <div
                  key={item.id}
                  draggable={editable && index > 0}
                  onDragStart={() => {
                    dragPage.current = index;
                  }}
                  onDragOver={(event) => event.preventDefault()}
                  onDrop={(event) => {
                    event.preventDefault();
                    if (dragPage.current !== null)
                      movePage(dragPage.current, index);
                    dragPage.current = null;
                  }}
                  className={active === index ? styles.activePageRow : ""}
                >
                  <button
                    className={styles.pageSelect}
                    onClick={() => selectPage(index)}
                  >
                    <GripVertical size={14} />
                    <span className={styles.tinyPage}>
                      <BookCanvas page={item} photos={book.photos} />
                    </span>
                    <span>{index === 0 ? "Front cover" : `Page ${index}`}</span>
                  </button>
                  {editable && index > 0 && (
                    <>
                      <button
                        aria-label={`Move page ${index} up`}
                        disabled={index === 1}
                        onClick={() => movePage(index, index - 1)}
                      >
                        <ArrowUp size={13} />
                      </button>
                      <button
                        aria-label={`Move page ${index} down`}
                        disabled={index === book.pages.length - 1}
                        onClick={() => movePage(index, index + 1)}
                      >
                        <ArrowDown size={13} />
                      </button>
                    </>
                  )}
                </div>
              ))}
              <button
                className={styles.secondaryButton}
                disabled={!editable || book.pages.length > MAX_PAGES}
                onClick={() => addPage()}
              >
                <Plus size={16} /> Add a blank page
              </button>
            </div>
          )}
          <div className={styles.libraryFooter}>
            <LockKeyhole size={13} /> Your photos stay in this browser preview.
          </div>
        </aside>
        <section className={styles.canvasArea} aria-label="Book page editor">
          <div className={styles.canvasToolbar}>
            <span>
              <MousePointer2 size={14} />
              {review ? "Coloring preview" : "Design your page"}
            </span>
            <div>
              <button
                aria-label="Undo"
                disabled={!editable || !historyCount.undo}
                onClick={() => undo()}
              >
                <Undo2 size={17} />
              </button>
              <button
                aria-label="Redo"
                disabled={!editable || !historyCount.redo}
                onClick={() => undo(true)}
              >
                <Redo2 size={17} />
              </button>
              <i />
              <button
                aria-label="Zoom out"
                disabled={zoom <= 60}
                onClick={() => setZoom(clamp(zoom - 10, 60, 120))}
              >
                <Minus size={15} />
              </button>
              <button
                className={styles.zoomLabel}
                onClick={() => setZoom(100)}
                aria-label="Reset zoom"
              >
                {zoom}%
              </button>
              <button
                aria-label="Zoom in"
                disabled={zoom >= 120}
                onClick={() => setZoom(clamp(zoom + 10, 60, 120))}
              >
                <Plus size={15} />
              </button>
            </div>
          </div>
          <div className={styles.canvasViewport}>
            <div className={styles.pageEyebrow}>
              {pageLabel} <span>·</span>{" "}
              {page.kind === "cover"
                ? "A beautiful beginning"
                : review
                  ? page.approved
                    ? "Approved by you"
                    : "Ready for your eyes"
                  : "A moment worth keeping"}
            </div>
            <div
              className={styles.canvasBook}
              style={
                {
                  width: `${zoom * 3.8}px`,
                  "--studio-zoom": zoom / 100,
                } as CSSProperties
              }
            >
              <BookCanvas
                page={page}
                photos={book.photos}
                selected={selection}
                editable={editable}
                proof={review && active > 0}
                onSelect={setSelection}
                onBegin={checkpoint}
                onChange={(layer) =>
                  changePage(
                    (p) => ({
                      ...p,
                      layers: p.layers.map((item) =>
                        item.id === layer.id ? layer : item,
                      ),
                    }),
                    false,
                  )
                }
              />
            </div>
            <p className={styles.canvasHint}>
              {review ? (
                "Your words stay just as you placed them."
              ) : (
                <>
                  <MousePointer2 size={12} /> Click anything to edit. Drag it
                  somewhere lovely.
                </>
              )}
            </p>
            <span className={styles.tableDoodle} aria-hidden="true">
              made of
              <br />
              <em>little moments</em>
              <span>↗</span>
            </span>
          </div>
          <div className={styles.canvasFooter}>
            <span>
              <span className={styles.greenDot} />
              {review
                ? `${approvedCount} of ${book.pages.length - 1} pages approved`
                : "Original photos · coloring happens after payment"}
            </span>
            <div>
              <button
                aria-label="Previous page"
                disabled={active === 0}
                onClick={() => selectPage(active - 1)}
              >
                <ChevronLeft size={17} />
              </button>
              <span>
                {active + 1} / {book.pages.length}
              </span>
              <button
                aria-label="Next page"
                disabled={active === book.pages.length - 1}
                onClick={() => selectPage(active + 1)}
              >
                <ChevronRight size={17} />
              </button>
            </div>
          </div>
        </section>
        <aside className={styles.inspector} aria-label="Page settings">
          {review && active > 0 ? (
            <>
              <div className={styles.panelHeading}>
                <span className={styles.sectionLabel}>
                  THE MAGIC, MADE YOURS
                </span>
                <h2>A little more you?</h2>
                <p>Love this page? Keep it. Have a change in mind? Tell us.</p>
              </div>
              <div className={styles.demoNote}>
                Local outline demo. AI edits and printing are not connected.
              </div>
              <label className={styles.fieldLabel} htmlFor="refinement">
                Describe your changes
              </label>
              <textarea
                id="refinement"
                value={prompt}
                maxLength={500}
                onChange={(event) => setPrompt(event.target.value)}
                placeholder="Keep our faces, simplify the background, and add a few little wildflowers…"
                disabled={!!busy || book.stage === "complete"}
              />
              <div className={styles.promptChips}>
                {["Simpler background", "Bolder outlines"].map((text) => (
                  <button
                    key={text}
                    disabled={book.stage === "complete"}
                    onClick={() => {
                      setPrompt(text);
                      setDetail(text === "Bolder outlines" ? "bold" : "gentle");
                    }}
                  >
                    {text}
                  </button>
                ))}
              </div>
              <label className={styles.fieldLabel} htmlFor="outline-detail">
                Local preview detail
              </label>
              <select
                id="outline-detail"
                value={detail}
                disabled={book.stage === "complete"}
                onChange={(event) =>
                  setDetail(event.target.value as "gentle" | "bold")
                }
              >
                <option value="gentle">Gentle outlines</option>
                <option value="bold">Bolder outlines</option>
              </select>
              <button
                className={styles.secondaryButton}
                disabled={!!busy || book.stage === "complete"}
                onClick={() => void generate(active)}
              >
                <Sparkles size={16} /> Regenerate demo page
              </button>
              {page.revisions.length > 0 && (
                <>
                  <span className={styles.sectionLabel}>VERSION HISTORY</span>
                  <div className={styles.versions}>
                    {page.revisions.map((revision, index) => (
                      <button
                        key={index}
                        disabled={book.stage === "complete"}
                        aria-pressed={page.revision === index}
                        title={revision.prompt}
                        onClick={() =>
                          changePage((p) => ({
                            ...p,
                            revision: index,
                            approved: false,
                          }))
                        }
                      >
                        v{index + 1}
                        {page.revision === index && <Check size={11} />}
                      </button>
                    ))}
                  </div>
                </>
              )}
              <button
                className={`${styles.primaryButton} ${page.approved ? styles.approvedButton : ""}`}
                disabled={
                  !!busy || !page.revisions.length || book.stage === "complete"
                }
                onClick={() =>
                  changePage((p) => ({ ...p, approved: !p.approved }))
                }
              >
                <Check size={16} />
                {page.approved ? "Page approved · undo" : "I love this page"}
              </button>
            </>
          ) : (
            <>
              <div className={styles.panelHeading}>
                <span className={styles.sectionLabel}>
                  {selected
                    ? `${selected.kind.toUpperCase()} SETTINGS`
                    : "MAKE IT YOURS"}
                </span>
                <h2>
                  {selected?.kind === "photo"
                    ? "A favorite, in focus."
                    : selected
                      ? "Words to keep."
                      : page.kind === "cover"
                        ? "Love at first page."
                        : "Your story, your way."}
                </h2>
                <p>
                  {selected
                    ? "The small details make it yours."
                    : "Choose a photo or a line of text to begin."}
                </p>
              </div>
              {selected && editable ? (
                <>
                  {selected.kind !== "photo" && (
                    <>
                      <label className={styles.fieldLabel} htmlFor="layer-text">
                        Your words
                      </label>
                      <textarea
                        id="layer-text"
                        maxLength={160}
                        value={selected.text ?? ""}
                        onChange={(event) =>
                          updateLayer({ text: event.target.value })
                        }
                      />
                      <label className={styles.fieldLabel} htmlFor="font">
                        Lettering
                      </label>
                      <select
                        id="font"
                        value={selected.font}
                        onChange={(event) =>
                          updateLayer({
                            font: event.target.value as Layer["font"],
                          })
                        }
                      >
                        <option value="serif">Romantic serif</option>
                        <option value="sans">Clean & simple</option>
                        <option value="hand">Handwritten</option>
                      </select>
                      <label className={styles.rangeLabel}>
                        Text size <span>{selected.fontSize}</span>
                        <input
                          aria-label="Text size"
                          type="range"
                          min="2"
                          max="24"
                          step="0.5"
                          value={selected.fontSize}
                          onPointerDown={checkpoint}
                          onChange={(event) =>
                            updateLayer(
                              { fontSize: +event.target.value },
                              false,
                            )
                          }
                        />
                      </label>
                      <label className={styles.colorInput}>
                        Ink color
                        <input
                          aria-label="Text color"
                          type="color"
                          value={selected.color}
                          onChange={(event) =>
                            updateLayer({ color: event.target.value })
                          }
                        />
                      </label>
                    </>
                  )}
                  {selected.kind === "photo" && (
                    <>
                      <p className={styles.filename}>{selectedPhoto?.name}</p>
                      {selectedPhoto &&
                        Math.min(selectedPhoto.width, selectedPhoto.height) <
                          1200 && (
                          <p className={styles.resolutionNote}>
                            This photo may look soft in print. A
                            higher-resolution original is best.
                          </p>
                        )}
                      <label className={styles.rangeLabel}>
                        Crop left / right
                        <input
                          aria-label="Horizontal photo crop"
                          type="range"
                          min="0"
                          max="100"
                          value={selected.cropX ?? 50}
                          onPointerDown={checkpoint}
                          onChange={(event) =>
                            updateLayer({ cropX: +event.target.value }, false)
                          }
                        />
                      </label>
                      <label className={styles.rangeLabel}>
                        Crop up / down
                        <input
                          aria-label="Vertical photo crop"
                          type="range"
                          min="0"
                          max="100"
                          value={selected.cropY ?? 50}
                          onPointerDown={checkpoint}
                          onChange={(event) =>
                            updateLayer({ cropY: +event.target.value }, false)
                          }
                        />
                      </label>
                    </>
                  )}
                  <label className={styles.rangeLabel}>
                    Rotation <span>{selected.rotation}°</span>
                    <input
                      aria-label="Layer rotation"
                      type="range"
                      min="-30"
                      max="30"
                      value={selected.rotation}
                      onPointerDown={checkpoint}
                      onChange={(event) =>
                        updateLayer({ rotation: +event.target.value }, false)
                      }
                    />
                  </label>
                  <div className={styles.numericFields}>
                    {(["x", "y", "w", "h"] as const).map((key) => (
                      <label key={key}>
                        {key === "w"
                          ? "Width"
                          : key === "h"
                            ? "Height"
                            : key.toUpperCase()}
                        <input
                          aria-label={`Layer ${key}`}
                          type="number"
                          min={key === "w" || key === "h" ? 5 : 0}
                          max="100"
                          value={Math.round(selected[key])}
                          onChange={(event) => {
                            const value = clamp(
                              Number(event.target.value),
                              key === "w" || key === "h" ? 5 : 0,
                              100,
                            );
                            updateLayer(
                              key === "x"
                                ? { x: Math.min(value, 100 - selected.w) }
                                : key === "y"
                                  ? { y: Math.min(value, 100 - selected.h) }
                                  : key === "w"
                                    ? { w: Math.min(value, 100 - selected.x) }
                                    : { h: Math.min(value, 100 - selected.y) },
                            );
                          }}
                        />
                      </label>
                    ))}
                  </div>
                  <div className={styles.layerActions}>
                    <button
                      disabled={page.layers.length >= 40}
                      onClick={() => {
                        const layer = {
                          ...selected,
                          id: uid(),
                          x: clamp(selected.x + 3, 0, 100 - selected.w),
                          y: clamp(selected.y + 3, 0, 100 - selected.h),
                        };
                        changePage((p) => ({
                          ...p,
                          layers: [...p.layers, layer],
                        }));
                        setSelection(layer.id);
                      }}
                    >
                      <Copy size={14} /> Duplicate
                    </button>
                    <button
                      onClick={() => {
                        changePage((p) => ({
                          ...p,
                          layers: p.layers.filter((l) => l.id !== selection),
                        }));
                        setSelection("");
                      }}
                    >
                      <Trash2 size={14} /> Remove
                    </button>
                  </div>
                  <button
                    className={styles.textButton}
                    onClick={() =>
                      changePage((p) => ({
                        ...p,
                        layers: [
                          ...p.layers.filter((l) => l.id !== selection),
                          selected,
                        ],
                      }))
                    }
                  >
                    Bring to front <ArrowUp size={13} />
                  </button>
                </>
              ) : (
                <>
                  <div className={styles.coverPalette}>
                    <span className={styles.fieldLabel}>
                      A color that feels like you
                    </span>
                    <div className={styles.swatches}>
                      {colors.map((color) => (
                        <button
                          key={color.value}
                          disabled={!editable}
                          aria-label={`Set ${color.name} paper`}
                          aria-pressed={page.background === color.value}
                          style={{ background: color.value }}
                          onClick={() =>
                            changePage((p) => ({
                              ...p,
                              background: color.value,
                            }))
                          }
                        >
                          {page.background === color.value && (
                            <Check size={15} />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className={styles.smallJourney}>
                    <span className={styles.sectionLabel}>
                      FROM CAMERA ROLL TO KEEPSAKE
                    </span>
                    <p>
                      <span>01</span>
                      <strong>Collect your us moments</strong>Upload, arrange,
                      and add your words.
                    </p>
                    <p>
                      <span>02</span>
                      <strong>Let a little magic happen</strong>Pay once to
                      create your coloring pages.
                    </p>
                    <p>
                      <span>03</span>
                      <strong>Make sure you love it</strong>Refine each page.
                      Approve before print.
                    </p>
                  </div>
                  <div className={styles.loveNote}>
                    <Heart size={17} />
                    <p>
                      Not just a coloring book.
                      <br />
                      <em>A little more us time.</em>
                    </p>
                  </div>
                </>
              )}
            </>
          )}
        </aside>
      </div>
      <section className={styles.filmstrip} aria-label="Book pages">
        <div className={styles.stripHeading}>
          <strong>Your book</strong>
          <span>
            {book.pages.length - 1} / {MAX_PAGES} pages
          </span>
          <button onClick={() => setPanel("pages")}>
            <GripVertical size={13} /> Organize
          </button>
        </div>
        <div className={styles.stripPages}>
          {book.pages.map((item, index) => (
            <button
              key={item.id}
              draggable={editable && index > 0}
              onDragStart={() => {
                dragPage.current = index;
              }}
              onDragEnd={() => {
                dragPage.current = null;
              }}
              onDragOver={(event) => event.preventDefault()}
              onDrop={(event) => {
                event.preventDefault();
                if (dragPage.current !== null)
                  movePage(dragPage.current, index);
                dragPage.current = null;
              }}
              aria-label={`Open ${index === 0 ? "front cover" : `page ${index}`}`}
              aria-pressed={index === active}
              className={styles.pageThumb}
              onClick={() => selectPage(index)}
            >
              <div>
                <BookCanvas
                  page={item}
                  photos={book.photos}
                  proof={review && index > 0}
                />
                {item.approved && (
                  <span className={styles.approvedMark}>
                    <Check size={10} />
                  </span>
                )}
              </div>
              <span>
                {index === 0 ? "Cover" : String(index).padStart(2, "0")}
              </span>
            </button>
          ))}
          <button
            className={styles.addPage}
            disabled={!editable || book.pages.length > MAX_PAGES}
            onClick={() => addPage()}
          >
            <Plus size={21} />
            <span>Add page</span>
          </button>
        </div>
        <div className={styles.stripActions}>
          {active > 0 && editable && (
            <>
              <button
                aria-label="Duplicate current page"
                disabled={book.pages.length > MAX_PAGES}
                onClick={() => {
                  const copy = {
                    ...page,
                    id: uid(),
                    layers: page.layers.map((layer) => ({
                      ...layer,
                      id: uid(),
                    })),
                  };
                  replace({
                    ...book,
                    pages: [
                      ...book.pages.slice(0, active + 1),
                      copy,
                      ...book.pages.slice(active + 1),
                    ],
                  });
                  selectPage(active + 1);
                }}
              >
                <Copy size={16} />
              </button>
              <button
                aria-label="Delete current page"
                onClick={() => {
                  replace({
                    ...book,
                    pages: book.pages.filter((_, index) => index !== active),
                  });
                  selectPage(Math.max(0, active - 1));
                }}
              >
                <Trash2 size={16} />
              </button>
            </>
          )}
        </div>
      </section>
      {dialog === "preview" && (
        <Modal
          title="A little book. A lot of us."
          wide
          onClose={() => setDialog(null)}
        >
          <div className={styles.previewTop}>
            <p>
              Your memories, bound together. Take your time with every page.
            </p>
            {review && (
              <div className={styles.segmented}>
                <button
                  aria-pressed={previewMode === "photos"}
                  onClick={() => setPreviewMode("photos")}
                >
                  Original photos
                </button>
                <button
                  aria-pressed={previewMode === "proof"}
                  onClick={() => setPreviewMode("proof")}
                >
                  Coloring preview
                </button>
              </div>
            )}
          </div>
          <BookPreview
            book={book}
            proof={previewMode === "proof"}
            onEdit={(page) => {
              selectPage(page);
              setDialog(null);
            }}
          />
        </Modal>
      )}
      {dialog === "checkout" && (
        <Modal
          title="Let's make a little magic."
          onClose={() => setDialog(null)}
        >
          <p className={styles.modalIntro}>
            Your photos become coloring pages after payment. Then you can refine
            every page before approving your book.
          </p>
          <div className={styles.checkoutSummary}>
            <div className={styles.checkoutCover}>
              <BookCanvas page={book.pages[0]} photos={book.photos} />
            </div>
            <div>
              <h3>{book.title || "Our little book of us"}</h3>
              <p>{book.pages.length - 1} memory pages · 8 × 10 in</p>
              <span>Personalized coloring book</span>
            </div>
          </div>
          {errors.length > 0 ? (
            <div className={styles.validation} role="alert">
              <strong>A few pages need your love</strong>
              <ul>
                {errors.map((error) => (
                  <li key={error}>{error}</li>
                ))}
              </ul>
            </div>
          ) : null}
          <div className={styles.demoNote}>
            <strong>You’re trying the studio preview.</strong>
            <p>
              Live checkout is not available yet. No card details, payment, AI
              request, or print order will be submitted. Continue to test a
              local outline preview.
            </p>
          </div>
          <label className={styles.checkbox}>
            <input
              type="checkbox"
              checked={checkoutAccepted}
              onChange={(event) => setCheckoutAccepted(event.target.checked)}
            />
            I understand this is a demo, with no charge or order.
          </label>
          <button
            className={styles.primaryButton}
            disabled={!checkoutAccepted || !!errors.length}
            onClick={() => void generate()}
          >
            <Sparkles size={16} /> Try the post-payment preview
          </button>
          <p className={styles.smallText}>
            Planned checkout: one payment before generation. Final approval
            releases the book for production, with no second book charge. Price
            and fulfillment will be configured before launch.
          </p>
        </Modal>
      )}
      {dialog === "finish" && (
        <Modal
          title={
            book.stage === "complete"
              ? "A little book, approved."
              : "Every page should feel like you."
          }
          onClose={() => setDialog(null)}
        >
          {book.stage === "complete" ? (
            <div className={styles.completed}>
              <CheckCheck size={44} />
              <h3>Your demo book is approved.</h3>
              <p>
                Your draft is saved on this device. No payment was taken and
                nothing was sent to print.
              </p>
              <button className={styles.primaryButton} onClick={downloadDraft}>
                <Download size={16} /> Download your draft
              </button>
            </div>
          ) : (
            <>
              <p className={styles.modalIntro}>
                Take one last look. Approving is the final step before a real
                order would go to print.
              </p>
              <div className={styles.approvalList}>
                {book.pages.slice(1).map((p, index) => (
                  <button
                    key={p.id}
                    onClick={() => {
                      selectPage(index + 1);
                      setDialog(null);
                    }}
                  >
                    <span>Page {index + 1}</span>
                    <span>
                      {p.approved ? (
                        <>
                          <Check size={14} /> Approved
                        </>
                      ) : (
                        <>
                          Needs your review <ArrowRight size={14} />
                        </>
                      )}
                    </span>
                  </button>
                ))}
              </div>
              <label className={styles.checkbox}>
                <input
                  type="checkbox"
                  checked={finishAccepted}
                  onChange={(event) => setFinishAccepted(event.target.checked)}
                />
                I’ve checked the cover, page order, text, and every coloring
                page.
              </label>
              <button
                className={styles.primaryButton}
                disabled={!canApproveOrder(book) || !finishAccepted}
                onClick={() => {
                  replace({ ...book, stage: "complete" });
                  past.current = [];
                  future.current = [];
                  refreshHistory();
                }}
              >
                <CheckCheck size={17} /> Complete demo approval
              </button>
              <p className={styles.smallText}>
                {approvedCount} of {book.pages.length - 1} pages approved. This
                is a simulation; no book will be printed.
              </p>
            </>
          )}
        </Modal>
      )}
      {dialog === "help" && (
        <Modal
          title="Your memories. A new kind of keepsake."
          onClose={() => setDialog(null)}
        >
          <div className={styles.helpSteps}>
            <p>
              <strong>1. Make it yours</strong>Upload a batch of photos. Each
              becomes a page. Drag pages to organize your book, select photos to
              move or crop them, and add words or little decorations.
            </p>
            <p>
              <strong>2. Pay once, then create</strong>The planned live flow
              collects payment before converting your photos to coloring pages.
              This local studio uses a clearly marked, free outline simulation.
            </p>
            <p>
              <strong>3. Fall in love with every page</strong>Review the
              results, describe refinements, compare versions, and approve each
              page. Only final approval will release a real book for printing.
            </p>
          </div>
          <p className={styles.demoNote}>
            This preview saves photos on this browser and device, not in a Lovla
            account. Live payments, AI refinements, and printing are not
            connected.
          </p>
          <button className={styles.secondaryButton} onClick={downloadDraft}>
            <Download size={16} /> Download a draft backup
          </button>
          <button
            className={styles.textButton}
            disabled={!!busy || uploading}
            onClick={() => importInput.current?.click()}
          >
            Restore a saved draft <Upload size={14} />
          </button>
          {editable && (
            <button
              className={styles.textButton}
              onClick={() => {
                replace(sampleBook());
                selectPage(0);
                setDialog(null);
                setNotice(
                  "Sample book loaded. Your previous book is available with Undo.",
                );
              }}
            >
              Try the sample book <BookOpen size={14} />
            </button>
          )}
          <input
            ref={importInput}
            type="file"
            accept="application/json,.json"
            hidden
            onChange={(event) => void importDraft(event.target.files?.[0])}
          />
          {review && (
            <button
              className={styles.textButton}
              onClick={() => {
                replace({
                  ...book,
                  stage: "design",
                  demoPaid: false,
                  pages: book.pages.map((p) => ({
                    ...p,
                    revisions: [],
                    revision: 0,
                    approved: false,
                  })),
                });
                past.current = [];
                future.current = [];
                refreshHistory();
                setDialog(null);
              }}
            >
              Return to design & reset demo proofs <RotateCcw size={14} />
            </button>
          )}
        </Modal>
      )}
      {dialog === "reset" && (
        <Modal
          title="Start your own little story."
          onClose={() => setDialog(null)}
        >
          <p className={styles.modalIntro}>
            Replace the sample book with a fresh cover and your own memories.
            You can undo this change.
          </p>
          <button
            className={styles.primaryButton}
            onClick={() => {
              replace(blankBook());
              selectPage(0);
              setDialog(null);
              setNotice(
                "Your fresh book is ready. Upload your favorite photos to begin.",
              );
            }}
          >
            Start my book <ArrowRight size={16} />
          </button>
        </Modal>
      )}
      {busy && (
        <div className={styles.busyOverlay} role="status" aria-live="polite">
          <div>
            <Sparkles size={30} />
            <h2>A little magic in the making.</h2>
            <p>{busy}</p>
            <LoaderCircle className={styles.spin} />
            <small>Local demo · your photos stay on this device</small>
          </div>
        </div>
      )}
    </main>
  );
}
