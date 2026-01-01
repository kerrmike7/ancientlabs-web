import { ImageResponse } from "next/og";
import { siteConfig } from "@/siteConfig";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: "#111827",
          color: "#F9FAFB",
          padding: "96px",
          flexDirection: "column",
          justifyContent: "space-between",
          fontFamily: "Geist, Inter, -apple-system, BlinkMacSystemFont, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#9CA3AF",
            display: "flex",
          }}
        >
          <span>Data & AI Studio</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 600,
              lineHeight: 1.1,
              maxWidth: "900px",
              marginBottom: "32px",
            }}
          >
            Systems, not slides. Infrastructure for ambitious operators.
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#D1D5DB",
            }}
          >
            {siteConfig.description}
          </div>
        </div>
        <div
          style={{
            fontSize: 32,
            fontWeight: 600,
            display: "flex",
            gap: "12px",
          }}
        >
          <span>{siteConfig.name}</span>
          <span>•</span>
          <span>{siteConfig.domains.primary}</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
