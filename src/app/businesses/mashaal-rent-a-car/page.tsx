import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, ShieldCheck, Car, Clock, Fuel, CheckCircle2 } from "lucide-react";
import { BUSINESSES } from "@/lib/data";

export const metadata = {
  title: "Mashaal Rent A Car — Mobility & Transportation | MASHAAL GROUP",
  description:
    "Mashaal Rent A Car is an active operating mobility vertical within MASHAAL GROUP, providing corporate fleet leasing, executive transit, and reliable car rental services.",
};

export default function MashaalRentACarPage() {
  const business = BUSINESSES.find((b) => b.id === "rentacar")!;

  return (
    <div className="flex flex-col w-full bg-[#190308] text-[#F7F3EE]">
      {/* Header */}
      <section className="pt-36 pb-20 border-b border-white/10 bg-gradient-to-b from-[#190308] to-[#24060C]">
        <div className="max-w-corporate mx-auto px-6 sm:px-8 lg:px-12">
          <Link
            href="/businesses"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C5A059] hover:text-[#DEBF7D] mb-6 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Verticals</span>
          </Link>

          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-[#C5A059] uppercase tracking-widest">
                Vertical 03 / Mobility
              </span>
              <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded font-semibold bg-emerald-950/70 text-emerald-400 border border-emerald-500/30 inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Active Operating Vertical</span>
              </span>
            </div>

            <h1 className="font-sans font-bold text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase">
              MASHAAL RENT A CAR
            </h1>

            <p className="font-sans font-bold italic text-lg sm:text-xl text-[#DEBF7D]">
              &ldquo;Executive mobility, reliable transit, and corporate fleet solutions.&rdquo;
            </p>

            <p className="font-sans text-sm sm:text-base text-[#C5B5AE] leading-relaxed">
              Delivering structured corporate fleet solutions, executive transit, and high-reliability mobility services across commercial enterprises and individual travelers.
            </p>

            <div className="pt-2 flex items-center gap-4 flex-wrap">
              {business.externalUrl && (
                <a
                  href={business.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#FAF8F5] hover:bg-[#DEBF7D] text-[#190308] text-xs font-semibold uppercase tracking-[0.14em] px-6 py-3 rounded transition-all shadow-md"
                >
                  <span>Visit Official Rent A Car Platform</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-[0.14em] px-6 py-3 rounded border border-white/20 transition-all"
              >
                <span>Corporate Fleet Inquiries</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Visual & Core Narrative */}
      <section className="bg-[#24060C] py-20 border-b border-white/10">
        <div className="max-w-corporate mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full rounded overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src={business.image}
                  alt="Mashaal Rent A Car Fleet"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="holding-label text-[#C5A059]">
                MOBILITY ARCHITECTURE
              </span>
              <h2 className="font-sans font-bold text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Corporate Fleet &amp; Passenger Transit
              </h2>
              <p className="text-xs sm:text-sm text-[#C5B5AE] leading-relaxed">
                Positioned to complement the group&apos;s energy forecourts and commercial logistics infrastructure, Mashaal Rent A Car delivers disciplined mobility management for executive clients, enterprise fleet leasing, and long-distance passenger travel.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-3.5 bg-[#190308] border border-white/10 rounded flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <strong className="text-white block">Certified Safety Inspections</strong>
                    <span className="text-[#C5B5AE]">Routine mechanical audits, manufacturer servicing, and certified roadworthiness.</span>
                  </div>
                </div>

                <div className="p-3.5 bg-[#190308] border border-white/10 rounded flex items-start gap-3">
                  <Fuel className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <strong className="text-white block">Forecourt Hub Synergy</strong>
                    <span className="text-[#C5B5AE]">Direct integration with Mashaal Petroleum forecourts for rapid turnaround and maintenance.</span>
                  </div>
                </div>

                <div className="p-3.5 bg-[#190308] border border-white/10 rounded flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <strong className="text-white block">24/7 Roadside &amp; Transit Support</strong>
                    <span className="text-[#C5B5AE]">Round-the-clock emergency replacement vehicles and customer assistance.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services & Key Pillars */}
      <section className="bg-[#FAF8F5] text-[#1C1514] py-20 border-b border-[#ECE5DA]">
        <div className="max-w-corporate mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-2xl space-y-3 mb-12">
            <span className="holding-label text-[#9C857E]">
              FLEET SERVICES
            </span>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl font-bold text-[#1C1514]">
              Structured Mobility &amp; Transit Solutions
            </h2>
            <p className="text-xs sm:text-sm text-[#736762]">
              Professional vehicle solutions designed for corporate clients, business executives, and motorists.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {business.services?.map((service, idx) => (
              <div
                key={idx}
                className="p-6 bg-white border border-[#ECE5DA] rounded-lg space-y-3 shadow-xs"
              >
                <div className="w-8 h-8 rounded bg-[#24060C] text-[#DEBF7D] flex items-center justify-center font-mono text-xs font-bold">
                  0{idx + 1}
                </div>
                <h3 className="font-sans font-bold text-sm text-[#1C1514]">{service}</h3>
                <p className="text-xs text-[#736762] leading-relaxed">
                  Engineered with premium vehicle comfort, verified mechanical safety, and transparent corporate agreements.
                </p>
              </div>
            ))}
          </div>

          {/* Live Platform Banner */}
          {business.externalUrl && (
            <div className="mt-12 p-8 rounded-xl bg-[#24060C] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-6 border border-white/10">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-widest text-[#DEBF7D]">
                  Live Digital Platform
                </span>
                <h3 className="text-xl font-bold">Access Mashaal Rent A Car Official Portal</h3>
                <p className="text-xs text-[#C5B5AE]">
                  Reserve executive transport, browse corporate fleet leasing options, and check real-time availability.
                </p>
              </div>
              <a
                href={business.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#DEBF7D] hover:bg-white text-[#190308] text-xs font-semibold uppercase tracking-widest px-6 py-3 rounded transition-all shrink-0"
              >
                <span>rentacar.mashaalgroups.com</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
