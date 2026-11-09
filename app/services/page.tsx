import { InnerPage } from "@/components/InnerPage";
import { ServiceCards } from "@/components/ServiceCards";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Accounting and Advisory Services",
  description:
    "Business advisory, bookkeeping, and cashflow analysis for small and medium-sized Australian businesses.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <InnerPage title="Services" wide>
      <ServiceCards />
    </InnerPage>
  );
}
