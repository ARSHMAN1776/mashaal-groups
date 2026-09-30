import PageHero from "@/components/ui/PageHero";
import ClosingCta from "@/components/ui/ClosingCta";
import Faq from "@/components/seo/Faq";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

export const metadata = {
  alternates: { canonical: "/about" },
  title: "The Group and Governance | MASHAAL GROUP",
  description:
    "How MASHAAL GROUP is structured: a parent holding that governs independent operating businesses across energy, shipping, food and mobility.",
};

const PILLARS = [
  {
    title: "Stewardship of capital",
    text: "Disciplined allocation across the group keeps every company on a resilient balance sheet, with its own financing capacity and a conservative view of risk.",
  },
  {
    title: "Room to lead",
    text: "Each business runs with specialist management. The group board oversees governance without slowing the work.",
  },
  {
    title: "Integrity without exceptions",
    text: "From fuel calibration to customs compliance and freight manifests, every business is held to the same rule.",
  },
];

const MILESTONES = [
  {
    when: "2017",
    where: "Dubai, United Arab Emirates",
    title: "Mashwani Shipping L.L.C. is established",
    text: "Incorporated in Dubai as an NVOCC agent and international freight forwarder. Direct ocean carrier contracts open trade corridors across the GCC, Pakistan, India and Afghan transit routes.",
  },
  {
    when: "Forecourt network",
    where: "Punjab, Pakistan",
    title: "Total PARCO and PSO forecourts open",
    text: "Flagship fuel stations on Khanpur Road (Rahim Yar Khan) and Raiwind Road (Lahore), with refinery-sealed supply, digital volumetric checks and round-the-clock service.",
  },
  {
    when: "Today",
    where: "Parent group",
    title: "One brand for four businesses",
    text: "The holding structure now unites oversight of every operating company and guides measured growth in food commodities and executive mobility.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex w-full flex-col bg-[#190308] text-[#F7F3EE]">
      <PageHero
        eyebrow="The parent enterprise"
        title={
          <>
            A holding built on <em>patience.</em>
          </>
        }
        lede="Mashaal Group governs autonomous businesses in essential industries, guided by operational reliability, patient capital and institutional integrity."
        imagePosition="50% 35%"
      />

      {/* Structure */}
      <section className="bg-[#190308] py-16 sm:py-24">
        <div className="mx-auto grid max-w-corporate grid-cols-1 gap-10 px-6 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:px-12">
          <ScrollReveal variant="fade-up" className="lg:col-span-7">
            <h2 className="display text-3xl sm:text-4xl lg:text-5xl">
              A parent group, <em>not a single company.</em>
            </h2>
            <div className="hairline my-6 max-w-[7rem]" />
            <p className="lede text-lg leading-[1.85] text-[#F7F3EE]/90">
              Strategy and governance sit with the group. Daily operations sit with the people who
              run each business. That separation lets every leadership team focus completely on
              excellence in its own sector.
            </p>
            <p className="lede mt-6 text-base leading-[1.9] text-[#DCCFC7]">
              Today the portfolio spans authorized Total PARCO and Pakistan State Oil forecourts,
              international freight forwarding through Mashwani Shipping L.L.C. in Dubai, and the
              food and mobility businesses that complete the group.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.15} className="lg:col-span-5">
            <div className="ml-auto max-w-md border border-[#C5A059]/40 bg-gradient-to-br from-[#2C0910] to-[#190308]">
              <div className="p-7 sm:p-8">
                <p className="eyebrow">The group</p>
                <p className="display mt-3 text-2xl sm:text-3xl">Strategy, capital and governance</p>
              </div>
              <div className="flex items-center gap-3 px-7 sm:px-8" aria-hidden="true">
                <span className="h-px flex-1 bg-[#C5A059]/40" />
                <span className="text-xs text-[#C5A059]">supports</span>
                <span className="h-px flex-1 bg-[#C5A059]/40" />
              </div>
              <div className="p-7 sm:p-8">
                <p className="eyebrow">Each business</p>
                <p className="display mt-3 text-2xl sm:text-3xl">Daily operations and results</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-[#24060C] py-16 sm:py-24">
        <div className="mx-auto max-w-corporate px-6 sm:px-8 lg:px-12">
          <ScrollReveal variant="fade-up" className="mb-10 max-w-3xl">
            <p className="eyebrow">Our approach</p>
            <h2 className="display mt-5 text-3xl sm:text-4xl lg:text-5xl">
              Three ideas that <em>guide the group.</em>
            </h2>
          </ScrollReveal>

          <StaggerContainer staggerChildren={0.15} className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {PILLARS.map((p, i) => (
              <StaggerItem
                key={p.title}
                className={`border p-6 sm:p-8 ${
                  i === 0
                    ? "border-[#C5A059]/40 bg-gradient-to-br from-[#370C15] via-[#24060C] to-[#190308]"
                    : "border-white/[0.1] bg-[#190308]"
                }`}
              >
                <span aria-hidden="true" className="block h-px w-10 bg-[#C5A059]" />
                <h3 className="display mt-5 text-2xl sm:text-3xl">{p.title}</h3>
                <p className="mt-4 text-base leading-[1.8] text-[#DCCFC7]">{p.text}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[#190308] py-16 sm:py-24">
        <div className="mx-auto max-w-corporate px-6 sm:px-8 lg:px-12">
          <ScrollReveal variant="fade-up" className="mb-10 max-w-3xl">
            <h2 className="display text-3xl sm:text-4xl lg:text-5xl">
              How the group <em>took shape.</em>
            </h2>
          </ScrollReveal>

          <StaggerContainer staggerChildren={0.14} className="border-t border-white/[0.1]">
            {MILESTONES.map((m) => (
              <StaggerItem
                key={m.title}
                className="grid grid-cols-1 gap-6 border-b border-white/[0.1] py-7 lg:grid-cols-12 lg:gap-10 lg:py-9"
              >
                <div className="lg:col-span-4">
                  <p className="display text-4xl text-[#DEBF7D] sm:text-5xl">{m.when}</p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#BBA79F]">
                    {m.where}
                  </p>
                </div>
                <div className="lg:col-span-8">
                  <h3 className="display text-2xl sm:text-3xl">{m.title}</h3>
                  <p className="lede mt-5 text-base leading-[1.85] text-[#DCCFC7]">{m.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="relative isolate overflow-hidden bg-[#24060C] py-16 sm:py-24">
        <div className="mx-auto max-w-corporate px-6 sm:px-8 lg:px-12">
          <ScrollReveal variant="fade-up" duration={1.1} className="max-w-5xl">
            <span aria-hidden="true" className="display block text-6xl leading-none text-[#C5A059]/50">
              &ldquo;
            </span>
            <figure><blockquote className="display -mt-6 text-2xl italic text-[#F7F3EE] sm:text-3xl lg:text-4xl">
              A group is only as strong as the physical integrity of its businesses. We build on
              infrastructure, trade routes and respect for every partner and motorist we serve.
            </blockquote>
            <figcaption className="mt-8">
              <p className="text-sm font-semibold tracking-wide text-[#F7F3EE]">
                Executive Directorate and Holding Advisory Board
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.24em] text-[#C5A059]">
                Mashaal Group
              </p>
            </figcaption></figure>
          </ScrollReveal>
        </div>
      </section>

      <Faq />

      <ClosingCta
        title={
          <>
            Talk to the <em>executive office.</em>
          </>
        }
        text="For partnerships, institutional relations and media enquiries."
      />
    </div>
  );
}
