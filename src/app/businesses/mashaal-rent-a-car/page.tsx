import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Car, ShieldCheck } from "lucide-react";
import { BUSINESSES } from "@/lib/data";

export const metadata = {
  title: "Mashaal Rent A Car — Mobility & Transportation (Coming Soon) | MASHAAL GROUP",
  description:
    "Mashaal Rent A Car is an upcoming mobility and transportation vertical within MASHAAL GROUP, currently in strategic fleet planning.",
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
                Vertical 04 / Mobility
              </span>
              <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded font-semibold bg-white/5 text-[#DEBF7D] border border-white/15">
                Coming Soon • In Development
              </span>
            </div>

            <h1 className="font-sans font-bold text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase">
              MASHAAL RENT A CAR
            </h1>

            <p className="font-sans font-bold italic text-lg sm:text-xl text-[#DEBF7D]">
              &ldquo;An upcoming mobility and transportation vertical.&rdquo;
            </p>

            <p className="font-sans text-sm sm:text-base text-[#C5B5AE] leading-relaxed">
              Engineered to bring structured fleet reliability, corporate transport arrangements, and executive passenger mobility into the group portfolio.
            </p>
          </div>
        </div>
      </section>

      {/* Visual & Future Strategy */}
      <section className="bg-[#24060C] py-24 border-b border-white/10">
        <div className="max-w-corporate mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full rounded overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src={business.image}
                  alt="Mashaal Rent A Car Visual Direction"
                  fill
                  className="object-cover object-center filter grayscale contrast-125 opacity-80"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-[#24060C]/60 flex items-center justify-center p-6 text-center">
                  <div className="space-y-2">
                    <Clock className="w-8 h-8 text-[#DEBF7D] mx-auto opacity-80" />
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#DEBF7D] block">
                      Mobility Fleet Architecture
                    </span>
                    <span className="font-sans font-semibold text-base text-white block">
                      Coming Soon
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="holding-label text-[#C5A059]">
                MOBILITY HORIZON
              </span>
              <h2 className="font-sans font-bold text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Corporate Fleet &amp; Passenger Transit
              </h2>
              <p className="text-xs sm:text-sm text-[#C5B5AE] leading-relaxed">
                Positioned to complement the group&apos;s energy forecourts and commercial logistics infrastructure, Mashaal Rent A Car will deliver disciplined mobility management for executive clients, enterprise fleet leasing, and long-distance passenger travel.
              </p>
              <div className="p-4 bg-[#190308] border border-white/10 rounded text-xs text-[#DEBF7D] font-mono">
                Status: Fleet feasibility, vendor partnerships, and operational framework currently under review.
              </div>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#FAF8F5] hover:bg-[#DEBF7D] text-[#190308] text-xs font-semibold uppercase tracking-[0.14em] px-6 py-3 rounded transition-all"
                >
                  <span>Inquire with Holding Office</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
