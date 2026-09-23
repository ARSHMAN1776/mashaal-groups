export interface BusinessVertical {
  id: string;
  number: string;
  name: string;
  category: string;
  status: "Active" | "Coming Soon";
  tagline: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  slug: string;
  externalUrl?: string;
  highlights: string[];
  keyFacts: { label: string; value: string }[];
  locations?: string[];
  services?: string[];
  contactInfo?: {
    address?: string;
    phone?: string;
    email?: string;
  };
}

export const BUSINESSES: BusinessVertical[] = [
  {
    id: "petroleum",
    number: "01",
    name: "MASHAAL PETROLEUM",
    category: "Energy & Fuel Forecourts",
    status: "Active",
    tagline: "Two iconic forecourts. One uncompromising standard of fuel integrity.",
    shortDescription:
      "Operating official Total PARCO and Pakistan State Oil (PSO) forecourts across Punjab, delivering 100% refinery-sealed fuels, certified digital calibration, and 24/7 highway hospitality.",
    longDescription:
      "Mashaal Petroleum is an established fuel forecourt operator serving private motorists, commercial transit drivers, and industrial logistics fleets across Punjab, Pakistan. With authorized franchises under Pakistan's leading energy corporations—Total PARCO and Pakistan State Oil (PSO)—every forecourt adheres to strict zero-tolerance calibration, unadulterated terminal supply, and round-the-clock motorist amenities.",
    image: "/images/mashaal-petroleum.jpg",
    slug: "mashaal-petroleum",
    externalUrl: "https://mashaal-petroleum.vercel.app/",
    highlights: [
      "100% Refinery-Sealed Direct Terminals",
      "0.0% Volumetric Tolerance (Calibrated Digital Dispensers)",
      "Continuous 24/7/365 Operation with Forecourt Marts & Prayer Facilities",
      "Authorized Total PARCO & PSO Franchises"
    ],
    keyFacts: [
      { label: "Active Forecourts", value: "2 Flagship Sites" },
      { label: "Fuel Quality", value: "Euro 5 & RON 97" },
      { label: "Operating Standard", value: "100% Calibrated" },
      { label: "Service Continuity", value: "24/7 Year-Round" }
    ],
    locations: [
      "Total PARCO Station — Khanpur Road, District Rahim Yar Khan, Punjab, Pakistan",
      "Pakistan State Oil (PSO) Station — Raiwind Road, Raiwind, Lahore, Punjab, Pakistan"
    ],
    services: [
      "Euro-5 Diesel & High-Octane 97 RON Dispensation",
      "Routine Volumetric Calibration (Physical Checks on Request)",
      "24/7 Forecourt Convenience: M-Mart & Shop Stop",
      "Executive Restrooms & Dignified Prayer Halls",
      "Fleet Card Services & Cashless PSO Card Processing",
      "Rapid Vehicle Wash & Tire Care Services"
    ],
    contactInfo: {
      address: "Khanpur Road, Rahim Yar Khan & Raiwind Road, Lahore, Punjab, Pakistan",
      phone: "Inquiries via Forecourt Management Desk",
      email: "contact@mashaalpetroleum.pk"
    }
  },
  {
    id: "foods",
    number: "02",
    name: "MASHAAL FOODS",
    category: "Food & Consumer Products",
    status: "Coming Soon",
    tagline: "Expanding the group into food and consumer businesses.",
    shortDescription:
      "An upcoming corporate vertical dedicated to consumer staples, premium food products, and disciplined supply-chain integrity currently in development.",
    longDescription:
      "Mashaal Foods represents the group's planned expansion into essential consumer sectors. Leveraging the holding group's supply-chain infrastructure and ethical governance principles, this vertical is being structured to address emerging market food demand with uncompromised quality standards.",
    image: "/images/mashaal-foods.jpg",
    slug: "mashaal-foods",
    highlights: [
      "Upcoming Corporate Vertical",
      "Focus on Essential Food & Consumer Commodities",
      "Disciplined Cold-Chain & Quality Governance",
      "Synergized with Group Logistics Capabilities"
    ],
    keyFacts: [
      { label: "Vertical Status", value: "In Development" },
      { label: "Sector", value: "Food & FMCG" },
      { label: "Positioning", value: "Expanding the Group" },
      { label: "Holding Synergy", value: "Logistics Integration" }
    ]
  },
  {
    id: "rentacar",
    number: "03",
    name: "MASHAAL RENT A CAR",
    category: "Mobility & Transportation",
    status: "Coming Soon",
    tagline: "An upcoming mobility and transportation vertical.",
    shortDescription:
      "A forthcoming mobility division being engineered to provide corporate fleet solutions, executive transit, and structured transport services.",
    longDescription:
      "Mashaal Rent A Car is an upcoming mobility vertical within the Mashaal Group portfolio. Designed to provide high-reliability vehicle solutions for commercial clients and individual motorists, the platform is currently undergoing strategic fleet architecture and operational planning.",
    image: "/images/mashaal-rent-a-car.jpg",
    slug: "mashaal-rent-a-car",
    highlights: [
      "Upcoming Corporate Vertical",
      "Corporate & Commercial Fleet Solutions",
      "Synergy with Group Energy & Forecourt Infrastructure",
      "Focus on Reliability & Modern Mobility"
    ],
    keyFacts: [
      { label: "Vertical Status", value: "In Development" },
      { label: "Sector", value: "Mobility & Fleet" },
      { label: "Positioning", value: "Upcoming Vertical" },
      { label: "Holding Synergy", value: "Forecourt Network" }
    ]
  },
  {
    id: "shipping",
    number: "04",
    name: "MASHWANI SHIPPING L.L.C.",
    category: "Global Logistics & Freight Forwarding",
    status: "Active",
    tagline: "We carry trust across global maritime, overland, and air corridors.",
    shortDescription:
      "Dubai-based NVOCC and international logistics specialist established in 2017, providing multimodal freight forwarding, GCC overland transport, and specialized Afghan transit corridors.",
    longDescription:
      "Established in Dubai, United Arab Emirates in 2017, Mashwani Shipping L.L.C. operates as an authorized NVOCC agent and international transport logistics partner. Connecting global trade corridors across Pakistan, the Middle East (GCC), India, and worldwide destinations, the company provides direct carrier service contracts, cross-stuffing, container trading, and specialized customs clearance.",
    image: "/images/mashwani-shipping.jpg",
    slug: "mashwani-shipping",
    externalUrl: "https://www.mashwanis.com/",
    highlights: [
      "Established 2017 in Dubai, United Arab Emirates",
      "Authorized NVOCC Agent with Direct Carrier Contracts",
      "Specialized Afghan Transit Trade Specialist",
      "Multimodal: Air Freight, Sea Freight (FCL/LCL), Land Transport"
    ],
    keyFacts: [
      { label: "Headquarters", value: "Dubai, UAE" },
      { label: "Founded", value: "2017" },
      { label: "Key Corridors", value: "GCC • Pakistan • India" },
      { label: "Core Expertise", value: "NVOCC & Transit Trade" }
    ],
    locations: [
      "Corporate Office: Office #507, 5th Floor, Abraj Al Mamzar Building, Al Mamzar, Dubai, UAE",
      "Operating Logistics Networks: UAE, GCC, Pakistan, Afghanistan, and India"
    ],
    services: [
      "Sea Freight: FCL, LCL, ISO Tank & Dry Containers, Breakbulk & Ro/Ro",
      "Air Freight: Express Delivery, Regular Scheduled Cargo, Air Charters & Projects",
      "Overland Transport: Full Trailer Loads across GCC & Levant Countries",
      "Afghan Transit Cargo: Dedicated Trailers, Containerized & Heavy Transport",
      "Warehousing & Cross-Stuffing: Inventory Management & Container Trading",
      "EDI Customs Clearance: UAE Inbound/Outbound Formalities & Local Door Delivery"
    ],
    contactInfo: {
      address: "Office #507, 5th Floor, Abraj Al Mamzar Building, P.O. Box 42596, Al Mamzar, Dubai, 94507 – U.A.E.",
      phone: "+971-4-3239360 / +971 50 816 8622",
      email: "info@mashwanis.com"
    }
  }
];

export const GROUP_STATS = [
  { label: "Business Verticals", value: "04", subtitle: "Energy, Logistics, Food, Mobility" },
  { label: "Regional Hubs", value: "02", subtitle: "Dubai (UAE) & Punjab (Pakistan)" },
  { label: "Operating Forecourts", value: "02", subtitle: "Total PARCO & PSO Franchises" },
  { label: "Logistics Established", value: "2017", subtitle: "Dubai NVOCC Platform" }
];

export const GROUP_PHILOSOPHY = [
  {
    title: "OPERATIONAL INTEGRITY",
    desc: "We build businesses on physical realities rather than inflated claims. From calibrated fuel metering to documented freight manifests, reliability is our fundamental currency."
  },
  {
    title: "AUTONOMOUS EXCELLENCE",
    desc: "Each subsidiary operates with specialized industry leadership and technical discipline, supported by parent-level capital stability and governance oversight."
  },
  {
    title: "PATIENT CAPITAL STEWARDSHIP",
    desc: "We focus on businesses that serve essential human and commercial needs—energy distribution, international trade corridors, nourishment, and transportation."
  }
];
