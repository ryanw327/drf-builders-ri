import Image from "next/image";

const navItems = [
  ["About", "/#about"],
  ["Services", "/#services"],
  ["Reviews", "/#reviews"],
  ["Service Area", "/#service-area"],
  ["Contact", "/#contact"]
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-3" aria-label="D.R.F Builders RI home">
          <Image
            src="/assets/drf-logo.png"
            alt="D.R.F Builders RI logo"
            width={176}
            height={72}
            className="h-10 w-auto object-contain sm:h-14"
            priority
          />
        </a>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-700 lg:flex" aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} className="transition hover:text-orange-600">
              {label}
            </a>
          ))}
        </nav>
        <a href="tel:+14018373779" className="hidden text-sm font-black text-slate-900 transition hover:text-orange-600 md:inline-flex">
          401-837-3779
        </a>
        <a
          href="/#contact"
          className="rounded-md bg-orange-600 px-3 py-2.5 text-center text-xs font-bold text-white shadow-lg shadow-orange-900/15 transition hover:bg-orange-700 sm:px-5 sm:py-3 sm:text-sm"
        >
          <span className="sm:hidden">Estimate</span>
          <span className="hidden sm:inline">Free Roofing Estimate</span>
        </a>
      </div>
    </header>
  );
}
