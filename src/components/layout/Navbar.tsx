"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
import { BUSINESSES } from "@/lib/data";
import BrandLogo from "@/components/ui/BrandLogo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [businessesDropdown, setBusinessesDropdown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setBusinessesDropdown(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#190308]/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-3.5"
          : "bg-gradient-to-b from-[#190308]/90 via-[#24060C]/60 to-transparent border-b border-white/5 py-5"
      }`}
    >
      <div className="max-w-corporate mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Logo - Optimized Minimal & Premium */}
        <Link
          href="/"
          className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] py-1"
          aria-label="MASHAAL GROUPS Corporate Holding"
        >
          {/* Corporate SVG Emblem */}
          <BrandLogo className="w-9 h-9 sm:w-10 sm:h-10" />

          <div className="flex flex-col">
            <span className="font-sans font-bold text-base sm:text-lg tracking-[0.08em] text-white uppercase group-hover:text-[#DEBF7D] transition-colors leading-tight">
              MASHAAL GROUPS
            </span>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
              <span className="text-[9px] font-mono uppercase tracking-[0.22em] text-[#C5B5AE] font-medium leading-none">
                HOLDING ENTERPRISE
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
          <Link
            href="/"
            className={`text-xs uppercase tracking-[0.14em] font-medium transition-colors hover:text-[#DEBF7D] ${
              pathname === "/" ? "text-[#DEBF7D] font-semibold" : "text-[#F7F3EE]"
            }`}
          >
            Overview
          </Link>

          <Link
            href="/about"
            className={`text-xs uppercase tracking-[0.16em] font-medium transition-colors hover:text-[#DEBF7D] ${
              pathname === "/about" ? "text-[#DEBF7D] font-semibold" : "text-[#F7F3EE]"
            }`}
          >
            The Group
          </Link>

          {/* Businesses Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setBusinessesDropdown(true)}
            onMouseLeave={() => setBusinessesDropdown(false)}
          >
            <Link
              href="/businesses"
              className={`flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] font-medium transition-colors hover:text-[#DEBF7D] ${
                pathname.startsWith("/businesses") ? "text-[#DEBF7D] font-semibold" : "text-[#F7F3EE]"
              }`}
            >
              <span>Our Businesses</span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-[#C5B5AE] transition-transform duration-200 ${
                  businessesDropdown ? "rotate-180 text-[#DEBF7D]" : ""
                }`}
              />
            </Link>

            {/* Dropdown Card */}
            {businessesDropdown && (
              <div className="absolute top-full -left-6 pt-3 w-80 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="bg-[#24060C] border border-white/15 rounded-md shadow-2xl p-3 backdrop-blur-xl">
                  <div className="text-[10px] font-mono tracking-widest text-[#C5B5AE] uppercase px-3 py-1.5 border-b border-white/10 mb-1 flex items-center justify-between">
                    <span>Portfolio Verticals</span>
                    <span className="text-[#C5A059]">04 Sectors</span>
                  </div>
                  <div className="space-y-1">
                    {BUSINESSES.map((b) => (
                      <Link
                        key={b.id}
                        href={`/businesses/${b.slug}`}
                        className="group flex items-start justify-between p-2.5 rounded hover:bg-[#370C15] transition-colors"
                      >
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-[10px] text-[#C5A059]">{b.number}</span>
                            <span className="text-xs font-sans font-semibold text-white group-hover:text-[#DEBF7D] transition-colors font-semibold">
                              {b.name}
                            </span>
                          </div>
                          <span className="text-[10px] text-[#C5B5AE] block pl-5">
                            {b.category}
                          </span>
                        </div>
                        <span
                          className={`text-[9px] px-1.5 py-0.5 rounded font-mono uppercase font-semibold ${
                            b.status === "Active"
                              ? "bg-emerald-950/60 text-emerald-400 border border-emerald-500/30"
                              : "bg-white/5 text-[#C5B5AE] border border-white/10"
                          }`}
                        >
                          {b.status}
                        </span>
                      </Link>
                    ))}
                  </div>
                  <div className="pt-2 mt-2 border-t border-white/10 px-2 pb-1">
                    <Link
                      href="/businesses"
                      className="text-[11px] font-sans text-[#C5A059] hover:text-[#DEBF7D] flex items-center justify-between group"
                    >
                      <span>Explore All Verticals</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/#presence"
            className="text-xs uppercase tracking-[0.16em] font-medium text-[#F7F3EE] transition-colors hover:text-[#DEBF7D]"
          >
            Regional Footprint
          </Link>

          <Link
            href="/contact"
            className={`text-xs uppercase tracking-[0.14em] font-medium transition-colors hover:text-[#DEBF7D] ${
              pathname === "/contact" ? "text-[#DEBF7D] font-semibold" : "text-[#F7F3EE]"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#190308] bg-[#FAF8F5] hover:bg-[#DEBF7D] px-5 py-2.5 rounded transition-all duration-200 shadow-sm active:scale-[0.98]"
          >
            <span>Corporate Inquiries</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-white hover:text-[#DEBF7D] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059]"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#190308] border-b border-white/15 px-6 py-6 space-y-5 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="space-y-3 pb-4 border-b border-white/10">
            <Link
              href="/"
              className="block text-sm uppercase tracking-widest text-white hover:text-[#DEBF7D]"
            >
              Overview
            </Link>
            <Link
              href="/about"
              className="block text-sm uppercase tracking-widest text-white hover:text-[#DEBF7D]"
            >
              The Group & Governance
            </Link>
            <Link
              href="/businesses"
              className="block text-sm uppercase tracking-widest text-[#DEBF7D] font-semibold"
            >
              Our Businesses (All Verticals)
            </Link>
            <div className="pl-4 space-y-2 pt-1">
              {BUSINESSES.map((b) => (
                <Link
                  key={b.id}
                  href={`/businesses/${b.slug}`}
                  className="flex items-center justify-between text-xs text-[#C5B5AE] hover:text-white py-1"
                >
                  <span>{b.name}</span>
                  <span className="font-mono text-[9px] opacity-70">({b.status})</span>
                </Link>
              ))}
            </div>
            <Link
              href="/#presence"
              className="block text-sm uppercase tracking-widest text-white hover:text-[#DEBF7D]"
            >
              Regional Footprint
            </Link>

          </div>

          <div className="pt-2">
            <Link
              href="/contact"
              className="block text-center w-full py-3 bg-[#FAF8F5] text-[#190308] font-bold text-xs uppercase tracking-widest rounded"
            >
              Contact Holding Office
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
