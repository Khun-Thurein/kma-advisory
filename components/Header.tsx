"use client";

import {
  Bars3Icon,
  CalendarDaysIcon,
  XMarkIcon,
} from "@heroicons/react/16/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { LanguageSwitch } from "@/components/LanguageSwitch";
import { navLinks, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-teal-dark text-white">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-6 py-3">
        <Link
          href="/"
          className="flex min-h-11 shrink-0 items-center text-white"
        >
          <BrandLogo />
        </Link>

        <nav
          className="hidden flex-1 items-center justify-center gap-5 lg:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`inline-flex min-h-11 items-center text-[calc(0.875rem*1.15)] font-medium ${
                  active ? "text-accent" : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <LanguageSwitch />
          <a
            href={site.bookingHref}
            className="hidden min-h-11 items-center justify-center gap-1.5 rounded-sm bg-accent px-4 text-sm font-semibold text-teal-dark hover:bg-white sm:inline-flex"
          >
            <CalendarDaysIcon className="size-4" aria-hidden />
            {site.shortCtaLabel}
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-white/20 bg-white/5 text-white hover:bg-white/10 lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">
              {menuOpen ? "Close menu" : "Open menu"}
            </span>
            {menuOpen ? (
              <XMarkIcon className="size-4" aria-hidden />
            ) : (
              <Bars3Icon className="size-4" aria-hidden />
            )}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav
          id="mobile-nav"
          className="mx-auto flex max-w-6xl flex-col border-t border-white/10 px-6 py-3 lg:hidden"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
                className={`flex min-h-11 items-center text-sm font-medium ${
                  active ? "text-accent" : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={site.bookingHref}
            className="mt-2 inline-flex min-h-11 items-center justify-center gap-1.5 rounded-sm bg-accent px-4 text-sm font-semibold text-teal-dark sm:hidden"
          >
            <CalendarDaysIcon className="size-4" aria-hidden />
            {site.shortCtaLabel}
          </a>
        </nav>
      ) : null}
    </header>
  );
}
