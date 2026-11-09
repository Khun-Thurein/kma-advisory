"use client";

import { CalendarDaysIcon, EnvelopeIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { useLanguage } from "@/components/LanguageProvider";
import { footerCopy } from "@/lib/messages";
import { navLinks, site } from "@/lib/site";

export function Footer() {
  const { locale } = useLanguage();
  const copy = footerCopy[locale];

  return (
    <footer className="relative mt-auto overflow-hidden bg-paper text-ink">
      <Image
        src="/images/footer.jpeg"
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none object-cover object-bottom"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-5 pt-10 sm:px-6 md:pt-16">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-[1.2fr_0.8fr_0.8fr] md:gap-10">
          <div className="col-span-2 md:col-span-1">
            <BrandLogo className="text-teal-dark" />
            <p className="mt-3 max-w-sm text-sm leading-6 text-ink md:mt-5">
              {copy.blurb}
            </p>
            <a
              className="mt-4 inline-flex min-h-11 items-center justify-center gap-1.5 rounded-sm bg-teal-dark px-4 text-sm font-semibold text-white hover:bg-accent hover:text-teal-dark md:mt-6"
              href={site.bookingHref}
            >
              <CalendarDaysIcon className="size-4" aria-hidden />
              {site.shortCtaLabel}
            </a>
          </div>
          <nav aria-label="Footer navigation">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              {copy.pages}
            </p>
            <div className="mt-2 flex flex-col md:mt-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex min-h-10 w-fit items-center text-sm text-ink underline decoration-transparent decoration-2 underline-offset-4 hover:decoration-accent"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/privacy"
                className="inline-flex min-h-10 w-fit items-center text-sm text-ink underline decoration-transparent decoration-2 underline-offset-4 hover:decoration-accent"
              >
                {copy.privacy}
              </Link>
            </div>
          </nav>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              {copy.contact}
            </p>
            <a
              className="mt-3 flex items-start gap-1.5 break-all text-sm text-ink underline decoration-accent decoration-2 underline-offset-4 hover:text-teal md:mt-4 md:no-underline md:hover:underline"
              href={site.emailHref}
            >
              <EnvelopeIcon className="mt-0.5 size-4 shrink-0" aria-hidden />
              {site.email}
            </a>
          </div>
        </div>
        <div className="h-28 sm:h-40 md:h-64" aria-hidden="true" />
      </div>
      <p className="absolute bottom-3 right-4 z-10 max-w-[calc(100%-2rem)] text-right text-[11px] leading-4 text-ink sm:bottom-4 sm:right-6 sm:text-xs">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </p>
    </footer>
  );
}
