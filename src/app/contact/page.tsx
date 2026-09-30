import PageHero from "@/components/ui/PageHero";
import InquiryForm from "@/components/forms/InquiryForm";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

export const metadata = {
  alternates: { canonical: "/contact" },
  title: "Contact and Offices | MASHAAL GROUP",
  description:
    "Contact the MASHAAL GROUP executive office or reach the operating offices in Dubai, Karachi and Punjab directly.",
};

const OFFICES = [
  {
    name: "Group Executive Office",
    kicker: "Partnerships, institutions and media",
    lines: ["Central governance, capital allocation and institutional relations."],
    contact: [{ label: "inquiries@mashaalgroups.com", href: "mailto:inquiries@mashaalgroups.com" }],
  },
  {
    name: "Dubai, Mashwani Shipping",
    kicker: "Freight and logistics, since 2017",
    lines: ["Office #507, 5th Floor, Abraj Al Mamzar Building, P.O. Box 42596, Al Mamzar, Dubai, U.A.E."],
    contact: [
      { label: "+971-4-8863390", href: "tel:+97148863390" },
      { label: "+971 50 816 8622", href: "tel:+971508168622" },
      { label: "info@mashwanis.com", href: "mailto:info@mashwanis.com" },
    ],
  },
  {
    name: "Karachi, Mashwani Shipping",
    kicker: "Pakistan operations",
    lines: ["Bungalow D-63, near Altamash General Hospital, Clifton Block 1, Karachi, Pakistan."],
    contact: [
      { label: "+92 323 2008789", href: "tel:+923232008789" },
      { label: "impkhi@mashwanis.com", href: "mailto:impkhi@mashwanis.com" },
    ],
  },
  {
    name: "Punjab, Mashaal Petroleum",
    kicker: "Open around the clock",
    lines: [
      "Total PARCO forecourt, Khanpur Road, Rahim Yar Khan.",
      "Pakistan State Oil forecourt, Raiwind Road, Lahore.",
    ],
    contact: [{ label: "contact@mashaalpetroleum.pk", href: "mailto:contact@mashaalpetroleum.pk" }],
  },
];

export default function ContactPage() {
  return (
    <div className="flex w-full flex-col bg-[#190308] text-[#F7F3EE]">
      <PageHero
        title={
          <>
            Contact <em>the group.</em>
          </>
        }
        lede="Reach the executive office, or go straight to the business you need."
        imagePosition="50% 20%"
      />

      <section className="bg-[#190308] py-28 sm:py-40">
        <div className="mx-auto max-w-corporate px-6 sm:px-8 lg:px-12">
          <StaggerContainer staggerChildren={0.1} className="border-t border-white/[0.1]">
            {OFFICES.map((o) => (
              <StaggerItem
                key={o.name}
                className="grid grid-cols-1 gap-6 border-b border-white/[0.1] py-12 lg:grid-cols-12 lg:gap-10 lg:py-14"
              >
                <div className="lg:col-span-5">
                  <h2 className="display text-3xl sm:text-4xl">{o.name}</h2>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#C5A059]">
                    {o.kicker}
                  </p>
                </div>
                <div className="space-y-2 text-base leading-[1.8] text-[#DCCFC7] lg:col-span-4">
                  {o.lines.map((l) => (
                    <p key={l}>{l}</p>
                  ))}
                </div>
                <ul className="space-y-2 text-base lg:col-span-3">
                  {o.contact.map((c) => (
                    <li key={c.href}>
                      <a href={c.href} className="link-line text-[#DEBF7D]">
                        {c.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="bg-[#24060C] py-28 sm:py-40">
        <div className="mx-auto grid max-w-corporate grid-cols-1 gap-16 px-6 sm:px-8 lg:grid-cols-12 lg:gap-24 lg:px-12">
          <ScrollReveal variant="fade-up" className="lg:col-span-5">
            <h2 className="display text-4xl sm:text-5xl lg:text-6xl">
              Send an <em>enquiry.</em>
            </h2>
            <p className="lede mt-8 text-base leading-[1.85] text-[#DCCFC7]">
              Partnerships, vendor onboarding, freight quotations or general questions. The
              secretariat routes each message to the right decision-maker. For urgent freight or fuel
              matters, call the operating desk directly.
            </p>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={0.15} className="lg:col-span-7">
            <div className="border border-[#C5A059]/25 bg-[#190308] p-8 sm:p-12">
              <InquiryForm theme="dark" />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
