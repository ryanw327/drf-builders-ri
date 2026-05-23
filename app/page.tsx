import Image from "next/image";
import Link from "next/link";
import { Building2, CheckCircle2, ClipboardCheck, Clock, FileText, Hammer, HardHat, Home, Mail, MapPin, Phone, Wrench } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { cityPages, servicePages } from "@/lib/seo-pages";

const services = [
  {
    title: "Roof Repair",
    copy: "Fast roof repair in Rhode Island for leaks, missing shingles, flashing issues, storm damage, and aging roof trouble.",
    icon: Wrench,
    href: "/roof-repair-ri",
    cta: "Get Roof Repair Help"
  },
  {
    title: "Roof Replacement",
    copy: "Complete roof replacement for Rhode Island homes and businesses with durable materials built for New England weather.",
    icon: Home,
    href: "/roof-replacement-ri",
    cta: "Plan a Roof Replacement"
  },
  {
    title: "Emergency Roof Repair",
    copy: "Emergency roof repair in RI when active leaks, wind damage, or sudden roof problems need prompt attention.",
    icon: Clock,
    href: "/emergency-roof-repair-ri",
    cta: "Request Emergency Help"
  },
  {
    title: "Roof Inspections",
    copy: "Detailed roof inspections across Rhode Island to identify leaks, wear, storm damage, and replacement needs.",
    icon: ClipboardCheck,
    href: "/#contact",
    cta: "Schedule a Roof Inspection"
  },
  {
    title: "Residential Roofing",
    copy: "Residential roofing services for single-family homes, multi-family properties, and neighborhood homes throughout RI.",
    icon: HardHat,
    href: "/residential-roofing-ri",
    cta: "Explore Residential Roofing"
  },
  {
    title: "Commercial Roofing",
    copy: "Commercial roofing in Rhode Island for offices, small businesses, apartment buildings, and local commercial properties.",
    icon: Building2,
    href: "/commercial-roofing-ri",
    cta: "Discuss Commercial Roofing"
  },
  {
    title: "Flat Roofing",
    copy: "Commercial flat roofing and low-slope roofing guidance for Rhode Island properties that need repair, inspection, or maintenance support.",
    icon: Building2,
    href: "/flat-roofing-ri",
    cta: "Review Flat Roofing Options"
  },
  {
    title: "Shingle Roofing",
    copy: "Asphalt shingle roof installation and repair for Rhode Island properties needing dependable curb appeal and protection.",
    icon: Hammer,
    href: "/#contact",
    cta: "Ask About Shingle Roofing"
  },
  {
    title: "Gutter Cleaning / Roof Maintenance",
    copy: "Roof maintenance and gutter cleaning to help prevent water damage and keep Rhode Island roofs performing season after season.",
    icon: CheckCircle2,
    href: "/gutter-cleaning-roof-maintenance-ri",
    cta: "Book Roof Maintenance"
  }
];

const trustItems = ["Local Rhode Island Roofing", "Residential & Commercial Roofing", "Emergency Roof Repairs", "Free Roofing Estimates"];

const quoteServices = [
  {
    title: "Roof Leak Repair",
    copy: "Targeted help for active leaks, ceiling stains, missing shingles, flashing issues, and water entering Rhode Island homes or businesses.",
    href: "/roof-repair-ri",
    cta: "Fix a Roof Leak"
  },
  {
    title: "Roof Replacement",
    copy: "Full roof replacement estimates for aging roofs, repeated leaks, storm damage, and properties ready for a stronger roofing system.",
    href: "/roof-replacement-ri",
    cta: "Price a Replacement"
  },
  {
    title: "Storm Damage Roof Repair",
    copy: "Repair estimates for wind damage, lifted shingles, rain leaks, and roofing problems that show up after Rhode Island weather.",
    href: "/emergency-roof-repair-ri",
    cta: "Check Storm Damage"
  },
  {
    title: "Insurance Repair Support",
    copy: "Roof damage documentation, clear repair estimates, adjuster meeting support, and approved roofing work after storm or leak damage.",
    href: "/roof-insurance-claim-repair-support-ri",
    cta: "Get Claim Repair Support"
  },
  {
    title: "Commercial Flat Roofing",
    copy: "Commercial flat and low-slope roofing discussions for repairs, inspections, maintenance, drainage issues, and leak concerns.",
    href: "/flat-roofing-ri",
    cta: "Review Flat Roofing"
  },
  {
    title: "Emergency Roof Repair",
    copy: "Prompt roofing help when a leak, storm, or sudden roof problem needs attention before damage spreads.",
    href: "/emergency-roof-repair-ri",
    cta: "Get Urgent Help"
  }
];

const reviews = [
  {
    quote:
      "Great company! The owner is always involved and truly listens to what you need. Highly recommended - they did a very clean, professional job.",
    name: "Local Rhode Island customer"
  }
];
// Add additional real Google reviews here once the public review text or Google Business Profile link is confirmed.

const gallery = [
  ["/assets/roof-4.webp", "Completed asphalt shingle roof on a Rhode Island home"],
  ["/assets/roof-1.webp", "Residential roof replacement project in Rhode Island"],
  ["/assets/roof-2.webp", "D.R.F Builders RI roofing crew working on asphalt shingles in Rhode Island"],
  ["/assets/roof-5.webp", "Rhode Island roof installation crew working on a residential property"]
];

const schema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "@id": "https://drfbuildersri.com/#roofingcontractor",
  name: "D.R.F Builders RI",
  url: "https://drfbuildersri.com",
  telephone: "(401) 837-3779",
  email: "buildersdrf@gmail.com",
  image: "https://drfbuildersri.com/assets/drf-logo.png",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cranston",
    addressRegion: "RI",
    addressCountry: "US"
  },
  areaServed: [
    "Rhode Island",
    "Providence RI",
    "Cranston RI",
    "Warwick RI",
    "Bristol RI",
    "Pawtucket RI",
    "East Providence RI",
    "Johnston RI",
    "North Providence RI",
    "Coventry RI",
    "West Warwick RI"
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
    "Shingle Roofing",
    "Gutter Cleaning",
    "Roof Maintenance"
  ]
};

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

        <section className="relative isolate overflow-hidden bg-slate-950 text-white">
          <Image
            src="/assets/roof-4.webp"
            alt="Completed asphalt shingle roof on a Rhode Island home"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-42"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/88 to-slate-950/35" />
          <div className="relative mx-auto grid min-h-[680px] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
            <div className="max-w-3xl">
              <p className="mb-4 inline-flex rounded-md border border-orange-400/40 bg-orange-500/15 px-3 py-2 text-sm font-bold uppercase tracking-[0.12em] text-orange-200">
                Cranston-based Rhode Island roofing company
              </p>
              <h1 className="text-4xl font-black leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
                Rhode Island Roofing Contractor for Roof Repair, Replacement & Emergency Service
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
                D.R.F Builders RI provides residential and commercial roofing services across Cranston, Providence, Warwick,
                Bristol, and surrounding Rhode Island communities.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#contact" className="rounded-md bg-orange-600 px-6 py-4 text-center font-black text-white shadow-xl shadow-orange-950/20 hover:bg-orange-700">
                  Request a Free Roofing Estimate
                </a>
                <a href="tel:+14018373779" className="rounded-md border border-white/35 bg-white/10 px-6 py-4 text-center font-black text-white backdrop-blur hover:bg-white/20">
                  Call Now
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="border-l-4 border-orange-500 bg-white p-6 text-slate-950 shadow-2xl">
                <Image
                  src="/assets/drf-logo.png"
                  alt="D.R.F Builders RI logo"
                  width={340}
                  height={140}
                  className="mb-6 h-auto w-full object-contain"
                />
                <p className="text-2xl font-black">Roofing. Exteriors. Rhode Island.</p>
                <p className="mt-3 leading-7 text-slate-600">
                  Call 401-837-3779 for roof repair, replacement, inspections, commercial roofing, and emergency service.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section aria-label="Trust signals" className="bg-white">
          <div className="mx-auto grid max-w-7xl gap-3 px-4 py-6 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
            {trustItems.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-md border border-slate-200 bg-slate-50 px-4 py-4">
                <CheckCircle2 className="h-5 w-5 flex-none text-orange-600" aria-hidden="true" />
                <span className="text-sm font-black text-slate-900">{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="bg-slate-100 px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Roofing services"
            title="Residential Roofing Services in Rhode Island"
            copy="D.R.F Builders RI helps Rhode Island property owners protect homes, businesses, and multi-family buildings with practical roofing solutions."
          />
          <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ title, copy, icon: Icon, href, cta }) => (
              <article key={title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <Icon className="mb-5 h-9 w-9 text-orange-600" aria-hidden="true" />
                <h3 className="text-xl font-black text-slate-950">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{copy}</p>
                {href ? (
                  <Link href={href} className="mt-5 inline-flex font-black text-orange-700 hover:text-orange-800">
                    {cta}
                  </Link>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Free roofing estimates"
            title="Roofing Services We Quote"
            copy="Roofing work should be evaluated by the actual roof condition, not sold as a generic plan. Tell D.R.F Builders RI what is happening and request a clear estimate."
          />
          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 lg:grid-cols-5">
            {quoteServices.map((service) => (
              <article key={service.title} className="rounded-lg border border-slate-200 bg-slate-50 p-5 shadow-sm">
                <h3 className="text-lg font-black text-slate-950">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">{service.copy}</p>
                <Link href={service.href} className="mt-5 inline-flex text-sm font-black text-orange-700 hover:text-orange-800">
                  {service.cta}
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-[0.16em] text-orange-300">Insurance repair support</p>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Roof Damage Help When Insurance Is Involved</h2>
              <p className="mt-5 text-lg leading-8 text-slate-200">
                D.R.F Builders RI helps Rhode Island homeowners with roof damage repairs connected to insurance claims. Our team
                can inspect storm or leak damage, document roof conditions, prepare a clear repair or replacement estimate, meet
                with the insurance adjuster on-site, and answer technical roofing questions about the repair scope.
              </p>
              <p className="mt-4 leading-7 text-slate-300">
                Homeowners remain responsible for their insurance claim decisions, and claim coverage questions should be handled
                directly with the insurance carrier or a licensed public adjuster.
              </p>
              <Link
                href="/roof-insurance-claim-repair-support-ri"
                className="mt-7 inline-flex rounded-md bg-orange-600 px-5 py-3 font-black text-white hover:bg-orange-700"
              >
                Learn About Insurance Repair Support
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Damage Photos", "Document visible roof damage after wind, rain, storm events, or active leaks."],
                ["Repair Scope", "Prepare roofing estimates and repair or replacement scope for the work needed."],
                ["Adjuster Meeting", "Be present during the carrier inspection to answer technical roofing questions."],
                ["Approved Repairs", "Complete roof repair or replacement work once the homeowner is ready to move forward."]
              ].map(([title, copy]) => (
                <article key={title} className="rounded-lg border border-white/10 bg-white/8 p-5">
                  <FileText className="mb-4 h-7 w-7 text-orange-300" aria-hidden="true" />
                  <h3 className="text-lg font-black">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="grid grid-cols-2 gap-3">
              {gallery.map(([src, alt], index) => (
                <div key={src} className={`relative overflow-hidden rounded-lg ${index === 0 ? "col-span-2 aspect-[16/9]" : "aspect-[4/3]"}`}>
                  <Image src={src} alt={alt} fill sizes="(max-width: 1024px) 50vw, 320px" className="object-cover" />
                </div>
              ))}
            </div>
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-[0.16em] text-orange-700">About D.R.F Builders RI</p>
              <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Why Choose D.R.F Builders RI</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                D.R.F Builders RI is a local Rhode Island roofing company committed to quality workmanship, honest communication,
                and clean job sites. From small roof leaks to full roof replacements, our team works closely with homeowners and
                business owners to understand their needs and deliver roofing solutions built for New England weather.
              </p>
              <p className="mt-4 leading-7 text-slate-600">
                Customers call for roof inspections and maintenance, residential and commercial roofing, emergency roof leak
                response, and free roofing estimates from a contractor focused on professional communication and clean job sites.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <p className="rounded-md bg-slate-100 p-4 font-bold text-slate-900">Roofing company Cranston RI</p>
                <p className="rounded-md bg-slate-100 p-4 font-bold text-slate-900">Roofing company Providence RI</p>
                <p className="rounded-md bg-slate-100 p-4 font-bold text-slate-900">Insurance roof repair support RI</p>
                <p className="rounded-md bg-slate-100 p-4 font-bold text-slate-900">Roof replacement Rhode Island</p>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-14 grid max-w-7xl overflow-hidden rounded-lg border border-slate-200 bg-slate-950 shadow-xl lg:grid-cols-[0.82fr_1.18fr]">
            <div className="relative min-h-[360px] bg-slate-900">
              <Image
                src="/assets/daniel-r-fusco.png"
                alt="Danny Fusco, founder of D.R.F Builders RI"
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover object-top"
              />
            </div>
            <div className="p-6 text-white sm:p-8 lg:p-10">
              <p className="mb-3 text-sm font-black uppercase tracking-[0.16em] text-orange-300">About the owner</p>
              <h3 className="text-3xl font-black tracking-tight sm:text-4xl">Danny Fusco, Founder of D.R.F Builders RI</h3>
              <p className="mt-5 text-lg leading-8 text-slate-200">
                Daniel R. Fusco, known locally as Danny, is a Rhode Island business owner who grew up in RI and built D.R.F.
                Builders RI around the kind of service neighbors expect from someone who knows the community personally. His
                approach is straightforward: listen first, explain the work clearly, and treat every property with respect.
              </p>
              <p className="mt-4 leading-7 text-slate-300">
                Choosing a local roofing contractor keeps the work close to home. It supports Rhode Island jobs, local families,
                and a company whose reputation is built one roof and one neighborhood at a time. From Cranston to Providence,
                Warwick, Pawtucket, and nearby RI communities, D.R.F Builders RI is proud to serve the same place Danny calls home.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                <div className="rounded-md border border-white/10 bg-white/8 p-4">
                  <p className="text-sm font-black text-orange-300">Local Roots</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">Grew up in Rhode Island and understands local homes, weather, and neighborhoods.</p>
                </div>
                <div className="rounded-md border border-white/10 bg-white/8 p-4">
                  <p className="text-sm font-black text-orange-300">Owner Involved</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">Focused on communication, clean work, and helping customers feel heard.</p>
                </div>
                <div className="rounded-md border border-white/10 bg-white/8 p-4">
                  <p className="text-sm font-black text-orange-300">Community First</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">A Rhode Island roofing company committed to staying local and serving local.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="reviews" className="roof-texture px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Reviews" title="Customer Reviews" light />
          <div className="mx-auto grid max-w-3xl gap-4">
            {reviews.map((review) => (
              <article key={review.name} className="rounded-lg border border-white/10 bg-white p-6 text-slate-950 shadow-xl">
                <blockquote className="leading-7 text-slate-700">&ldquo;{review.quote}&rdquo;</blockquote>
                <p className="mt-5 font-black text-slate-950">{review.name}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="service-area" className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-[0.16em] text-orange-700">Service area</p>
              <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Rhode Island Areas We Serve</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                D.R.F Builders RI serves Rhode Island homeowners and businesses, including Cranston, Providence, Warwick, Bristol,
                Pawtucket, East Providence, and nearby Rhode Island communities.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { city: "Providence", href: "/roofing-company-providence-ri" },
                { city: "Cranston", href: "/roofing-company-cranston-ri" },
                { city: "Warwick", href: "/roofing-company-warwick-ri" },
                { city: "Bristol", href: "/roofing-company-bristol-ri" },
                { city: "Pawtucket", href: "/roof-repair-pawtucket-ri" },
                { city: "East Providence", href: "/roofing-company-east-providence-ri" },
                { city: "Johnston" },
                { city: "North Providence" },
                { city: "Coventry" },
                { city: "West Warwick" }
              ].map(({ city, href }) => (
                <Link
                  key={city}
                  href={href ?? "#contact"}
                  className="flex items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-4 py-3 font-bold text-slate-900 transition hover:border-orange-300 hover:bg-orange-50"
                >
                  <MapPin className="h-5 w-5 text-orange-600" aria-hidden="true" />
                  {city}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-[0.16em] text-orange-300">Roofing resources</p>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Find Roofing Help Near You</h2>
              <p className="mt-4 leading-7 text-slate-300">
                Learn more about D.R.F Builders RI service areas and roofing services across Rhode Island.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="mb-3 font-black text-orange-300">Service Areas</h3>
                <div className="grid gap-2">
                  {cityPages.map((page) => (
                    <Link key={page.slug} href={`/${page.slug}`} className="rounded-md border border-white/10 bg-white/8 px-4 py-3 font-bold text-slate-100 hover:bg-white/15">
                      {page.title}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="mb-3 font-black text-orange-300">Roofing Services</h3>
                <div className="grid gap-2">
                  {servicePages.map((page) => (
                    <Link key={page.slug} href={`/${page.slug}`} className="rounded-md border border-white/10 bg-white/8 px-4 py-3 font-bold text-slate-100 hover:bg-white/15">
                      {page.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-orange-600 px-4 py-14 text-white sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Request a Free Roofing Estimate</h2>
              <p className="mt-3 max-w-3xl text-lg leading-8 text-orange-50">
                Contact D.R.F Builders RI today for roof repairs, replacement, inspections, and emergency roofing service.
              </p>
            </div>
            <a href="#contact" className="rounded-md bg-slate-950 px-6 py-4 text-center font-black text-white hover:bg-slate-900">
              Request a Free Roofing Estimate
            </a>
          </div>
        </section>

        <section id="contact" className="bg-slate-100 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-[0.16em] text-orange-700">Contact</p>
              <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Request a Free Roofing Estimate</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Tell us what is happening with your roof and D.R.F Builders RI will be ready to discuss repair, replacement,
                inspection, or emergency roofing options.
              </p>
              <div className="mt-8 grid gap-4 text-slate-900">
                <a href="tel:+14018373779" className="flex items-center gap-3 rounded-md bg-white p-4 font-black shadow-sm">
                  <Phone className="h-5 w-5 text-orange-600" aria-hidden="true" />
                  401-837-3779
                </a>
                <a href="mailto:buildersdrf@gmail.com" className="flex items-center gap-3 rounded-md bg-white p-4 font-black shadow-sm">
                  <Mail className="h-5 w-5 text-orange-600" aria-hidden="true" />
                  buildersdrf@gmail.com
                </a>
                <div className="flex items-center gap-3 rounded-md bg-white p-4 font-black shadow-sm">
                  <MapPin className="h-5 w-5 text-orange-600" aria-hidden="true" />
                  Cranston, Rhode Island - By appointment only
                </div>
                <div className="rounded-md bg-white p-4 font-black shadow-sm">drfbuildersri.com</div>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
