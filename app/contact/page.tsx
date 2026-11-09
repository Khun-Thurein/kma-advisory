import { EnvelopeIcon } from "@heroicons/react/16/solid";
import { ContactForm } from "@/components/ContactForm";
import { createPageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact KMA Advisory about future English or Burmese accounting support across Australia.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main id="main-content" className="w-full flex-1">
      <section className="bg-teal-dark text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Myanmar-founded · Australia-based
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">
            Contact
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-white/65">
            Send a short note about the work and any date that matters.
          </p>
          <div className="mt-8 h-1 w-16 bg-accent" />
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:py-20">
        <div>
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-ink">
            Direct contact
          </h2>
          <dl className="mt-8 space-y-5 border-t border-ink/10 pt-6 text-sm">
            <div>
              <dt className="inline-flex items-center gap-1.5 font-semibold text-ink">
                <EnvelopeIcon className="size-4 text-teal" aria-hidden />
                Email
              </dt>
              <dd className="mt-1">
                <a
                  href={site.emailHref}
                  className="text-stone underline decoration-ink/20 underline-offset-4 hover:text-teal"
                >
                  {site.email}
                </a>
              </dd>
            </div>
          </dl>
        </div>
        <div className="border-t-4 border-accent bg-white p-5 sm:p-8">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}