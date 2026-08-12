export const siteUrl = "https://www.drfbuildersri.com";

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
    metaTitle: "Roofing Company Cranston RI | Free Roofing Estimates",
    metaDescription:
      "Need roofing help in Cranston, RI? D.R.F Builders RI handles leaks, storm damage, roof replacement, inspections, and insurance claim support. Free estimates.",
    eyebrow: "Cranston roofing contractor",
    h1: "Roofing Services in Cranston, RI",
    intro:
      "D.R.F Builders RI provides roofing services for homeowners and businesses in Cranston, RI, including roof leak repair, storm damage repair, shingle replacement, roof inspections, emergency roof service, insurance claim repair support, and commercial roofing. Cranston homes can deal with older roof systems, tree cover, heavy rain, winter ice, and wind damage, so Danny looks at the full roof condition before recommending repair or replacement.",
    servicesHeading: "Roofing Services in Cranston",
    sections: [
      {
        title: "Cranston Roof Repair and Replacement",
        copy:
          "From small roof leaks to full roof replacements, D.R.F Builders RI serves Cranston properties with clear communication, clean job sites, and practical roofing recommendations. Roof issues in Cranston often show up as ceiling stains after heavy rain, missing shingles after wind, or water entering around chimneys, vents, and roof edges. Danny checks the source of the problem, explains whether a focused repair is enough, and helps homeowners understand when a roof has reached the point where replacement is the better long-term decision."
      },
      {
        title: "Local Service From a Rhode Island Owner",
        copy:
          "Danny Fusco grew up in Rhode Island and understands how local weather, winter storms, coastal moisture, and older New England homes can affect a roof. Cranston customers work with a local owner who is involved in the conversation and cares about leaving the property clean. That local approach matters when homeowners need a straightforward answer, a free estimate, or help documenting roof damage connected to an insurance claim."
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
    metaTitle: "Roofing Company Providence RI | Roof Repair & Leaks",
    metaDescription:
      "Providence roof leak or storm damage? D.R.F Builders RI provides roof repair, replacement, emergency service, and commercial roofing. Free estimates.",
    eyebrow: "Providence roofing contractor",
    h1: "Roofing Services in Providence, RI",
    intro:
      "D.R.F Builders RI provides roofing services for homeowners and businesses in Providence, RI, including leak repair, storm damage repair, flashing repair, shingle replacement, emergency roof service, roof replacement, and commercial roofing. Providence properties often include older homes, multi-family buildings, and small commercial spaces, so roofing recommendations need to account for roof access, drainage, flashing details, and how quickly water can spread inside the building.",
    servicesHeading: "Roofing Services in Providence",
    sections: [
      {
        title: "Roofing for Providence Homes and Buildings",
        copy:
          "Providence roofs face heavy rain, wind, snow, ice, and aging roof systems. D.R.F Builders RI helps identify the right repair or replacement path for single-family homes, multi-family properties, local businesses, and apartment buildings. A roof leak in Providence can come from worn shingles, failing flashing, roof penetrations, low-slope sections, or drainage problems, so the inspection looks beyond the first visible water stain."
      },
      {
        title: "Responsive Roof Leak Help",
        copy:
          "When a leak shows up around shingles, flashing, vents, or roof edges, our team can inspect the issue and explain the next steps clearly. If damage appears after a storm, Danny can also document visible roof conditions and prepare a repair estimate for the homeowner or property owner. The goal is to stop the water, protect the property, and avoid unnecessary work when a targeted repair can solve the issue."
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
    metaTitle: "Roofing Company Warwick RI | Roof Repair & Free Estimates",
    metaDescription:
      "Warwick, RI roofing help for leaks, missing shingles, storm damage, roof replacement, maintenance, and commercial properties. Call or text D.R.F Builders RI.",
    eyebrow: "Warwick roofing contractor",
    h1: "Roofing Services in Warwick, RI",
    intro:
      "D.R.F Builders RI provides roofing services for homeowners and businesses in Warwick, RI, including leak repair, storm damage repair, roof replacement, roof inspections, insurance claim repair support, and emergency roof service. Warwick roofs see wind off the bay, heavy rain, winter weather, and seasonal temperature swings that can expose weak shingles, flashing, roof edges, and ventilation problems.",
    servicesHeading: "Roofing Services in Warwick",
    sections: [
      {
        title: "Warwick Roof Repair and Replacement",
        copy:
          "Whether a roof needs targeted repairs or a full replacement, D.R.F Builders RI focuses on honest communication and durable roofing work. Warwick homeowners often call after wind lifts shingles, water appears near a ceiling, or an older roof starts needing repeated repairs. Danny looks at the age of the roof, the surrounding shingles, flashing, decking concerns, and storm damage before explaining whether repair, maintenance, or replacement makes the most sense."
      },
      {
        title: "Commercial and Residential Roofing",
        copy:
          "We support both residential roofing needs and commercial roofing projects for local Warwick properties. That can include roof leak repair for a home, replacement planning for an aging roof, or maintenance support for a local business or property owner. Clear scheduling and clean job sites matter, especially when work needs to happen around tenants, customers, parking, or daily business operations."
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
    metaTitle: "Roof Repair Pawtucket RI | Leaks, Shingles & Storm Damage",
    metaDescription:
      "Roof leak in Pawtucket, RI? D.R.F Builders RI repairs leaks, missing shingles, flashing issues, storm damage, and roof-edge problems. Free estimates.",
    eyebrow: "Pawtucket roof repair",
    h1: "Roof Repair in Pawtucket, RI",
    intro:
      "D.R.F Builders RI provides roof repair for homeowners and businesses in Pawtucket, RI, including leak repair, storm damage repair, flashing repair, shingle replacement, maintenance, and emergency roof service. Pawtucket properties often include older homes, multi-family buildings, and roofs that have been patched over time, so finding the true source of a leak matters before recommending a repair.",
    servicesHeading: "Roof Repair Services in Pawtucket",
    sections: [
      {
        title: "Pawtucket Roof Leak Repairs",
        copy:
          "Roof leaks can spread quickly through ceilings, insulation, and exterior trim. Our team helps locate the problem and recommend the right repair instead of guessing from the interior stain alone. Danny checks shingles, flashing, roof edges, chimneys, vents, valleys, and nearby drainage issues so the repair addresses the cause. If the damage is storm-related, D.R.F Builders RI can document visible roof conditions and prepare a repair estimate."
      },
      {
        title: "Maintenance for Older Roofs",
        copy:
          "Many Pawtucket properties benefit from inspections, cleaning, and timely maintenance before small roof issues become bigger repairs. Older shingles, clogged gutters, loose flashing, and debris near roof edges can all create leaks during heavy rain or snowmelt. A maintenance visit can help identify small repairs, replacement warning signs, and practical steps homeowners can take before the next storm."
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
    metaTitle: "Roofing Company Bristol RI | Roof Repair & Replacement",
    metaDescription:
      "Bristol, RI roofing contractor for roof repair, replacement, inspections, storm damage, emergency leaks, and maintenance. Call or text for a free estimate.",
    eyebrow: "Bristol roofing contractor",
    h1: "Roofing Services in Bristol, RI",
    intro:
      "D.R.F Builders RI provides roofing services for homeowners and businesses in Bristol, RI, including leak repair, storm damage repair, flashing repair, shingle replacement, roof inspections, emergency roof service, and roof replacement planning. Bristol roofs can face coastal moisture, wind-driven rain, winter freeze-thaw cycles, and seasonal debris, so local roofing experience matters when diagnosing leaks and roof wear.",
    servicesHeading: "Roofing Services in Bristol",
    sections: [
      {
        title: "Bristol Roof Repair and Replacement",
        copy:
          "Bristol roofs face Rhode Island rain, winter weather, wind, and coastal moisture. D.R.F Builders RI can inspect roof issues and explain repair, replacement, and maintenance options in plain language. A roof may need a simple shingle or flashing repair, but widespread wear, repeated leaks, soft decking, or storm damage may point toward a larger replacement conversation. Danny explains what he sees before asking a homeowner to make a decision."
      },
      {
        title: "Residential and Commercial Roofing Support",
        copy:
          "From homes to local businesses, D.R.F Builders RI helps Bristol property owners with practical roofing service and clear communication. Residential customers often need help stopping leaks or planning a replacement, while commercial property owners may need scheduling, access, and maintenance handled carefully. The work stays focused on protecting the property, keeping the site clean, and giving the owner a clear next step."
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
    metaTitle: "Roofing Company East Providence RI | Roof Repair & Leaks",
    metaDescription:
      "East Providence roofing help for leaks, storm damage, shingles, inspections, maintenance, commercial roofing, and emergency roof service. Free estimates.",
    eyebrow: "East Providence roofing contractor",
    h1: "Roofing Services in East Providence, RI",
    intro:
      "D.R.F Builders RI provides roofing services for homeowners and businesses in East Providence, RI, including leak repair, storm damage repair, shingle replacement, roof inspections, roof maintenance, commercial roofing, and emergency roof service. East Providence properties can face wind, rain, snow, freeze-thaw cycles, and moisture from nearby waterways, making good flashing, drainage, and roof-edge details important.",
    servicesHeading: "Roofing Services in East Providence",
    sections: [
      {
        title: "Roofing Built for Rhode Island Weather",
        copy:
          "East Providence roofs need protection from rain, wind, snow, freeze-thaw cycles, and seasonal debris. We help keep roofs ready for the next storm by checking shingles, flashing, roof edges, gutters, and leak-prone areas around vents and chimneys. If a roof is aging or has been repaired multiple times, Danny can explain whether another repair is reasonable or whether replacement planning is the smarter investment."
      },
      {
        title: "Straightforward Local Roofing Service",
        copy:
          "Customers work with a Rhode Island-based roofing company focused on clear estimates, clean job sites, and practical recommendations. D.R.F Builders RI helps homeowners, landlords, business owners, and property managers understand what is happening with the roof before work begins. That includes emergency roof leak help, routine repairs, maintenance, commercial roofing support, and insurance-related roof damage documentation when needed."
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
    slug: "roofing-services-ri",
    kind: "service",
    serviceName: "Roofing Services",
    locationName: "Rhode Island",
    title: "Roofing Services RI",
    metaTitle: "Rhode Island Roofing Services | Repair, Replacement & Claims",
    metaDescription:
      "D.R.F Builders RI provides Rhode Island roof repair, replacement, emergency roofing, inspections, commercial roofing, maintenance, and insurance claim support.",
    eyebrow: "Rhode Island roofing services",
    h1: "Roofing Services in Rhode Island",
    intro:
      "D.R.F Builders RI provides roofing services for homeowners and businesses across Rhode Island, including roof repair, roof replacement, emergency roof service, inspections, storm damage repair, commercial roofing, flat roofing guidance, and insurance repair support.",
    servicesHeading: "Roofing Services in Rhode Island",
    sections: [
      {
        title: "Roof Repair, Replacement, and Emergency Service",
        copy:
          "From active roof leaks to full roof replacement, D.R.F Builders RI helps Rhode Island property owners understand what is happening before work begins. A leak in Cranston, Providence, Warwick, or Bristol may come from worn shingles, flashing, storm damage, roof penetrations, or drainage problems, so the first step is looking at the roof carefully and explaining the likely source. When a repair is enough, the recommendation stays focused on the repair. When the roof is aging or damage is widespread, Danny explains why replacement may be the better long-term path."
      },
      {
        title: "Residential and Commercial Roofing",
        copy:
          "D.R.F Builders RI works with Rhode Island homeowners, businesses, landlords, and property owners who need practical roofing support. Residential work often means helping a homeowner protect a house, stop a leak, or plan a replacement without feeling rushed into the wrong decision. Commercial work may involve scheduling, access, tenant communication, and keeping disruption as low as possible. In both cases, the goal is straightforward communication, clean work areas, and roofing solutions that make sense for the property."
      },
      {
        title: "Rhode Island Roofing Challenges",
        copy:
          "Rhode Island roofs take a beating from New England weather. Ice dams, heavy snow loads, wind-driven rain, coastal moisture, and summer heat cycles can all weaken shingles, flashing, roof edges, and ventilation over time. Local experience matters because roof problems here are often seasonal and can look different after winter freeze-thaw cycles than they do after a summer storm. Homeowners should look for a roofing contractor who explains the issue clearly, checks the surrounding roof system, and gives a practical repair or replacement recommendation."
      }
    ],
    commonProblems: ["Roof leaks", "Storm damage", "Missing shingles", "Flashing problems", "Roof maintenance needs", "Insurance-related roof repairs"],
    whyChoose:
      "Rhode Island homeowners and businesses choose D.R.F Builders RI for local service, owner involvement, free estimates, clean job sites, and professional communication.",
    faqs: [
      {
        question: "What roofing services does D.R.F Builders RI offer?",
        answer:
          "D.R.F Builders RI offers roof repair, roof replacement, emergency roof repair, inspections, maintenance, commercial roofing, residential roofing, and insurance repair support."
      },
      {
        question: "What areas does D.R.F Builders RI serve?",
        answer:
          "D.R.F Builders RI serves Cranston, Providence, Warwick, Bristol, Pawtucket, East Providence, and nearby Rhode Island communities."
      }
    ],
    related: ["roof-repair-ri", "roof-replacement-ri", "emergency-roof-repair-ri"]
  },
  {
    slug: "roof-insurance-claim-repair-support-ri",
    kind: "service",
    serviceName: "Roof Insurance Claim Repair Support",
    locationName: "Rhode Island",
    title: "Roof Insurance Claim Repair Support RI",
    metaTitle: "Roof Insurance Claim Help RI | Storm Damage Repair Support",
    metaDescription:
      "Roof storm damage claim in Rhode Island? D.R.F Builders RI helps document damage, prepare repair estimates, meet adjusters, and complete roofing repairs.",
    eyebrow: "Insurance roof repair support",
    h1: "Roof Insurance Claim Repair Support in Rhode Island",
    intro:
      "D.R.F Builders RI provides roof insurance claim repair support for Rhode Island homeowners and businesses, including storm damage documentation, leak repair estimates, repair scope preparation, adjuster meeting support, emergency roof service, and approved roof repair or replacement work. Danny can help homeowners understand the roofing side of the process by documenting visible damage, explaining what needs repair, and being available for technical roofing questions during the carrier inspection.",
    servicesHeading: "Roof Insurance Claim Repair Support Services in Rhode Island",
    sections: [
      {
        title: "Roof Damage Documentation and Repair Estimates",
        copy:
          "When a roof is damaged by wind, rain, falling debris, or a sudden leak, D.R.F Builders RI can inspect the roof, document visible roofing damage, and prepare a clear repair or replacement estimate for the work needed. Photos, measurements, material details, roof condition notes, and a practical repair scope can help keep the roofing conversation organized. Danny does not decide coverage, but he can explain the roofing damage, what needs to be repaired, and what the work may involve. That gives the homeowner a clearer picture before speaking with the insurance carrier about the claim."
      },
      {
        title: "Technical Roofing Support During the Claim Process",
        copy:
          "Our team can be present when the insurance adjuster inspects the roof and can answer technical questions about roof damage, materials, measurements, and repair scope. This can be especially helpful after Rhode Island wind, rain, or storm events where missing shingles, lifted shingles, flashing problems, and interior leaks all need to be reviewed. D.R.F Builders RI keeps the role focused on roofing facts: what is damaged, what work is needed, and what repairs or replacement items should be considered. Homeowners should still handle policy, deductible, and coverage questions directly with the carrier or a licensed public adjuster."
      },
      {
        title: "Repair Work After the Claim Path Is Clear",
        copy:
          "Once the homeowner is ready to move forward, D.R.F Builders RI can complete the approved roof repair or replacement work. That may include emergency leak repair, shingle replacement, flashing repair, decking repairs when needed, or a full roof replacement when the roof condition calls for it. Danny keeps communication straightforward so the homeowner understands scheduling, materials, cleanup, and what to expect while the work is being completed."
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
    metaTitle: "Roof Repair RI | Leaks, Storm Damage & Missing Shingles",
    metaDescription:
      "Need roof repair in RI? D.R.F Builders RI fixes leaks, storm damage, missing shingles, flashing problems, and emergency roof issues. Free estimates.",
    eyebrow: "Rhode Island roof repair",
    h1: "Roof Repair in Rhode Island",
    intro:
      "D.R.F Builders RI provides roof repair for homeowners and businesses across Rhode Island, including leak repair, storm damage repair, flashing repair, shingle replacement, and emergency roof service.",
    servicesHeading: "Roof Repair Services in Rhode Island",
    sections: [
      {
        title: "Leak, Storm, and Shingle Repairs",
        copy:
          "We repair common Rhode Island roofing issues including missing shingles, active leaks, flashing problems, wind damage, and roof wear. When diagnosing a leak, D.R.F Builders RI looks at the roof surface, roof penetrations, chimney and wall flashing, valleys, gutters, and nearby interior staining when available. Water can travel before it shows up inside, so the visible ceiling spot is not always directly under the source. Danny explains what he finds and focuses the repair on the area causing the problem whenever a targeted repair is the right choice."
      },
      {
        title: "Clear Recommendations Before Bigger Work",
        copy:
          "Not every roof problem needs a replacement. D.R.F Builders RI explains whether a repair, maintenance visit, or replacement makes the most sense based on the roof age, the amount of damage, the condition of surrounding shingles, and whether leaks keep coming back. Storm damage repair in Rhode Island can include replacing lifted or missing shingles, sealing or replacing flashing, checking roof edges, and documenting visible damage when insurance repair support is needed. While waiting for help, homeowners should protect belongings, place a bucket under active drips, avoid climbing onto a wet or icy roof, and call quickly if water is spreading. The goal is to stop the immediate problem and give a clear next step without overselling work the roof does not need."
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
    metaTitle: "Roof Replacement RI | Local Roofing Contractor",
    metaDescription:
      "D.R.F Builders RI provides roof replacement across Rhode Island for aging, leaking, storm-damaged, and worn roof systems. Call or text for a free estimate.",
    eyebrow: "Rhode Island roof replacement",
    h1: "Roof Replacement in Rhode Island",
    intro:
      "D.R.F Builders RI provides roof replacement for homeowners and businesses across Rhode Island when repairs are no longer enough to protect the property.",
    servicesHeading: "Roof Replacement Services in Rhode Island",
    sections: [
      {
        title: "Replacement Roofing for RI Properties",
        copy:
          "A properly installed roof protects the structure, improves curb appeal, and helps prevent recurring leaks from an aging roof system. D.R.F Builders RI looks at the age of the roof, shingle condition, soft spots, decking concerns, flashing, ventilation, and signs of repeated water entry before recommending replacement. Many Rhode Island homes deal with winter freeze-thaw cycles, wind-driven rain, heavy snow, and summer heat that can wear down shingles and roof components over time. Danny explains whether the roof is simply worn, whether storm damage is part of the problem, and what should be addressed before new roofing materials go on."
      },
      {
        title: "Built for Rain, Snow, Wind, and Ice",
        copy:
          "Rhode Island roofs need materials and workmanship that can handle winter weather, spring rain, coastal moisture, and seasonal temperature swings. A replacement project may include removing old roofing, inspecting roof decking, replacing damaged wood, improving flashing details, and checking ventilation so the new roof can perform properly. D.R.F Builders RI can explain material options, shingle choices, underlayment, ice and water protection, and the difference between a clean tear-off and situations where an overlay is not the right call. The goal is a roof replacement that is built for New England weather, not just a quick cosmetic cover-up."
      },
      {
        title: "What to Expect During Roof Replacement",
        copy:
          "Most roof replacement conversations start with an inspection and a clear estimate, then move into scheduling, materials, and preparation. Homeowners want to know how long the project will take, how the property will be protected, and what cleanup looks like after the work is done. D.R.F Builders RI keeps the process straightforward by explaining access, debris handling, nail cleanup, driveway considerations, and what the homeowner should expect while the crew is working. Project timing depends on roof size, weather, material availability, decking repairs, and how much detail work is involved."
      },
      {
        title: "Cost Factors and Warranty Questions",
        copy:
          "Roof replacement cost depends on roof size, slope, layers being removed, decking condition, material selection, flashing details, ventilation needs, disposal, and whether storm or insurance-related repair documentation is involved. A lower quote is not always better if it skips roof decking issues, ventilation concerns, or cleanup expectations. D.R.F Builders RI walks through the estimate so homeowners understand what is included before making a decision. Warranty details can vary by material and installation scope, so Danny can explain what applies to the specific roof system being discussed."
      }
    ],
    commonProblems: ["Recurring roof leaks", "Aging shingles near the end of service life", "Storm-damaged roof sections", "Soft spots or water-damaged decking", "Repeated repair needs after heavy weather"],
    whyChoose:
      "Property owners choose D.R.F Builders RI for clear roof replacement guidance, Rhode Island roofing experience, clean work areas, and free estimates.",
    faqs: [
      {
        question: "How do I know if I need roof replacement?",
        answer:
          "Signs include recurring leaks, widespread shingle wear, missing or curling shingles, storm damage, soft decking, age-related failure, and ongoing repair problems. D.R.F Builders RI can inspect the roof, check the surrounding roof system, and explain whether repair or replacement makes more sense."
      },
      {
        question: "Does D.R.F Builders RI replace roofs on homes and businesses?",
        answer: "Yes. D.R.F Builders RI provides roof replacement for residential and commercial properties across Rhode Island."
      },
      {
        question: "Do you inspect roof decking during replacement?",
        answer:
          "Yes. Decking condition matters because new shingles need a solid surface underneath. If damaged or soft decking is found, Danny can explain the issue and the repair needed before the new roofing system is completed."
      },
      {
        question: "Is tear-off better than roofing over old shingles?",
        answer:
          "A tear-off is often the better choice because it allows the roof deck, flashing, and problem areas to be inspected. Roofing over old shingles can hide damage and may not be appropriate depending on the roof condition, number of layers, and local code requirements."
      },
      {
        question: "How long does a roof replacement take?",
        answer:
          "Timing depends on roof size, slope, weather, material availability, and whether decking repairs are needed. Many straightforward residential replacements can move quickly once scheduled, but D.R.F Builders RI will explain the expected timeline for the specific property."
      },
      {
        question: "What affects the cost of roof replacement?",
        answer:
          "Cost factors include roof size, pitch, tear-off needs, number of layers, decking condition, shingle or material choice, flashing work, ventilation, disposal, access, and cleanup. A detailed estimate helps homeowners compare the actual scope of work, not just the bottom-line price."
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
    metaTitle: "Emergency Roof Repair RI | Active Leaks & Storm Damage",
    metaDescription:
      "Active roof leak in Rhode Island? Call or text D.R.F Builders RI for emergency roof repair, tarping when safe, storm damage help, and free estimates.",
    eyebrow: "Emergency roof repair",
    h1: "Emergency Roof Repair in Rhode Island",
    intro:
      "D.R.F Builders RI provides emergency roof repair for homeowners and businesses across Rhode Island, including active leak repair, storm damage repair, temporary protection, flashing repair, shingle replacement, and urgent roof service.",
    servicesHeading: "Emergency Roof Repair Services in Rhode Island",
    sections: [
      {
        title: "Urgent Roof Leak Response",
        copy:
          "When water is entering a home or business, fast communication matters. D.R.F Builders RI helps Rhode Island customers respond to sudden roof leaks, storm-related roof problems, missing shingles, and water around vents, chimneys, skylights, or roof edges. If it is safe, move belongings away from the leak, place a bucket under active drips, and avoid touching wet ceilings or electrical fixtures. Do not climb onto a wet, icy, or storm-damaged roof. Call or text 401-837-3779 and, if possible, send photos of the leak, the ceiling stain, the outside roof area, and any missing shingles so Danny can understand the situation before arriving."
      },
      {
        title: "Storm Damage and Temporary Protection",
        copy:
          "Wind, rain, snow, and debris can damage shingles, flashing, ridge areas, vents, gutters, and roof edges. An emergency roof repair may involve stopping the immediate leak, replacing blown-off shingles, sealing a flashing issue, documenting visible storm damage, or installing temporary protection such as tarping when conditions allow. Some repairs can be completed quickly, while others need a safer weather window or a larger follow-up repair. D.R.F Builders RI explains what can be handled right away, what should wait until the roof is safe to work on, and whether the damage points toward a repair, insurance-related documentation, or a larger replacement conversation."
      }
    ],
    commonProblems: ["Active roof leaks", "Storm-damaged shingles", "Water around vents or chimneys", "Wind-lifted shingles", "Roof problems discovered after heavy rain or snow"],
    whyChoose:
      "Rhode Island customers choose D.R.F Builders RI for responsive emergency communication, local owner involvement, practical repair recommendations, and free estimates.",
    faqs: [
      {
        question: "What should I do if my roof is leaking?",
        answer:
          "Protect belongings if safe, place a bucket under active dripping, avoid rooms with wet electrical fixtures, and do not climb onto the roof. Call or text D.R.F Builders RI at 401-837-3779 and send photos of the leak, ceiling stain, and outside roof area if you can do so safely."
      },
      {
        question: "Do you help with storm damage roof repair?",
        answer:
          "Yes. D.R.F Builders RI helps Rhode Island customers with roof leaks, missing shingles, lifted shingles, flashing damage, wind damage, and storm-related roof repair needs."
      },
      {
        question: "Can D.R.F Builders RI tarp a roof during an emergency?",
        answer:
          "When weather and roof conditions allow, temporary protection such as tarping may be an option to help limit water entry until permanent repairs can be completed. Safety comes first, especially during active storms, high wind, ice, or unsafe roof conditions."
      },
      {
        question: "Can I text photos before someone comes out?",
        answer:
          "Yes. Photos can help Danny understand the problem faster. Helpful photos include the ceiling stain or active leak, the room affected, any missing shingles visible from the ground, and the general roof area where the problem appears to be coming from."
      },
      {
        question: "What counts as an emergency roof repair?",
        answer:
          "Emergency roof repair usually means active water entering the property, storm damage that leaves the roof exposed, missing shingles after wind, water near electrical areas, or roof damage that could get worse quickly if it is not reviewed."
      },
      {
        question: "How fast can someone respond?",
        answer:
          "Response timing depends on weather, call volume, roof safety, and location, but D.R.F Builders RI prioritizes urgent leaks and storm-related roof problems. Calling or texting with photos is the fastest way to start the conversation."
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
    metaTitle: "Gutter Cleaning & Roof Maintenance RI | D.R.F Builders",
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
          "Clogged gutters, debris buildup, loose materials, and small roof issues can direct water where it does not belong. Maintenance helps reduce that risk by keeping roof edges, gutters, downspouts, valleys, and drainage areas clear enough to move water away from the home. In Rhode Island, fall leaves, winter ice, spring rain, and wind-blown debris can all create roof-edge problems if gutters stay clogged too long. A maintenance visit can also reveal missing shingles, loose flashing, sealant issues, and early warning signs before they become interior leaks."
      },
      {
        title: "Seasonal Help for Local Properties",
        copy:
          "D.R.F Builders RI offers maintenance support for homeowners and businesses preparing for heavy rain, leaves, snow, and ice. Seasonal maintenance is especially useful before winter weather and after heavy storms, when debris and drainage problems can put extra stress on the roof. Danny can explain whether the roof simply needs cleaning, whether a small repair should be handled, or whether a larger roof issue deserves closer inspection. The goal is prevention, not turning every maintenance call into a major project."
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
    metaTitle: "Commercial Roofing RI | Roof Repair, Leaks & Maintenance",
    metaDescription:
      "Commercial roofing in RI for roof leaks, repairs, maintenance, storm damage, replacement planning, and low-slope roof concerns. Free estimates.",
    eyebrow: "Commercial roofing",
    h1: "Commercial Roofing in Rhode Island",
    intro:
      "D.R.F Builders RI provides commercial roofing for businesses and property owners across Rhode Island, including roof repair, replacement planning, maintenance, emergency roof service, insurance-related roof repair documentation, and commercial flat roofing support where appropriate. Commercial roofing work often has to account for tenants, customers, equipment, roof access, scheduling, drainage, and keeping disruption as low as possible.",
    servicesHeading: "Commercial Roofing Services in Rhode Island",
    sections: [
      {
        title: "Roofing for Local Businesses",
        copy:
          "We help offices, small businesses, apartment buildings, and local commercial properties address roofing problems with minimal disruption. Commercial roof issues can show up as ceiling leaks, stained tiles, water around vents, drainage problems, roof-edge damage, or recurring leaks after storms. D.R.F Builders RI can inspect the problem, explain whether a repair, maintenance visit, or replacement plan makes sense, and help property owners prioritize the work. For storm-related damage, Danny can also document visible roof conditions and prepare a repair estimate."
      },
      {
        title: "Responsive Communication",
        copy:
          "Commercial roofing projects need clear scheduling and practical next steps. D.R.F Builders RI keeps communication straightforward so owners and managers know what is happening, when work can be done, and what areas may need access. That matters for restaurants, offices, retail spaces, apartment buildings, and local commercial properties where leaks can disrupt daily operations. The goal is to protect the building while keeping the process manageable for the people using it."
      },
      {
        title: "Flat and Low-Slope Roof Considerations",
        copy:
          "Some commercial properties have flat or low-slope roof areas that need careful attention to drainage, seams, penetrations, roof edges, and ponding water. D.R.F Builders RI can review those conditions and explain practical next steps without overstating capabilities or pushing a system that is not appropriate. If a specialized flat roofing solution is needed, Danny can help identify what should be evaluated before the owner commits to a repair or larger project."
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
    metaTitle: "Residential Roofing RI | Roof Repair & Replacement",
    metaDescription:
      "Rhode Island residential roofing for leaks, storm damage, missing shingles, inspections, roof replacement, emergency service, and maintenance. Free estimates.",
    eyebrow: "Residential roofing",
    h1: "Residential Roofing in Rhode Island",
    intro:
      "D.R.F Builders RI provides residential roofing for Rhode Island homeowners, including leak repair, storm damage repair, shingle replacement, roof inspections, emergency roof service, roof replacement, maintenance, and insurance-related roof repair support. Danny works with homeowners who need a clear explanation of what is happening with the roof and what should happen next.",
    servicesHeading: "Residential Roofing Services in Rhode Island",
    sections: [
      {
        title: "Roofing for Rhode Island Homes",
        copy:
          "From Cranston and Providence to Warwick, Pawtucket, Bristol, and East Providence, our team works on local homes with care and attention to detail. Residential roofing problems often begin with a stain on the ceiling, a missing shingle, a flashing leak, or water backing up near roof edges and gutters. D.R.F Builders RI checks the roof condition, the likely source of water entry, and the surrounding materials before recommending repair or replacement. Homeowners get a practical explanation instead of a rushed sales pitch."
      },
      {
        title: "A Local Owner, A Neighborly Standard",
        copy:
          "Danny Fusco built D.R.F Builders RI around honest communication, clean job sites, and service that feels local because it is local. Rhode Island homeowners want someone who answers, shows up, explains the work, and respects the property. That owner-led approach helps with small roof repairs, emergency leaks, roof replacement planning, and insurance-related roof damage questions. The job is not just to put materials on a roof; it is to help the homeowner feel informed and protected."
      },
      {
        title: "Repair, Replacement, and Maintenance Guidance",
        copy:
          "A residential roof does not always need the biggest possible project. Sometimes a shingle repair, flashing repair, gutter cleaning, or maintenance visit is the right answer. Other times, roof age, repeated leaks, widespread shingle wear, soft decking, or storm damage make replacement the better long-term choice. D.R.F Builders RI walks homeowners through those factors so the estimate matches the actual condition of the roof."
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
