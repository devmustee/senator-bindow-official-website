import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { getLogo, getPortrait } from "@/lib/assets";

export const alt = "Muhammadu Umaru Jibrilla Bindow: Governor of Adamawa State 2015–2019, Senator for Adamawa North 2011–2015";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function dataUrl(src: string | null) {
  if (!src) return null;
  const buf = await readFile(path.join(process.cwd(), "public", src));
  return `data:image/jpeg;base64,${buf.toString("base64")}`;
}

export default async function OG() {
  const pic = (await dataUrl(getLogo())) ?? (await dataUrl(getPortrait()?.src ?? null));
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", gap: 60, background: "#101F36", padding: 70, color: "white", fontFamily: "Georgia, serif" }}>
        {pic && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={pic} width={470} height={470} style={{ border: "3px solid #C7A45B", objectFit: "cover" }} alt="" />
        )}
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ color: "#C7A45B", fontSize: 22, letterSpacing: 6, textTransform: "uppercase" }}>Senator</div>
          <div style={{ fontSize: pic ? 58 : 76, lineHeight: 1.08, marginTop: 16 }}>Muhammadu Umaru Jibrilla Bindow</div>
          <div style={{ marginTop: 26, height: 3, width: 110, background: "#C7A45B" }} />
          <div style={{ marginTop: 26, fontSize: 26, color: "rgba(255,255,255,.75)" }}>Former Governor, Adamawa State · Former Senator, Adamawa North</div>
        </div>
      </div>
    ),
    size,
  );
}
