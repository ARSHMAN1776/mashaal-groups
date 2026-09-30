import Link from "next/link";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

export const metadata = {
  alternates: { canonical: "/partnerships" },
  title: "Partnerships | MASHAAL GROUP",
  description:
    "Partner with MASHAAL GROUP, a parent group of four independent businesses across energy, shipping, food and mobility in Pakistan and the UAE.",
};

const MAIL =
  "mailto:inquiries@mashaalgroups.com?subject=Partnership%20enquiry&body=Organisation%3A%0D%0ABusiness%20of%20interest%3A%0D%0AType%20of%20partnership%3A%0D%0A";

const GLANCE = [
  { value: "4", label: "Independent businesses" },
  { value: "2", label: "Countries of operation" },
  { value: "2017", label: "First company founded" },
  { value: "24/7", label: "Forecourt service" },
];

const STRENGTHS = [
  {
    title: "Essential industries",
    text: "Fuel, freight, food and mobility serve everyday needs. The group builds on physical assets and operating businesses.",
  },
  {
    title: "Independent by design",
    text: "Each company has its own specialist management, so no sector depends on another.",
  },
  {
    title: "Governance first",
    text: "The group oversees capital and holds every business to the same standard of integrity.",
  },
  {
    title: "Two-country reach",
    text: "Forecourts across Punjab, Pakistan, and a freight company in Dubai serving the Gulf, South Asia and Afghan transit.",
  },
];

const SECTORS = ["Energy", "Freight", "Food", "Mobility"];

const INCLUDE = ["Your name and organisation", "The business you are interested in", "The kind of partnership you have in mind"];

function ArrowIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M2.5 9.5 9.5 2.5M4 2.5h5.5V8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PillButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-4 rounded-full bg-[#FAF8F5] py-2 pl-7 pr-2 text-[0.8rem] font-semibold uppercase tracking-[0.22em] text-[#190308] transition-[background-color,transform] duration-500 hover:bg-[#DEBF7D] active:scale-[0.98]"
    >
      {children}
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#190308]/10 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-px group-hover:translate-x-0.5">
        <ArrowIcon />
      </span>
    </a>
  );
}

export default function PartnershipsPage() {
  return (
    <div className="flex w-full flex-col bg-[#190308] text-[#F7F3EE]">
      {/* Hero: title left, at-a-glance panel right */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#190308] via-[#24060C] to-[#370C15] pb-14 pt-32 sm:pb-20 sm:pt-36">
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #C5A059 1px, transparent 1px), linear-gradient(to bottom, #C5A059 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="mx-auto grid max-w-corporate grid-cols-1 items-center gap-12 px-6 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:px-12">
          <ScrollReveal animateOnLoad variant="fade-up" duration={1.1} className="lg:col-span-7">
            <p className="eyebrow">Partnerships</p>
            <h1 className="display mt-6 text-4xl text-[#F7F3EE] sm:text-5xl lg:text-6xl">
              Partner with a <em>patient</em> group.
            </h1>
            <p className="lede mt-6 text-base leading-[1.75] text-[#F7F3EE]/90 sm:text-lg">
              Mashaal Group holds four independent businesses and welcomes conversations with partners
              who share a long-term view.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-5">
              <PillButton href={MAIL}>Contact partnerships desk</PillButton>
              <Link
                href="/businesses"
                className="link-line text-[0.8rem] font-semibold uppercase tracking-[0.22em] text-[#F7F3EE]"
              >
                Our businesses
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal animateOnLoad variant="fade-up" duration={1.1} delay={0.2} className="lg:col-span-5">
            <div className="border border-[#C5A059]/40 bg-[#190308]/70 p-6 backdrop-blur-sm sm:p-8">
              <p className="eyebrow mb-6">The group at a glance</p>
              <dl className="grid grid-cols-2">
                {GLANCE.map((g, i) => (
                  <div
                    key={g.label}
                    className={`py-6 ${i % 2 === 0 ? "border-r border-white/[0.12] pr-5" : "pl-5 sm:pl-8"} ${
                      i < 2 ? "border-b border-white/[0.12]" : ""
                    }`}
                  >
                    <dd className="display text-4xl text-[#DEBF7D] sm:text-5xl [font-variant-numeric:lining-nums]">{g.value}</dd>
                    <dt className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#BBA79F]">
                      {g.label}
                    </dt>
                  </div>
                ))}
              </dl>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Sector band: one large typographic line, not a repeated list */}
      <section className="border-y border-[#C5A059]/25 bg-[#190308] py-14 sm:py-20">
        <div className="mx-auto max-w-corporate px-6 sm:px-8 lg:px-12">
          <ScrollReveal variant="fade-up" duration={1.1}>
            <p className="eyebrow mb-6">Four sectors, one group</p>
            <p className="display flex flex-wrap items-baseline gap-x-5 gap-y-1 text-4xl text-[#F7F3EE] sm:gap-x-6 sm:text-5xl lg:text-7xl">
              {SECTORS.map((sec, i) => (
                <span key={sec} className="flex items-baseline gap-x-5 sm:gap-x-8">
                  {i === 1 || i === 3 ? <em>{sec}</em> : sec}
                  {i < SECTORS.length - 1 && (
                    <span aria-hidden="true" className="text-[#C5A059]/60">
                      /
                    </span>
                  )}
                </span>
              ))}
            </p>
            <p className="lede mt-8 text-base leading-[1.8] text-[#DCCFC7] sm:text-lg">
              Each one an operating business with its own management, held to a single standard by
              the group.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Why the group: sticky heading + cross grid */}
      <section className="bg-[#24060C] py-16 sm:py-24">
        <div className="mx-auto grid max-w-corporate grid-cols-1 gap-10 px-6 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:px-12">
          <ScrollReveal variant="fade-up" className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <h2 className="display text-3xl sm:text-4xl lg:text-5xl">
                Built on <em>tangible</em> ground.
              </h2>
              <p className="lede mt-5 text-base leading-[1.75] text-[#DCCFC7]">
                Real assets, clear roles and steady governance are the base of every business in the
                group.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer staggerChildren={0.1} className="grid grid-cols-1 border-t border-white/[0.12] sm:grid-cols-2 lg:col-span-8">
            {STRENGTHS.map((s, i) => (
              <StaggerItem
                key={s.title}
                className={`border-b border-white/[0.12] p-6 sm:p-8 ${i % 2 === 0 ? "sm:border-r" : ""}`}
              >
                <span aria-hidden="true" className="block h-px w-8 bg-[#C5A059]" />
                <h3 className="display mt-5 text-2xl sm:text-3xl">{s.title}</h3>
                <p className="mt-3 text-base leading-[1.75] text-[#DCCFC7]">{s.text}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* How the group creates value: editorial text, two columns */}
      <section className="bg-[#190308] py-16 sm:py-24">
        <div className="mx-auto max-w-corporate px-6 sm:px-8 lg:px-12">
          <ScrollReveal variant="fade-up" duration={1.1} className="max-w-5xl">
            <h2 className="display text-3xl sm:text-4xl lg:text-5xl">
              How the group <em>creates value.</em>
            </h2>
            <p className="display mt-8 text-2xl italic text-[#F7F3EE] sm:text-3xl lg:text-4xl">
              We do not chase trends. We hold businesses that serve everyday needs, run them with
              discipline and give them time to grow.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.15} className="mt-12 border-t border-[#C5A059]/30 pt-10">
            <div className="grid grid-cols-1 gap-8 text-base leading-[1.85] text-[#DCCFC7] md:grid-cols-2 md:gap-14">
              <div className="space-y-6">
                <p>
                  <span className="display float-left mr-3 text-6xl leading-[0.8] text-[#DEBF7D]">M</span>
                  ashaal Group works at two levels. At the top, the group looks after capital, sets
                  standards and oversees governance. Below it, each business has its own management
                  team with deep knowledge of its sector, so decisions are made by people who
                  understand the work.
                </p>
                <p>
                  The businesses are independent, yet they strengthen one another. Mashaal Foods
                  draws on the group&apos;s freight and logistics network. Mashaal Rent A Car is
                  linked to the forecourt hubs for servicing and highway support. Shared
                  infrastructure supports each business without blurring its identity.
                </p>
              </div>
              <div className="space-y-6">
                <p>
                  Reliability is the common thread. Calibrated fuel dispensers, documented freight
                  manifests and clear records are not slogans. They are how each business operates
                  every day, and how the group judges its own work.
                </p>
                <p className="border-l-2 border-[#C5A059] pl-5 text-[#F7F3EE]">
                  For partners, this means a clear structure: the group sets the standard, each
                  business is accountable for its results, and everyone knows who is responsible for
                  what.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Enquiry: text + what-to-include card */}
      <section className="relative isolate overflow-hidden bg-[#24060C] py-16 sm:py-24">
        <div className="mx-auto grid max-w-corporate grid-cols-1 items-center gap-12 px-6 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:px-12">
          <ScrollReveal variant="fade-up" duration={1.1} className="lg:col-span-7">
            <h2 className="display text-3xl sm:text-5xl lg:text-6xl">
              Start <em>a conversation.</em>
            </h2>
            <p className="lede mt-5 text-base leading-[1.75] text-[#F7F3EE]/90 sm:text-lg">
              Write to the executive office and include the details below.
            </p>
            <div className="mt-8">
              <PillButton href={MAIL}>inquiries@mashaalgroups.com</PillButton>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.15} className="lg:col-span-5">
            <div className="border border-[#C5A059]/40 bg-gradient-to-br from-[#2C0910] to-[#190308] p-7 sm:p-9">
              <p className="eyebrow">Please include</p>
              <ul className="mt-5 space-y-4">
                {INCLUDE.map((t) => (
                  <li key={t} className="flex gap-4 text-base text-[#F7F3EE]">
                    <span aria-hidden="true" className="mt-[0.7em] h-px w-6 shrink-0 bg-[#C5A059]" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="border-t border-white/[0.08] bg-[#0F0104] py-8">
        <p className="mx-auto max-w-corporate px-6 text-xs leading-[1.8] text-[#BBA79F] sm:px-8 lg:px-12">
          This page is for general information only. It is not an offer to sell, or a solicitation of
          an offer to buy, any security or other financial product, and it does not contain financial
          projections or advice. Any discussion of investment or partnership is subject to separate
          agreement.
        </p>
      </section>
    </div>
  );
}
