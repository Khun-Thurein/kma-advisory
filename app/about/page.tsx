import { InnerPage } from "@/components/InnerPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About",
  description:
    "Learn about the Myanmar roots, Australian focus, and direct English and Burmese communication behind KMA Advisory.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <InnerPage title="About Me">
      <p>
        KMA Advisory is being developed as a Myanmar-founded, Australia-based
        accounting practice. The planned service is built around direct contact,
        careful records, and advice that makes the next step easier to
        understand in English or Burmese.
      </p>
      <p>
        The leg-rowing mark comes from the Intha tradition of Inle Lake. It
        represents balance, skill, and forward motion. The practice applies
        those values in an Australian accounting context.
      </p>
      <h2 className="pt-4 text-2xl font-semibold tracking-[-0.04em] text-ink">
        Details before launch
      </h2>
      <p>
        The accountant profile, tax-agent registration, and service locations
        will be added after they are verified. CPA Australia membership is
        listed on the home page.
      </p>
    </InnerPage>
  );
}
