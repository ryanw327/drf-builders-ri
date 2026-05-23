import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { getSeoPage, type SeoPage, seoPages, siteUrl } from "@/lib/seo-pages";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return seoPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getSeoPage(slug);

  if (!page) {
    return {};
  }

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: `/${page.slug}`
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `${siteUrl}/${page.slug}`,
      siteName: "D.R.F Builders RI",
      images: [
        {
          url: "/assets/roof-4.webp",
          width: 1200,
          height: 630,
          alt: page.title
        }
      ],
      locale: "en_US",
      type: "website"
    }
  };
}

export default async function SeoLandingPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getSeoPage(slug);

  if (!page) {
    notFound();
  }

  const relatedPages = page.related?.map(getSeoPage).filter((related): related is SeoPage => Boolean(related)) ?? [];

  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative isolate overflow-hidden bg-slate-950 text-white">
          <Image
            src="/assets/roof-1.webp"
            alt={`D.R.F Builders RI roofing project for ${page.serviceName.toLowerCase()} in ${page.locationName}`}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/45" />
          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="mb-4 inline-flex rounded-md border border-orange-400/40 bg-orange-500/15 px-3 py-2 text-sm font-black uppercase tracking-[0.14em] text-orange-200">
                {page.eyebrow}
              </p>
              <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-6xl">{page.h1}</h1>
              <p className="mt-6 text-lg leading-8 text-slate-200">{page.intro}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="tel:+14018373779" className="rounded-md bg-orange-600 px-6 py-4 text-center font-black text-white hover:bg-orange-700">
                  Call 401-837-3779
                </a>
                <a href="#contact" className="rounded-md border border-white/35 bg-white/10 px-6 py-4 text-center font-black text-white hover:bg-white/20">
                  Request a Free Roofing Estimate
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.8fr]">
            <div className="grid gap-6">
              <article className="rounded-lg border border-slate-200 bg-slate-50 p-6">
                <CheckCircle2 className="mb-4 h-7 w-7 text-orange-600" aria-hidden="true" />
                <h2 className="text-2xl font-black text-slate-950">{page.servicesHeading}</h2>
                <p className="mt-3 leading-7 text-slate-700">
                  D.R.F Builders RI provides {page.serviceName.toLowerCase()} for local homeowners and businesses in {page.locationName}
                  {page.locationName === "Rhode Island" ? "" : ", RI"}. Services may include roof leak repair, storm damage roof repair,
                  flashing repair, shingle replacement, roof inspections, maintenance, emergency roof service, residential roofing, commercial
                  roofing, and flat roofing guidance where appropriate.
                </p>
              </article>
              <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-black text-slate-950">Common Roofing Problems We Fix</h2>
                <ul className="mt-4 grid gap-3 text-slate-700 sm:grid-cols-2">
                  {page.commonProblems.map((problem) => (
                    <li key={problem} className="flex gap-2 leading-7">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-orange-600" aria-hidden="true" />
                      {problem}
                    </li>
                  ))}
                </ul>
              </article>
              {page.sections.map((section) => (
                <article key={section.title} className="rounded-lg border border-slate-200 bg-slate-50 p-6">
                  <CheckCircle2 className="mb-4 h-7 w-7 text-orange-600" aria-hidden="true" />
                  <h2 className="text-2xl font-black text-slate-950">{section.title}</h2>
                  <p className="mt-3 leading-7 text-slate-700">{section.copy}</p>
                </article>
              ))}
              <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-black text-slate-950">
                  Why {page.locationName === "Rhode Island" ? "Rhode Island" : page.locationName} Homeowners Choose D.R.F Builders RI
                </h2>
                <p className="mt-3 leading-7 text-slate-700">
                  {page.whyChoose}
                </p>
              </article>
              <article className="rounded-lg border border-orange-200 bg-orange-50 p-6">
                <h2 className="text-2xl font-black text-slate-950">Request a Free Roofing Estimate</h2>
                <p className="mt-3 leading-7 text-slate-700">
                  Call or text D.R.F Builders RI at 401-837-3779 to discuss {page.serviceName.toLowerCase()} in {page.locationName}
                  {page.locationName === "Rhode Island" ? "" : ", RI"}. You can also use the contact form and your email app will open a
                  prepared estimate request.
                </p>
                <a href="#contact" className="mt-5 inline-flex rounded-md bg-orange-600 px-5 py-3 font-black text-white hover:bg-orange-700">
                  Request a Free Roofing Estimate
                </a>
              </article>
              <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-black text-slate-950">Frequently Asked Questions</h2>
                <div className="mt-5 grid gap-5">
                  {page.faqs.map((faq) => (
                    <div key={faq.question}>
                      <h3 className="text-lg font-black text-slate-950">{faq.question}</h3>
                      <p className="mt-2 leading-7 text-slate-700">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </article>
            </div>

            <aside className="h-fit rounded-lg bg-slate-950 p-6 text-white shadow-xl">
              <Image src="/assets/drf-logo.png" alt="D.R.F Builders RI logo" width={260} height={110} className="mb-6 h-auto w-full bg-white p-2 object-contain" />
              <h2 className="text-2xl font-black">Request a Free Roofing Estimate</h2>
              <p className="mt-3 leading-7 text-slate-300">Call or text D.R.F Builders RI for local roofing help across Rhode Island.</p>
              <a href="tel:+14018373779" className="mt-5 flex items-center gap-3 rounded-md bg-orange-600 px-4 py-3 font-black text-white hover:bg-orange-700">
                <Phone className="h-5 w-5" aria-hidden="true" />
                401-837-3779
              </a>
              {page.areas ? (
                <div className="mt-7">
                  <h3 className="font-black text-orange-300">Nearby Areas</h3>
                  <div className="mt-3 grid gap-2">
                    {page.areas.map((area) => (
                      <p key={area} className="flex items-center gap-2 text-sm text-slate-200">
                        <MapPin className="h-4 w-4 text-orange-400" aria-hidden="true" />
                        {area}
                      </p>
                    ))}
                  </div>
                </div>
              ) : null}
            </aside>
          </div>
        </section>

        {relatedPages.length ? (
          <section className="bg-slate-100 px-4 py-14 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <h2 className="text-3xl font-black text-slate-950">Related Roofing Pages</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {relatedPages.map((related) => (
                  <Link key={related.slug} href={`/${related.slug}`} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                    <h3 className="text-lg font-black text-slate-950">{related.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{related.metaDescription}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section id="contact" className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-[0.16em] text-orange-700">Contact D.R.F Builders RI</p>
              <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Request a Free Roofing Estimate</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Tell us what is happening with your roof and the form will open an email draft to D.R.F Builders RI.
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
