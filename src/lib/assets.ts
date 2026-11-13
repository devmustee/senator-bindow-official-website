import { existsSync } from "node:fs";
import path from "node:path";
import { profile } from "@/content/content";

/** True when a file exists under /public. Used so a missing portrait or logo falls back gracefully. */
export function hasPublic(src: string) {
  return existsSync(path.join(process.cwd(), "public", src.replace(/^\//, "")));
}

export const brand = {
  logo: "/images/logo.jpg",
};

export function getPortrait() {
  return profile.portrait && hasPublic(profile.portrait.src) ? profile.portrait : null;
}

export function getLogo() {
  return hasPublic(brand.logo) ? brand.logo : null;
}
