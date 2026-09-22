"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Fuel,
  Ship,
  Wheat,
  Car,
  Sparkles,
} from "lucide-react";
import { BUSINESSES } from "@/lib/data";

// Custom icons mapping for each vertical
const VERTICAL_ICONS: Record<string, React.ReactNode> = {
  petroleum: <Fuel className="w-6 h-6 text-[#DEBF7D]" />,
  foods: <Wheat className="w-6 h-6 text-[#DEBF7D]" />,
  rentacar: <Car className="w-6 h-6 text-[#DEBF7D]" />,
  shipping: <Ship className="w-6 h-6 text-[#DEBF7D]" />,
};

export default function AnimatedBusinessCards() {
  const [filter, setFilter] = useState<"all" | "active" | "upcoming">("all");
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);

  const filteredBusinesses = BUSINESSES.filter((b) => {
    if (filter === "active") return b.status === "Active";
    if (filter === "upcoming") return b.status === "Coming Soon";
    return true;
  });

  const handlePrev = () => {
    setActiveCardIndex((prev) =>
      prev === 0 ? BUSINESSES.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveCardIndex((prev) =>
      prev === BUSINESSES.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
      id="portfolio"
      className="relative bg-gradient-to-b from-[#190308] via-[#24060C] to-[#190308] text-[#F7F3EE] py-24 sm:py-32 border-b border-white/10 overflow-hidden"
    >
      {/* Background Architectural Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #C5A059 1px, transparent 1px), linear-gradient(to bottom, #C5A059 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <div className="max-w-corporate mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* ===================================================================
            SECTION HEADER & INTERACTIVE NAVIGATION CONTROLS
            =================================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 sm:pb-16 border-b border-white/15">
          {/* Left Title Area */}
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2.5">
              <span className="w-8 h-[1.5px] bg-[#C5A059]" />
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#DEBF7D] font-medium">
                PORTFOLIO ARCHITECTURE
              </span>
            </div>

            <h2 className="font-sans text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase leading-[1.08]">
              OUR{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FAF8F5] to-[#C5A059]">
                BUSINESSES
              </span>
            </h2>

            <p className="font-sans text-xs sm:text-sm text-[#C5B5AE] leading-relaxed">
              Four specialized commercial enterprises organized under group stewardship.
            </p>
          </div>

          {/* Right Controls: Filter Tabs & Index Navigator */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-8">
            {/* Filter Tabs */}
            <div className="inline-flex items-center p-1 rounded-lg bg-[#190308]/90 border border-white/10 backdrop-blur-md">
              <button
                type="button"
                onClick={() => setFilter("all")}
                className={`px-3.5 py-1.5 rounded-md text-xs font-mono uppercase tracking-wider transition-all ${
                  filter === "all"
                    ? "bg-[#C5A059] text-[#190308] font-bold shadow-md"
                    : "text-[#C5B5AE] hover:text-white"
                }`}
              >
                All (4)
              </button>
              <button
                type="button"
                onClick={() => setFilter("active")}
                className={`px-3.5 py-1.5 rounded-md text-xs font-mono uppercase tracking-wider transition-all ${
                  filter === "active"
                    ? "bg-[#C5A059] text-[#190308] font-bold shadow-md"
                    : "text-[#C5B5AE] hover:text-white"
                }`}
              >
                Active (2)
              </button>
              <button
                type="button"
                onClick={() => setFilter("upcoming")}
                className={`px-3.5 py-1.5 rounded-md text-xs font-mono uppercase tracking-wider transition-all ${
                  filter === "upcoming"
                    ? "bg-[#C5A059] text-[#190308] font-bold shadow-md"
                    : "text-[#C5B5AE] hover:text-white"
                }`}
              >
                Upcoming (2)
              </button>
            </div>

            {/* Numeric Index & Arrows Controller */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 font-mono text-xs">
                {BUSINESSES.map((b, idx) => (
                  <button
                    key={b.id}
                    type="button"
                    onClick={() => setActiveCardIndex(idx)}
                    className={`w-7 h-7 rounded flex items-center justify-center transition-all ${
                      idx === activeCardIndex
                        ? "bg-[#C5A059] text-[#190308] font-bold scale-105"
                        : "text-[#C5B5AE] hover:text-white bg-white/5"
                    }`}
                  >
                    {b.number}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-1 pl-2 border-l border-white/15">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous business card"
                  className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-[#C5B5AE] hover:text-white hover:border-[#DEBF7D] hover:bg-[#DEBF7D]/10 transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next business card"
                  className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-[#C5B5AE] hover:text-white hover:border-[#DEBF7D] hover:bg-[#DEBF7D]/10 transition-all"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================================
            OPTIMIZED MINIMAL CARDS GRID (NO PICTURES)
            =================================================================== */}
        <div className="pt-12 sm:pt-16">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 items-stretch"
          >
            <AnimatePresence mode="popLayout">
              {filteredBusinesses.map((b, index) => {
                const isActiveIndex =
                  BUSINESSES.findIndex((x) => x.id === b.id) === activeCardIndex;

                return (
                  <motion.article
                    key={b.id}
                    layout
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.06,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    onMouseEnter={() => {
                      const foundIdx = BUSINESSES.findIndex(
                        (x) => x.id === b.id
                      );
                      if (foundIdx !== -1) setActiveCardIndex(foundIdx);
                    }}
                    className={`group relative flex flex-col justify-between rounded-xl p-7 bg-gradient-to-b from-[#2A0811] via-[#20050B] to-[#150206] border transition-all duration-300 shadow-xl cursor-pointer min-h-[380px] ${
                      isActiveIndex
                        ? "border-[#DEBF7D] shadow-[0_20px_45px_rgba(0,0,0,0.6),0_0_25px_rgba(222,191,125,0.15)] -translate-y-2"
                        : "border-white/10 hover:border-[#DEBF7D]/60 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5),0_0_20px_rgba(197,160,89,0.12)]"
                    }`}
                  >
                    {/* Top Header Row: Number Badge & Status */}
                    <div className="flex items-center justify-between pb-6 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-sm font-bold text-[#DEBF7D] bg-white/5 border border-white/15 px-2.5 py-1 rounded">
                          {b.number}
                        </span>
                        <div className="w-9 h-9 rounded-lg bg-[#370C15] border border-[#C5A059]/30 flex items-center justify-center group-hover:bg-[#C5A059] group-hover:text-[#190308] transition-colors">
                          {VERTICAL_ICONS[b.id] || (
                            <Sparkles className="w-4 h-4 text-[#DEBF7D]" />
                          )}
                        </div>
                      </div>

                      {b.status === "Active" ? (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-[10px] font-mono uppercase font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span>OPERATING</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#190308]/90 border border-[#DEBF7D]/30 text-[#DEBF7D] text-[10px] font-mono uppercase font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#DEBF7D]" />
                          <span>UPCOMING</span>
                        </span>
                      )}
                    </div>

                    {/* Middle Content: Category, Business Name & Concise Summary */}
                    <div className="py-6 space-y-3">
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-medium block">
                        {b.category}
                      </span>

                      <h3 className="font-sans text-xl sm:text-2xl font-bold text-white tracking-tight uppercase group-hover:text-[#DEBF7D] transition-colors leading-tight">
                        {b.name}
                      </h3>

                      <p className="font-sans text-xs text-[#C5B5AE] leading-relaxed line-clamp-3">
                        {b.shortDescription}
                      </p>

                      {/* Key Facts Micro-Row */}
                      <div className="pt-2 grid grid-cols-2 gap-2 text-left">
                        {b.keyFacts.slice(0, 2).map((kf, i) => (
                          <div key={i} className="space-y-0.5">
                            <span className="text-[9px] font-mono uppercase text-[#C5B5AE]/70 tracking-wider block">
                              {kf.label}
                            </span>
                            <span className="font-sans text-xs font-bold text-white block truncate">
                              {kf.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Footer Row: Action Links */}
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                      <Link
                        href={`#${b.id}`}
                        className="group/btn inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.14em] text-[#FAF8F5] font-semibold hover:text-[#DEBF7D] transition-colors"
                      >
                        <span>View Section</span>
                        <span className="w-6 h-6 rounded-full bg-white/10 group-hover/btn:bg-[#C5A059] group-hover/btn:text-[#190308] flex items-center justify-center transition-all duration-300 group-hover/btn:translate-x-1">
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </Link>

                      {b.externalUrl && (
                        <a
                          href={b.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1 text-[11px] font-mono text-[#DEBF7D] hover:text-white transition-colors"
                          title={`Open ${b.name} live platform`}
                        >
                          <span>Live</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
