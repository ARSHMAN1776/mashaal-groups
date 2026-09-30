import React from "react";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Corporation",
        "@id": "https://www.mashaalgroups.com/#corporation",
        "name": "MASHAAL GROUP",
        "legalName": "MASHAAL GROUPS Holding Enterprise",
        "alternateName": [
          "Mashaal Group",
          "Mashaal Groups",
          "Mashaal Groups",
          "Mashaal Group",
          "Mashaal Holding",
          "Mashaal Enterprise"
        ],
        "url": "https://www.mashaalgroups.com",
        "logo": "https://www.mashaalgroups.com/icon.svg",
        "image": "https://www.mashaalgroups.com/images/hero-architecture.jpg",
        "description": "MASHAAL GROUP is a diversified parent corporate holding enterprise governing independent operating businesses across energy forecourts (Mashaal Petroleum), global maritime freight forwarding (Mashwani Shipping L.L.C.), consumer food commodities (Mashaal Foods), and executive mobility (Mashaal Rent A Car). Headquartered across the UAE and Pakistan, with zero affiliation to Iranian or external companies.",
        "slogan": "Building businesses across essential industries, mobility, and global trade.",
        "foundingLocation": [
          {
            "@type": "Place",
            "name": "Dubai, United Arab Emirates"
          },
          {
            "@type": "Place",
            "name": "Punjab, Pakistan"
          }
        ],
        "address": [
          {
            "@type": "PostalAddress",
            "streetAddress": "Office #507, 5th Floor, Abraj Al Mamzar Building, Al Mamzar",
            "addressLocality": "Dubai",
            "addressCountry": "AE"
          },
          {
            "@type": "PostalAddress",
            "streetAddress": "Khanpur Road, District Rahim Yar Khan & Raiwind Road, Lahore",
            "addressRegion": "Punjab",
            "addressCountry": "PK"
          }
        ],
        "telephone": "+971-4-8863390",
        "email": "inquiries@mashaalgroups.com",
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "email": "inquiries@mashaalgroups.com",
            "availableLanguage": ["English"],
            "areaServed": ["AE", "PK"]
          }
        ],
        "areaServed": ["United Arab Emirates", "Pakistan"],
        "knowsAbout": [
          "Fuel forecourts",
          "International freight forwarding",
          "NVOCC logistics",
          "Food commodities",
          "Corporate fleet leasing"
        ],
        "sameAs": [
          "https://www.mashwanis.com/",
          "https://petroleum.mashaalgroups.com/",
          "https://food.mashaalgroups.com/",
          "https://rentacar.mashaalgroups.com/"
        ],
        "subOrganization": [
          {
            "@type": "Organization",
            "@id": "https://www.mashaalgroups.com/#petroleum",
            "name": "Mashaal Petroleum",
            "description": "Premier retail forecourt operator in Punjab, Pakistan with authorized Total PARCO and Pakistan State Oil (PSO) stations.",
            "url": "https://petroleum.mashaalgroups.com/",
            "parentOrganization": {
              "@id": "https://www.mashaalgroups.com/#corporation"
            }
          },
          {
            "@type": "Organization",
            "@id": "https://www.mashaalgroups.com/#shipping",
            "name": "Mashwani Shipping L.L.C.",
            "description": "Global freight forwarding and NVOCC logistics specialist established in 2017 in Dubai, UAE.",
            "url": "https://www.mashwanis.com/",
            "parentOrganization": {
              "@id": "https://www.mashaalgroups.com/#corporation"
            }
          },
          {
            "@type": "Organization",
            "@id": "https://www.mashaalgroups.com/#foods",
            "name": "Mashaal Foods",
            "description": "Operating consumer staples, essential food commodities, and cold-chain supply vertical.",
            "url": "https://food.mashaalgroups.com/",
            "parentOrganization": {
              "@id": "https://www.mashaalgroups.com/#corporation"
            }
          },
          {
            "@type": "Organization",
            "@id": "https://www.mashaalgroups.com/#rentacar",
            "name": "Mashaal Rent A Car",
            "description": "Operating corporate mobility, executive passenger leasing, and fleet management vertical.",
            "url": "https://rentacar.mashaalgroups.com/",
            "parentOrganization": {
              "@id": "https://www.mashaalgroups.com/#corporation"
            }
          }
        ]
      },
      {
        "@type": "GasStation",
        "@id": "https://www.mashaalgroups.com/#total-parco-rahim-yar-khan",
        "name": "Mashaal Petroleum, Total PARCO Station",
        "url": "https://www.mashaalgroups.com/businesses/mashaal-petroleum",
        "openingHours": "Mo-Su 00:00-24:00",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Khanpur Road",
          "addressLocality": "Rahim Yar Khan",
          "addressRegion": "Punjab",
          "addressCountry": "PK"
        },
        "parentOrganization": { "@id": "https://www.mashaalgroups.com/#petroleum" }
      },
      {
        "@type": "GasStation",
        "@id": "https://www.mashaalgroups.com/#pso-lahore",
        "name": "Mashaal Petroleum, Pakistan State Oil Station",
        "url": "https://www.mashaalgroups.com/businesses/mashaal-petroleum",
        "openingHours": "Mo-Su 00:00-24:00",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Raiwind Road",
          "addressLocality": "Lahore",
          "addressRegion": "Punjab",
          "addressCountry": "PK"
        },
        "parentOrganization": { "@id": "https://www.mashaalgroups.com/#petroleum" }
      },
      {
        "@type": "WebSite",
        "@id": "https://www.mashaalgroups.com/#website",
        "url": "https://www.mashaalgroups.com",
        "name": "MASHAAL GROUP",
        "description": "Official corporate website of MASHAAL GROUP, diversified parent holding enterprise.",
        "publisher": {
          "@id": "https://www.mashaalgroups.com/#corporation"
        },
        "inLanguage": "en"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
