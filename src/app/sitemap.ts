import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { services } from "@/data/services";
import { posts } from "@/data/posts";
import { caseStudies } from "@/data/caseStudies";

// /hero2 celowo pominięte (wariant testowy strony głównej, noindex).
export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "/",
    "/o-nas",
    "/case-study",
    "/blog",
    "/kontakt",
    "/polityka-prywatnosci",
  ];

  return [
    ...staticPaths.map((path) => ({ url: `${SITE_URL}${path}` })),
    ...services.map((s) => ({ url: `${SITE_URL}/uslugi/${s.slug}` })),
    ...caseStudies.map((c) => ({ url: `${SITE_URL}/case-study/${c.slug}` })),
    ...posts.map((p) => ({
      url: `${SITE_URL}/blog/${p.slug}`,
      lastModified: p.date,
    })),
  ];
}
