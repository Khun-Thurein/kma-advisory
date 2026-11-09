import { createPageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Privacy",
  description:
    "How KMA Advisory handles website enquiries and visitor information.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <main
      id="main-content"
      className="mx-auto w-full max-w-4xl flex-1 px-6 py-16 sm:py-24"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
        Website information
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-ink sm:text-5xl">
        Privacy
      </h1>
      <div className="mt-10 space-y-8 text-base leading-8 text-stone">
        <section>
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-ink">
            Contact enquiries
          </h2>
          <p className="mt-3">
            The website form prepares an email in your own email application.
            KMA Advisory does not store the form fields on this website. Your
            email provider and the receiving email service handle the message
            after you send it.
          </p>
          <p className="mt-3">
            Do not include tax file numbers, identity documents, bank details,
            passwords, or full financial records in a first website enquiry.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-ink">
            External services
          </h2>
          <p className="mt-3">
            A future booking link can open an external scheduling service. That
            provider will apply its own privacy terms. The booking service and
            its privacy link will be identified before bookings are enabled.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-ink">
            Questions
          </h2>
          <p className="mt-3">
            For a question about this notice, email{" "}
            <a
              href={site.emailHref}
              className="font-semibold text-teal underline decoration-accent decoration-2 underline-offset-4"
            >
              {site.email}
            </a>
            . Contact details and this notice will be reviewed again before the
            practice launches.
          </p>
        </section>
      </div>
    </main>
  );
}
