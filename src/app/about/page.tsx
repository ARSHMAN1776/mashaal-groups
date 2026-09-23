import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, CheckCircle2, Globe2, Building2, Scale, Users } from "lucide-react";
import { BUSINESSES } from "@/lib/data";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

export const metadata = {
  title: "The Group & Governance — MASHAAL GROUP",
  description:
    "Explore the corporate architecture, fiduciary governance, and verified milestones of MASHAAL GROUP as a diversified parent holding enterprise.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-[#190308] text-[#F7F3EE]">
      {/* Page Header */}
      <section className="pt-36 pb-20 border-b border-white/10 bg-gradient-to-b from-[#190308] to-[#24060C]">
        <div className="max-w-corporate mx-auto px-6 sm:px-8 lg:px-12">
          <ScrollReveal variant="fade-up" className="max-w-3xl space-y-4">
            <span className="holding-label text-[#C5A059]">
              THE PARENT ENTERPRISE
            </span>
            <h1 className="font-sans font-bold text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase">
              ABOUT MASHAAL GROUP
            </h1>
            <p className="font-sans text-base sm:text-lg text-[#C5B5AE] leading-relaxed">
              A diversified corporate group governing autonomous businesses across essential industries. Built on operational reliability, patient capital allocation, and institutional integrity.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 01: Who We Are */}
      <section className="bg-[#FAF8F5] text-[#1C1514] py-24 border-b border-[#ECE5DA]">
        <div className="max-w-corporate mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <ScrollReveal variant="fade-up" delay={0.1} className="lg:col-span-6 space-y-6">
              <span className="holding-label text-[#9C857E]">
                WHO WE ARE
              </span>
              <h2 className="font-sans font-bold text-3xl sm:text-4xl font-bold text-[#1C1514] leading-tight">
                An institutional parent structure empowering specialized businesses.
              </h2>
              <div className="w-12 h-[2px] bg-[#C5A059]" />
              <p className="font-sans text-sm sm:text-base text-[#4A403C] leading-relaxed">
                MASHAAL GROUP is structured as a parent corporate group rather than an individual commercial company. By separating strategic holding governance from day-to-day vertical operations, we empower our subsidiary leadership teams to focus entirely on operational excellence within their respective sectors.
              </p>
              <p className="font-sans text-sm sm:text-base text-[#736762] leading-relaxed">
                Our portfolio encompasses critical physical industries: certified energy forecourts under authorized Total PARCO and Pakistan State Oil (PSO) franchises, Dubai-headquartered international freight forwarding and NVOCC logistics through Mashwani Shipping L.L.C., and emerging consumer and mobility divisions in structured planning.
              </p>
            </ScrollReveal>

            <ScrollReveal variant="zoom-in" delay={0.25} className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full rounded overflow-hidden border border-[#ECE5DA] shadow-md bg-[#ECE5DA]">
                <Image
                  src="/images/corporate-headquarters.jpg"
                  alt="Mashaal Group Corporate Headquarters Suite"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 02: Our Approach (The Holding Model) */}
      <section className="bg-[#24060C] text-[#F7F3EE] py-24 border-b border-white/10">
        <div className="max-w-corporate mx-auto px-6 sm:px-8 lg:px-12">
          <ScrollReveal variant="fade-up" className="max-w-2xl space-y-3 mb-16">
            <span className="holding-label text-[#C5A059]">
              OUR APPROACH
            </span>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl font-bold text-white tracking-tight">
              The Three Pillars of Holding Governance
            </h2>
            <p className="text-xs sm:text-sm text-[#C5B5AE]">
              How MASHAAL GROUP creates lasting value across its operating companies.
            </p>
          </ScrollReveal>

          <StaggerContainer staggerChildren={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StaggerItem className="p-8 bg-[#190308] border border-white/10 rounded space-y-4 shadow-xl">
              <div className="w-10 h-10 rounded bg-[#370C15] flex items-center justify-center text-[#DEBF7D]">
                <Scale className="w-5 h-5" />
              </div>
              <h3 className="font-sans font-semibold text-lg font-bold text-white">
                Fiduciary &amp; Capital Stewardship
              </h3>
              <p className="text-xs sm:text-sm text-[#C5B5AE] leading-relaxed">
                Disciplined capital allocation across operating companies ensures each entity maintains a resilient balance sheet, independent financing capacity, and conservative risk management.
              </p>
            </StaggerItem>

            <StaggerItem className="p-8 bg-[#190308] border border-white/10 rounded space-y-4 shadow-xl">
              <div className="w-10 h-10 rounded bg-[#370C15] flex items-center justify-center text-[#DEBF7D]">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-sans font-semibold text-lg font-bold text-white">
                Vertical Autonomy
              </h3>
              <p className="text-xs sm:text-sm text-[#C5B5AE] leading-relaxed">
                Operating companies function with specialized management teams possessing deep sector expertise. The holding board provides governance oversight without stifling operational execution.
              </p>
            </StaggerItem>

            <StaggerItem className="p-8 bg-[#190308] border border-white/10 rounded space-y-4 shadow-xl">
              <div className="w-10 h-10 rounded bg-[#370C15] flex items-center justify-center text-[#DEBF7D]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-sans font-semibold text-lg font-bold text-white">
                Zero-Tolerance Integrity
              </h3>
              <p className="text-xs sm:text-sm text-[#C5B5AE] leading-relaxed">
                From fuel calibration checks to international customs compliance and authenticated freight manifests, uncompromised integrity is mandatory across all portfolio businesses.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* 03: Verified Group Timeline (No Invented Dates!) */}
      <section className="bg-[#FAF8F5] text-[#1C1514] py-24 border-b border-[#ECE5DA]">
        <div className="max-w-corporate mx-auto px-6 sm:px-8 lg:px-12">
          <ScrollReveal variant="fade-up" className="max-w-2xl space-y-3 mb-16">
            <span className="holding-label text-[#9C857E]">
              GROUP TIMELINE
            </span>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl font-bold text-[#1C1514]">
              Verified Milestones &amp; Evolution
            </h2>
            <p className="text-xs sm:text-sm text-[#736762]">
              Chronicle of authentic operating accomplishments across Dubai and Pakistan.
            </p>
          </ScrollReveal>

          <StaggerContainer staggerChildren={0.15} className="max-w-4xl space-y-12 border-l-2 border-[#ECE5DA] pl-6 sm:pl-10 relative ml-4">
            {/* Milestone: Mashwani 2017 */}
            <StaggerItem className="relative space-y-2">
              <div className="absolute -left-[31px] sm:-left-[47px] top-1 w-4 h-4 rounded-full bg-[#6B1C28] border-4 border-[#FAF8F5]" />
              <div className="flex items-center gap-3">
                <span className="font-mono text-xl font-bold text-[#6B1C28]">2017</span>
                <span className="text-xs font-mono uppercase tracking-widest text-[#9C857E]">
                  Dubai, United Arab Emirates
                </span>
              </div>
              <h3 className="font-sans font-semibold text-lg font-bold text-[#1C1514]">
                Establishment of Mashwani Shipping L.L.C.
              </h3>
              <p className="text-xs sm:text-sm text-[#4A403C] leading-relaxed">
                Incorporated in Dubai as an NVOCC agent and international freight forwarder. Secured direct ocean carrier service contracts and developed vital logistics corridors spanning GCC, Pakistan, India, and specialized Afghan transit trade.
              </p>
            </StaggerItem>

            {/* Milestone: Petroleum Forecourt Expansion */}
            <StaggerItem className="relative space-y-2">
              <div className="absolute -left-[31px] sm:-left-[47px] top-1 w-4 h-4 rounded-full bg-[#6B1C28] border-4 border-[#FAF8F5]" />
              <div className="flex items-center gap-3">
                <span className="font-mono text-xl font-bold text-[#6B1C28]">Operational Network</span>
                <span className="text-xs font-mono uppercase tracking-widest text-[#9C857E]">
                  Punjab, Pakistan
                </span>
              </div>
              <h3 className="font-sans font-semibold text-lg font-bold text-[#1C1514]">
                Authorized Total PARCO &amp; PSO Forecourt Network
              </h3>
              <p className="text-xs sm:text-sm text-[#4A403C] leading-relaxed">
                Development and operation of flagship certified fuel stations on Khanpur Road (District Rahim Yar Khan) and Raiwind Road (Lahore), instituting 100% refinery-sealed fuel supplies, digital volumetric checks, and 24/7 highway hospitality.
              </p>
            </StaggerItem>

            {/* Milestone: Holding Consolidation */}
            <StaggerItem className="relative space-y-2">
              <div className="absolute -left-[31px] sm:-left-[47px] top-1 w-4 h-4 rounded-full bg-[#6B1C28] border-4 border-[#FAF8F5]" />
              <div className="flex items-center gap-3">
                <span className="font-mono text-xl font-bold text-[#6B1C28]">Present Era</span>
                <span className="text-xs font-mono uppercase tracking-widest text-[#9C857E]">
                  Parent Group Governance
                </span>
              </div>
              <h3 className="font-sans font-semibold text-lg font-bold text-[#1C1514]">
                Formalization of MASHAAL GROUP Brand Architecture
              </h3>
              <p className="text-xs sm:text-sm text-[#4A403C] leading-relaxed">
                Consolidation of holding structure to unify oversight across operating companies and steer measured expansion into consumer food commodities (Mashaal Foods) and corporate transport (Mashaal Rent A Car).
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* 04: Leadership & Governance Ethos */}
      <section id="leadership" className="bg-[#190308] text-[#F7F3EE] py-24">
        <div className="max-w-corporate mx-auto px-6 sm:px-8 lg:px-12">
          <ScrollReveal variant="fade-up" className="max-w-3xl space-y-6">
            <span className="holding-label text-[#C5A059]">
              LEADERSHIP ETHOS
            </span>
            <blockquote className="font-sans font-bold text-2xl sm:text-3xl lg:text-4xl text-white font-normal leading-relaxed italic">
              &ldquo;A diversified group is only as strong as the physical integrity of its operating businesses. We build not on speculative promises, but on tangible infrastructure, reliable trade corridors, and respect for every partner and motorist we serve.&rdquo;
            </blockquote>
            <div className="pt-2">
              <span className="font-sans font-semibold text-sm font-bold text-white block">
                Executive Directorate &amp; Holding Advisory Board
              </span>
              <span className="text-xs text-[#DEBF7D] font-mono">
                MASHAAL GROUP Holding Enterprise
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
