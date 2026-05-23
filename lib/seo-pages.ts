export const siteUrl = "https://drfbuildersri.com";

export type SeoPage = {
  slug: string;
  kind: "city" | "service";
  title: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  intro: string;
  sections: Array<{
    title: string;
    copy: string;
  }>;
  areas?: string[];
  related?: string[];
};

export const cityPages: SeoPage[] = [
  {
    slug: "roofing-company-cranston-ri",
    kind: "city",
    title: "Roofing Company Cranston RI",
    metaTitle: "Roofing Company Cranston RI | D.R.F. Builders RI",
    metaDescription:
      "D.R.F. Builders RI provides roof repair, roof replacement, inspections, maintenance, and commercial roofing in Cranston, Rhode Island.",
    eyebrow: "Cranston roofing contractor",
    h1: "Roofing Company in Cranston, RI",
    intro:
      "D.R.F. Builders RI is based in Cranston and helps local homeowners and businesses with dependable roofing work built for Rhode Island weather.",
    sections: [
      {
        title: "Cranston Roof Repair and Replacement",
        copy:
          "From small roof leaks to full roof replacements, D.R.F. Builders RI serves Cranston properties with clear communication, clean job sites, and practical roofing recommendations."
      },
      {
        title: "Local Service From a Rhode Island Owner",
        copy:
          "Danny Fusco grew up in Rhode Island and understands how local weather, winter storms, coastal moisture, and older New England homes can affect a roof."
      }
    ],
    areas: ["Laurel Hill", "Garden City", "Edgewood", "Auburn", "Meshanticut", "Knightsville"],
    related: ["roof-repair-ri", "roof-replacement-ri", "gutter-cleaning-roof-maintenance-ri"]
  },
  {
    slug: "roofing-company-providence-ri",
    kind: "city",
    title: "Roofing Company Providence RI",
    metaTitle: "Roofing Company Providence RI | Roof Repair Providence",
    metaDescription:
      "Need a roofing company in Providence, RI? D.R.F. Builders RI handles roof repair, replacement, maintenance, and commercial roofing across Providence.",
    eyebrow: "Providence roofing contractor",
    h1: "Roofing Company in Providence, RI",
    intro:
      "D.R.F. Builders RI provides Providence roofing services for homes, multi-family properties, small businesses, and commercial buildings.",
    sections: [
      {
        title: "Roofing for Providence Homes and Buildings",
        copy:
          "Providence roofs face heavy rain, wind, snow, ice, and aging roof systems. D.R.F. Builders RI helps identify the right repair or replacement path."
      },
      {
        title: "Responsive Roof Leak Help",
        copy:
          "When a leak shows up around shingles, flashing, vents, or roof edges, our team can inspect the issue and explain the next steps clearly."
      }
    ],
    areas: ["Federal Hill", "Elmhurst", "Mount Pleasant", "Silver Lake", "Washington Park", "Fox Point"],
    related: ["roof-repair-ri", "commercial-roofing-ri", "residential-roofing-ri"]
  },
  {
    slug: "roofing-company-warwick-ri",
    kind: "city",
    title: "Roofing Company Warwick RI",
    metaTitle: "Roofing Company Warwick RI | D.R.F. Builders RI",
    metaDescription:
      "D.R.F. Builders RI provides roof repair, roof replacement, maintenance, and commercial roofing for Warwick, RI homes and businesses.",
    eyebrow: "Warwick roofing contractor",
    h1: "Roofing Company in Warwick, RI",
    intro:
      "For Warwick homeowners and business owners, D.R.F. Builders RI offers dependable roofing services with local Rhode Island experience.",
    sections: [
      {
        title: "Warwick Roof Repair and Replacement",
        copy:
          "Whether a roof needs targeted repairs or a full replacement, D.R.F. Builders RI focuses on honest communication and durable roofing work."
      },
      {
        title: "Commercial and Residential Roofing",
        copy:
          "We support both residential roofing needs and commercial roofing projects for local Warwick properties."
      }
    ],
    areas: ["Apponaug", "Gaspee", "Oakland Beach", "Pawtuxet Village", "Buttonwoods", "Hoxsie"],
    related: ["roof-replacement-ri", "commercial-roofing-ri", "gutter-cleaning-roof-maintenance-ri"]
  },
  {
    slug: "roof-repair-pawtucket-ri",
    kind: "city",
    title: "Roof Repair Pawtucket RI",
    metaTitle: "Roof Repair Pawtucket RI | D.R.F. Builders RI",
    metaDescription:
      "D.R.F. Builders RI offers roof repair in Pawtucket, RI for leaks, missing shingles, storm damage, inspections, and maintenance.",
    eyebrow: "Pawtucket roof repair",
    h1: "Roof Repair in Pawtucket, RI",
    intro:
      "D.R.F. Builders RI helps Pawtucket property owners repair roof leaks, storm damage, missing shingles, and other roofing problems.",
    sections: [
      {
        title: "Pawtucket Roof Leak Repairs",
        copy:
          "Roof leaks can spread quickly through ceilings, insulation, and exterior trim. Our team helps locate the problem and recommend the right repair."
      },
      {
        title: "Maintenance for Older Roofs",
        copy:
          "Many Pawtucket properties benefit from inspections, cleaning, and timely maintenance before small roof issues become bigger repairs."
      }
    ],
    areas: ["Darlington", "Oak Hill", "Woodlawn", "Fairlawn", "Quality Hill", "Pinecrest"],
    related: ["roof-repair-ri", "gutter-cleaning-roof-maintenance-ri", "roof-replacement-ri"]
  },
  {
    slug: "roofing-company-east-providence-ri",
    kind: "city",
    title: "Roofing Company East Providence RI",
    metaTitle: "Roofing Company East Providence RI | D.R.F. Builders RI",
    metaDescription:
      "D.R.F. Builders RI provides roof repair, replacement, maintenance, and commercial roofing in East Providence, Rhode Island.",
    eyebrow: "East Providence roofing contractor",
    h1: "Roofing Company in East Providence, RI",
    intro:
      "D.R.F. Builders RI serves East Providence with local roofing services for homeowners, landlords, and businesses.",
    sections: [
      {
        title: "Roofing Built for Rhode Island Weather",
        copy:
          "East Providence roofs need protection from rain, wind, snow, freeze-thaw cycles, and seasonal debris. We help keep roofs ready for the next storm."
      },
      {
        title: "Straightforward Local Roofing Service",
        copy:
          "Customers work with a Rhode Island-based roofing company focused on clear estimates, clean job sites, and practical recommendations."
      }
    ],
    areas: ["Riverside", "Rumford", "Kent Heights", "Watchemoket", "Phillipsdale", "Central East Providence"],
    related: ["roof-repair-ri", "residential-roofing-ri", "commercial-roofing-ri"]
  }
];

export const servicePages: SeoPage[] = [
  {
    slug: "roof-repair-ri",
    kind: "service",
    title: "Roof Repair RI",
    metaTitle: "Roof Repair Rhode Island | D.R.F. Builders RI",
    metaDescription:
      "D.R.F. Builders RI provides roof repair across Rhode Island for leaks, storm damage, missing shingles, flashing issues, and aging roofs.",
    eyebrow: "Rhode Island roof repair",
    h1: "Roof Repair in Rhode Island",
    intro:
      "D.R.F. Builders RI handles roof repair across Rhode Island, helping homeowners and businesses stop leaks and protect their property.",
    sections: [
      {
        title: "Leak, Storm, and Shingle Repairs",
        copy:
          "We repair common Rhode Island roofing issues including missing shingles, active leaks, flashing problems, wind damage, and roof wear."
      },
      {
        title: "Clear Recommendations Before Bigger Work",
        copy:
          "Not every roof problem needs a replacement. D.R.F. Builders RI explains whether a repair, maintenance visit, or replacement makes the most sense."
      }
    ],
    related: ["roofing-company-cranston-ri", "roofing-company-providence-ri", "roof-repair-pawtucket-ri"]
  },
  {
    slug: "roof-replacement-ri",
    kind: "service",
    title: "Roof Replacement RI",
    metaTitle: "Roof Replacement Rhode Island | D.R.F. Builders RI",
    metaDescription:
      "D.R.F. Builders RI provides roof replacement across Rhode Island for homes, multi-family properties, and local businesses.",
    eyebrow: "Rhode Island roof replacement",
    h1: "Roof Replacement in Rhode Island",
    intro:
      "When repairs are no longer enough, D.R.F. Builders RI provides roof replacement services built for New England weather.",
    sections: [
      {
        title: "Replacement Roofing for RI Properties",
        copy:
          "A properly installed roof protects the structure, improves curb appeal, and helps prevent recurring leaks from an aging roof system."
      },
      {
        title: "Built for Rain, Snow, Wind, and Ice",
        copy:
          "Rhode Island roofs need materials and workmanship that can handle winter weather, spring rain, coastal moisture, and seasonal temperature swings."
      }
    ],
    related: ["roofing-company-cranston-ri", "roofing-company-warwick-ri", "residential-roofing-ri"]
  },
  {
    slug: "gutter-cleaning-roof-maintenance-ri",
    kind: "service",
    title: "Gutter Cleaning and Roof Maintenance RI",
    metaTitle: "Gutter Cleaning & Roof Maintenance Rhode Island",
    metaDescription:
      "D.R.F. Builders RI offers gutter cleaning and roof maintenance in Rhode Island to help prevent water damage, leaks, and seasonal roof issues.",
    eyebrow: "Roof maintenance",
    h1: "Gutter Cleaning and Roof Maintenance in Rhode Island",
    intro:
      "Roof maintenance and gutter cleaning help Rhode Island property owners prevent water damage before it turns into expensive roof repair.",
    sections: [
      {
        title: "Prevent Water Problems Before They Spread",
        copy:
          "Clogged gutters, debris buildup, loose materials, and small roof issues can direct water where it does not belong. Maintenance helps reduce that risk."
      },
      {
        title: "Seasonal Help for Local Properties",
        copy:
          "D.R.F. Builders RI offers maintenance support for homeowners and businesses preparing for heavy rain, leaves, snow, and ice."
      }
    ],
    related: ["roof-repair-ri", "roofing-company-cranston-ri", "roofing-company-east-providence-ri"]
  },
  {
    slug: "commercial-roofing-ri",
    kind: "service",
    title: "Commercial Roofing RI",
    metaTitle: "Commercial Roofing Rhode Island | D.R.F. Builders RI",
    metaDescription:
      "D.R.F. Builders RI provides commercial roofing services across Rhode Island for businesses, apartment buildings, offices, and local properties.",
    eyebrow: "Commercial roofing",
    h1: "Commercial Roofing in Rhode Island",
    intro:
      "D.R.F. Builders RI supports Rhode Island businesses and property owners with commercial roofing repairs, replacement planning, and maintenance.",
    sections: [
      {
        title: "Roofing for Local Businesses",
        copy:
          "We help offices, small businesses, apartment buildings, and local commercial properties address roofing problems with minimal disruption."
      },
      {
        title: "Responsive Communication",
        copy:
          "Commercial roofing projects need clear scheduling and practical next steps. D.R.F. Builders RI keeps communication straightforward."
      }
    ],
    related: ["roofing-company-providence-ri", "roofing-company-warwick-ri", "roofing-company-east-providence-ri"]
  },
  {
    slug: "residential-roofing-ri",
    kind: "service",
    title: "Residential Roofing RI",
    metaTitle: "Residential Roofing Rhode Island | D.R.F. Builders RI",
    metaDescription:
      "D.R.F. Builders RI provides residential roofing across Rhode Island, including repairs, replacements, inspections, and roof maintenance.",
    eyebrow: "Residential roofing",
    h1: "Residential Roofing in Rhode Island",
    intro:
      "D.R.F. Builders RI helps Rhode Island homeowners protect their homes with roof repair, roof replacement, inspections, and maintenance.",
    sections: [
      {
        title: "Roofing for Rhode Island Homes",
        copy:
          "From Cranston and Providence to Warwick, Pawtucket, and East Providence, our team works on local homes with care and attention to detail."
      },
      {
        title: "A Local Owner, A Neighborly Standard",
        copy:
          "Danny Fusco built D.R.F. Builders RI around honest communication, clean job sites, and service that feels local because it is local."
      }
    ],
    related: ["roof-repair-ri", "roof-replacement-ri", "roofing-company-cranston-ri"]
  }
];

export const seoPages = [...cityPages, ...servicePages];

export function getSeoPage(slug: string) {
  return seoPages.find((page) => page.slug === slug);
}
