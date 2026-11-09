import { createPageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

const description =
  "English and Burmese accounting support for individuals, families, trustees, and businesses across Australia.";

export const metadata = createPageMetadata({
  title: "Burmese-Speaking Accountant in Australia",
  description,
  path: "/burmese-accountant-australia",
});

const supportAreas = [
  "Tax and lodgement preparation",
  "BAS and GST reporting support",
  "Company and family-group reporting",
  "SMSF accounting support",
  "Business reporting and advisory",
  "Audit preparation and record coordination",
];

export default function BurmeseAccountantAustraliaPage() {
  return (
    <main id="main-content" className="flex-1">
      <section className="bg-teal-dark px-6 py-16 text-white sm:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            English and Burmese · Australia-wide
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.055em] sm:text-6xl">
            A Burmese-speaking accountant for clients across Australia.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Discuss the numbers, dates, and next steps in English or Burmese.
            KMA Advisory is being built to make Australian accounting
            requirements easier to understand.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={site.bookingHref}
              className="inline-flex min-h-12 items-center justify-center rounded-sm bg-accent px-6 text-sm font-semibold text-teal-dark hover:bg-white"
            >
              {site.primaryCtaLabel}
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-14 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
              Clear communication
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.045em] text-ink sm:text-4xl">
              Australian accounting context, explained in your preferred
              language.
            </h2>
            <p className="mt-5 text-base leading-8 text-stone">
              Language should not make an important accounting decision harder.
              Ask questions in Burmese or English and receive a clear explanation
              of the information and dates that matter.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {supportAreas.map((area) => (
              <div
                key={area}
                className="border-l-4 border-accent bg-teal-surface px-5 py-5 text-sm font-medium leading-6 text-ink"
              >
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-teal-surface px-6 py-14 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold tracking-[-0.045em] text-ink sm:text-4xl">
            Start with one clear question.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-stone">
            Tell us the service you need and any date that matters. We will use
            that information to prepare the next step.
          </p>
          <a
            href={site.bookingHref}
            className="mt-7 inline-flex min-h-12 items-center justify-center rounded-sm bg-accent px-6 text-sm font-semibold text-teal-dark hover:bg-teal-dark hover:text-white"
          >
            {site.primaryCtaLabel}
          </a>
        </div>
      </section>
    </main>
  );
}
