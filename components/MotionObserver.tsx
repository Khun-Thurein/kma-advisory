"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function MotionObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;

    const revealElements = new Set<HTMLElement>();
    const addRevealElements = (selector: string) => {
      for (const element of document.querySelectorAll<HTMLElement>(selector)) {
        revealElements.add(element);
      }
    };

    addRevealElements("main > section:not(:first-child) > div");
    addRevealElements("main > section:not(:first-child) > figure");
    addRevealElements("main article");
    addRevealElements("#services li");

    for (const element of revealElements) element.dataset.reveal = "up";

    for (const image of document.querySelectorAll<HTMLElement>("main img")) {
      image.classList.add("motion-image");
      const frame = image.parentElement;
      if (!frame) continue;
      frame.classList.add("group");
      if (!image.closest("main > section:first-child")) {
        frame.dataset.reveal = "scale";
        revealElements.add(frame);
      }
    }

    for (const card of document.querySelectorAll<HTMLElement>(
      "main article, #services li",
    )) {
      card.classList.add("motion-card");
      const siblings = card.parentElement
        ? Array.from(card.parentElement.children)
        : [];
      card.dataset.delay = String((siblings.indexOf(card) % 3) + 1);
    }

    for (const control of document.querySelectorAll<HTMLElement>(
      "main a, main button, footer a",
    )) {
      control.classList.add("motion-control");
    }

    const heroMedia = document.querySelector<HTMLElement>(
      "main > section:first-child img",
    )?.parentElement;
    heroMedia?.classList.add("motion-hero-media");

    const elements = Array.from(revealElements);

    root.classList.add("motion-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8%",
      },
    );

    for (const element of elements) observer.observe(element);

    return () => {
      observer.disconnect();
      root.classList.remove("motion-ready");
    };
  }, [pathname]);

  return null;
}
