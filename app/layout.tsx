import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://drfbuildersri.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Roofing Contractor in Rhode Island | D.R.F Builders RI",
  description:
    "D.R.F Builders RI provides roof repair, roof replacement, emergency roofing, flat roofing, and commercial roofing services across Rhode Island. Call for a free estimate.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Roofing Contractor in Rhode Island | D.R.F Builders RI",
    description:
      "Roof repair, roof replacement, emergency roofing, flat roofing, and commercial roofing services across Rhode Island.",
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
      <body>{children}</body>
    </html>
  );
}
