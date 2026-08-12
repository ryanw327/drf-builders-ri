import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { StickyMobileBar } from "@/components/StickyMobileBar";
import "./globals.css";

const siteUrl = "https://www.drfbuildersri.com";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "RoofingContractor"],
      "@id": "https://www.drfbuildersri.com/#business",
      name: "D.R.F Builders RI",
      alternateName: "DRF Builders RI",
      description:
        "D.R.F Builders RI provides residential and commercial roofing services across Rhode Island including roof repair, roof replacement, emergency roofing, flat roofing, and insurance claim repair.",
      url: "https://www.drfbuildersri.com",
      telephone: "+14018373779",
      email: "buildersdrf@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cranston",
        addressRegion: "RI",
        postalCode: "02910",
        addressCountry: "US"
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 41.7798,
        longitude: -71.4373
      },
      areaServed: [
        { "@type": "City", name: "Cranston" },
        { "@type": "City", name: "Providence" },
        { "@type": "City", name: "Warwick" },
        { "@type": "City", name: "Bristol" },
        { "@type": "City", name: "Pawtucket" },
        { "@type": "City", name: "East Providence" },
        { "@type": "State", name: "Rhode Island" }
      ],
      serviceType: [
        "Roof Repair",
        "Roof Replacement",
        "Emergency Roof Repair",
        "Commercial Roofing",
        "Residential Roofing",
        "Flat Roofing",
        "Roof Inspection",
        "Insurance Claim Roof Repair"
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Roofing Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Roof Repair",
              url: "https://www.drfbuildersri.com/roof-repair-ri"
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Roof Replacement",
              url: "https://www.drfbuildersri.com/roof-replacement-ri"
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Emergency Roof Repair",
              url: "https://www.drfbuildersri.com/emergency-roof-repair-ri"
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Commercial Roofing",
              url: "https://www.drfbuildersri.com/commercial-roofing-ri"
            }
          }
        ]
      },
      priceRange: "$$",
      paymentAccepted: "Cash, Check, Credit Card",
      currenciesAccepted: "USD",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "07:00",
          closes: "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "08:00",
          closes: "14:00"
        }
      ],
      image: "https://www.drfbuildersri.com/assets/roof-4.webp",
      logo: "https://www.drfbuildersri.com/assets/drf-logo.png",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "1",
        bestRating: "5",
        worstRating: "1"
      },
      review: [
        {
          "@type": "Review",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5"
          },
          author: {
            "@type": "Person",
            name: "Rhode Island Customer"
          },
          reviewBody:
            "Great company! The owner is always involved and truly listens to what you need. Highly recommended \u2014 they did a very clean, professional job."
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Rhode Island Roofing Contractor | Roof Repair & Free Estimates",
  description:
    "D.R.F Builders RI helps Rhode Island homeowners and businesses with roof repair, replacement, emergency leaks, storm damage, and insurance claim support. Call or text for a free estimate.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Rhode Island Roofing Contractor | Roof Repair & Free Estimates",
    description:
      "Roof repair, roof replacement, emergency leaks, storm damage, commercial roofing, and insurance claim support across Rhode Island.",
    url: siteUrl,
    siteName: "D.R.F Builders RI",
    images: [
      {
        url: "/assets/roof-4.webp",
        width: 1200,
        height: 630,
        alt: "Residential roof replacement project in Rhode Island by D.R.F Builders RI"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      </head>
      <body>
        {children}
        <StickyMobileBar />
        <Analytics />
      </body>
    </html>
  );
}
