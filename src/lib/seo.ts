import type { Metadata } from "next";
import { team } from "@/data/team";

export const SITE_URL = "https://businessquest.pl";

// Obrazki z src/app/opengraph-image.png i twitter-image.png. Podstrona z własnym
// `openGraph` traci obrazek z layoutu, więc podajemy go jawnie.
const ogImage = { url: "/opengraph-image.png", width: 1200, height: 630, type: "image/png" };

// Metadane podstrony: canonical + własne og:/twitter: (inaczej podstrony dziedziczą
// og:url i tytuł strony głównej z layoutu).
export function pageMetadata({
  title,
  description,
  path,
  type = "website",
  publishedTime,
}: {
  title: string;
  description?: string;
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: "businessQuest",
      locale: "pl_PL",
      type,
      images: [ogImage],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: { card: "summary", title, description, images: ["/twitter-image.png"] },
  };
}

export const organizationId = `${SITE_URL}/#organization`;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": organizationId,
  name: "businessQuest",
  legalName: "Business Quest sp. z o.o.",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  image: `${SITE_URL}/opengraph-image.png`,
  description:
    "Twój pierwszy zespół HR. Proste i użyteczne rozwiązania dla mikro i małych firm.",
  email: "zuzanna.wozniak@businessquest.pl",
  areaServed: { "@type": "Country", name: "Polska" },
  sameAs: ["https://www.linkedin.com/company/business-quest-consulting"],
  employee: team.map((m) => ({
    "@type": "Person",
    name: m.name,
    jobTitle: m.role,
    ...(m.linkedin ? { sameAs: [m.linkedin] } : {}),
  })),
};

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
