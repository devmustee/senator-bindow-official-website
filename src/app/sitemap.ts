import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const routes = ["", "/biography", "/education", "/career", "/governorship", "/projects", "/achievements", "/senate", "/timeline", "/gallery", "/media", "/speeches", "/awards", "/leadership", "/contact", "/sources"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((r) => ({
    url: `${site.url}${r}`,
    lastModified: now,
    changeFrequency: r === "" || r === "/media" ? "weekly" : "monthly",
    priority: r === "" ? 1 : ["/biography", "/governorship", "/career"].includes(r) ? 0.9 : 0.7,
  }));
}
