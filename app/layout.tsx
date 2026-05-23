import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://drfbuildersri.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "D.R.F. Builders RI | Roofing Contractor in Rhode Island",
  description:
    "D.R.F. Builders RI offers residential and commercial roofing across Rhode Island, including roof repairs, replacements, inspections, and emergency roofing services. Get a free estimate today.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "D.R.F. Builders RI | Roofing Contractor in Rhode Island",
    description:
      "Residential and commercial roofing across Rhode Island, including roof repairs, replacements, inspections, and emergency roofing services.",
    url: siteUrl,
    siteName: "D.R.F. Builders RI",
    images: [
      {
        url: "/assets/roof-4.webp",
        width: 1200,
        height: 630,
        alt: "Completed Rhode Island roof by D.R.F. Builders RI"
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
