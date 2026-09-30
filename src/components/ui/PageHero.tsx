import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface PageHeroProps {
  title: React.ReactNode;
  lede?: string;
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
  eyebrow?: string;
  plain?: boolean;
  children?: React.ReactNode;
}

/** Shared cinematic page header: serif title over a tinted photograph. */
export default function PageHero({
  title,
  lede,
  image = "/images/hero-architecture.jpg",
  imageAlt = "",
  imagePosition = "50% 50%",
  eyebrow,
  plain = false,
  children,
}: PageHeroProps) {
  return (
    <section className="relative isolate flex min-h-[50dvh] items-end overflow-hidden bg-[#190308]">
      {plain ? (
        <>
          <div className="absolute inset-0 -z-20 bg-gradient-to-br from-[#190308] via-[#24060C] to-[#370C15]" />
          <div
            className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #C5A059 1px, transparent 1px), linear-gradient(to bottom, #C5A059 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </>
      ) : (
        <>
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            className="slow-zoom -z-20 object-cover"
            style={{ objectPosition: imagePosition }}
          />
          <div className="absolute inset-0 -z-10 bg-[#190308]/40" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#190308] via-[#190308]/40 to-[#190308]/70" />
        </>
      )}

      <div className="mx-auto w-full max-w-corporate px-6 pb-10 pt-32 sm:px-8 sm:pb-16 lg:px-12">
        <ScrollReveal animateOnLoad variant="fade-up" duration={1.1} delay={0.15} className="max-w-4xl">
          {eyebrow && <p className="eyebrow mb-8">{eyebrow}</p>}
          <h1 className="display text-4xl text-[#F7F3EE] sm:text-5xl lg:text-6xl">{title}</h1>
          {lede && (
            <p className="lede mt-5 text-base leading-[1.7] text-[#F7F3EE]/90 sm:text-lg">{lede}</p>
          )}
          {children}
        </ScrollReveal>
      </div>
    </section>
  );
}
