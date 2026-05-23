import Image from "next/image";

const navItems = [
  ["About", "#about"],
  ["Services", "#services"],
  ["Reviews", "#reviews"],
  ["Service Area", "#service-area"],
  ["Contact", "#contact"]
];

export function SiteFooter() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8">
        <div>
          <Image
            src="/assets/drf-logo.png"
            alt="D.R.F. Builders RI logo"
            width={190}
            height={78}
            className="mb-5 h-16 w-auto bg-white object-contain p-2"
          />
          <p className="max-w-xl text-sm leading-6 text-slate-300">
            Local Rhode Island roofing for repairs, replacements, inspections, emergency service, and roof maintenance.
          </p>
        </div>
        <nav className="flex flex-wrap items-start gap-x-5 gap-y-3 text-sm font-semibold text-slate-200" aria-label="Footer navigation">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} className="hover:text-orange-400">
              {label}
            </a>
          ))}
        </nav>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-sm text-slate-400">
        Copyright 2026 D.R.F. Builders RI. All rights reserved.
      </div>
    </footer>
  );
}
