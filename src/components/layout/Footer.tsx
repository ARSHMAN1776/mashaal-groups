import Link from "next/link";
import { ArrowUpRight, MapPin, Phone, Mail, Building2, Globe2, ShieldCheck } from "lucide-react";
import { BUSINESSES } from "@/lib/data";
import BrandLogo from "@/components/ui/BrandLogo";

export default function Footer() {
  return (
    <footer className="bg-[#190308] border-t border-white/10 text-[#F7F3EE] pt-16 pb-12">
      <div className="max-w-corporate mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Tier: Holding Identity & Quick Links */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="group inline-flex items-center gap-3">
              <BrandLogo className="w-10 h-10" />
              <div className="flex flex-col">
                <span className="font-sans text-xl font-bold tracking-[0.08em] text-white block uppercase group-hover:text-[#DEBF7D] transition-colors">
                  MASHAAL GROUPS
                </span>
                <span className="text-[9px] uppercase tracking-[0.24em] text-[#DEBF7D] font-mono">
                  PARENT HOLDING ENTERPRISE
                </span>
              </div>
            </Link>
            <p className="text-sm text-[#C5B5AE] leading-relaxed max-w-sm">
              A diversified corporate group governing independent operating businesses across energy forecourts, global maritime freight, consumer sectors, and mobility.
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs text-[#DEBF7D]">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/5 border border-white/10">
                <Globe2 className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>UAE &amp; Pakistan Corridors</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/5 border border-white/10">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Institutional Governance</span>
              </span>
            </div>
          </div>

          {/* Business Directory Col */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-[11px] font-mono tracking-widest uppercase text-[#C5A059] block">
              Business Verticals
            </span>
            <ul className="space-y-2.5 text-xs">
              {BUSINESSES.map((b) => (
                <li key={b.id}>
                  <Link
                    href={`/businesses/${b.slug}`}
                    className="group inline-flex items-center justify-between w-full hover:text-[#DEBF7D] transition-colors"
                  >
                    <span className="text-[#F7F3EE] group-hover:text-white">
                      {b.name}
                    </span>
                    <span className="text-[10px] text-[#C5B5AE] font-mono">
                      {b.status === "Active" ? "Operating" : "Upcoming"}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Group Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-[11px] font-mono tracking-widest uppercase text-[#C5A059] block">
              The Group
            </span>
            <ul className="space-y-2.5 text-xs text-[#C5B5AE]">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Corporate Architecture
                </Link>
              </li>
              <li>
                <Link href="/about#leadership" className="hover:text-white transition-colors">
                  Leadership &amp; Ethos
                </Link>
              </li>
              <li>
                <Link href="/businesses" className="hover:text-white transition-colors">
                  Portfolio Matrix
                </Link>
              </li>
              <li>
                <Link href="/#presence" className="hover:text-white transition-colors">
                  Regional Footprint
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Holding Office
                </Link>
              </li>
            </ul>
          </div>

          {/* Verified Regional Offices */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-[11px] font-mono tracking-widest uppercase text-[#C5A059] block">
              Verified Office Presence
            </span>
            <div className="space-y-3 text-xs text-[#C5B5AE]">
              <div className="p-3 bg-[#24060C] border border-white/10 rounded">
                <div className="font-semibold text-white mb-1 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Dubai Logistics Office (Mashwani)</span>
                </div>
                <p className="text-[11px] leading-relaxed">
                  Office #507, 5th Floor, Abraj Al Mamzar Building, Al Mamzar, Dubai, UAE
                </p>
                <p className="text-[11px] text-[#DEBF7D] mt-1 font-mono">
                  Tel: +971-4-3239360
                </p>
              </div>

              <div className="p-3 bg-[#24060C] border border-white/10 rounded">
                <div className="font-semibold text-white mb-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Punjab Forecourts (Mashal Petroleum)</span>
                </div>
                <p className="text-[11px] leading-relaxed">
                  Total PARCO Khanpur Rd, Rahim Yar Khan &amp; PSO Raiwind Rd, Lahore
                </p>
                <p className="text-[11px] text-[#DEBF7D] mt-1 font-mono">
                  24/7 Forecourt Operations
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#C5B5AE]">
          <div>
            &copy; {new Date().getFullYear()} MASHAL GROUP. All rights reserved. Diversified parent corporate holding.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-white transition-colors">
              Holding Governance
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Fiduciary Inquiries
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Direct Subsidiary Desks
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
