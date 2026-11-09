"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { getHomeMessages } from "@/lib/messages";

export function ServiceCards({ className = "" }: { className?: string }) {
  const { locale } = useLanguage();
  const copy = getHomeMessages(locale);

  return (
    <div
      className={`grid border-l border-t border-ink/15 md:grid-cols-2 lg:grid-cols-3 ${className}`}
    >
      {copy.services.map((service) => (
        <article
          key={service.code}
          className="min-h-64 border-b border-r border-ink/15 bg-paper p-6 hover:outline hover:outline-1 hover:outline-accent hover:-outline-offset-1"
        >
          <div className="flex items-center justify-between gap-3">
            <p className="text-xs font-semibold text-teal">{service.code}</p>
            {service.comingSoon ? (
              <span className="rounded-sm bg-teal-surface px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-teal">
                {copy.comingSoonLabel}
              </span>
            ) : null}
          </div>
          <h3 className="mt-16 text-xl font-semibold tracking-[-0.03em] text-ink">
            {service.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-stone">{service.body}</p>
        </article>
      ))}
    </div>
  );
}
