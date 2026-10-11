export interface Leader {
  name: string;
  /** e.g. "Founder" or "Co-Founder" */
  role: string;
  /** One paragraph per entry */
  bio: string[];
  /** Path inside /public, e.g. "/images/founder.jpg" */
  image: string;
  imageAlt: string;
  /** Optional first-person quote */
  quote?: string;
  linkedin?: string;
  /** Short label/value lines shown under the bio */
  facts?: { label: string; value: string }[];
}

/**
 * Founder and co-founder. Leave the array empty and the section is not rendered.
 * Add entries (founder first) once names, bios and photos are confirmed.
 */
export const LEADERS: Leader[] = [
  {
    name: "Nisar Shah",
    role: "Co-Founder",
    bio: [
      "Nisar Shah is a co-founder of Mashaal Group. The group as it stands today exists because of him.",
      "The foundation he helped lay now supports four independent businesses: Mashaal Petroleum, Mashwani Shipping L.L.C., Mashaal Foods and Mashaal Rent A Car, working across Pakistan and the United Arab Emirates.",
      "The group continues to build on that foundation, with reliability, integrity and a long-term view guiding every business it holds.",
    ],
    image: "/images/founder-nisar-shah.webp",
    imageAlt: "Portrait of Nisar Shah, co-founder of Mashaal Group",
    facts: [{ label: "Contribution", value: "The origin of Mashaal Group" }],
  },
  {
    name: "Muhammad Asim Khan",
    role: "Founder and Owner",
    bio: [
      "Muhammad Asim Khan is a founder and the owner of Mashaal Group. He now leads the group and oversees all of its businesses.",
      "Those businesses cover energy forecourts under Mashaal Petroleum, international freight through Mashwani Shipping L.L.C., food supply through Mashaal Foods, and fleet leasing and executive mobility through Mashaal Rent A Car.",
      "Each business is run day to day by its own specialist team. Muhammad Asim Khan provides the oversight that keeps them aligned, so the group's standards of integrity and reliability apply across all of them.",
    ],
    image: "/images/founder-asim-khan.webp",
    imageAlt: "Portrait of Muhammad Asim Khan, founder and owner of Mashaal Group",
    facts: [
      { label: "Position", value: "Owner" },
      { label: "Responsibility", value: "Leads the group and oversees all four businesses" },
    ],
  },
];
