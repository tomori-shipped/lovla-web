import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export function GET() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#f5ecf7",
        color: "#4b164c",
        padding: "66px 76px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", fontSize: 48, fontWeight: 700 }}>
        Lovla.
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            fontSize: 76,
            fontWeight: 700,
            lineHeight: 1.08,
          }}
        >
          A little more color.
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 76,
            fontWeight: 700,
            lineHeight: 1.08,
          }}
        >
          A little more us.
        </div>
      </div>
      <div style={{ display: "flex", fontSize: 28 }}>
        A couples coloring app for creative dates and shared memories.
      </div>
    </div>,
    { width: 1200, height: 630 },
  );
}
