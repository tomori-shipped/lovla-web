export type PreviewLeaf = {
  kind: "cover" | "endpaper" | "title" | "memory" | "blank" | "back";
  page?: number;
};

export function buildPreviewLeaves(memoryPageCount: number): PreviewLeaf[] {
  const leaves: PreviewLeaf[] = [
    { kind: "cover", page: 0 },
    { kind: "endpaper" },
    { kind: "title" },
    ...Array.from({ length: memoryPageCount }, (_, index) => ({
      kind: "memory" as const,
      page: index + 1,
    })),
  ];
  // The front and back covers each occupy a single side; every interior spread
  // needs two leaves so the final memory never becomes a hard back cover.
  if (memoryPageCount % 2 === 0) leaves.push({ kind: "blank" });
  leaves.push({ kind: "endpaper" }, { kind: "back" });
  return leaves;
}
