import type { ReactNode } from "react";

type InnerPageProps = {
  title: string;
  children: ReactNode;
  wide?: boolean;
};

export function InnerPage({ title, children, wide = false }: InnerPageProps) {
  return (
    <main id="main-content" className="w-full flex-1">
      <section className="bg-teal-dark text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Myanmar-founded · Australia-based
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">
            {title}
          </h1>
          <div className="mt-8 h-1 w-16 bg-accent" />
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-14 lg:py-20">
        <div
          className={`${wide ? "" : "max-w-2xl"} space-y-5 text-base leading-8 text-stone`}
        >
          {children}
        </div>
      </section>
    </main>
  );
}
