import { InnerPage } from "@/components/InnerPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Accounting News and Resources",
  description:
    "Practical articles for Australian small and medium-sized businesses.",
  path: "/news",
});

export default function NewsPage() {
  return (
    <InnerPage title="News / Resources">
      <p>Articles are coming soon.</p>
    </InnerPage>
  );
}
