import { absoluteUrl } from "@/lib/seo";
import { site } from "@/lib/site";

export function StructuredData() {
  if (!site.allowIndexing) return null;

  const accountingService: Record<string, unknown> = {
    "@type": "AccountingService",
    "@id": `${site.url}/#accounting-service`,
    name: site.name,
    url: site.url,
    logo: absoluteUrl("/images/kma-leg-row.png"),
    description: site.description,
    areaServed: {
      "@type": "Country",
      name: site.areaServed,
    },
    availableLanguage: site.languages,
  };

  if (site.hasVerifiedEmail) accountingService.email = site.email;
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      accountingService,
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        name: site.name,
        url: site.url,
        inLanguage: ["en-AU", "my"],
        publisher: {
          "@id": `${site.url}/#accounting-service`,
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
