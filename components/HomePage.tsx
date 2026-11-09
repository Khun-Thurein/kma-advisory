"use client";

import {
  BriefcaseIcon,
  CalendarDaysIcon,
  EnvelopeIcon,
} from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { CpaCredential } from "@/components/CpaCredential";
import { useLanguage } from "@/components/LanguageProvider";
import { ServiceCards } from "@/components/ServiceCards";
import { getHomeMessages, textLang } from "@/lib/messages";
import { site } from "@/lib/site";

export function HomePage() {
  const { locale } = useLanguage();
  const copy = getHomeMessages(locale);

  return (
    <main id="main-content">
      <section className="flex min-h-[calc(85svh-3.6125rem)] flex-col bg-paper">
        <div className="relative flex flex-1 items-center bg-paper text-ink">
          <div className="mx-auto grid w-full max-w-6xl gap-6 px-6 pb-16 pt-12 lg:grid-cols-2 lg:grid-rows-[auto_auto_auto_auto] lg:items-center lg:gap-x-14 lg:gap-y-0 lg:pb-24 lg:pt-20">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal lg:col-start-1 lg:row-start-1">
              {copy.eyebrow}
            </p>
            <h1 className="max-w-xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-5xl lg:col-start-1 lg:row-start-2 lg:mt-6 lg:text-[3.5rem]">
              <span lang={textLang(copy.heroTitleLine1)}>
                {copy.heroTitleLine1}
              </span>
              <br />
              <span lang={textLang(copy.heroTitleLine2)}>
                {copy.heroTitleLine2}
              </span>
            </h1>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:col-start-2 lg:row-span-4 lg:row-start-1 lg:aspect-auto lg:min-h-[28rem]">
              <Image
                src="/images/accountant.jpg"
                alt="Tax records, a calculator, and a person reviewing papers"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <p
              lang={textLang(copy.heroBody)}
              className="max-w-xl text-lg leading-8 text-stone lg:col-start-1 lg:row-start-3 lg:mt-6"
            >
              {copy.heroBody}
            </p>
            <div className="flex flex-row gap-3 lg:col-start-1 lg:row-start-4 lg:mt-8">
              <a
                href={site.bookingHref}
                className="inline-flex min-h-12 flex-1 items-center justify-center gap-1.5 rounded-sm bg-accent px-4 text-sm font-semibold text-teal-dark hover:bg-teal-dark hover:text-white sm:flex-none sm:px-6"
              >
                <CalendarDaysIcon className="size-4" aria-hidden />
                {site.primaryCtaLabel}
              </a>
              <a
                href="#services"
                className="inline-flex min-h-12 flex-1 items-center justify-center gap-1.5 rounded-sm bg-teal px-4 text-sm font-semibold text-white hover:bg-accent hover:text-teal sm:flex-none sm:px-6"
              >
                <BriefcaseIcon className="size-4" aria-hidden />
                {copy.exploreServices}
              </a>
            </div>
          </div>
        </div>

        <div className="bg-paper px-6 py-8">
          <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-3">
            {copy.summary.map(([label, value]) => (
              <div
                key={label}
                className="rounded-xl border border-white/10 bg-teal-dark px-6 py-7 shadow-[0_12px_32px_rgba(0,47,55,0.12)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  {label}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-light">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="services"
        className="scroll-mt-24 px-6 py-[3.4rem] lg:py-[5.1rem]"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
                {copy.serviceEyebrow}
              </p>
              <h2
                lang={textLang(copy.serviceTitle)}
                className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-ink"
              >
                {copy.serviceTitle}
              </h2>
            </div>
            <p
              lang={textLang(copy.serviceIntro)}
              className="max-w-xl text-base leading-7 text-stone lg:justify-self-end"
            >
              {copy.serviceIntro}
            </p>
          </div>
          <ServiceCards className="mt-10" />
        </div>
      </section>

      <section className="bg-paper px-6 py-16 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 rounded-3xl border border-white/15 bg-teal-dark p-6 text-white sm:p-8 lg:grid-cols-2 lg:items-center lg:p-12">
          <div className="relative min-h-[340px] overflow-hidden rounded-2xl border border-white/15 sm:min-h-[480px]">
            <Image
              src="/images/charlesdeluvio-OqxPH8c1UFE-unsplash.jpg"
              alt="A wooden desk with a financial calculator, laptop, and notes in an accounting workspace"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div>
            <h2
              lang={textLang(copy.perspectiveTitle)}
              className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl"
            >
              {copy.perspectiveTitle}
            </h2>
            <p
              lang={textLang(copy.perspectiveBody)}
              className="mt-6 max-w-xl text-base leading-8 text-white/70"
            >
              {copy.perspectiveBody}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/burmese-accountant-australia"
                className="inline-flex min-h-12 items-center justify-center rounded-sm bg-accent px-6 text-sm font-semibold text-teal-dark hover:bg-white"
              >
                {copy.burmeseSupport}
              </Link>
              <Link
                href="/about"
                className="inline-flex min-h-12 items-center justify-center rounded-sm border border-white/25 px-6 text-sm font-semibold text-white hover:bg-white/10"
              >
                {copy.aboutUs}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
              {copy.contactEyebrow}
            </p>
            <h2
              lang={textLang(copy.contactTitle)}
              className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-ink"
            >
              {copy.contactTitle}
            </h2>
            <p
              lang={textLang(copy.contactBody)}
              className="mt-5 max-w-md text-base leading-7 text-stone"
            >
              {copy.contactBody}
            </p>
            <dl className="mt-8 space-y-5 border-t border-ink/15 pt-6 text-sm">
              <div>
                <dt className="inline-flex items-center gap-1.5 font-semibold text-ink">
                  <EnvelopeIcon className="size-4 text-teal" aria-hidden />
                  {copy.emailLabel}
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
          <div className="border-t-4 border-accent bg-white p-6 sm:p-9">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
            {copy.credentials}
          </p>
          <CpaCredential className="mt-6" />
        </div>
      </section>
    </main>
  );
}
