"use client";

import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

export type PlannedResource = {
  title: string;
  notes: string[];
};

export function PlannedResources({ items }: { items: PlannedResource[] }) {
  const [openTitles, setOpenTitles] = useState<string[]>([]);

  function toggle(title: string) {
    setOpenTitles((current) =>
      current.includes(title)
        ? current.filter((item) => item !== title)
        : [...current, title],
    );
  }

  return (
    <ul className="grid w-fit max-w-full gap-3">
      {items.map((item) => {
        const open = openTitles.includes(item.title);

        return (
          <li key={item.title} className="w-full">
            <button
              type="button"
              aria-expanded={open}
              onClick={() => toggle(item.title)}
              className="flex w-full items-center gap-3 text-left text-ink"
            >
              <span
                aria-hidden
                className="h-2 w-2 shrink-0 rotate-45 bg-accent"
              />
              <span className="min-w-0 flex-1 leading-8">{item.title}</span>
              <ChevronDownIcon
                className={`size-4 shrink-0 motion-safe:transition-transform ${open ? "rotate-180" : ""}`}
                aria-hidden
              />
            </button>
            {open ? (
              <ul className="mt-1 ml-5 grid w-0 min-w-full gap-2">
                {item.notes.map((note) => (
                  <li key={note} className="flex items-center gap-3 text-ink">
                    <span
                      aria-hidden
                      className="h-1.5 w-1.5 shrink-0 rotate-45 bg-teal"
                    />
                    <span className="min-w-0">{note}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}
