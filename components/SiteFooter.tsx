import Image from "next/image";

const navItems = [
  ["About", "/#about"],
  ["Services", "/#services"],
  ["Reviews", "/#reviews"],
  ["Service Area", "/roofing-services-ri"],
  ["Contact", "/#contact"]
];

const serviceLinks = [
  ["Roof Repair", "/roof-repair-ri"],
  ["Roof Replacement", "/roof-replacement-ri"],
  ["Emergency Roof Repair", "/emergency-roof-repair-ri"],
  ["Commercial Roofing", "/commercial-roofing-ri"],
  ["Residential Roofing", "/residential-roofing-ri"],
  ["Insurance Claim Support", "/roof-insurance-claim-repair-support-ri"]
];

const cityLinks = [
  ["Cranston Roofing", "/roofing-company-cranston-ri"],
  ["Providence Roofing", "/roofing-company-providence-ri"],
  ["Warwick Roofing", "/roofing-company-warwick-ri"],
  ["Bristol Roofing", "/roofing-company-bristol-ri"],
  ["Pawtucket Roof Repair", "/roof-repair-pawtucket-ri"],
  ["East Providence Roofing", "/roofing-company-east-providence-ri"]
];

export function SiteFooter() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <a href="/" aria-label="D.R.F Builders RI home">
            <Image
              src="/assets/drf-logo.png"
              alt="D.R.F Builders RI logo"
              width={190}
              height={78}
              className="mb-5 h-16 w-auto bg-white object-contain p-2"
            />
          </a>
          <p className="max-w-xl text-sm leading-6 text-slate-300">
            Local Rhode Island roofing for repairs, replacements, inspections, emergency service, and roof maintenance.
          </p>
        </div>
        <nav className="grid gap-3 text-sm font-semibold text-slate-200" aria-label="Footer navigation">
          <h2 className="text-sm font-black uppercase tracking-[0.14em] text-orange-300">Site</h2>
          {navItems.map(([label, href]) => (
            <a key={label} href={href} className="hover:text-orange-400">
              {label}
            </a>
          ))}
        </nav>
        <nav className="grid gap-3 text-sm font-semibold text-slate-200" aria-label="Roofing services">
          <h2 className="text-sm font-black uppercase tracking-[0.14em] text-orange-300">Services</h2>
          {serviceLinks.map(([label, href]) => (
            <a key={label} href={href} className="hover:text-orange-400">
              {label}
            </a>
          ))}
        </nav>
        <nav className="grid gap-3 text-sm font-semibold text-slate-200" aria-label="Rhode Island roofing service areas">
          <h2 className="text-sm font-black uppercase tracking-[0.14em] text-orange-300">Service Areas</h2>
          {cityLinks.map(([label, href]) => (
            <a key={label} href={href} className="hover:text-orange-400">
              {label}
            </a>
          ))}
        </nav>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-sm text-slate-400">
        Copyright 2026 D.R.F Builders RI. All rights reserved.
      </div>
    </footer>
  );
}
