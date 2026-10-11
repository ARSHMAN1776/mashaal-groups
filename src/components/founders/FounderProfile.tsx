import Image from "next/image";
import type { Leader } from "@/lib/leaders";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface FounderProfileProps {
  leader: Leader;
  /** Put the portrait on the right on large screens */
  flip?: boolean;
  tone: string;
}

/** One founder, one full-width section: portrait in a premium frame beside the text. */
export default function FounderProfile({ leader: l, flip = false, tone }: FounderProfileProps) {
  return (
    <section className={`${tone} py-16 sm:py-24`}>
      <div className="mx-auto grid max-w-corporate grid-cols-1 items-start gap-14 px-8 sm:px-10 lg:grid-cols-12 lg:gap-16 lg:px-14">
        {/* Portrait: padded wrapper keeps the outer frame clear of neighbours */}
        <ScrollReveal
          variant="fade-in"
          duration={1.2}
          className={`lg:col-span-5 ${flip ? "lg:order-2 lg:col-start-8" : "lg:col-start-1"}`}
        >
          <div className="mx-auto w-full max-w-[24rem] p-4 lg:sticky lg:top-24 lg:max-w-[26rem]">
            <div className="relative">
              <div className="absolute -inset-4 border border-[#C5A059]/40" aria-hidden="true" />
              <div className="group relative aspect-[4/5] overflow-hidden bg-[#24060C] shadow-[0_40px_70px_-35px_rgba(0,0,0,0.9)]">
                <Image
                  src={l.image}
                  alt={l.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 80vw, 26rem"
                  className="object-cover object-top transition-transform duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-[#24060C]/25" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#190308]/60 via-transparent to-[#190308]/10" />
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal
          variant="fade-up"
          delay={0.1}
          className={`lg:col-span-6 lg:pt-5 ${flip ? "lg:order-1 lg:col-start-1" : "lg:col-start-7"}`}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C5A059]">{l.role}</p>
          <h2 className="display mt-3 text-3xl text-[#F7F3EE] sm:text-5xl lg:text-6xl">{l.name}</h2>
          <div className="hairline my-6 max-w-[8rem]" />
          <div className="space-y-4 sm:space-y-6">
            {l.bio.map((p, i) =>
              i === 0 ? (
                <p key={p} className="max-w-[56ch] text-[1.05rem] font-normal leading-[1.8] text-[#F1EAE0] [text-wrap:pretty] sm:text-[1.25rem]">
                  {p}
                </p>
              ) : (
                <p
                  key={p}
                  className="max-w-[58ch] text-[0.95rem] leading-[1.85] tracking-[0.005em] text-[#DCCFC7] [text-wrap:pretty] sm:text-[1.08rem]"
                >
                  {p}
                </p>
              )
            )}
          </div>
          {l.facts && (
            <dl className="mt-8 border-t border-white/[0.12]">
              {l.facts.map((f) => (
                <div key={f.label} className="grid grid-cols-3 gap-4 border-b border-white/[0.12] py-4">
                  <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-[#BBA79F]">{f.label}</dt>
                  <dd className="display col-span-2 text-lg text-[#F7F3EE] sm:text-xl">{f.value}</dd>
                </div>
              ))}
            </dl>
          )}
          {l.quote && (
            <blockquote className="display mt-8 border-l-2 border-[#C5A059] pl-5 text-xl italic text-[#F7F3EE] sm:text-2xl">
              &ldquo;{l.quote}&rdquo;
            </blockquote>
          )}
          {l.linkedin && (
            <a
              href={l.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="link-line mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-[#DEBF7D]"
            >
              LinkedIn
            </a>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
