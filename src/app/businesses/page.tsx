import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, CheckCircle2, Building2 } from "lucide-react";
import { BUSINESSES } from "@/lib/data";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

export const metadata = {
  title: "Our Businesses — MASHAAL GROUP Portfolio",
  description:
    "Explore the diversified business verticals of MASHAAL GROUP: Mashaal Petroleum, Mashwani Shipping L.L.C., Mashaal Foods, and Mashaal Rent A Car.",
};

export default function BusinessesOverviewPage() {
  return (
    <div className="flex flex-col w-full bg-[#190308] text-[#F7F3EE]">
      {/* Page Header */}
      <section className="pt-36 pb-20 border-b border-white/10 bg-gradient-to-b from-[#190308] to-[#24060C]">
        <div className="max-w-corporate mx-auto px-6 sm:px-8 lg:px-12">
          <ScrollReveal variant="fade-up" className="max-w-3xl space-y-4">
            <span className="holding-label text-[#C5A059]">
              PORTFOLIO ARCHITECTURE
            </span>
            <h1 className="font-sans font-bold text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase">
              OUR BUSINESSES
            </h1>
            <p className="font-sans text-base sm:text-lg text-[#C5B5AE] leading-relaxed">
              Operating specialized enterprises across energy, international trade, consumer goods, and mobility under unified holding stewardship.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Portfolio Matrix Section */}
      <section className="bg-[#24060C] py-24 border-b border-white/10">
        <div className="max-w-corporate mx-auto px-6 sm:px-8 lg:px-12">
          <StaggerContainer staggerChildren={0.15} className="space-y-16">
            {BUSINESSES.map((b) => (
              <StaggerItem
                key={b.id}
                className="p-8 sm:p-12 bg-[#190308] border border-white/10 rounded-xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center shadow-2xl hover:border-[#DEBF7D]/40 transition-all duration-300"
              >
                {/* Visual */}
                <div className="lg:col-span-5">
                  <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden border border-white/10 bg-[#24060C]">
                    <Image
                      src={b.image}
                      alt={b.name}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                </div>

                {/* Details */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#C5A059] tracking-widest uppercase font-semibold">
                      Vertical {b.number}
                    </span>
                    <span
                      className={`text-[10px] font-mono uppercase px-2.5 py-1 rounded font-semibold ${
                        b.status === "Active"
                          ? "bg-emerald-950/70 text-emerald-400 border border-emerald-500/30"
                          : "bg-white/5 text-[#DEBF7D] border border-white/15"
                      }`}
                    >
                      {b.status}
                    </span>
                  </div>

                  <h2 className="font-sans font-bold text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {b.name}
                  </h2>

                  <p className="font-sans font-bold italic text-sm text-[#DEBF7D]">
                    &ldquo;{b.tagline}&rdquo;
                  </p>

                  <p className="font-sans text-xs sm:text-sm text-[#C5B5AE] leading-relaxed">
                    {b.shortDescription}
                  </p>

                  {/* Key Facts Bar */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 border-y border-white/10">
                    {b.keyFacts.map((kf, i) => (
                      <div key={i} className="space-y-0.5">
                        <span className="text-[10px] font-mono uppercase text-[#C5B5AE] block">
                          {kf.label}
                        </span>
                        <span className="text-xs font-sans font-semibold font-bold text-white block">
                          {kf.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 flex items-center gap-4 flex-wrap">
                    <Link
                      href={`/businesses/${b.slug}`}
                      className="inline-flex items-center gap-2 bg-[#FAF8F5] hover:bg-[#DEBF7D] text-[#190308] text-xs font-semibold uppercase tracking-[0.14em] px-6 py-2.5 rounded transition-all"
                    >
                      <span>Explore Vertical Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    {b.externalUrl && (
                      <a
                        href={b.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-[#DEBF7D] hover:text-white font-mono transition-colors"
                      >
                        <span>External Platform</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
