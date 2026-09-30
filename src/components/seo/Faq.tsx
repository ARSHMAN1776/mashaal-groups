import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const FAQ_ITEMS = [
  {
    q: "What is Mashaal Group?",
    a: "Mashaal Group is a parent company that holds and oversees four independent businesses across energy, shipping, food and mobility. It operates in Pakistan and the United Arab Emirates.",
  },
  {
    q: "Which businesses belong to Mashaal Group?",
    a: "Mashaal Petroleum (Total PARCO and Pakistan State Oil forecourts), Mashwani Shipping L.L.C. (international freight forwarding and NVOCC logistics), Mashaal Foods (food commodities and staples) and Mashaal Rent A Car (fleet leasing and executive mobility).",
  },
  {
    q: "Where does Mashaal Group operate?",
    a: "The group operates from Dubai in the United Arab Emirates and from Punjab in Pakistan. Mashaal Petroleum runs forecourts in Rahim Yar Khan and Lahore, and Mashwani Shipping has offices in Dubai and Karachi.",
  },
  {
    q: "When was Mashwani Shipping L.L.C. established?",
    a: "Mashwani Shipping L.L.C. was established in Dubai, United Arab Emirates, in 2017. It is an NVOCC agent and international freight forwarder.",
  },
  {
    q: "Are the Mashaal Petroleum forecourts open around the clock?",
    a: "Yes. The Total PARCO forecourt on Khanpur Road, Rahim Yar Khan, and the Pakistan State Oil forecourt on Raiwind Road, Lahore, operate 24 hours a day.",
  },
  {
    q: "What does Mashwani Shipping L.L.C. offer?",
    a: "Sea freight (FCL, LCL and breakbulk), air freight and charters, overland trucking across the Gulf and Levant, Afghan transit cargo, warehousing and cross-stuffing, and customs clearance with local delivery.",
  },
  {
    q: "How can I contact Mashaal Group?",
    a: "Write to the executive office at inquiries@mashaalgroups.com, or use the contact page to reach each business directly. Partnership enquiries can be sent to the same address.",
  },
];

/** Visible FAQ (native details/summary, keyboard accessible) plus matching FAQPage structured data. */
export default function Faq() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="bg-[#190308] py-16 sm:py-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="mx-auto max-w-corporate px-6 sm:px-8 lg:px-12">
        <ScrollReveal variant="fade-up" className="mb-10 max-w-3xl">
          <h2 className="display text-3xl sm:text-4xl lg:text-5xl">
            Frequently <em>asked questions.</em>
          </h2>
        </ScrollReveal>

        <div className="max-w-4xl border-t border-white/[0.15]">
          {FAQ_ITEMS.map((f) => (
            <details key={f.q} className="group border-b border-white/[0.15]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
                <h3 className="display text-xl text-[#F7F3EE] transition-colors duration-500 group-hover:text-[#DEBF7D] sm:text-2xl">
                  {f.q}
                </h3>
                <span
                  aria-hidden="true"
                  className="relative h-4 w-4 shrink-0 text-[#DEBF7D] before:absolute before:left-0 before:top-1/2 before:h-px before:w-full before:bg-current after:absolute after:left-1/2 after:top-0 after:h-full after:w-px after:bg-current after:transition-transform after:duration-500 group-open:after:scale-y-0"
                />
              </summary>
              <p className="max-w-3xl pb-6 text-base leading-[1.8] text-[#DCCFC7]">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
