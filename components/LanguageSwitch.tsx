"use client";

import { useLanguage } from "@/components/LanguageProvider";

function AustraliaFlag({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 16"
      className={className}
      aria-hidden
      role="img"
    >
      <rect width="24" height="16" fill="#012169" />
      <path d="M0 0h12v8H0z" fill="#012169" />
      <path
        d="M0 0l12 8M12 0L0 8"
        stroke="#fff"
        strokeWidth="1.6"
      />
      <path
        d="M0 0l12 8M12 0L0 8"
        stroke="#C8102E"
        strokeWidth="0.8"
      />
      <path d="M6 0v8M0 4h12" stroke="#fff" strokeWidth="2.4" />
      <path d="M6 0v8M0 4h12" stroke="#C8102E" strokeWidth="1.2" />
      <circle cx="17.5" cy="4.2" r="0.55" fill="#fff" />
      <circle cx="20.2" cy="5.6" r="0.55" fill="#fff" />
      <circle cx="19.4" cy="8.4" r="0.55" fill="#fff" />
      <circle cx="15.8" cy="7.4" r="0.55" fill="#fff" />
      <circle cx="17.8" cy="6.2" r="0.7" fill="#fff" />
      <path
        d="M6.2 10.2l.45 1.35h1.4l-1.15.85.45 1.35-1.15-.85-1.15.85.45-1.35-1.15-.85h1.4z"
        fill="#fff"
      />
    </svg>
  );
}

function MyanmarFlag({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 16"
      className={className}
      aria-hidden
      role="img"
    >
      <rect width="24" height="16" fill="#FECB00" />
      <rect y="5.33" width="24" height="5.34" fill="#34B233" />
      <rect y="10.67" width="24" height="5.33" fill="#EA2839" />
      <path
        d="M12 3.8l1.1 3.35h3.5l-2.85 2.05 1.1 3.35L12 10.5l-2.85 2.05 1.1-3.35-2.85-2.05h3.5z"
        fill="#fff"
      />
    </svg>
  );
}

export function LanguageSwitch() {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      className="inline-flex min-h-11 items-center rounded-sm border border-white/20 p-0.5"
      aria-label="Language"
      role="group"
    >
      <button
        type="button"
        lang="en"
        aria-label="English"
        aria-pressed={locale === "en"}
        title="English"
        onClick={() => setLocale("en")}
        className={`inline-flex min-h-9 items-center justify-center rounded-[2px] px-2 ${
          locale === "en"
            ? "bg-white/15"
            : "opacity-70 hover:bg-white/5 hover:opacity-100"
        }`}
      >
        <AustraliaFlag className="h-3.5 w-[21px]" />
      </button>
      <button
        type="button"
        lang="my"
        aria-label="Burmese"
        aria-pressed={locale === "my"}
        title="Burmese"
        onClick={() => setLocale("my")}
        className={`inline-flex min-h-9 items-center justify-center rounded-[2px] px-2 ${
          locale === "my"
            ? "bg-white/15"
            : "opacity-70 hover:bg-white/5 hover:opacity-100"
        }`}
      >
        <MyanmarFlag className="h-3.5 w-[21px]" />
      </button>
    </div>
  );
}
