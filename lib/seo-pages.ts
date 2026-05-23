export const siteUrl = "https://drfbuildersri.com";

export type SeoPage = {
  slug: string;
  kind: "city" | "service";
  serviceName: string;
  locationName: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  intro: string;
  servicesHeading: string;
  sections: Array<{
    title: string;
    copy: string;
  }>;
  commonProblems: string[];
  whyChoose: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  areas?: string[];
  related?: string[];
};

export const cityPages: SeoPage[] = [
  {
    slug: "roofing-company-cranston-ri",
    kind: "city",
    serviceName: "Roofing Services",
    locationName: "Cranston",
    title: "Roofing Company Cranston RI",
    metaTitle: "Roofing Services in Cranston, RI | D.R.F Builders RI",
    metaDescription:
      "D.R.F Builders RI provides roof repair, roof replacement, emergency roof repair, inspections, maintenance, and commercial roofing in Cranston, RI.",
    eyebrow: "Cranston roofing contractor",
    h1: "Roofing Services in Cranston, RI",
    intro:
      "D.R.F Builders RI provides roofing services for homeowners and businesses in Cranston, RI, including leak repair, storm damage repair, shingle replacement, roof inspections, emergency roof service, and commercial roofing.",
    servicesHeading: "Roofing Services in Cranston",
    sections: [
      {
        title: "Cranston Roof Repair and Replacement",
        copy:
          "From small roof leaks to full roof replacements, D.R.F Builders RI serves Cranston properties with clear communication, clean job sites, and practical roofing recommendations."
      },
      {
        title: "Local Service From a Rhode Island Owner",
        copy:
          "Danny Fusco grew up in Rhode Island and understands how local weather, winter storms, coastal moisture, and older New England homes can affect a roof."
      }
    ],
    commonProblems: ["Leaking roofs after heavy rain", "Missing or lifted shingles", "Storm damage and wind damage", "Flashing leaks around chimneys and vents", "Clogged gutters causing roof-edge water problems"],
    whyChoose:
      "Cranston homeowners choose D.R.F Builders RI for local owner involvement, straightforward communication, clean job sites, and free roofing estimates from a Rhode Island-based contractor.",
    faqs: [
      {
        question: "Does D.R.F Builders RI provide emergency roof repair in Cranston?",
        answer: "Yes. D.R.F Builders RI helps Cranston property owners with urgent roof leaks, storm damage, and other roof problems that need prompt attention."
      },
      {
        question: "Can I request a roof inspection in Cranston?",
        answer: "Yes. You can request a roof inspection to review leaks, shingle wear, storm damage, or roof replacement needs."
      }
    ],
    areas: ["Laurel Hill", "Garden City", "Edgewood", "Auburn", "Meshanticut", "Knightsville"],
    related: ["roof-repair-ri", "roof-replacement-ri", "gutter-cleaning-roof-maintenance-ri"]
  },
  {
    slug: "roofing-company-providence-ri",
    kind: "city",
    serviceName: "Roofing Services",
    locationName: "Providence",
    title: "Roofing Company Providence RI",
    metaTitle: "Roofing Services in Providence, RI | D.R.F Builders RI",
    metaDescription:
      "D.R.F Builders RI handles roof repair, roof replacement, emergency roofing, maintenance, and commercial roofing across Providence, RI.",
    eyebrow: "Providence roofing contractor",
    h1: "Roofing Services in Providence, RI",
    intro:
      "D.R.F Builders RI provides roofing services for homeowners and businesses in Providence, RI, including leak repair, storm damage repair, flashing repair, shingle replacement, emergency roof service, and commercial roofing.",
    servicesHeading: "Roofing Services in Providence",
    sections: [
      {
        title: "Roofing for Providence Homes and Buildings",
        copy:
          "Providence roofs face heavy rain, wind, snow, ice, and aging roof systems. D.R.F Builders RI helps identify the right repair or replacement path."
      },
      {
        title: "Responsive Roof Leak Help",
        copy:
          "When a leak shows up around shingles, flashing, vents, or roof edges, our team can inspect the issue and explain the next steps clearly."
      }
    ],
    commonProblems: ["Roof leaks in older homes and multi-family buildings", "Storm damage from wind and heavy rain", "Flashing failures around roof penetrations", "Worn or missing asphalt shingles", "Commercial roof maintenance needs"],
    whyChoose:
      "Providence customers choose D.R.F Builders RI for responsive communication, local Rhode Island service, roof repair experience, and clean professional work.",
    faqs: [
      {
        question: "Do you provide roof repair in Providence, RI?",
        answer: "Yes. D.R.F Builders RI provides roof repair in Providence for leaks, shingles, flashing, storm damage, and maintenance concerns."
      },
      {
        question: "Do you work on Providence commercial roofing projects?",
        answer: "Yes. D.R.F Builders RI supports local businesses, offices, apartment buildings, and commercial properties with roofing needs."
      }
    ],
    areas: ["Federal Hill", "Elmhurst", "Mount Pleasant", "Silver Lake", "Washington Park", "Fox Point"],
    related: ["roof-repair-ri", "commercial-roofing-ri", "residential-roofing-ri"]
  },
  {
    slug: "roofing-company-warwick-ri",
    kind: "city",
    serviceName: "Roofing Services",
    locationName: "Warwick",
    title: "Roofing Company Warwick RI",
    metaTitle: "Roofing Services in Warwick, RI | D.R.F Builders RI",
    metaDescription:
      "D.R.F Builders RI provides roof repair, roof replacement, emergency roofing, maintenance, and commercial roofing for Warwick, RI homes and businesses.",
    eyebrow: "Warwick roofing contractor",
    h1: "Roofing Services in Warwick, RI",
    intro:
      "D.R.F Builders RI provides roofing services for homeowners and businesses in Warwick, RI, including leak repair, storm damage repair, roof replacement, roof inspections, and emergency roof service.",
    servicesHeading: "Roofing Services in Warwick",
    sections: [
      {
        title: "Warwick Roof Repair and Replacement",
        copy:
          "Whether a roof needs targeted repairs or a full replacement, D.R.F Builders RI focuses on honest communication and durable roofing work."
      },
      {
        title: "Commercial and Residential Roofing",
        copy:
          "We support both residential roofing needs and commercial roofing projects for local Warwick properties."
      }
    ],
    commonProblems: ["Wind-damaged shingles", "Roof leaks near flashing or vents", "Aging roofs ready for replacement", "Gutter and roof-edge drainage problems", "Commercial roof wear and maintenance issues"],
    whyChoose:
      "Warwick homeowners and businesses choose D.R.F Builders RI for practical roofing guidance, free estimates, and a local crew focused on clean job sites.",
    faqs: [
      {
        question: "Does D.R.F Builders RI provide roof replacement in Warwick?",
        answer: "Yes. D.R.F Builders RI provides roof replacement for Warwick homes, businesses, and local properties when repair is no longer the right fit."
      },
      {
        question: "Can D.R.F Builders RI help after a Warwick storm?",
        answer: "Yes. The team can inspect storm damage, roof leaks, missing shingles, and other weather-related roofing problems."
      }
    ],
    areas: ["Apponaug", "Gaspee", "Oakland Beach", "Pawtuxet Village", "Buttonwoods", "Hoxsie"],
    related: ["roof-replacement-ri", "commercial-roofing-ri", "gutter-cleaning-roof-maintenance-ri"]
  },
  {
    slug: "roof-repair-pawtucket-ri",
    kind: "city",
    serviceName: "Roof Repair",
    locationName: "Pawtucket",
    title: "Roof Repair Pawtucket RI",
    metaTitle: "Roof Repair in Pawtucket, RI | D.R.F Builders RI",
    metaDescription:
      "D.R.F Builders RI offers roof repair in Pawtucket, RI for leaks, missing shingles, storm damage, flashing repair, inspections, and maintenance.",
    eyebrow: "Pawtucket roof repair",
    h1: "Roof Repair in Pawtucket, RI",
    intro:
      "D.R.F Builders RI provides roof repair for homeowners and businesses in Pawtucket, RI, including leak repair, storm damage repair, flashing repair, shingle replacement, and emergency roof service.",
    servicesHeading: "Roof Repair Services in Pawtucket",
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
    commonProblems: ["Active ceiling leaks", "Missing or cracked shingles", "Storm-damaged roof sections", "Flashing leaks around chimneys", "Debris and gutter issues affecting roof edges"],
    whyChoose:
      "Pawtucket homeowners choose D.R.F Builders RI because the company focuses on clear communication, local service, free estimates, and roofing repairs that address the actual problem.",
    faqs: [
      {
        question: "How soon should I call for a roof leak in Pawtucket?",
        answer: "Call as soon as you notice staining, dripping, missing shingles, or storm damage. Early roof repair can help prevent more interior damage."
      },
      {
        question: "Do you inspect roofs before recommending repair?",
        answer: "Yes. D.R.F Builders RI can inspect the roof issue and explain whether repair, maintenance, or replacement is the better next step."
      }
    ],
    areas: ["Darlington", "Oak Hill", "Woodlawn", "Fairlawn", "Quality Hill", "Pinecrest"],
    related: ["roof-repair-ri", "gutter-cleaning-roof-maintenance-ri", "roof-replacement-ri"]
  },
  {
    slug: "roofing-company-bristol-ri",
    kind: "city",
    serviceName: "Roofing Services",
    locationName: "Bristol",
    title: "Roofing Company Bristol RI",
    metaTitle: "Roofing Services in Bristol, RI | D.R.F Builders RI",
    metaDescription:
      "D.R.F Builders RI provides roof repair, roof replacement, emergency roofing, inspections, maintenance, and commercial roofing in Bristol, RI.",
    eyebrow: "Bristol roofing contractor",
    h1: "Roofing Services in Bristol, RI",
    intro:
      "D.R.F Builders RI provides roofing services for homeowners and businesses in Bristol, RI, including leak repair, storm damage repair, flashing repair, shingle replacement, roof inspections, and emergency roof service.",
    servicesHeading: "Roofing Services in Bristol",
    sections: [
      {
        title: "Bristol Roof Repair and Replacement",
        copy:
          "Bristol roofs face Rhode Island rain, winter weather, wind, and coastal moisture. D.R.F Builders RI can inspect roof issues and explain repair, replacement, and maintenance options."
      },
      {
        title: "Residential and Commercial Roofing Support",
        copy:
          "From homes to local businesses, D.R.F Builders RI helps Bristol property owners with practical roofing service and clear communication."
      }
    ],
    commonProblems: ["Roof leaks after storms", "Missing or lifted shingles", "Flashing leaks", "Coastal moisture and roof wear", "Gutter and maintenance issues"],
    whyChoose:
      "Bristol homeowners choose D.R.F Builders RI for local Rhode Island service, free estimates, clean job sites, and owner-led communication.",
    faqs: [
      {
        question: "Does D.R.F Builders RI serve Bristol, RI?",
        answer: "Yes. D.R.F Builders RI serves Bristol and nearby Rhode Island communities with roof repair, replacement, inspections, and maintenance."
      },
      {
        question: "Can I request emergency roof repair in Bristol?",
        answer: "Yes. D.R.F Builders RI can discuss urgent roof leaks, storm damage, and emergency roof repair needs in Bristol."
      }
    ],
    areas: ["Downtown Bristol", "Hopeworth", "Poppasquash", "Bristol Highlands", "Mount Hope", "Nearby East Bay communities"],
    related: ["roof-repair-ri", "emergency-roof-repair-ri", "roof-replacement-ri"]
  },
  {
    slug: "roofing-company-east-providence-ri",
    kind: "city",
    serviceName: "Roofing Services",
    locationName: "East Providence",
    title: "Roofing Company East Providence RI",
    metaTitle: "Roofing Services in East Providence, RI | D.R.F Builders RI",
    metaDescription:
      "D.R.F Builders RI provides roof repair, roof replacement, emergency roofing, maintenance, and commercial roofing in East Providence, RI.",
    eyebrow: "East Providence roofing contractor",
    h1: "Roofing Services in East Providence, RI",
    intro:
      "D.R.F Builders RI provides roofing services for homeowners and businesses in East Providence, RI, including leak repair, storm damage repair, shingle replacement, roof inspections, and emergency roof service.",
    servicesHeading: "Roofing Services in East Providence",
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
    commonProblems: ["Leaks after rain or snow", "Shingle wear from New England weather", "Flashing repair needs", "Storm damage and wind damage", "Roof maintenance for homes and commercial properties"],
    whyChoose:
      "East Providence customers choose D.R.F Builders RI for local Rhode Island service, dependable communication, clean job sites, and free roofing estimates.",
    faqs: [
      {
        question: "Does D.R.F Builders RI serve Riverside and Rumford?",
        answer: "Yes. D.R.F Builders RI serves East Providence neighborhoods including Riverside, Rumford, Kent Heights, and nearby communities."
      },
      {
        question: "Can you help with both residential and commercial roofing?",
        answer: "Yes. D.R.F Builders RI works with homeowners, landlords, local businesses, and commercial property owners."
      }
    ],
    areas: ["Riverside", "Rumford", "Kent Heights", "Watchemoket", "Phillipsdale", "Central East Providence"],
    related: ["roof-repair-ri", "residential-roofing-ri", "commercial-roofing-ri"]
  }
];

export const servicePages: SeoPage[] = [
  {
    slug: "roof-insurance-claim-repair-support-ri",
    kind: "service",
    serviceName: "Roof Insurance Claim Repair Support",
    locationName: "Rhode Island",
    title: "Roof Insurance Claim Repair Support RI",
    metaTitle: "Roof Insurance Claim Repair Support in Rhode Island | D.R.F Builders RI",
    metaDescription:
      "D.R.F Builders RI helps Rhode Island homeowners with roof damage documentation, repair estimates, adjuster meeting support, and insurance-related roof repairs.",
    eyebrow: "Insurance roof repair support",
    h1: "Roof Insurance Claim Repair Support in Rhode Island",
    intro:
      "D.R.F Builders RI provides roof insurance claim repair support for Rhode Island homeowners and businesses, including storm damage documentation, leak repair estimates, repair scope preparation, adjuster meeting support, emergency roof service, and approved roof repair or replacement work.",
    servicesHeading: "Roof Insurance Claim Repair Support Services in Rhode Island",
    sections: [
      {
        title: "Roof Damage Documentation and Repair Estimates",
        copy:
          "When a roof is damaged by wind, rain, falling debris, or a sudden leak, D.R.F Builders RI can inspect the roof, document visible roofing damage, and prepare a clear repair or replacement estimate for the work needed."
      },
      {
        title: "Technical Roofing Support During the Claim Process",
        copy:
          "Our team can be present when the insurance adjuster inspects the roof and can answer technical questions about roof damage, materials, measurements, and repair scope."
      }
    ],
    commonProblems: [
      "Storm damage roof repairs",
      "Wind-lifted or missing shingles",
      "Emergency roof leaks",
      "Flashing and roof penetration leaks",
      "Insurance-related roof replacement documentation"
    ],
    whyChoose:
      "Rhode Island homeowners choose D.R.F Builders RI for organized documentation, clear repair scopes, professional communication, clean job sites, and roofing work completed after the claim and repair path is clear.",
    faqs: [
      {
        question: "Can D.R.F Builders RI help with roof damage connected to an insurance claim?",
        answer:
          "Yes. D.R.F Builders RI can inspect roof damage, document roof conditions, prepare repair or replacement estimates, meet the carrier adjuster on-site, and answer technical roofing questions about the repair scope."
      },
      {
        question: "Does D.R.F Builders RI negotiate insurance claims?",
        answer:
          "No. D.R.F Builders RI provides roofing documentation, repair estimates, and technical project support. Homeowners should handle claim coverage questions directly with their insurance carrier or a licensed public adjuster."
      },
      {
        question: "Can D.R.F Builders RI complete the roof repairs after a claim is approved?",
        answer:
          "Yes. D.R.F Builders RI can complete roof repairs, roof replacement, emergency roof leak repairs, and related roofing work once the homeowner is ready to move forward."
      }
    ],
    related: ["emergency-roof-repair-ri", "roof-repair-ri", "roof-replacement-ri"]
  },
  {
    slug: "roof-repair-ri",
    kind: "service",
    serviceName: "Roof Repair",
    locationName: "Rhode Island",
    title: "Roof Repair RI",
    metaTitle: "Roof Repair in Rhode Island | D.R.F Builders RI",
    metaDescription:
      "D.R.F Builders RI provides roof repair across Rhode Island for leaks, storm damage, missing shingles, flashing repair, emergency leaks, and aging roofs.",
    eyebrow: "Rhode Island roof repair",
    h1: "Roof Repair in Rhode Island",
    intro:
      "D.R.F Builders RI provides roof repair for homeowners and businesses across Rhode Island, including leak repair, storm damage repair, flashing repair, shingle replacement, and emergency roof service.",
    servicesHeading: "Roof Repair Services in Rhode Island",
    sections: [
      {
        title: "Leak, Storm, and Shingle Repairs",
        copy:
          "We repair common Rhode Island roofing issues including missing shingles, active leaks, flashing problems, wind damage, and roof wear."
      },
      {
        title: "Clear Recommendations Before Bigger Work",
        copy:
          "Not every roof problem needs a replacement. D.R.F Builders RI explains whether a repair, maintenance visit, or replacement makes the most sense."
      }
    ],
    commonProblems: ["Roof leaks during heavy rain", "Missing, curling, or lifted shingles", "Storm damage from wind and debris", "Flashing leaks around vents and chimneys", "Water problems caused by clogged gutters"],
    whyChoose:
      "Rhode Island homeowners choose D.R.F Builders RI for local service, owner involvement, honest recommendations, clean job sites, and free roofing estimates.",
    faqs: [
      {
        question: "Does D.R.F Builders RI provide emergency roof repair?",
        answer: "Yes. D.R.F Builders RI provides emergency roof repair support for urgent leaks, storm damage, and sudden roof problems across Rhode Island."
      },
      {
        question: "Can a roof leak be repaired without replacing the whole roof?",
        answer: "Often, yes. The team can inspect the roof and explain whether a focused repair or a full roof replacement is the better choice."
      }
    ],
    related: ["roofing-company-cranston-ri", "roofing-company-providence-ri", "roof-repair-pawtucket-ri"]
  },
  {
    slug: "roof-replacement-ri",
    kind: "service",
    serviceName: "Roof Replacement",
    locationName: "Rhode Island",
    title: "Roof Replacement RI",
    metaTitle: "Roof Replacement in Rhode Island | D.R.F Builders RI",
    metaDescription:
      "D.R.F Builders RI provides roof replacement across Rhode Island for homes, multi-family properties, local businesses, and aging roof systems.",
    eyebrow: "Rhode Island roof replacement",
    h1: "Roof Replacement in Rhode Island",
    intro:
      "D.R.F Builders RI provides roof replacement for homeowners and businesses across Rhode Island when repairs are no longer enough to protect the property.",
    servicesHeading: "Roof Replacement Services in Rhode Island",
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
    commonProblems: ["Recurring roof leaks", "Aging shingles near the end of service life", "Storm-damaged roof sections", "Soft spots or water-damaged decking", "Repeated repair needs after heavy weather"],
    whyChoose:
      "Property owners choose D.R.F Builders RI for clear roof replacement guidance, Rhode Island roofing experience, clean work areas, and free estimates.",
    faqs: [
      {
        question: "How do I know if I need roof replacement?",
        answer: "Signs include recurring leaks, widespread shingle wear, storm damage, and ongoing repair problems. D.R.F Builders RI can inspect the roof and explain your options."
      },
      {
        question: "Does D.R.F Builders RI replace roofs on homes and businesses?",
        answer: "Yes. D.R.F Builders RI provides roof replacement for residential and commercial properties across Rhode Island."
      }
    ],
    related: ["roofing-company-cranston-ri", "roofing-company-warwick-ri", "residential-roofing-ri"]
  },
  {
    slug: "emergency-roof-repair-ri",
    kind: "service",
    serviceName: "Emergency Roof Repair",
    locationName: "Rhode Island",
    title: "Emergency Roof Repair RI",
    metaTitle: "Emergency Roof Repair in Rhode Island | D.R.F Builders RI",
    metaDescription:
      "D.R.F Builders RI provides emergency roof repair in Rhode Island for active leaks, storm damage, missing shingles, and urgent roof problems.",
    eyebrow: "Emergency roof repair",
    h1: "Emergency Roof Repair in Rhode Island",
    intro:
      "D.R.F Builders RI provides emergency roof repair for homeowners and businesses across Rhode Island, including active leak repair, storm damage repair, flashing repair, shingle replacement, and urgent roof service.",
    servicesHeading: "Emergency Roof Repair Services in Rhode Island",
    sections: [
      {
        title: "Urgent Roof Leak Response",
        copy:
          "When water is entering a home or business, fast communication matters. D.R.F Builders RI helps Rhode Island customers respond to sudden roof leaks and storm-related roof problems."
      },
      {
        title: "Storm Damage and Temporary Protection",
        copy:
          "Wind, rain, snow, and debris can damage shingles, flashing, and roof edges. Our team can inspect the problem and explain repair options."
      }
    ],
    commonProblems: ["Active roof leaks", "Storm-damaged shingles", "Water around vents or chimneys", "Wind-lifted shingles", "Roof problems discovered after heavy rain or snow"],
    whyChoose:
      "Rhode Island customers choose D.R.F Builders RI for responsive emergency communication, local owner involvement, practical repair recommendations, and free estimates.",
    faqs: [
      {
        question: "What should I do if my roof is leaking?",
        answer: "Protect belongings if safe, avoid unsafe roof access, and call D.R.F Builders RI so the roof issue can be reviewed and the next repair step can be discussed."
      },
      {
        question: "Do you help with storm damage roof repair?",
        answer: "Yes. D.R.F Builders RI helps Rhode Island customers with roof leaks, missing shingles, and storm damage repair needs."
      }
    ],
    related: ["roof-repair-ri", "roof-replacement-ri", "roofing-company-warwick-ri"]
  },
  {
    slug: "gutter-cleaning-roof-maintenance-ri",
    kind: "service",
    serviceName: "Gutter Cleaning and Roof Maintenance",
    locationName: "Rhode Island",
    title: "Gutter Cleaning and Roof Maintenance RI",
    metaTitle: "Gutter Cleaning & Roof Maintenance in Rhode Island | D.R.F Builders RI",
    metaDescription:
      "D.R.F Builders RI offers gutter cleaning and roof maintenance in Rhode Island to help prevent water damage, roof leaks, and seasonal roof issues.",
    eyebrow: "Roof maintenance",
    h1: "Gutter Cleaning and Roof Maintenance in Rhode Island",
    intro:
      "D.R.F Builders RI provides gutter cleaning and roof maintenance for homeowners and businesses across Rhode Island to help prevent leaks, drainage problems, and seasonal roof damage.",
    servicesHeading: "Gutter Cleaning and Roof Maintenance Services in Rhode Island",
    sections: [
      {
        title: "Prevent Water Problems Before They Spread",
        copy:
          "Clogged gutters, debris buildup, loose materials, and small roof issues can direct water where it does not belong. Maintenance helps reduce that risk."
      },
      {
        title: "Seasonal Help for Local Properties",
        copy:
          "D.R.F Builders RI offers maintenance support for homeowners and businesses preparing for heavy rain, leaves, snow, and ice."
      }
    ],
    commonProblems: ["Clogged gutters and downspouts", "Water backing up at roof edges", "Debris buildup after storms", "Small roof issues found during maintenance", "Seasonal preparation before rain, leaves, snow, and ice"],
    whyChoose:
      "Rhode Island property owners choose D.R.F Builders RI for practical maintenance, roof inspections, clean work areas, and straightforward local service.",
    faqs: [
      {
        question: "Why does gutter cleaning matter for a roof?",
        answer: "Clogged gutters can push water toward roof edges, siding, fascia, and foundations. Cleaning and maintenance help reduce preventable water problems."
      },
      {
        question: "Can maintenance help avoid roof repairs?",
        answer: "Maintenance can catch small issues earlier, remove debris, and help property owners plan repairs before problems spread."
      }
    ],
    related: ["roof-repair-ri", "roofing-company-cranston-ri", "roofing-company-east-providence-ri"]
  },
  {
    slug: "commercial-roofing-ri",
    kind: "service",
    serviceName: "Commercial Roofing",
    locationName: "Rhode Island",
    title: "Commercial Roofing RI",
    metaTitle: "Commercial Roofing in Rhode Island | D.R.F Builders RI",
    metaDescription:
      "D.R.F Builders RI provides commercial roofing services across Rhode Island for businesses, apartment buildings, offices, and local properties.",
    eyebrow: "Commercial roofing",
    h1: "Commercial Roofing in Rhode Island",
    intro:
      "D.R.F Builders RI provides commercial roofing for businesses and property owners across Rhode Island, including roof repair, replacement planning, maintenance, emergency roof service, and commercial flat roofing support where appropriate.",
    servicesHeading: "Commercial Roofing Services in Rhode Island",
    sections: [
      {
        title: "Roofing for Local Businesses",
        copy:
          "We help offices, small businesses, apartment buildings, and local commercial properties address roofing problems with minimal disruption."
      },
      {
        title: "Responsive Communication",
        copy:
          "Commercial roofing projects need clear scheduling and practical next steps. D.R.F Builders RI keeps communication straightforward."
      }
    ],
    commonProblems: ["Commercial roof leaks", "Storm damage on business properties", "Drainage problems and roof-edge issues", "Aging roof systems needing replacement planning", "Flat or low-slope roof concerns"],
    whyChoose:
      "Rhode Island businesses choose D.R.F Builders RI for responsive communication, practical scheduling, local owner involvement, and free commercial roofing estimates.",
    faqs: [
      {
        question: "Does D.R.F Builders RI provide commercial flat roofing?",
        answer: "D.R.F Builders RI can discuss commercial flat roofing and low-slope roofing needs and recommend the right next step based on the property."
      },
      {
        question: "Can you work around business hours?",
        answer: "D.R.F Builders RI works to communicate clearly about scheduling and minimize disruption whenever possible."
      }
    ],
    related: ["roofing-company-providence-ri", "roofing-company-warwick-ri", "roofing-company-east-providence-ri"]
  },
  {
    slug: "flat-roofing-ri",
    kind: "service",
    serviceName: "Flat Roofing",
    locationName: "Rhode Island",
    title: "Flat Roofing RI",
    metaTitle: "Flat Roofing in Rhode Island | D.R.F Builders RI",
    metaDescription:
      "D.R.F Builders RI can discuss flat roofing and low-slope commercial roofing needs across Rhode Island, including repair, inspection, and maintenance options.",
    eyebrow: "Flat roofing",
    h1: "Flat Roofing in Rhode Island",
    intro:
      "D.R.F Builders RI can discuss flat roofing and low-slope roofing needs for Rhode Island businesses and property owners, including roof repair, inspections, maintenance, emergency roof service, and commercial roofing support.",
    servicesHeading: "Flat Roofing Services in Rhode Island",
    sections: [
      {
        title: "Commercial Flat Roofing Support",
        copy:
          "Flat and low-slope roofs need careful attention to drainage, seams, roof edges, and signs of water intrusion. D.R.F Builders RI can review the issue and discuss the right next step."
      },
      {
        title: "Repair, Maintenance, and Inspection Guidance",
        copy:
          "For flat roofing concerns, the goal is to identify leaks, drainage problems, storm damage, and maintenance needs before they affect the building interior."
      }
    ],
    commonProblems: ["Ponding water", "Leaks around roof edges or penetrations", "Drainage problems", "Storm damage", "Commercial roof maintenance issues"],
    whyChoose:
      "Rhode Island property owners choose D.R.F Builders RI for straightforward communication, local service, practical roofing guidance, and free estimates.",
    faqs: [
      {
        question: "Does D.R.F Builders RI handle flat roofing?",
        answer: "D.R.F Builders RI can discuss flat roofing and low-slope commercial roofing needs and recommend appropriate repair, inspection, or maintenance next steps."
      },
      {
        question: "Is flat roofing only for commercial buildings?",
        answer: "Flat and low-slope roofs are common on commercial properties, but some residential structures may also have low-slope roof areas."
      }
    ],
    related: ["commercial-roofing-ri", "roof-repair-ri", "emergency-roof-repair-ri"]
  },
  {
    slug: "residential-roofing-ri",
    kind: "service",
    serviceName: "Residential Roofing",
    locationName: "Rhode Island",
    title: "Residential Roofing RI",
    metaTitle: "Residential Roofing in Rhode Island | D.R.F Builders RI",
    metaDescription:
      "D.R.F Builders RI provides residential roofing across Rhode Island, including roof repair, roof replacement, inspections, emergency roofing, and maintenance.",
    eyebrow: "Residential roofing",
    h1: "Residential Roofing in Rhode Island",
    intro:
      "D.R.F Builders RI provides residential roofing for Rhode Island homeowners, including leak repair, storm damage repair, shingle replacement, roof inspections, emergency roof service, and maintenance.",
    servicesHeading: "Residential Roofing Services in Rhode Island",
    sections: [
      {
        title: "Roofing for Rhode Island Homes",
        copy:
          "From Cranston and Providence to Warwick, Pawtucket, and East Providence, our team works on local homes with care and attention to detail."
      },
      {
        title: "A Local Owner, A Neighborly Standard",
        copy:
          "Danny Fusco built D.R.F Builders RI around honest communication, clean job sites, and service that feels local because it is local."
      }
    ],
    commonProblems: ["Leaking residential roofs", "Missing or worn shingles", "Storm damage and wind damage", "Flashing problems around chimneys and vents", "Gutter and maintenance issues affecting roof performance"],
    whyChoose:
      "Homeowners choose D.R.F Builders RI for local Rhode Island service, professional communication, clean job sites, owner involvement, and free roofing estimates.",
    faqs: [
      {
        question: "Does D.R.F Builders RI offer free residential roofing estimates?",
        answer: "Yes. Homeowners can request a free roofing estimate for repair, replacement, inspection, maintenance, or emergency roof service."
      },
      {
        question: "What areas does D.R.F Builders RI serve?",
        answer: "D.R.F Builders RI serves Cranston, Providence, Warwick, Bristol, Pawtucket, East Providence, and nearby Rhode Island communities."
      }
    ],
    related: ["roof-repair-ri", "roof-replacement-ri", "roofing-company-cranston-ri"]
  }
];

export const seoPages = [...cityPages, ...servicePages];

export function getSeoPage(slug: string) {
  return seoPages.find((page) => page.slug === slug);
}
