import Link from "next/link";
import { Building2, MapPin, Phone, Mail, Clock, Globe2, ArrowRight } from "lucide-react";
import InquiryForm from "@/components/forms/InquiryForm";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

export const metadata = {
  title: "Corporate Offices & Inquiries — MASHAAL GROUP",
  description:
    "Contact MASHAAL GROUP corporate holding leadership or connect directly with our subsidiary operating offices in Dubai and Pakistan.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full bg-[#190308] text-[#F7F3EE]">
      {/* Header */}
      <section className="pt-36 pb-20 border-b border-white/10 bg-gradient-to-b from-[#190308] to-[#24060C]">
        <div className="max-w-corporate mx-auto px-6 sm:px-8 lg:px-12">
          <ScrollReveal variant="fade-up" className="max-w-3xl space-y-4">
            <span className="holding-label text-[#C5A059]">
              COMMUNICATIONS DIRECTORY
            </span>
            <h1 className="font-sans font-bold text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase">
              CONTACT &amp; OFFICES
            </h1>
            <p className="font-sans text-base sm:text-lg text-[#C5B5AE] leading-relaxed">
              Connect directly with the MASHAAL GROUP parent executive office or route operational matters to specific subsidiary operating desks.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Offices Grid */}
      <section className="bg-[#24060C] py-24 border-b border-white/10">
        <div className="max-w-corporate mx-auto px-6 sm:px-8 lg:px-12">
          <StaggerContainer staggerChildren={0.12} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Office 1: Group Executive */}
            <StaggerItem className="p-8 bg-[#190308] border border-white/10 rounded-xl space-y-4 shadow-xl hover:border-[#DEBF7D]/50 transition-all duration-300">
              <div className="w-10 h-10 rounded bg-[#370C15] flex items-center justify-center text-[#DEBF7D]">
                <Building2 className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#DEBF7D] block">
                Parent Holding
              </span>
              <h2 className="font-sans font-semibold text-xl font-bold text-white">
                Group Executive Office
              </h2>
              <p className="text-xs text-[#C5B5AE] leading-relaxed">
                Central corporate governance, capital allocation, institutional relations, and media inquiries.
              </p>
              <div className="pt-4 border-t border-white/10 space-y-2 text-xs font-mono text-[#F7F3EE]">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#C5A059]" />
                  <span>inquiries@mashaalgroups.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe2 className="w-4 h-4 text-[#C5A059]" />
                  <span>United Arab Emirates &amp; Regional Desks</span>
                </div>
              </div>
            </StaggerItem>

            {/* Office 2: Dubai Logistics (Mashwani) */}
            <StaggerItem className="p-8 bg-[#190308] border border-white/10 rounded-xl space-y-4 shadow-xl hover:border-[#DEBF7D]/50 transition-all duration-300">
              <div className="w-10 h-10 rounded bg-[#370C15] flex items-center justify-center text-[#DEBF7D]">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#DEBF7D] block">
                Logistics Vertical • Established 2017
              </span>
              <h2 className="font-sans font-semibold text-xl font-bold text-white">
                Dubai Logistics Office (Mashwani)
              </h2>
              <p className="text-xs text-[#C5B5AE] leading-relaxed">
                Office #507, 5th Floor, Abraj Al Mamzar Building, P.O. Box 42596, Al Mamzar, Dubai, 94507 – U.A.E.
              </p>
              <div className="pt-4 border-t border-white/10 space-y-2 text-xs font-mono text-[#F7F3EE]">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#C5A059]" />
                  <span>+971-4-3239360</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#C5A059]" />
                  <span>+971 50 816 8622 (Mobile Dispatch)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#C5A059]" />
                  <span>info@mashwanis.com</span>
                </div>
              </div>
            </StaggerItem>

            {/* Office 3: Punjab Forecourts (Petroleum) */}
            <StaggerItem className="p-8 bg-[#190308] border border-white/10 rounded-xl space-y-4 shadow-xl hover:border-[#DEBF7D]/50 transition-all duration-300">
              <div className="w-10 h-10 rounded bg-[#370C15] flex items-center justify-center text-[#DEBF7D]">
                <Clock className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#DEBF7D] block">
                Energy Vertical • 24/7 Continuous
              </span>
              <h2 className="font-sans font-semibold text-xl font-bold text-white">
                Punjab Forecourt Operations
              </h2>
              <p className="text-xs text-[#C5B5AE] leading-relaxed">
                Total PARCO Forecourt (Khanpur Road, Rahim Yar Khan) &amp; Pakistan State Oil Forecourt (Raiwind Road, Lahore), Punjab, Pakistan.
              </p>
              <div className="pt-4 border-t border-white/10 space-y-2 text-xs font-mono text-[#F7F3EE]">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#C5A059]" />
                  <span>Continuous 24/7/365 Sourcing &amp; Dispensation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#C5A059]" />
                  <span>contact@mashaalpetroleum.pk</span>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="bg-[#FAF8F5] text-[#1C1514] py-24">
        <div className="max-w-corporate mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <ScrollReveal variant="fade-up" className="lg:col-span-5 space-y-6">
              <span className="holding-label text-[#9C857E]">
                FORMAL INQUIRIES
              </span>
              <h2 className="font-sans font-bold text-3xl sm:text-4xl font-bold text-[#1C1514] leading-tight">
                Submit an institutional inquiry to the group.
              </h2>
              <div className="w-12 h-[2px] bg-[#C5A059]" />
              <p className="font-sans text-sm sm:text-base text-[#4A403C] leading-relaxed">
                Whether you are seeking corporate partnership discussions, supply-chain vendor onboarding, freight forwarding quotations, or general information regarding MASHAAL GROUP, our secretariat coordinates direct routing to appropriate decision-makers.
              </p>

              <div className="p-6 bg-[#ECE5DA]/60 border border-[#ECE5DA] rounded space-y-3">
                <span className="text-xs font-sans font-semibold uppercase text-[#1C1514] block">
                  Holding Secretariat Protocol
                </span>
                <p className="text-xs text-[#736762] leading-relaxed">
                  All official communications receive structured tracking. For emergency maritime forwarding or time-sensitive fuel logistics, please contact operational dispatch numbers directly.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={0.15} className="lg:col-span-7">
              <div className="bg-white p-8 sm:p-10 border border-[#ECE5DA] rounded shadow-sm">
                <InquiryForm />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
