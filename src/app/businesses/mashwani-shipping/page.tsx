import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Ship, Plane, Truck, Building2, ShieldCheck, MapPin, Phone, Mail } from "lucide-react";
import { BUSINESSES } from "@/lib/data";

export const metadata = {
  title: "Mashwani Shipping L.L.C. — Global Logistics | MASHAAL GROUP",
  description:
    "Dubai-based NVOCC and international logistics specialist established in 2017, providing multimodal freight forwarding, GCC overland transport, and specialized Afghan transit trade.",
};

export default function MashwaniShippingPage() {
  const business = BUSINESSES.find((b) => b.id === "shipping")!;

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
                Vertical 02 / Global Logistics
              </span>
              <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded font-semibold bg-emerald-950/70 text-emerald-400 border border-emerald-500/30">
                Active Operating Vertical
              </span>
            </div>

            <h1 className="font-sans font-bold text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase">
              MASHWANI SHIPPING L.L.C.
            </h1>

            <p className="font-sans font-bold italic text-lg sm:text-xl text-[#DEBF7D]">
              &ldquo;We carry trust across global maritime, overland, and transit corridors.&rdquo;
            </p>

            <p className="font-sans text-sm sm:text-base text-[#C5B5AE] leading-relaxed">
              Established in Dubai in 2017. An authorized NVOCC agent and international transport specialist connecting trade across Pakistan, the Middle East (GCC), India, and worldwide destinations.
            </p>

            <div className="pt-2 flex items-center gap-4">
              <a
                href={business.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#FAF8F5] hover:bg-[#DEBF7D] text-[#190308] text-xs font-semibold uppercase tracking-[0.14em] px-6 py-3 rounded transition-all shadow-md"
              >
                <span>Visit Mashwani Platform</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-[0.14em] px-6 py-3 rounded border border-white/20 transition-all"
              >
                <span>Logistics Quotations</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Visual & Corporate Identity */}
      <section className="bg-[#24060C] py-20 border-b border-white/10">
        <div className="max-w-corporate mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] w-full rounded overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src={business.image}
                  alt="Mashwani Shipping Maritime Freight"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <span className="holding-label text-[#C5A059]">
                ESTABLISHED CREDIBILITY
              </span>
              <h2 className="font-sans font-bold text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Global Freight With Regional Strength
              </h2>
              <p className="text-xs sm:text-sm text-[#C5B5AE] leading-relaxed">
                Mashwani Shipping L.L.C. began operations in the United Arab Emirates in 2017. As an authorized NVOCC agent with carrier service contracts, the company secures competitive shipping rates, space allocations, and end-to-end cargo reliability.
              </p>

              <div className="p-5 bg-[#190308] border border-white/10 rounded space-y-3">
                <div className="flex items-center gap-2 text-[#DEBF7D]">
                  <Building2 className="w-4 h-4" />
                  <span className="font-sans font-semibold text-sm font-bold text-white">
                    Dubai Corporate Office
                  </span>
                </div>
                <p className="text-xs text-[#C5B5AE] leading-relaxed">
                  Office #507, 5th Floor, Abraj Al Mamzar Building, P.O. Box 42596, Al Mamzar, Dubai, 94507 – U.A.E.
                </p>
                <div className="space-y-1 text-xs font-mono text-[#F7F3EE] pt-1">
                  <div>Telephone: +971-4-8863390</div>
                  <div>Direct Dispatch: +971 50 816 8622</div>
                  <div>Email: info@mashwanis.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Service Breakdown */}
      <section className="bg-[#FAF8F5] text-[#1C1514] py-24 border-b border-[#ECE5DA]">
        <div className="max-w-corporate mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-2xl space-y-3 mb-16">
            <span className="holding-label text-[#9C857E]">
              OPERATING CAPABILITIES
            </span>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl font-bold text-[#1C1514]">
              Multimodal Freight &amp; Specialized Transit
            </h2>
            <p className="text-xs sm:text-sm text-[#736762]">
              Verified service offerings documented from active operating platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white border border-[#ECE5DA] rounded space-y-2">
              <span className="font-mono text-xs text-[#6B1C28] font-bold">01 / AIR FREIGHT</span>
              <h3 className="font-sans font-semibold text-base font-bold text-[#1C1514]">Air Cargo &amp; Charters</h3>
              <p className="text-xs text-[#4A403C] leading-relaxed">
                Express delivery, scheduled consolidations, air chartering, project cargo handling, and consular documentation.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#ECE5DA] rounded space-y-2">
              <span className="font-mono text-xs text-[#6B1C28] font-bold">02 / SEA FREIGHT</span>
              <h3 className="font-sans font-semibold text-base font-bold text-[#1C1514]">FCL, LCL &amp; Breakbulk</h3>
              <p className="text-xs text-[#4A403C] leading-relaxed">
                Containerized shipping, ISO tank containers, out-of-gauge shipments, Ro/Ro cargo, and direct vessel carrier connections.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#ECE5DA] rounded space-y-2">
              <span className="font-mono text-xs text-[#6B1C28] font-bold">03 / ROAD TRANSPORT</span>
              <h3 className="font-sans font-semibold text-base font-bold text-[#1C1514]">GCC &amp; Levant Trucking</h3>
              <p className="text-xs text-[#4A403C] leading-relaxed">
                Regular full trailer loads and flexible overland road transport across United Arab Emirates, Saudi Arabia, and Levant countries.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#ECE5DA] rounded space-y-2">
              <span className="font-mono text-xs text-[#6B1C28] font-bold">04 / AFGHAN TRANSIT</span>
              <h3 className="font-sans font-semibold text-base font-bold text-[#1C1514]">Specialized Transit Trade</h3>
              <p className="text-xs text-[#4A403C] leading-relaxed">
                Specialized in Afghan transit cargo with nation-wide trailer networks, container handling, and heavy project transportation.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#ECE5DA] rounded space-y-2">
              <span className="font-mono text-xs text-[#6B1C28] font-bold">05 / WAREHOUSING</span>
              <h3 className="font-sans font-semibold text-base font-bold text-[#1C1514]">Cross-Stuffing &amp; Trading</h3>
              <p className="text-xs text-[#4A403C] leading-relaxed">
                Inventory storage, cross-stuffing services, container trading, and integrated supply chain distribution management.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#ECE5DA] rounded space-y-2">
              <span className="font-mono text-xs text-[#6B1C28] font-bold">06 / CUSTOMS CLEARANCE</span>
              <h3 className="font-sans font-semibold text-base font-bold text-[#1C1514]">EDI Clearance &amp; Delivery</h3>
              <p className="text-xs text-[#4A403C] leading-relaxed">
                Comprehensive UAE customs formalities, exit documentation, transfer of ownership, licensing, and local door delivery.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
