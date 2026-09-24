import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Globe2,
  Building2,
  Fuel,
  Ship,
  Sparkles,
  MapPin,
  Clock,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  ArrowDown
} from "lucide-react";
import { BUSINESSES, GROUP_STATS, GROUP_PHILOSOPHY } from "@/lib/data";
import AnimatedBusinessCards from "@/components/home/AnimatedBusinessCards";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

export default function HomePage() {

  const petroleum = BUSINESSES.find((b) => b.id === "petroleum")!;
  const shipping = BUSINESSES.find((b) => b.id === "shipping")!;

  return (
    <div className="flex flex-col w-full bg-[#190308] text-[#F7F3EE]">
      {/* =========================================================================
          01 — HERO SECTION
          Monumental 3-Column Asymmetric Architectural Grandeur
          ========================================================================= */}
      <section className="relative min-h-screen flex items-center pt-28 pb-16 lg:py-0 overflow-hidden bg-gradient-to-br from-[#190308] via-[#24060C] to-[#370C15] border-b border-white/10">
        {/* Subtle Luxury Pattern / Grid */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(to right, #C5A059 1px, transparent 1px), linear-gradient(to bottom, #C5A059 1px, transparent 1px)",
            backgroundSize: "80px 80px"
          }}
        />

        <div className="max-w-corporate w-full mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center min-h-[750px]">
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
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  <span className="text-[#C5B5AE]">03 / Mashaal Foods (Upcoming)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  <span className="text-[#C5B5AE]">04 / Mashaal Rent A Car (Upcoming)</span>
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

      {/* =========================================================================
          02 — GROUP INTRODUCTION (Editorial Layout)
          Clean Alabaster Marble Canvas, Generous Whitespace, No Cards
          ========================================================================= */}
      <section className="bg-[#FAF8F5] text-[#1C1514] py-28 sm:py-36 border-b border-[#ECE5DA]">
        <div className="max-w-corporate mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Col: Display Title */}
            <ScrollReveal variant="fade-up" delay={0.1} className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2">
                <span className="w-8 h-[1.5px] bg-[#6B1C28]" />
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#9C857E] font-semibold">
                  THE GROUP
                </span>
              </div>
              <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C1514] leading-[1.12]">
                Autonomous verticals.<br />
                Unified corporate stewardship.
              </h2>
            </ScrollReveal>

            {/* Right Col: Deep Editorial Prose */}
            <ScrollReveal variant="fade-up" delay={0.2} className="lg:col-span-7 space-y-6 text-[#4A403C]">
              <p className="font-sans text-base sm:text-lg text-[#1C1514] leading-relaxed font-normal">
                MASHAAL GROUP represents an institutional holding collective governing specialized commercial enterprises. Rather than blending distinct sectors under a single operational label, our holding model empowers each vertical to operate with deep industry autonomy while backed by group capital allocation, strategic compliance, and long-term fiduciary oversight.
              </p>

              <div className="w-16 h-[1.5px] bg-[#C5A059]" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-2 text-xs sm:text-sm text-[#736762] leading-relaxed">
                <div>
                  <strong className="text-[#1C1514] font-sans font-semibold block text-sm mb-1">
                    Tangible Economic Realities
                  </strong>
                  Our operating investments target vital physical sectors—high-integrity fuel forecourts serving Punjab transit arteries and Dubai-headquartered international freight forwarding connecting the Middle East, South Asia, and worldwide trade paths.
                </div>
                <div>
                  <strong className="text-[#1C1514] font-sans font-semibold block text-sm mb-1">
                    Disciplined Expansion Horizon
                  </strong>
                  As we plan measured expansion into essential food commodities (Mashaal Foods) and corporate mobility (Mashaal Rent A Car), every new venture is measured against our core principle: verified physical reliability over superficial market hype.
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#6B1C28] hover:text-[#C5A059] transition-colors"
                >
                  <span>Explore Holding Governance Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>


      {/* =========================================================================
          03 — OUR BUSINESSES (ANIMATED PROFESSIONAL DESIGN CARDS)
          ========================================================================= */}
      <AnimatedBusinessCards />

      {/* =========================================================================
          04 — GROUP SCALE & PRESENCE
          WARM ARCHITECTURAL SANDSTONE (LIGHT) — High contrast after dark cards
          ========================================================================= */}
      <section className="bg-[#EFE8DC] text-[#1C1514] py-20 border-b border-[#D8CCBA]">
        <div className="max-w-corporate mx-auto px-6 sm:px-8 lg:px-12">
          <StaggerContainer staggerChildren={0.12} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 divide-y sm:divide-y-0 sm:divide-x divide-[#D8CCBA]">
            {GROUP_STATS.map((stat, i) => (
              <StaggerItem key={i} className={`${i > 0 ? "pt-6 sm:pt-0 sm:pl-8" : ""} space-y-2`}>
                <span className="font-mono text-4xl sm:text-5xl font-extrabold text-[#6B1C28] block tracking-tight">
                  {stat.value}
                </span>
                <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#1C1514] font-bold block">
                  {stat.label}
                </span>
                <span className="text-xs text-[#63554F] block font-normal">
                  {stat.subtitle}
                </span>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* =========================================================================
          05 — VERTICAL 01: MASHAAL PETROLEUM (NO PICTURE)
          IMPERIAL FORECOURT OXBLOOD (DARK)
          ========================================================================= */}
      <section id="petroleum" className="bg-gradient-to-b from-[#1E050D] via-[#260810] to-[#140206] text-[#F7F3EE] py-24 sm:py-32 border-b border-white/10">
        <div className="max-w-corporate mx-auto px-6 sm:px-8 lg:px-12">
          <ScrollReveal variant="fade-up" className="max-w-3xl space-y-4 mb-12">
            <div className="inline-flex items-center gap-2">
              <span className="w-8 h-[1.5px] bg-[#C5A059]" />
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#DEBF7D] font-semibold">
                01 / ENERGY &amp; FUEL FORECOURTS
              </span>
            </div>

            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.08]">
              MASHAAL PETROLEUM
            </h2>

            <p className="font-sans text-base sm:text-lg text-[#DEBF7D] font-medium">
              &ldquo;Two iconic forecourts. One uncompromising standard of fuel integrity.&rdquo;
            </p>

            <p className="font-sans text-sm sm:text-base text-[#C5B5AE] leading-relaxed">
              Operating premier authorized forecourts under franchises with Total PARCO and Pakistan State Oil (PSO), Mashaal Petroleum delivers refinery-sealed Euro-5 and high-octane fuels with certified digital calibration and 24/7 highway hospitality across Punjab.
            </p>
          </ScrollReveal>

          {/* 3 Telemetry Pillars */}
          <StaggerContainer staggerChildren={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12 border-b border-white/10">
            <StaggerItem className="p-6 rounded-xl bg-[#280811]/90 border border-white/10 shadow-lg space-y-2">
              <span className="font-mono text-3xl font-extrabold text-white block">100%</span>
              <span className="text-xs uppercase tracking-wider text-[#DEBF7D] font-bold block">Refinery Sealed</span>
              <p className="text-xs text-[#C5B5AE] leading-relaxed">
                Direct refinery tanker deliveries with sealed valves ensuring zero intermediary tampering or adulteration.
              </p>
            </StaggerItem>
            <StaggerItem className="p-6 rounded-xl bg-[#280811]/90 border border-white/10 shadow-lg space-y-2">
              <span className="font-mono text-3xl font-extrabold text-white block">0.0%</span>
              <span className="text-xs uppercase tracking-wider text-[#DEBF7D] font-bold block">Calibration Tolerance</span>
              <p className="text-xs text-[#C5B5AE] leading-relaxed">
                Routine certified volumetric checks with certified digital flowmeters ensuring exact delivery per liter.
              </p>
            </StaggerItem>
            <StaggerItem className="p-6 rounded-xl bg-[#280811]/90 border border-white/10 shadow-lg space-y-2">
              <span className="font-mono text-3xl font-extrabold text-white block">24/7/365</span>
              <span className="text-xs uppercase tracking-wider text-[#DEBF7D] font-bold block">Continuous Hospitality</span>
              <p className="text-xs text-[#C5B5AE] leading-relaxed">
                Round-the-clock forecourt marts, dignified prayer facilities, and executive rest amenities on major transit routes.
              </p>
            </StaggerItem>
          </StaggerContainer>

          {/* Two Forecourt Sites */}
          <StaggerContainer staggerChildren={0.15} className="pt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <StaggerItem className="p-7 rounded-xl bg-[#2B0913] border border-[#DEBF7D]/30 shadow-xl space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#DEBF7D] font-bold block">
                FLAGSHIP FORECOURT 01
              </span>
              <h3 className="font-sans text-xl font-bold text-white">
                Total PARCO Authorized Forecourt
              </h3>
              <p className="text-xs text-[#C5B5AE] leading-relaxed">
                Khanpur Road, District Rahim Yar Khan, Punjab, Pakistan. Serving commercial transit and private highway motorists.
              </p>
              <div className="pt-2 text-[11px] font-mono text-[#DEBF7D]">
                Features: Excellium Euro-5 • 24/7 M-Mart • Executive Restrooms
              </div>
            </StaggerItem>

            <StaggerItem className="p-7 rounded-xl bg-[#2B0913] border border-emerald-500/30 shadow-xl space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold block">
                FLAGSHIP FORECOURT 02
              </span>
              <h3 className="font-sans text-xl font-bold text-white">
                Pakistan State Oil (PSO) Official Forecourt
              </h3>
              <p className="text-xs text-[#C5B5AE] leading-relaxed">
                Raiwind Road, Raiwind, Lahore, Punjab, Pakistan. Arterial fueling forecourt serving southern Lahore transit.
              </p>
              <div className="pt-2 text-[11px] font-mono text-emerald-400">
                Features: Altron X 97 RON • Shop Stop • Fleet Card Processing
              </div>
            </StaggerItem>
          </StaggerContainer>

          <ScrollReveal variant="fade-up" delay={0.15} className="pt-10 flex items-center gap-5 flex-wrap">
            <Link
              href="/businesses/mashaal-petroleum"
              className="inline-flex items-center gap-2 bg-[#FAF8F5] hover:bg-[#DEBF7D] text-[#190308] text-xs font-bold uppercase tracking-[0.14em] px-6 py-3 rounded-lg transition-colors"
            >
              <span>Explore Mashaal Petroleum Profile</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <a
              href="https://mashaal-petroleum.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#DEBF7D] hover:text-white transition-colors"
            >
              <span>Open Official Forecourt Platform</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================================
          06 — VERTICAL 02: MASHAAL FOODS (NO PICTURE)
          WARM GOLDEN WHEAT ALABASTER (LIGHT)
          ========================================================================= */}
      <section id="foods" className="bg-[#FAF6F0] text-[#1C1514] py-24 sm:py-32 border-b border-[#E8DFC8]">
        <div className="max-w-corporate mx-auto px-6 sm:px-8 lg:px-12">
          <ScrollReveal variant="fade-up" className="max-w-3xl space-y-4 mb-12">
            <div className="inline-flex items-center gap-2">
              <span className="w-8 h-[1.5px] bg-[#6B1C28]" />
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#8C6B28] font-bold">
                02 / FOOD &amp; CONSUMER PRODUCTS
              </span>
            </div>

            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1C1514] leading-[1.08]">
              MASHAAL FOODS
            </h2>

            <p className="font-sans text-base sm:text-lg text-[#6B1C28] font-medium">
              &ldquo;Expanding the group into food and consumer businesses.&rdquo;
            </p>

            <p className="font-sans text-sm sm:text-base text-[#4A403C] leading-relaxed">
              An upcoming corporate vertical dedicated to consumer staples, premium food commodities, and disciplined supply-chain integrity currently in development under the parent holding group.
            </p>
          </ScrollReveal>

          {/* 3 Strategic Pillars */}
          <StaggerContainer staggerChildren={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12 border-b border-[#E8DFC8]">
            <StaggerItem className="p-6 rounded-xl bg-white border border-[#E8DFC8] shadow-sm space-y-2">
              <span className="font-mono text-xs text-[#8C6B28] uppercase tracking-wider block font-bold">PILLAR 01</span>
              <h3 className="font-sans text-base font-bold text-[#1C1514]">Essential Staples</h3>
              <p className="text-xs text-[#6E625D] leading-relaxed">
                Focus on essential food staples and FMCG products engineered to meet growing regional consumer demand.
              </p>
            </StaggerItem>

            <StaggerItem className="p-6 rounded-xl bg-white border border-[#E8DFC8] shadow-sm space-y-2">
              <span className="font-mono text-xs text-[#8C6B28] uppercase tracking-wider block font-bold">PILLAR 02</span>
              <h3 className="font-sans text-base font-bold text-[#1C1514]">Quality Governance</h3>
              <p className="text-xs text-[#6E625D] leading-relaxed">
                Disciplined cold-chain protocols and verified sourcing standards aligned with holding corporate compliance.
              </p>
            </StaggerItem>

            <StaggerItem className="p-6 rounded-xl bg-white border border-[#E8DFC8] shadow-sm space-y-2">
              <span className="font-mono text-xs text-[#8C6B28] uppercase tracking-wider block font-bold">PILLAR 03</span>
              <h3 className="font-sans text-base font-bold text-[#1C1514]">Logistics Integration</h3>
              <p className="text-xs text-[#6E625D] leading-relaxed">
                Direct synergy with group freight, warehousing, and cross-border transport corridors for distribution.
              </p>
            </StaggerItem>
          </StaggerContainer>

          <ScrollReveal variant="fade-up" delay={0.15} className="pt-10 flex items-center justify-between gap-5 flex-wrap">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EDE3D1] border border-[#D5C6AC] text-[#6B1C28] text-xs font-mono font-medium">
              <span className="w-2 h-2 rounded-full bg-[#6B1C28]" />
              <span>Status: Upcoming Vertical In Strategic Planning</span>
            </div>

            <Link
              href="/businesses/mashaal-foods"
              className="inline-flex items-center gap-2 bg-[#24060C] hover:bg-[#370C15] text-white text-xs font-bold uppercase tracking-[0.14em] px-6 py-3 rounded-lg transition-colors"
            >
              <span>Explore Mashaal Foods Profile</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================================
          07 — VERTICAL 03: MASHAAL RENT A CAR (NO PICTURE)
          EXECUTIVE MOBILITY MIDNIGHT (DARK)
          ========================================================================= */}
      <section id="rentacar" className="bg-gradient-to-b from-[#1C050B] via-[#23070E] to-[#140206] text-[#F7F3EE] py-24 sm:py-32 border-b border-white/10">
        <div className="max-w-corporate mx-auto px-6 sm:px-8 lg:px-12">
          <ScrollReveal variant="fade-up" className="max-w-3xl space-y-4 mb-12">
            <div className="inline-flex items-center gap-2">
              <span className="w-8 h-[1.5px] bg-[#C5A059]" />
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#DEBF7D] font-semibold">
                03 / MOBILITY &amp; TRANSPORTATION
              </span>
            </div>

            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.08]">
              MASHAAL RENT A CAR
            </h2>

            <p className="font-sans text-base sm:text-lg text-[#DEBF7D] font-medium">
              &ldquo;An upcoming mobility and transportation vertical.&rdquo;
            </p>

            <p className="font-sans text-sm sm:text-base text-[#C5B5AE] leading-relaxed">
              A forthcoming mobility division being engineered to provide corporate fleet solutions, executive transit, and structured transportation services across commercial and individual market segments.
            </p>
          </ScrollReveal>

          {/* 3 Strategic Pillars */}
          <StaggerContainer staggerChildren={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12 border-b border-white/10">
            <StaggerItem className="p-6 rounded-xl bg-[#280811]/90 border border-white/10 shadow-lg space-y-2">
              <span className="font-mono text-xs text-[#DEBF7D] uppercase tracking-wider block font-bold">CAPABILITY 01</span>
              <h3 className="font-sans text-base font-bold text-white">Corporate Fleet Solutions</h3>
              <p className="text-xs text-[#C5B5AE] leading-relaxed">
                Structured long-term vehicle leasing and dedicated fleet management for corporate enterprises and organizations.
              </p>
            </StaggerItem>

            <StaggerItem className="p-6 rounded-xl bg-[#280811]/90 border border-white/10 shadow-lg space-y-2">
              <span className="font-mono text-xs text-[#DEBF7D] uppercase tracking-wider block font-bold">CAPABILITY 02</span>
              <h3 className="font-sans text-base font-bold text-white">Highway &amp; Urban Mobility</h3>
              <p className="text-xs text-[#C5B5AE] leading-relaxed">
                Reliable executive transport and inter-city vehicle rentals with certified vehicle maintenance and roadside support.
              </p>
            </StaggerItem>

            <StaggerItem className="p-6 rounded-xl bg-[#280811]/90 border border-white/10 shadow-lg space-y-2">
              <span className="font-mono text-xs text-[#DEBF7D] uppercase tracking-wider block font-bold">CAPABILITY 03</span>
              <h3 className="font-sans text-base font-bold text-white">Forecourt Hub Synergy</h3>
              <p className="text-xs text-[#C5B5AE] leading-relaxed">
                Strategic operational synergy with Mashaal Petroleum&apos;s forecourt network for vehicle maintenance and fueling points.
              </p>
            </StaggerItem>
          </StaggerContainer>

          <ScrollReveal variant="fade-up" delay={0.15} className="pt-10 flex items-center justify-between gap-5 flex-wrap">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#190308] border border-[#DEBF7D]/30 text-[#DEBF7D] text-xs font-mono font-medium">
              <span className="w-2 h-2 rounded-full bg-[#DEBF7D]" />
              <span>Status: Upcoming Vertical In Development</span>
            </div>

            <Link
              href="/businesses/mashaal-rent-a-car"
              className="inline-flex items-center gap-2 bg-[#FAF8F5] hover:bg-[#DEBF7D] text-[#190308] text-xs font-bold uppercase tracking-[0.14em] px-6 py-3 rounded-lg transition-colors"
            >
              <span>Explore Mashaal Rent A Car Profile</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================================
          08 — VERTICAL 04: MASHWANI SHIPPING L.L.C. (NO PICTURE)
          MARITIME IVORY CANVAS (LIGHT)
          ========================================================================= */}
      <section id="shipping" className="bg-[#F4ECE1] text-[#1C1514] py-24 sm:py-32 border-b border-[#DBCFBE]">
        <div className="max-w-corporate mx-auto px-6 sm:px-8 lg:px-12">
          <ScrollReveal variant="fade-up" className="max-w-3xl space-y-4 mb-12">
            <div className="inline-flex items-center gap-2">
              <span className="w-8 h-[1.5px] bg-[#6B1C28]" />
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#8C6B28] font-bold">
                04 / GLOBAL LOGISTICS &amp; FREIGHT FORWARDING
              </span>
            </div>

            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1C1514] leading-[1.08]">
              MASHWANI SHIPPING L.L.C.
            </h2>

            <p className="font-sans text-base sm:text-lg text-[#6B1C28] font-medium">
              &ldquo;We carry trust across global maritime, overland, and air corridors.&rdquo;
            </p>

            <p className="font-sans text-sm sm:text-base text-[#4A403C] leading-relaxed">
              Established in Dubai in 2017. An authorized NVOCC agent providing full-spectrum freight forwarding, containerized sea freight, overland trucking across GCC &amp; Levant, and specialized Afghan transit trade.
            </p>
          </ScrollReveal>

          {/* 4 Verified Credential Cards */}
          <StaggerContainer staggerChildren={0.08} className="grid grid-cols-2 lg:grid-cols-4 gap-4 pb-12 border-b border-[#DBCFBE]">
            <StaggerItem className="p-5 rounded-xl bg-white border border-[#DBCFBE] shadow-sm space-y-1">
              <span className="text-[10px] font-mono uppercase text-[#736762] block">Headquarters</span>
              <span className="font-sans text-lg font-bold text-[#1C1514] block">Dubai, UAE</span>
              <span className="text-[11px] text-[#8C6B28] font-semibold">Est. 2017</span>
            </StaggerItem>
            <StaggerItem className="p-5 rounded-xl bg-white border border-[#DBCFBE] shadow-sm space-y-1">
              <span className="text-[10px] font-mono uppercase text-[#736762] block">License &amp; Role</span>
              <span className="font-sans text-lg font-bold text-[#1C1514] block">Authorized NVOCC</span>
              <span className="text-[11px] text-emerald-700 font-semibold">Direct Carrier Contracts</span>
            </StaggerItem>
            <StaggerItem className="p-5 rounded-xl bg-white border border-[#DBCFBE] shadow-sm space-y-1">
              <span className="text-[10px] font-mono uppercase text-[#736762] block">Transit Network</span>
              <span className="font-sans text-lg font-bold text-[#1C1514] block">Afghan Transit</span>
              <span className="text-[11px] text-[#8C6B28] font-semibold">Dedicated Trailer Fleet</span>
            </StaggerItem>
            <StaggerItem className="p-5 rounded-xl bg-white border border-[#DBCFBE] shadow-sm space-y-1">
              <span className="text-[10px] font-mono uppercase text-[#736762] block">Corridors</span>
              <span className="font-sans text-lg font-bold text-[#1C1514] block">GCC • PK • Global</span>
              <span className="text-[11px] text-[#8C6B28] font-semibold">Multimodal Freight</span>
            </StaggerItem>
          </StaggerContainer>

          {/* 6 Capabilities Grid */}
          <div className="pt-10 space-y-4">
            <ScrollReveal variant="fade-up">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#6B1C28] font-bold block">
                Verified Service Capabilities
              </span>
            </ScrollReveal>
            <StaggerContainer staggerChildren={0.06} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <StaggerItem className="p-5 rounded-xl bg-white/80 border border-[#DBCFBE] shadow-xs space-y-1.5">
                <strong className="text-[#1C1514] font-sans text-sm font-bold block">Air Freight</strong>
                <p className="text-xs text-[#6E625D] leading-relaxed">Express delivery, scheduled cargo, air charters, and project shipments worldwide.</p>
              </StaggerItem>
              <StaggerItem className="p-5 rounded-xl bg-white/80 border border-[#DBCFBE] shadow-xs space-y-1.5">
                <strong className="text-[#1C1514] font-sans text-sm font-bold block">Sea Freight (FCL/LCL)</strong>
                <p className="text-xs text-[#6E625D] leading-relaxed">Dry containers, ISO tanks, breakbulk, and roll-on/roll-off maritime cargo.</p>
              </StaggerItem>
              <StaggerItem className="p-5 rounded-xl bg-white/80 border border-[#DBCFBE] shadow-xs space-y-1.5">
                <strong className="text-[#1C1514] font-sans text-sm font-bold block">Road Transport (GCC &amp; Levant)</strong>
                <p className="text-xs text-[#6E625D] leading-relaxed">Overland full trailer loads across UAE, Saudi Arabia, and regional Middle East routes.</p>
              </StaggerItem>
              <StaggerItem className="p-5 rounded-xl bg-white/80 border border-[#DBCFBE] shadow-xs space-y-1.5">
                <strong className="text-[#1C1514] font-sans text-sm font-bold block">Afghan Transit Trade</strong>
                <p className="text-xs text-[#6E625D] leading-relaxed">Dedicated heavy transport, containerized trailers, and specialized cross-border handling.</p>
              </StaggerItem>
              <StaggerItem className="p-5 rounded-xl bg-white/80 border border-[#DBCFBE] shadow-xs space-y-1.5">
                <strong className="text-[#1C1514] font-sans text-sm font-bold block">Warehousing &amp; Cross-Stuffing</strong>
                <p className="text-xs text-[#6E625D] leading-relaxed">Inventory management, container trading, and cross-stuffing facilities.</p>
              </StaggerItem>
              <StaggerItem className="p-5 rounded-xl bg-white/80 border border-[#DBCFBE] shadow-xs space-y-1.5">
                <strong className="text-[#1C1514] font-sans text-sm font-bold block">EDI Customs Clearance</strong>
                <p className="text-xs text-[#6E625D] leading-relaxed">Port formalities, customs documentation, and local door-to-door deliveries.</p>
              </StaggerItem>
            </StaggerContainer>
          </div>

          {/* Verified Dubai Office */}
          <ScrollReveal variant="fade-up" delay={0.1} className="mt-8 p-6 rounded-xl bg-white border border-[#6B1C28]/25 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
            <div>
              <span className="text-[#6B1C28] font-mono text-[11px] uppercase tracking-wider font-bold block">Dubai Corporate Logistics Office</span>
              <span className="text-[#1C1514] font-sans font-medium block">Office #507, 5th Floor, Abraj Al Mamzar Building, Al Mamzar, Dubai, UAE</span>
            </div>
            <div className="text-right sm:text-left font-mono text-[11px] text-[#4A403C]">
              <span>Tel: +971-4-8863390</span> &nbsp;|&nbsp; <span className="text-[#6B1C28] font-semibold">info@mashwanis.com</span>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.15} className="pt-10 flex items-center gap-5 flex-wrap">
            <Link
              href="/businesses/mashwani-shipping"
              className="inline-flex items-center gap-2 bg-[#24060C] hover:bg-[#370C15] text-white text-xs font-bold uppercase tracking-[0.14em] px-6 py-3 rounded-lg transition-colors"
            >
              <span>Explore Mashwani Shipping Profile</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <a
              href="https://www.mashwanis.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#6B1C28] hover:text-[#C5A059] transition-colors"
            >
              <span>Open Live Shipping Platform</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================================
          09 — GROUP PHILOSOPHY
          STEWARDSHIP HERITAGE OXBLOOD (DARK)
          ========================================================================= */}
      <section className="bg-gradient-to-b from-[#180308] via-[#23060C] to-[#120205] text-[#F7F3EE] py-28 sm:py-36 border-b border-white/10">
        <div className="max-w-corporate mx-auto px-6 sm:px-8 lg:px-12">
          <ScrollReveal variant="fade-up" className="max-w-2xl space-y-3 mb-16">
            <div className="inline-flex items-center gap-2">
              <span className="w-8 h-[1.5px] bg-[#C5A059]" />
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#DEBF7D] font-semibold">
                HOLDING PHILOSOPHY
              </span>
            </div>
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Principles guiding multi-decade growth.
            </h2>
          </ScrollReveal>

          <StaggerContainer staggerChildren={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-10 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {GROUP_PHILOSOPHY.map((pillar, i) => (
              <StaggerItem key={i} className={`${i > 0 ? "pt-8 md:pt-0 md:pl-10" : ""} space-y-3`}>
                <span className="font-mono text-xs font-bold text-[#DEBF7D]">
                  0{i + 1} / PRINCIPLE
                </span>
                <h3 className="font-sans font-semibold text-lg font-bold text-white">
                  {pillar.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#C5B5AE] leading-relaxed">
                  {pillar.desc}
                </p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* =========================================================================
          10 — GLOBAL / REGIONAL PRESENCE
          ALABASTER BROADSHEET (LIGHT)
          ========================================================================= */}
      <section id="presence" className="bg-[#FAF8F5] text-[#1C1514] py-28 sm:py-36 border-b border-[#ECE5DA]">
        <div className="max-w-corporate mx-auto px-6 sm:px-8 lg:px-12">
          <ScrollReveal variant="fade-up" className="max-w-3xl space-y-3 mb-16">
            <div className="inline-flex items-center gap-2">
              <span className="w-8 h-[1.5px] bg-[#6B1C28]" />
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#8C6B28] font-bold">
                OPERATING HUBS
              </span>
            </div>
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1514] tracking-tight uppercase">
              REGIONAL FOOTPRINT &amp; TRADE CORRIDORS
            </h2>
            <p className="text-xs sm:text-sm text-[#6E625D]">
              Presenting verified commercial presence across the United Arab Emirates, Pakistan, and regional transit lines.
            </p>
          </ScrollReveal>

          <StaggerContainer staggerChildren={0.12} className="divide-y divide-[#ECE5DA] border-t border-b border-[#ECE5DA]">
            {/* Hub 1: UAE */}
            <StaggerItem className="py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline">
              <div className="lg:col-span-4 space-y-1">
                <span className="font-mono text-[10px] text-[#8C6B28] uppercase tracking-widest font-bold block">HUB 01</span>
                <h3 className="font-sans font-semibold text-2xl font-bold text-[#1C1514]">United Arab Emirates</h3>
                <span className="text-xs text-[#6B1C28] font-semibold">Dubai Corporate Logistics Office</span>
              </div>
              <div className="lg:col-span-8 text-xs sm:text-sm text-[#4A403C] leading-relaxed space-y-2">
                <p>
                  Mashwani Shipping L.L.C. headquarters at Office #507, Abraj Al Mamzar Building, Al Mamzar, Dubai. Direct service contracts with leading international maritime carriers, air cargo chartering, and GCC customs formalities.
                </p>
                <div className="text-[11px] font-mono text-[#6B1C28] font-semibold">
                  Focus: International Maritime Freight • Container Trading • Cross-Stuffing
                </div>
              </div>
            </StaggerItem>

            {/* Hub 2: Pakistan */}
            <StaggerItem className="py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline">
              <div className="lg:col-span-4 space-y-1">
                <span className="font-mono text-[10px] text-[#8C6B28] uppercase tracking-widest font-bold block">HUB 02</span>
                <h3 className="font-sans font-semibold text-2xl font-bold text-[#1C1514]">Pakistan</h3>
                <span className="text-xs text-[#6B1C28] font-semibold">Energy Forecourts &amp; Transit Grid</span>
              </div>
              <div className="lg:col-span-8 text-xs sm:text-sm text-[#4A403C] leading-relaxed space-y-2">
                <p>
                  Premier authorized fuel stations on Khanpur Road (Total PARCO, Rahim Yar Khan) and Raiwind Road (PSO, Lahore). 100% refinery-sealed tanker sourcing, zero-tolerance calibrated digital dispensing, and 24/7 travel amenities.
                </p>
                <div className="text-[11px] font-mono text-[#6B1C28] font-semibold">
                  Focus: Total PARCO &amp; PSO Outlets • 24/7 M-Mart &amp; Shop Stop • Highway Mobility
                </div>
              </div>
            </StaggerItem>

            {/* Hub 3: Trade Corridors */}
            <StaggerItem className="py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline">
              <div className="lg:col-span-4 space-y-1">
                <span className="font-mono text-[10px] text-[#8C6B28] uppercase tracking-widest font-bold block">HUB 03</span>
                <h3 className="font-sans font-semibold text-2xl font-bold text-[#1C1514]">Regional Corridors</h3>
                <span className="text-xs text-[#6B1C28] font-semibold">GCC • Afghan Transit • India</span>
              </div>
              <div className="lg:col-span-8 text-xs sm:text-sm text-[#4A403C] leading-relaxed space-y-2">
                <p>
                  Specialized overland trucking across Saudi Arabia, Levant countries, and comprehensive Afghan transit trade forwarding with heavy trailer networks and dedicated cross-border handling.
                </p>
                <div className="text-[11px] font-mono text-[#6B1C28] font-semibold">
                  Focus: Cross-Border Land Freight • Project Cargo • Door-to-Door Logistics
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>



    </div>
  );
}

