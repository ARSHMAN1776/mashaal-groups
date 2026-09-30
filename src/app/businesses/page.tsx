import Link from "next/link";
import { BUSINESSES } from "@/lib/data";
import { houseName } from "@/lib/utils";
import PageHero from "@/components/ui/PageHero";
import ClosingCta from "@/components/ui/ClosingCta";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

export const metadata = {
  alternates: { canonical: "/businesses" },
  title: "Our Businesses | MASHAAL GROUP",
  description:
    "The four businesses of MASHAAL GROUP: Mashaal Petroleum, Mashwani Shipping L.L.C., Mashaal Foods and Mashaal Rent A Car.",
};

const LINES: Record<string, string> = {
  petroleum: "Total PARCO and PSO forecourts, open every hour of every day.",
  foods: "Food commodities and staples, sourced and distributed with care.",
  rentacar: "Executive mobility and fleet hire, driven to a higher standard.",
  shipping: "International freight forwarding, from Dubai to the world's ports.",
};

const ABOUT = [
  {
    title: "What we do",
    text: "The group holds four businesses: Mashaal Petroleum runs Total PARCO and Pakistan State Oil forecourts in Rahim Yar Khan and Lahore. Mashwani Shipping L.L.C. is an NVOCC freight forwarder based in Dubai. Mashaal Foods supplies food commodities and staples. Mashaal Rent A Car provides executive mobility and fleet hire.",
  },
  {
    title: "How we work",
    text: "We build on physical reality, not big claims. That means calibrated fuel dispensers, documented freight manifests and clear governance. Every business is held to the same standard of integrity, and each keeps its own specialist management.",
  },
  {
    title: "Where we operate",
    text: "Our forecourts serve highway and commercial traffic across Punjab, Pakistan. Mashwani Shipping works from Dubai and connects the Gulf, Pakistan, India and Afghan transit routes by sea, air and road.",
  },
];

const FACTS = [
  { value: "4", label: "Businesses" },
  { value: "2", label: "Countries" },
  { value: "2017", label: "First company founded" },
  { value: "24/7", label: "Forecourt service" },
];

export default function BusinessesPage() {
  return (
    <div className="flex w-full flex-col bg-[#190308] text-[#F7F3EE]">
      <PageHero
        plain
        title={
          <>
            Four businesses, <em>one family.</em>
          </>
        }
        lede="Each company runs on its own expertise. All four answer to the same standard of integrity."
      />

      <section className="bg-[#190308] py-12 sm:py-16">
        <div className="mx-auto grid max-w-corporate grid-cols-1 gap-5 px-6 sm:px-8 md:grid-cols-2 lg:px-12">
          {BUSINESSES.map((b, i) => (
            <ScrollReveal key={b.id} variant="fade-up" delay={(i % 2) * 0.1}>
              <article className="group flex h-full flex-col border border-[#C5A059]/25 bg-gradient-to-br from-[#24060C] via-[#2C0910] to-[#370C15] p-6 transition-[border-color,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-[#DEBF7D]/70 sm:p-7">
                <div className="flex items-baseline gap-4">
                  <span className="display text-3xl text-[#C5A059]/80">{b.number}</span>
                  <h2 className="display text-2xl transition-colors duration-500 group-hover:text-[#DEBF7D] sm:text-3xl">
                    {houseName(b.name)}
                  </h2>
                </div>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#C5A059]">
                  {b.category}
                </p>
                <p className="mt-3 text-[0.95rem] leading-[1.7] text-[#DCCFC7]">{LINES[b.id]}</p>

                <div className="mt-auto flex flex-wrap items-center gap-x-8 gap-y-3 pt-5">
                  <Link
                    href={`/businesses/${b.slug}`}
                    className="link-line text-xs font-semibold uppercase tracking-[0.22em] text-[#F7F3EE]"
                  >
                    View details
                  </Link>
                  {b.externalUrl && (
                    <a
                      href={b.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-line text-xs font-semibold uppercase tracking-[0.22em] text-[#DEBF7D]"
                    >
                      Visit website
                      <svg width="14" height="14" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M2.5 9.5 9.5 2.5M4 2.5h5.5V8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  )}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="border-t border-white/[0.08] bg-[#24060C] py-14 sm:py-20">
        <div className="mx-auto max-w-corporate px-6 sm:px-8 lg:px-12">
          <ScrollReveal variant="fade-up" className="max-w-3xl">
            <h2 className="display text-3xl sm:text-4xl">
              About <em>Mashaal Group.</em>
            </h2>
            <p className="lede mt-5 text-base leading-[1.8] text-[#DCCFC7]">
              Mashaal Group is the parent company of four independent businesses. It does not run
              them day to day. It sets the standards, looks after the capital and oversees
              governance, while each business is led by people who know their own industry.
            </p>
          </ScrollReveal>

          <StaggerContainer staggerChildren={0.1} className="mt-10 border-t border-white/[0.12]">
            {ABOUT.map((r) => (
              <StaggerItem
                key={r.title}
                className="grid grid-cols-1 gap-2 border-b border-white/[0.12] py-6 lg:grid-cols-12 lg:gap-10"
              >
                <h3 className="display text-xl text-[#F7F3EE] sm:text-2xl lg:col-span-3">{r.title}</h3>
                <p className="text-base leading-[1.75] text-[#DCCFC7] lg:col-span-9">{r.text}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <StaggerContainer
            staggerChildren={0.1}
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-8 pt-2 lg:grid-cols-4"
          >
            {FACTS.map((f) => (
              <StaggerItem key={f.label}>
                <p className="display text-4xl text-[#DEBF7D]">{f.value}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#BBA79F]">
                  {f.label}
                </p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <ClosingCta
        title={
          <>
            Interested in <em>working together?</em>
          </>
        }
        text="Tell us which business you would like to reach and the executive office will route your message."
      />
    </div>
  );
}
