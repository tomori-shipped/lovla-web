"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Hand } from "lucide-react";
import type { Book } from "@/lib/shop/model";
import { buildPreviewLeaves } from "@/lib/shop/preview-leaves";
import type { PageFlip } from "@/lib/shop/vendor/page-flip";
import BookCanvas from "./BookCanvas";
import styles from "./book-preview.module.css";

export default function BookPreview({
  book,
  proof,
  onEdit,
}: {
  book: Book;
  proof: boolean;
  onEdit: (page: number) => void;
}) {
  const leaves = useMemo(() => buildPreviewLeaves(book.pages.length - 1), [book.pages.length]);
  const source = useRef<HTMLDivElement>(null);
  const mount = useRef<HTMLDivElement>(null);
  const engine = useRef<PageFlip | null>(null);
  const pageRef = useRef(0);
  const [current, setCurrent] = useState(0);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState(false);
  const [moving, setMoving] = useState(false);

  useEffect(() => {
    let disposed = false;
    let instance: PageFlip | undefined;
    let observer: ResizeObserver | undefined;
    const host = document.createElement("div");
    host.className = styles.engine;
    mount.current?.appendChild(host);
    // The renderer owns clones only. React retains its source tree, avoiding
    // reconciliation conflicts when the page-turn engine moves and clips leaves.
    void import("@/lib/shop/vendor/page-flip")
      .then(({ PageFlip: Renderer }) => {
        if (disposed || !source.current) return;
        const reducedMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;
        instance = new Renderer(host, {
          width: 400,
          height: 500,
          size: "stretch",
          minWidth: 90,
          maxWidth: 500,
          minHeight: 112,
          maxHeight: 625,
          showCover: true,
          usePortrait: false,
          autoSize: false,
          drawShadow: true,
          maxShadowOpacity: 0.3,
          flippingTime: reducedMotion ? 1 : 850,
          useMouseEvents: true,
          mobileScrollSupport: false,
          showPageCorners: !reducedMotion,
          disableFlipByClick: false,
          startPage: pageRef.current,
        });
        engine.current = instance;
        instance.on("flip", ({ data }) => {
          if (!disposed && typeof data === "number") {
            pageRef.current = data;
            setCurrent(data);
          }
        });
        instance.on("changeState", ({ data }) => {
          if (!disposed) setMoving(data !== "read");
        });
        instance.on("init", () => {
          if (!disposed) {
            setReady(true);
            setMoving(false);
          }
        });
        instance.loadFromHTML(
          Array.from(
            source.current.children,
            (node) => node.cloneNode(true) as HTMLElement,
          ),
        );
        observer = new ResizeObserver(() => instance?.update());
        observer.observe(host);
      })
      .catch(() => {
        if (!disposed) setError(true);
      });
    return () => {
      disposed = true;
      observer?.disconnect();
      instance?.off("flip");
      instance?.off("changeState");
      instance?.off("init");
      instance?.destroy();
      host.remove();
      engine.current = null;
    };
  }, [book, proof]);

  const last = leaves.length - 1;
  const visible =
    current === 0 || current === last ? [current] : [current, current + 1];
  const memoryPages = visible.flatMap((index) =>
    leaves[index]?.kind === "memory" ? [leaves[index].page!] : [],
  );
  const caption =
    current === 0
      ? "Front cover"
      : current === last
        ? "Back cover"
        : current === 1
          ? "Inside cover & title page"
          : memoryPages.length
            ? `Page${memoryPages.length > 1 ? "s" : ""} ${memoryPages.join(" & ")} of ${book.pages.length - 1}`
            : "The final pages";
  const turn = (direction: "next" | "previous") => {
    if (!engine.current || engine.current.getState() !== "read") return;
    if (direction === "next" && current < last)
      engine.current.flipNext("bottom");
    if (direction === "previous" && current > 0)
      engine.current.flipPrev("bottom");
  };
  return (
    <div className={styles.preview}>
      <div className={styles.instruction}>
        <Hand size={15} />
        <span>
          Hold a page and drag it across the spine. Left to go forward, right to
          go back.
        </span>
      </div>
      <div className={styles.stage}>
        <div
          ref={mount}
          className={`${styles.mount} ${current === 0 ? styles.frontClosed : current === last ? styles.backClosed : ""}`}
          data-testid="flip-book"
          data-page={current}
          data-state={moving ? "turning" : "resting"}
          aria-hidden="true"
        />
        {!ready && (
          <p className={styles.loading} role="status">
            {error
              ? "The book preview could not load. Close it and try again."
              : "Opening your book…"}
          </p>
        )}
      </div>
      <div hidden ref={source}>
        {leaves.map((leaf, index) => (
          <div
            key={`${leaf.kind}-${index}`}
            className={`${styles.leaf} ${leaf.kind === "cover" || leaf.kind === "back" ? styles.hard : ""}`}
            data-density={
              leaf.kind === "cover" || leaf.kind === "back" ? "hard" : "soft"
            }
          >
            {leaf.kind === "cover" || leaf.kind === "memory" ? (
              <BookCanvas
                page={book.pages[leaf.page!]}
                photos={book.photos}
                proof={proof && leaf.kind === "memory"}
              />
            ) : leaf.kind === "endpaper" ? (
              <div
                className={styles.endpaper}
                style={{ backgroundColor: book.pages[0].background }}
              >
                <span>♡</span>
                <i>made of little moments</i>
              </div>
            ) : leaf.kind === "title" ? (
              <div className={styles.titlePage}>
                <span>A LITTLE MORE US TIME</span>
                <h3>{book.title || "Our little book of us"}</h3>
                <i>{book.subtitle}</i>
                <b>Lovla.</b>
              </div>
            ) : leaf.kind === "back" ? (
              <div
                className={styles.backCover}
                style={{ backgroundColor: book.pages[0].background }}
              >
                <span>♡</span>
                <b>Lovla.</b>
                <i>A little more us time.</i>
              </div>
            ) : (
              <div className={styles.blankPage}>
                <span>Room for more memories.</span>
              </div>
            )}
            <div className={styles.gutter} />
          </div>
        ))}
      </div>
      <div className={styles.controls}>
        <button
          aria-label="Previous preview spread"
          disabled={!ready || moving || current === 0}
          onClick={() => turn("previous")}
        >
          <ChevronLeft size={19} />
        </button>
        <div
          className={styles.status}
          tabIndex={0}
          role="group"
          aria-label="Book navigation. Use left and right arrow keys to turn pages."
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
              event.preventDefault();
              turn(event.key === "ArrowLeft" ? "previous" : "next");
            }
          }}
        >
          <strong role="status" aria-live="polite">
            {caption}
          </strong>
          <span>
            {current === 0
              ? "Drag the cover to open"
              : current === last
                ? "A little book. A lot of us."
                : "Drag either page to turn"}
          </span>
        </div>
        <button
          aria-label="Next preview spread"
          disabled={!ready || moving || current === last}
          onClick={() => turn("next")}
        >
          <ChevronRight size={19} />
        </button>
      </div>
      <div className={styles.footer}>
        <button
          disabled={!ready || moving || current === 0}
          onClick={() => engine.current?.turnToPage(0)}
        >
          Close book
        </button>
        <div>
          {(current === 0 ? [0] : memoryPages).map((page) => (
            <button key={page} onClick={() => onEdit(page)}>
              Edit {page === 0 ? "cover" : `page ${page}`}{" "}
              <ArrowRight size={13} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
