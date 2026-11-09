import { ImageResponse } from "next/og";

export const alt = "KMA Advisory — English and Burmese accounting support";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "center",
        background: "#002f37",
        color: "#ffffff",
        display: "flex",
        height: "100%",
        justifyContent: "center",
        padding: "72px",
        width: "100%",
      }}
    >
      <div
        style={{
          border: "2px solid rgba(255,255,255,0.16)",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "58px",
          width: "100%",
        }}
      >
        <div
          style={{
            color: "#ff7900",
            display: "flex",
            fontSize: 26,
            fontWeight: 700,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          Myanmar-founded · Australia-wide
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 22,
          }}
        >
          <div style={{ display: "flex", fontSize: 70, fontWeight: 700 }}>
            KMA Advisory
          </div>
          <div
            style={{
              color: "#a9c1c4",
              display: "flex",
              fontSize: 34,
              lineHeight: 1.3,
              maxWidth: 850,
            }}
          >
            Clear accounting support in English and Burmese.
          </div>
        </div>
      </div>
    </div>,
    size,
  );
}
