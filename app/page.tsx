import Image from "next/image";
import Link from "next/link";
import { Building2, CheckCircle2, Clock, Home, Star, Wrench } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const topServices = [
  {
    title: "Roof Repair",
    copy: "Leak repair, missing shingles, flashing issues, and storm damage help across Rhode Island.",
    icon: Wrench,
    href: "/roof-repair-ri",
    cta: "Get Roof Repair Help"
  },
  {
    title: "Roof Replacement",
    copy: "Complete roof replacement for aging, leaking, or storm-damaged residential roofs.",
    icon: Home,
    href: "/roof-replacement-ri",
    cta: "Plan a Replacement"
  },
  {
    title: "Emergency Roofing",
    copy: "Responsive help when active leaks, wind damage, or sudden roof trouble cannot wait.",
    icon: Clock,
    href: "/emergency-roof-repair-ri",
    cta: "Request Emergency Help"
  },
  {
    title: "Commercial Roofing",
    copy: "Roof repair, maintenance, and project support for Rhode Island businesses and properties.",
    icon: Building2,
    href: "/commercial-roofing-ri",
    cta: "Discuss Commercial Roofing"
  }
];

const trustItems = [
  "Licensed & Insured",
  "Rhode Island Based",
  "Emergency Service Available",
  "Free Estimates",
  "Insurance Claim Assistance"
];

const gallery = [
  ["/assets/roof-4.webp", "Completed asphalt shingle roof on a Rhode Island home", "Completed shingle roof"],
  ["/assets/roof-1.webp", "Residential roof replacement project in Rhode Island", "Residential replacement"],
  ["/assets/roof-2.webp", "D.R.F Builders RI roofing crew working on asphalt shingles in Rhode Island", "Crew on roof repair"],
  ["/assets/roof-5.webp", "Rhode Island roof installation crew working on a residential property", "Roof installation"]
];

const reviews = [
  {
    quote:
      "Great company! The owner is always involved and truly listens to what you need. Highly recommended - they did a very clean, professional job.",
    name: "Local Rhode Island customer"
  }
];
// Add additional real Google reviews here once the public review text or Google Business Profile link is confirmed.

const schema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "@id": "https://www.drfbuildersri.com/#roofingcontractor",
  name: "D.R.F Builders RI",
  url: "https://www.drfbuildersri.com",
  telephone: "(401) 837-3779",
  email: "buildersdrf@gmail.com",
  image: "https://www.drfbuildersri.com/assets/drf-logo.png",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cranston",
    addressRegion: "RI",
    addressCountry: "US"
  },
  areaServed: [
    "Rhode Island",
    "Cranston RI",
    "Providence RI",
    "Warwick RI",
    "Bristol RI",
    "Pawtucket RI",
    "East Providence RI"
  ],
  serviceType: [
    "Roof Repair",
    "Roof Replacement",
    "Emergency Roof Repair",
    "Commercial Roofing",
    "Flat Roofing",
    "Residential Roofing",
    "Roof Inspections",
    "Storm Damage Roof Repair",
    "Insurance Roof Repair Support"
  ]
};

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="pb-16 md:pb-0">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

        <section data-mobile-hero className="relative isolate overflow-hidden bg-slate-950 text-white">
          <Image
            src="/assets/roof-4.webp"
            alt="Completed asphalt shingle roof on a Rhode Island home"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-42"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/88 to-slate-950/35" />
          <div className="relative mx-auto grid min-h-[560px] max-w-7xl items-center gap-8 px-4 py-12 sm:px-6 md:min-h-[610px] lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
            <div className="max-w-3xl">
              <p className="mb-3 inline-flex rounded-md border border-orange-400/40 bg-orange-500/15 px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-orange-200 sm:text-sm">
                Cranston-based Rhode Island roofing company
              </p>
              <h1 className="text-4xl font-black leading-[1.03] tracking-tight sm:text-5xl lg:text-6xl">
                Rhode Island Roofing Contractor for Roof Repair, Replacement & Emergency Service
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
                D.R.F Builders RI provides residential and commercial roofing services across Cranston, Providence, Warwick,
                Bristol, and surrounding Rhode Island communities.
              </p>
              <div className="mt-5 flex items-center gap-2 text-sm font-black text-orange-200">
                <span aria-hidden="true">★★★★★</span>
                <span>Trusted Rhode Island Roofing Contractor</span>
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href="#contact" className="rounded-md bg-orange-600 px-6 py-4 text-center font-black text-white shadow-xl shadow-orange-950/20 hover:bg-orange-700">
                  Request a Free Roofing Estimate
                </a>
                <a href="tel:+14018373779" className="rounded-md border border-white/35 bg-white/10 px-6 py-4 text-center font-black text-white backdrop-blur hover:bg-white/20">
                  Call Now
                </a>
              </div>
              <div className="mt-6 grid gap-2 text-sm font-bold text-slate-100 sm:grid-cols-2 lg:grid-cols-3">
                {trustItems.map((item) => (
                  <div key={item} className="flex items-center gap-2 rounded-md border border-white/10 bg-white/10 px-3 py-2 backdrop-blur">
                    <CheckCircle2 className="h-4 w-4 flex-none text-orange-300" aria-hidden="true" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative hidden min-h-[390px] overflow-hidden rounded-lg border border-white/15 bg-white/10 shadow-2xl lg:block">
              <Image
                src="/assets/roof-2.webp"
                alt="D.R.F Builders RI roofing crew working on asphalt shingles in Rhode Island"
                fill
                sizes="420px"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-transparent p-5">
                <p className="text-sm font-black uppercase tracking-[0.14em] text-orange-200">Real project work</p>
                <p className="mt-1 text-lg font-black">Roof repairs and replacements across Rhode Island</p>
              </div>
            </div>
          </div>
        </section>

        <section aria-label="Trust signals" className="bg-white">
          <div className="mx-auto grid max-w-7xl gap-3 px-4 py-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-5 lg:px-8">
            {trustItems.map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-3 py-3">
                <CheckCircle2 className="h-5 w-5 flex-none text-orange-600" aria-hidden="true" />
                <span className="text-sm font-black text-slate-900">{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="bg-slate-100 px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="mb-2 text-sm font-black uppercase tracking-[0.16em] text-orange-700">Top roofing services</p>
                <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Roofing Help When It Matters</h2>
              </div>
              <Link href="/roofing-services-ri" className="rounded-md border border-slate-300 bg-white px-5 py-3 text-center font-black text-slate-950 hover:border-orange-300 hover:bg-orange-50">
                View All Roofing Services
              </Link>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {topServices.map(({ title, copy, icon: Icon, href, cta }) => (
                <article key={title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <Icon className="mb-4 h-8 w-8 text-orange-600" aria-hidden="true" />
                  <h3 className="text-xl font-black text-slate-950">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{copy}</p>
                  <Link href={href} className="mt-5 inline-flex text-sm font-black text-orange-700 hover:text-orange-800">
                    {cta}
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="mb-2 text-sm font-black uppercase tracking-[0.16em] text-orange-700">Project photos</p>
                <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Real Rhode Island Roofing Work</h2>
              </div>
              <a href="#contact" className="rounded-md bg-slate-950 px-5 py-3 text-center font-black text-white hover:bg-slate-900">
                View More Projects
              </a>
            </div>
            <div className="-mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-4">
              {gallery.map(([src, alt, caption]) => (
                <figure key={src} className="min-w-[78%] snap-start sm:min-w-0">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-slate-200 shadow-sm">
                    <Image src={src} alt={alt} fill sizes="(max-width: 640px) 78vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition duration-300 hover:scale-105" />
                  </div>
                  <figcaption className="mt-2 text-sm font-bold text-slate-700">{caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="roof-texture px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <p className="mb-2 text-sm font-black uppercase tracking-[0.16em] text-orange-300">Customer reviews</p>
              <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">Trusted by Rhode Island Homeowners</h2>
              <p className="mt-4 leading-7 text-slate-300">
                Clear communication, owner involvement, and clean job sites are at the center of the work.
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white p-6 text-slate-950 shadow-xl">
              <div className="mb-3 flex gap-1 text-orange-500" aria-label="Customer review rating">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-5 w-5 fill-current" aria-hidden="true" />
                ))}
              </div>
              {reviews.map((review) => (
                <blockquote key={review.name}>
                  <p className="text-lg leading-8 text-slate-700">&ldquo;{review.quote}&rdquo;</p>
                  <footer className="mt-4 font-black text-slate-950">{review.name}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="bg-white px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 overflow-hidden rounded-lg border border-slate-200 bg-slate-950 shadow-xl lg:grid-cols-[0.48fr_0.52fr] lg:items-center">
            <div className="relative min-h-[280px] bg-slate-900 sm:min-h-[340px] lg:min-h-[390px]">
              <Image
                src="/assets/daniel-r-fusco.png"
                alt="Danny Fusco, founder of D.R.F Builders RI"
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-cover object-top"
              />
            </div>
            <div className="p-6 text-white sm:p-8">
              <p className="mb-2 text-sm font-black uppercase tracking-[0.16em] text-orange-300">Local owner</p>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Danny Fusco, Founder of D.R.F Builders RI</h2>
              <p className="mt-4 leading-7 text-slate-300">
                Daniel R. Fusco, known locally as Danny, grew up in Rhode Island and built D.R.F Builders RI around straightforward
                communication, clean work, and roofing service that feels local because it is local.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {["Local Roots", "Owner Involved", "Clean Job Sites"].map((item) => (
                  <div key={item} className="rounded-md border border-white/10 bg-white/8 p-3 text-sm font-black text-orange-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-orange-600 px-4 py-12 text-white sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="mb-2 text-sm font-black uppercase tracking-[0.16em] text-orange-100">Free estimates</p>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Need Roofing Help in Rhode Island?</h2>
              <p className="mt-3 max-w-3xl text-lg leading-8 text-orange-50">
                Call or text D.R.F Builders RI for roof repair, roof replacement, emergency service, insurance repair support,
                commercial roofing, and inspections across Cranston, Providence, Warwick, Bristol, and nearby communities.
              </p>
              <a href="tel:+14018373779" className="mt-6 inline-flex rounded-md bg-slate-950 px-6 py-4 text-center font-black text-white hover:bg-slate-900">
                Call 401-837-3779
              </a>
            </div>
            <ContactForm />
          </div>
          <div className="mx-auto mt-8 grid max-w-7xl gap-3 text-sm font-bold sm:grid-cols-2 lg:grid-cols-4">
            <Link href="/roof-insurance-claim-repair-support-ri" className="rounded-md bg-white/15 px-4 py-3 hover:bg-white/25">
              Insurance Claim Assistance
            </Link>
            <Link href="/roofing-company-cranston-ri" className="rounded-md bg-white/15 px-4 py-3 hover:bg-white/25">
              Cranston Roofing
            </Link>
            <Link href="/roofing-company-providence-ri" className="rounded-md bg-white/15 px-4 py-3 hover:bg-white/25">
              Providence Roofing
            </Link>
            <Link href="/roofing-company-warwick-ri" className="rounded-md bg-white/15 px-4 py-3 hover:bg-white/25">
              Warwick Roofing
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
