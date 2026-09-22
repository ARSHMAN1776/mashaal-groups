import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Fuel, CheckCircle2, ShieldCheck, MapPin, Clock } from "lucide-react";
import { BUSINESSES } from "@/lib/data";

export const metadata = {
  title: "Mashal Petroleum — Energy & Forecourts | MASHAL GROUP",
  description:
    "Mashal Petroleum operates certified Total PARCO (Rahim Yar Khan) and Pakistan State Oil (Raiwind Lahore) forecourts under 100% refinery-sealed fuel integrity and digital calibration.",
};

export default function MashalPetroleumPage() {
  const business = BUSINESSES.find((b) => b.id === "petroleum")!;

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
                Vertical 01 / Energy
              </span>
              <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded font-semibold bg-emerald-950/70 text-emerald-400 border border-emerald-500/30">
                Active Operating Vertical
              </span>
            </div>

            <h1 className="font-sans font-bold text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase">
              MASHAL PETROLEUM
            </h1>

            <p className="font-sans font-bold italic text-lg sm:text-xl text-[#DEBF7D]">
              &ldquo;Two iconic forecourts. One uncompromising standard of fuel integrity.&rdquo;
            </p>

            <p className="font-sans text-sm sm:text-base text-[#C5B5AE] leading-relaxed">
              Serving private motorists, transit travelers, and industrial transport fleets across Punjab with authorized Total PARCO and Pakistan State Oil (PSO) forecourts.
            </p>

            <div className="pt-2 flex items-center gap-4">
              <a
                href={business.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#FAF8F5] hover:bg-[#DEBF7D] text-[#190308] text-xs font-semibold uppercase tracking-[0.14em] px-6 py-3 rounded transition-all shadow-md"
              >
                <span>Visit Official Forecourt Site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-[0.14em] px-6 py-3 rounded border border-white/20 transition-all"
              >
                <span>Commercial Inquiries</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Visual & Core Narrative */}
      <section className="bg-[#24060C] py-20 border-b border-white/10">
        <div className="max-w-corporate mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] w-full rounded overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src={business.image}
                  alt="Mashal Petroleum Infrastructure"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <span className="holding-label text-[#C5A059]">
                FUEL INTEGRITY AUDIT
              </span>
              <h2 className="font-sans font-bold text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Physical Quality Over Slogans
              </h2>
              <p className="text-xs sm:text-sm text-[#C5B5AE] leading-relaxed">
                Mashaal Petroleum receives tanker dispatches directly from official refinery terminals, entirely eliminating third-party fuel blending. Digital volumetric dispensers undergo routine physical calibration tests to ensure zero-tolerance accuracy for every liter dispensed.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-3.5 bg-[#190308] border border-white/10 rounded flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <strong className="text-white block">100% Refinery-Sealed</strong>
                    <span className="text-[#C5B5AE]">Received direct from Total PARCO &amp; PSO terminals.</span>
                  </div>
                </div>

                <div className="p-3.5 bg-[#190308] border border-white/10 rounded flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <strong className="text-white block">Volumetric Check on Request</strong>
                    <span className="text-[#C5B5AE]">Physical measure gauges available at all times for motorists.</span>
                  </div>
                </div>

                <div className="p-3.5 bg-[#190308] border border-white/10 rounded flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <strong className="text-white block">24/7/365 Continuous Service</strong>
                    <span className="text-[#C5B5AE]">Round-the-clock fuel, convenience marts, and travel facilities.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two Forecourt Outlets */}
      <section className="bg-[#FAF8F5] text-[#1C1514] py-24 border-b border-[#ECE5DA]">
        <div className="max-w-corporate mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-2xl space-y-3 mb-16">
            <span className="holding-label text-[#9C857E]">
              FORECOURT LOCATIONS
            </span>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl font-bold text-[#1C1514]">
              Two Iconic Outlets in Punjab
            </h2>
            <p className="text-xs sm:text-sm text-[#736762]">
              Strategically located along key regional logistics and transit corridors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Forecourt 1: PARCO */}
            <div className="p-8 bg-white border border-[#ECE5DA] rounded space-y-5 shadow-xs">
              <div className="flex items-center justify-between pb-3 border-b border-[#ECE5DA]">
                <div>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-red-50 text-red-700 font-bold border border-red-200">
                    PARCO Authorized
                  </span>
                  <h3 className="font-sans font-semibold text-xl font-bold text-[#1C1514] mt-2">
                    Total PARCO Forecourt
                  </h3>
                </div>
                <span className="text-xs font-mono text-[#736762]">Open 24/7</span>
              </div>

              <div className="space-y-2 text-xs text-[#4A403C]">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#6B1C28] flex-shrink-0 mt-0.5" />
                  <span>Khanpur Road, District Rahim Yar Khan, Punjab, Pakistan</span>
                </div>
                <p className="text-[11px] text-[#736762] pl-6">
                  Key highway artery serving southern Punjab transit and agricultural transport.
                </p>
              </div>

              <div className="pt-2 border-t border-[#ECE5DA] space-y-2 text-xs">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#9C857E] block">
                  On-Site Provisions
                </span>
                <ul className="grid grid-cols-2 gap-2 text-[11px] text-[#4A403C]">
                  <li>• Total Excellium Fuels</li>
                  <li>• Calibrated Dispensing</li>
                  <li>• 24/7 M-Mart</li>
                  <li>• Modern Washrooms</li>
                  <li>• Executive Prayer Hall</li>
                  <li>• Auto Wash &amp; Tire Air</li>
                </ul>
              </div>
            </div>

            {/* Forecourt 2: PSO */}
            <div className="p-8 bg-white border border-[#ECE5DA] rounded space-y-5 shadow-xs">
              <div className="flex items-center justify-between pb-3 border-b border-[#ECE5DA]">
                <div>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">
                    PSO Official
                  </span>
                  <h3 className="font-sans font-semibold text-xl font-bold text-[#1C1514] mt-2">
                    Pakistan State Oil (PSO) Forecourt
                  </h3>
                </div>
                <span className="text-xs font-mono text-[#736762]">Open 24/7</span>
              </div>

              <div className="space-y-2 text-xs text-[#4A403C]">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
                  <span>Raiwind Road, Raiwind, Lahore, Punjab, Pakistan</span>
                </div>
                <p className="text-[11px] text-[#736762] pl-6">
                  Major industrial and commuter corridor serving greater Lahore and Raiwind.
                </p>
              </div>

              <div className="pt-2 border-t border-[#ECE5DA] space-y-2 text-xs">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#9C857E] block">
                  On-Site Provisions
                </span>
                <ul className="grid grid-cols-2 gap-2 text-[11px] text-[#4A403C]">
                  <li>• Altron X 97 Gasoline</li>
                  <li>• Euro-5 Diesel Fuel</li>
                  <li>• 24/7 Shop Stop Mart</li>
                  <li>• On-Site 24/7 ATM</li>
                  <li>• Cashless PSO Card Desk</li>
                  <li>• Commercial Fleet Service</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
