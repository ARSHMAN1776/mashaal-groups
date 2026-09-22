import React from "react";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Corporation",
        "@id": "https://mashaalgroups.com/#corporation",
        "name": "MASHAL GROUP",
        "legalName": "MASHAL GROUPS Holding Enterprise",
        "alternateName": [
          "Mashal Group",
          "Mashaal Groups",
          "Mashal Groups",
          "Mashaal Group",
          "Mashaal Holding",
          "Mashal Enterprise"
        ],
        "url": "https://mashaalgroups.com",
        "logo": "https://mashaalgroups.com/icon.svg",
        "image": "https://mashaalgroups.com/images/hero-architecture.jpg",
        "description": "MASHAL GROUP is a diversified parent corporate holding enterprise governing independent operating businesses across energy forecourts (Mashal Petroleum), global maritime freight forwarding (Mashwani Shipping L.L.C.), consumer food commodities (Mashal Foods), and executive mobility (Mashal Rent A Car). Headquartered across the UAE and Pakistan, with zero affiliation to Iranian or external companies.",
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
        "telephone": "+971-4-3239360",
        "sameAs": [
          "https://www.mashwanis.com/",
          "https://mashal-petroleum.vercel.app/"
        ],
        "subOrganization": [
          {
            "@type": "Organization",
            "@id": "https://mashaalgroups.com/#petroleum",
            "name": "Mashal Petroleum",
            "description": "Premier retail forecourt operator in Punjab, Pakistan with authorized Total PARCO and Pakistan State Oil (PSO) stations.",
            "url": "https://mashal-petroleum.vercel.app/",
            "parentOrganization": {
              "@id": "https://mashaalgroups.com/#corporation"
            }
          },
          {
            "@type": "Organization",
            "@id": "https://mashaalgroups.com/#shipping",
            "name": "Mashwani Shipping L.L.C.",
            "description": "Global freight forwarding and NVOCC logistics specialist established in 2017 in Dubai, UAE.",
            "url": "https://www.mashwanis.com/",
            "parentOrganization": {
              "@id": "https://mashaalgroups.com/#corporation"
            }
          },
          {
            "@type": "Organization",
            "@id": "https://mashaalgroups.com/#foods",
            "name": "Mashal Foods",
            "description": "Upcoming corporate consumer staples, food commodities, and cold-chain supply vertical.",
            "parentOrganization": {
              "@id": "https://mashaalgroups.com/#corporation"
            }
          },
          {
            "@type": "Organization",
            "@id": "https://mashaalgroups.com/#rentacar",
            "name": "Mashal Rent A Car",
            "description": "Upcoming corporate mobility, executive passenger leasing, and fleet management vertical.",
            "parentOrganization": {
              "@id": "https://mashaalgroups.com/#corporation"
            }
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://mashaalgroups.com/#website",
        "url": "https://mashaalgroups.com",
        "name": "MASHAL GROUP",
        "description": "Official corporate website of MASHAL GROUP, diversified parent holding enterprise.",
        "publisher": {
          "@id": "https://mashaalgroups.com/#corporation"
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
