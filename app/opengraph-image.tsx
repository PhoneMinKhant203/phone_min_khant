import { ImageResponse } from "next/og";

export const alt = "Phone Min Khant — Business Analyst, Software Engineer, and AI Researcher in Training";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "#101211", color: "#f2f0e8", fontFamily: "Georgia, serif" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 16, color: "#b8c9b2", fontSize: 20, letterSpacing: 4 }}>PMK <span style={{ color: "#484e49" }}> / </span> PHONE MIN KHANT</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ fontSize: 68, lineHeight: 1.04, maxWidth: 980 }}>Building where fintech, software and AI meet.</div>
        <div style={{ color: "#afb5ae", fontSize: 26, fontFamily: "Arial, sans-serif", letterSpacing: 1 }}>BUSINESS ANALYST · SOFTWARE ENGINEER · AI RESEARCHER IN TRAINING</div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", color: "#828981", fontSize: 19 }}><span>WORK · RESEARCH · TEACHING</span><span>PHONEMINKHANT</span></div>
      <div style={{ position: "absolute", right: 85, top: 80, width: 250, height: 250, borderRadius: 999, border: "1px solid #353c36", display: "flex" }}></div>
      <div style={{ position: "absolute", right: 120, top: 115, width: 180, height: 180, borderRadius: 999, border: "1px solid #556254", display: "flex" }}></div>
    </div>,
    size,
  );
}
