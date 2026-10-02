export class PageFlip {
  constructor(
    element: HTMLElement,
    settings: {
      width: number;
      height: number;
      size?: "fixed" | "stretch";
      minWidth?: number;
      maxWidth?: number;
      minHeight?: number;
      maxHeight?: number;
      showCover?: boolean;
      usePortrait?: boolean;
      autoSize?: boolean;
      drawShadow?: boolean;
      maxShadowOpacity?: number;
      flippingTime?: number;
      useMouseEvents?: boolean;
      mobileScrollSupport?: boolean;
      showPageCorners?: boolean;
      disableFlipByClick?: boolean;
      startPage?: number;
    },
  );
  loadFromHTML(pages: HTMLElement[]): void;
  on(
    name: string,
    callback: (event: { data: number | string | object }) => void,
  ): void;
  off(name: string): void;
  getCurrentPageIndex(): number;
  getPageCount(): number;
  getState(): string;
  flipNext(corner?: "top" | "bottom"): void;
  flipPrev(corner?: "top" | "bottom"): void;
  flip(index: number, corner?: "top" | "bottom"): void;
  turnToPage(index: number): void;
  update(): void;
  destroy(): void;
}
