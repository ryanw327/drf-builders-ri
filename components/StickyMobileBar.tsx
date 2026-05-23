"use client";

import { useEffect, useState } from "react";

export function StickyMobileBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector("[data-mobile-hero]");

    if (!hero) {
      const onScroll = () => setIsVisible(window.scrollY > 420);
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
      },
      { threshold: 0.08 }
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      role="complementary"
      aria-hidden={!isVisible}
      className={`fixed inset-x-0 bottom-0 z-[60] flex min-h-16 w-full gap-2 bg-slate-950 px-3 py-2 shadow-[0_-8px_24px_rgba(0,0,0,0.28)] transition-opacity duration-200 md:hidden ${
        isVisible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      style={{ paddingBottom: "calc(0.5rem + env(safe-area-inset-bottom))" }}
    >
      <a
        href="tel:+14018373779"
        aria-label="Call D.R.F Builders RI"
        className="flex h-12 basis-[60%] items-center justify-center rounded-lg bg-[#1a6f3c] px-3 text-center text-base font-semibold text-white shadow-lg shadow-black/20"
      >
        {"\uD83D\uDCDE Call 401-837-3779"}
      </a>
      <a
        href="#contact"
        aria-label="Request a free roofing estimate"
        className="flex h-12 basis-[40%] items-center justify-center rounded-lg border border-white bg-transparent px-3 text-center text-base font-semibold text-white"
      >
        Free Estimate
      </a>
    </div>
  );
}
