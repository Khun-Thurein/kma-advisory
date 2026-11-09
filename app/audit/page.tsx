import { InnerPage } from "@/components/InnerPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Audit Preparation",
  description:
    "Audit preparation support for organised records, year-end schedules, document requests, and auditor coordination.",
  path: "/audit",
});

export default function AuditPage() {
  return (
    <InnerPage title="Audit">
      <p>
        Audit work moves faster when the records, schedules, and supporting
        documents are ready before questions arrive. KMA Advisory plans to help
        Australian entities organise that work and coordinate with the auditor.
      </p>
      <h2 className="pt-4 text-2xl font-semibold tracking-[-0.04em] text-ink">
        Expected support
      </h2>
      <p>
        Preparation can include record reviews, year-end schedules, document
        requests, and clear ownership of follow-up items. The final service
        scope will be confirmed before launch.
      </p>
    </InnerPage>
  );
}
