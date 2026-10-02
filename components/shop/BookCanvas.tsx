"use client";

import Image from "next/image";
import { useRef, type PointerEvent } from "react";
import type { BookPage, Layer, Photo } from "@/lib/shop/model";
import { clamp } from "@/lib/shop/model";
import styles from "./shop.module.css";

type Props = {
  page: BookPage;
  photos: Photo[];
  selected?: string;
  editable?: boolean;
  proof?: boolean;
  onSelect?: (id: string) => void;
  onChange?: (layer: Layer) => void;
  onBegin?: () => void;
};
export default function BookCanvas({
  page,
  photos,
  selected,
  editable,
  proof,
  onSelect,
  onChange,
  onBegin,
}: Props) {
  const surface = useRef<HTMLDivElement>(null);
  const gesture = useRef<{
    layer: Layer;
    x: number;
    y: number;
    width: number;
    height: number;
    resize: boolean;
  } | null>(null);
  const revision = proof ? page.revisions[page.revision] : undefined;
  function start(
    event: PointerEvent<HTMLElement>,
    layer: Layer,
    resize = false,
  ) {
    if (!editable || !surface.current || event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();
    onSelect?.(layer.id);
    onBegin?.();
    const rect = surface.current.getBoundingClientRect();
    gesture.current = {
      layer: { ...layer },
      x: event.clientX,
      y: event.clientY,
      width: rect.width,
      height: rect.height,
      resize,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  }
  function move(event: PointerEvent<HTMLElement>) {
    const g = gesture.current;
    if (!g) return;
    const dx = ((event.clientX - g.x) / g.width) * 100,
      dy = ((event.clientY - g.y) / g.height) * 100;
    const layer = g.resize
      ? {
          ...g.layer,
          w: clamp(g.layer.w + dx, 10, 100 - g.layer.x),
          h: clamp(g.layer.h + dy, 5, 100 - g.layer.y),
        }
      : {
          ...g.layer,
          x: clamp(g.layer.x + dx, 0, 100 - g.layer.w),
          y: clamp(g.layer.y + dy, 0, 100 - g.layer.h),
        };
    onChange?.(layer);
  }
  return (
    <div
      ref={surface}
      className={`${styles.paper} ${page.kind === "cover" ? styles.cover : ""}`}
      style={{ backgroundColor: revision ? "#fff" : page.background }}
      onPointerDown={() => editable && onSelect?.("")}
    >
      <div className={styles.paperGrain} aria-hidden="true" />
      {revision && (
        <Image
          src={revision.src}
          alt="Local contour preview of this page"
          fill
          unoptimized
          draggable={false}
          className={styles.proofImage}
        />
      )}
      {page.layers
        .filter((layer) => !revision || layer.kind !== "photo")
        .map((layer) => {
          const photo = photos.find((item) => item.id === layer.photoId);
          return (
            <div
              key={layer.id}
              role={editable ? "button" : undefined}
              tabIndex={editable ? 0 : undefined}
              aria-label={
                editable
                  ? `Select ${layer.kind === "photo" ? (photo?.name ?? "photo") : layer.text}`
                  : undefined
              }
              aria-pressed={editable ? selected === layer.id : undefined}
              onPointerDown={(event) => start(event, layer)}
              onPointerMove={move}
              onPointerUp={() => {
                gesture.current = null;
              }}
              onPointerCancel={() => {
                gesture.current = null;
              }}
              onKeyDown={(event) => {
                if (!editable) return;
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  onSelect?.(layer.id);
                }
                if (
                  ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(
                    event.key,
                  )
                ) {
                  event.preventDefault();
                  onBegin?.();
                  const step = event.shiftKey ? 5 : 1;
                  onChange?.({
                    ...layer,
                    x: clamp(
                      layer.x +
                        (event.key === "ArrowLeft"
                          ? -step
                          : event.key === "ArrowRight"
                            ? step
                            : 0),
                      0,
                      100 - layer.w,
                    ),
                    y: clamp(
                      layer.y +
                        (event.key === "ArrowUp"
                          ? -step
                          : event.key === "ArrowDown"
                            ? step
                            : 0),
                      0,
                      100 - layer.h,
                    ),
                  });
                }
              }}
              className={`${styles.layer} ${styles[layer.kind]} ${editable && selected === layer.id ? styles.selectedLayer : ""}`}
              style={{
                left: `${layer.x}%`,
                top: `${layer.y}%`,
                width: `${layer.w}%`,
                height: `${layer.h}%`,
                transform: `rotate(${layer.rotation}deg)`,
                color: layer.color,
                fontSize: `${layer.fontSize ?? 5}cqw`,
                fontFamily:
                  layer.font === "sans"
                    ? "var(--font-inter), sans-serif"
                    : layer.font === "hand"
                      ? "'Comic Sans MS', cursive"
                      : "var(--font-instrument-serif), Georgia, serif",
                cursor: editable ? "grab" : "default",
              }}
            >
              {layer.kind === "photo" && photo ? (
                <Image
                  src={photo.src}
                  alt={photo.name}
                  fill
                  sizes="(max-width: 700px) 70vw, 440px"
                  unoptimized
                  loading="eager"
                  draggable={false}
                  style={{
                    objectFit: "cover",
                    objectPosition: `${layer.cropX ?? 50}% ${layer.cropY ?? 50}%`,
                  }}
                />
              ) : (
                <span>{layer.text}</span>
              )}
              {editable && selected === layer.id && (
                <>
                  <span className={styles.layerLabel}>
                    {layer.kind === "photo" ? "Photo" : "Text"} · drag to move
                  </span>
                  <span
                    className={styles.resizeHandle}
                    role="button"
                    tabIndex={0}
                    aria-label="Resize selected layer"
                    onPointerDown={(event) => start(event, layer, true)}
                    onKeyDown={(event) => {
                      if (
                        event.key === "ArrowRight" ||
                        event.key === "ArrowLeft"
                      ) {
                        event.preventDefault();
                        event.stopPropagation();
                        onBegin?.();
                        onChange?.({
                          ...layer,
                          w: clamp(
                            layer.w + (event.key === "ArrowRight" ? 2 : -2),
                            10,
                            100 - layer.x,
                          ),
                        });
                      }
                    }}
                  />
                </>
              )}
            </div>
          );
        })}
      {!page.layers.length && (
        <div className={styles.emptyPaper}>
          <span>♡</span>
          <p>A memory belongs here.</p>
          <small>Add a photo from your library</small>
        </div>
      )}
      {page.kind === "page" && (
        <span className={styles.paperMark}>made of us · Lovla.</span>
      )}
    </div>
  );
}
