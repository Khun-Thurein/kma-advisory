import { HomePage } from "@/components/HomePage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Burmese-Speaking Accountant Across Australia | KMA Advisory",
  description:
    "Clear English and Burmese accounting support being prepared for businesses, families, trustees, and individuals across Australia.",
  path: "/",
});

export default function Home() {
  return <HomePage />;
}
