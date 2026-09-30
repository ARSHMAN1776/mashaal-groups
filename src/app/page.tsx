import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { GROUP_STATS, GROUP_PHILOSOPHY } from "@/lib/data";
import HouseIndex from "@/components/home/HouseIndex";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

export const metadata = {
  alternates: { canonical: "/" },
};

const sentence = (s: string) => s.charAt(0) + s.slice(1).toLowerCase();

const PLACES = [
  {
    place: "Dubai",
    region: "United Arab Emirates",
    detail:
      "Home of Mashwani Shipping L.L.C., with offices at Al Mamzar and direct contracts with leading ocean carriers.",
  },
  {
    place: "Rahim Yar Khan",
    region: "Punjab, Pakistan",
    detail: "A Total PARCO forecourt on Khanpur Road, serving highway and commercial traffic around the clock.",
  },
  {
    place: "Lahore",
    region: "Punjab, Pakistan",
    detail: "A Pakistan State Oil forecourt on Raiwind Road, with a convenience mart and prayer facilities.",
  },
  {
    place: "The corridors",
    region: "GCC, India and Afghan transit",
    detail: "Overland and sea routes that connect the Gulf, South Asia and the wider region.",
  },
];

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" className={className}>
      <path d="M2.5 9.5 9.5 2.5M4 2.5h5.5V8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <div className="flex w-full flex-col bg-[#190308] text-[#F7F3EE]">
      {/* =========================================================================
          01 — HERO SECTION
          Monumental 3-Column Asymmetric Architectural Grandeur
          ========================================================================= */}
      <section className="relative min-h-screen flex items-center pt-28 pb-12 lg:pt-28 lg:pb-12 overflow-hidden bg-gradient-to-br from-[#190308] via-[#24060C] to-[#370C15] border-b border-white/10">
        {/* Subtle Luxury Pattern / Grid */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(to right, #C5A059 1px, transparent 1px), linear-gradient(to bottom, #C5A059 1px, transparent 1px)",
            backgroundSize: "80px 80px"
          }}
        />

        <div className="max-w-corporate w-full mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center lg:min-h-0">
            {/* Column 1: Left Title & Identity (5 Cols) */}
            <ScrollReveal variant="fade-up" delay={0.1} className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2.5">
                <span className="w-8 h-[1.5px] bg-[#C5A059]" />
                <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#DEBF7D] font-medium">
                  HOLDING ENTERPRISE
                </span>
              </div>

              <h1 className="font-sans text-5xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white uppercase leading-[1.02]">
                MASHAAL<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FAF8F5] to-[#C5A059]">
                  GROUPS
                </span>
              </h1>

              <p className="font-sans text-base sm:text-lg text-[#F7F3EE]/80 font-normal leading-relaxed max-w-lg">
                A diversified parent portfolio built across essential energy infrastructure, global maritime trade, and emerging markets.
              </p>

              <div className="pt-3 flex flex-col sm:flex-row items-start sm:items-center gap-5">
                <Link
                  href="#portfolio"
                  className="group inline-flex items-center gap-3 text-xs sm:text-sm font-sans font-bold uppercase tracking-[0.14em] text-white pb-1.5 border-b border-white/40 hover:border-[#DEBF7D] hover:text-[#DEBF7D] transition-all"
                >
                  <span>Explore Our Businesses</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </Link>

                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-sans uppercase tracking-[0.14em] text-[#C5B5AE] hover:text-white transition-colors"
                >
                  <span>About the Group</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </ScrollReveal>

            {/* Column 2: Center Pillar of Truth (3 Cols) */}
            <ScrollReveal variant="fade-up" delay={0.22} className="lg:col-span-3 border-l border-white/15 pl-6 lg:pl-8 space-y-5">
              <span className="font-mono text-xs tracking-[0.2em] text-[#DEBF7D] uppercase block font-semibold">
                FOUR BUSINESSES • ONE VISION
              </span>

              <div className="w-8 h-[1px] bg-white/20" />

              <p className="font-sans text-xs sm:text-sm text-[#C5B5AE] leading-relaxed font-light">
                Providing strategic capital allocation, fiduciary oversight, and institutional governance to autonomous operating verticals across Pakistan and the United Arab Emirates.
              </p>

              <div className="space-y-2 pt-2 text-[11px] font-mono text-[#F7F3EE]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                  <span>01 / Mashaal Petroleum</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                  <span>02 / Mashwani Shipping L.L.C.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                  <span>03 / Mashaal Foods</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                  <span>04 / Mashaal Rent A Car</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Column 3: Right Monumental Architecture Visual (4 Cols) */}
            <ScrollReveal variant="zoom-in" delay={0.32} className="lg:col-span-4 relative flex items-center justify-end">
              <div className="relative w-full aspect-[4/5] max-w-md lg:max-w-none rounded overflow-hidden shadow-2xl border border-white/10 group">
                <Image
                  src="/images/hero-architecture.jpg"
                  alt="Mashaal Group Monumental Colonnade"
                  fill
                  priority
                  className="object-cover object-left sm:object-center group-hover:scale-105 transition-transform duration-1000"
                  sizes="(max-width: 1024px) 100vw, 35vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#190308]/90 via-transparent to-[#190308]/30" />
                <div className="absolute bottom-5 left-5 right-5 text-left">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#DEBF7D] block">
                    Institutional Scale
                  </span>
                  <span className="font-sans text-sm text-white font-medium block">
                    Built for sustainable, multi-decade stewardship.
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Statement (single cream block on an otherwise dark page) */}
      <section className="on-light bg-[#FAF8F5] py-14 text-[#1C1514] sm:py-20">
        <div className="mx-auto max-w-corporate px-6 sm:px-8 lg:px-12">
          <ScrollReveal variant="fade-up" className="max-w-5xl">
            <p className="eyebrow !text-[#8C6B28]">The group</p>
            <h2 className="display mt-5 text-3xl text-[#1C1514] sm:text-4xl lg:text-5xl">
              Mashaal Group does not run one company. It <em>governs four</em>, each led by people
              who know their industry and answer to the same standard of integrity.
            </h2>
          </ScrollReveal>

          <StaggerContainer
            staggerChildren={0.12}
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-[#1C1514]/15 pt-8 lg:grid-cols-4"
          >
            {GROUP_STATS.map((stat) => (
              <StaggerItem key={stat.label}>
                <p className="display text-5xl text-[#6B1C28] sm:text-6xl [font-variant-numeric:lining-nums]">
                  {stat.value}
                </p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#1C1514]">
                  {stat.label}
                </p>
                <p className="mt-2 max-w-[16rem] text-sm leading-relaxed text-[#63554F]">
                  {stat.subtitle}
                </p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* The four businesses */}
      <section id="portfolio" className="bg-[#190308] py-16 sm:py-24">
        <div className="mx-auto max-w-corporate px-6 sm:px-8 lg:px-12">
          <ScrollReveal variant="fade-up" className="mb-10 max-w-3xl">
            <h2 className="display text-3xl sm:text-4xl lg:text-5xl">
              Four houses, <em>each its own.</em>
            </h2>
          </ScrollReveal>
          <HouseIndex />
        </div>
      </section>

      {/* Principles */}
      <section className="relative overflow-hidden bg-[#24060C] py-16 sm:py-24">
        <div className="mx-auto max-w-corporate px-6 sm:px-8 lg:px-12">
          <ScrollReveal variant="fade-up" className="max-w-3xl">
            <h2 className="display text-3xl sm:text-4xl lg:text-5xl">
              What we hold <em>ourselves to.</em>
            </h2>
          </ScrollReveal>

          <StaggerContainer
            staggerChildren={0.18}
            className="mt-12 grid grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-12"
          >
            {GROUP_PHILOSOPHY.map((p, i) => (
              <StaggerItem
                key={p.title}
                className={
                  [
                    "md:col-span-5 md:col-start-1",
                    "md:col-span-5 md:col-start-7 md:mt-12",
                    "md:col-span-5 md:col-start-3 md:mt-0",
                  ][i]
                }
              >
                <div className="hairline mb-5" />
                <h3 className="display text-2xl text-[#F7F3EE] sm:text-3xl">{sentence(p.title)}</h3>
                <p className="mt-5 max-w-md text-base leading-[1.85] text-[#DCCFC7]">{p.desc}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Presence */}
      <section id="presence" className="bg-[#190308] py-16 sm:py-24">
        <div className="mx-auto max-w-corporate px-6 sm:px-8 lg:px-12">
          <ScrollReveal variant="fade-up" className="mb-10 max-w-3xl">
            <p className="eyebrow">Where we operate</p>
            <h2 className="display mt-5 text-3xl sm:text-4xl lg:text-5xl">
              Rooted in Pakistan, <em>connected to the Gulf.</em>
            </h2>
          </ScrollReveal>

          <StaggerContainer staggerChildren={0.1} className="border-t border-white/[0.1]">
            {PLACES.map((p) => (
              <StaggerItem
                key={p.place}
                className="grid grid-cols-1 gap-4 border-b border-white/[0.1] py-6 lg:grid-cols-12 lg:items-baseline lg:gap-10 lg:py-7"
              >
                <h3 className="display text-3xl sm:text-4xl lg:col-span-5 lg:text-5xl">{p.place}</h3>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#C5A059] lg:col-span-3">
                  {p.region}
                </p>
                <p className="max-w-md text-base leading-[1.8] text-[#DCCFC7] lg:col-span-4">
                  {p.detail}
                </p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Leadership statement */}
      <section className="relative overflow-hidden bg-[#24060C] py-16 sm:py-24">
        <div className="pointer-events-none absolute inset-y-0 left-6 w-px bg-gradient-to-b from-transparent via-[#C5A059]/50 to-transparent sm:left-8 lg:left-12" />
        <div className="mx-auto max-w-corporate px-6 sm:px-8 lg:px-12">
          <ScrollReveal variant="fade-up" duration={1.1} className="max-w-5xl pl-6 sm:pl-10 lg:pl-14">
            <span aria-hidden="true" className="display block text-7xl leading-none text-[#C5A059]/60">
              &ldquo;
            </span>
            <figure>
              <blockquote className="display -mt-4 text-2xl italic text-[#F7F3EE] sm:text-3xl lg:text-4xl">
                A group is only as strong as the physical integrity of its businesses. We build on
                infrastructure, trade routes and respect for every partner and motorist we serve.
              </blockquote>
              <figcaption className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
                <div>
                  <p className="text-sm font-semibold tracking-wide text-[#F7F3EE]">
                    Executive Directorate and Holding Advisory Board
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#C5A059]">
                    Mashaal Group
                  </p>
                </div>
                <Link
                  href="/about"
                  className="link-line text-xs font-semibold uppercase tracking-[0.22em] text-[#DEBF7D]"
                >
                  About the group
                </Link>
              </figcaption>
            </figure>
          </ScrollReveal>
        </div>
      </section>

      {/* Closing */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#190308] via-[#24060C] to-[#370C15] py-24 sm:py-32">
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #C5A059 1px, transparent 1px), linear-gradient(to bottom, #C5A059 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="mx-auto max-w-corporate px-6 sm:px-8 lg:px-12">
          <ScrollReveal variant="fade-up" duration={1.1} className="max-w-4xl">
            <h2 className="display text-4xl sm:text-5xl lg:text-6xl">
              Speak with <em>the group.</em>
            </h2>
            <p className="lede mt-5 text-base leading-[1.7] text-[#F7F3EE]/90 sm:text-lg">
              Partnerships, media and institutional enquiries go to the executive office. Operating
              matters go straight to each business.
            </p>
            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-4 rounded-full bg-[#FAF8F5] py-2 pl-8 pr-2 text-[0.8rem] font-semibold uppercase tracking-[0.22em] text-[#190308] transition-[background-color,transform] duration-500 hover:bg-[#DEBF7D] active:scale-[0.98]"
            >
              Contact
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#190308]/10 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-px group-hover:translate-x-0.5">
                <ArrowIcon />
              </span>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
