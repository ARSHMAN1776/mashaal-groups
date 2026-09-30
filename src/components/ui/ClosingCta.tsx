import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface ClosingCtaProps {
  title: React.ReactNode;
  text: string;
  href?: string;
  label?: string;
}

export default function ClosingCta({ title, text, href = "/contact", label = "Contact" }: ClosingCtaProps) {
  return (
    <section className="border-t border-white/[0.08] bg-[#24060C] py-16 sm:py-24">
      <div className="mx-auto max-w-corporate px-6 sm:px-8 lg:px-12">
        <ScrollReveal variant="fade-up" className="max-w-4xl">
          <h2 className="display text-4xl sm:text-6xl lg:text-6xl">{title}</h2>
          <p className="lede mt-5 text-base leading-[1.8] text-[#DCCFC7] sm:text-lg">{text}</p>
          <Link
            href={href}
            className="group mt-8 inline-flex items-center gap-4 rounded-full bg-[#FAF8F5] py-2 pl-8 pr-2 text-[0.8rem] font-semibold uppercase tracking-[0.22em] text-[#190308] transition-[background-color,transform] duration-500 hover:bg-[#DEBF7D] active:scale-[0.98]"
          >
            {label}
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#190308]/10 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-px group-hover:translate-x-0.5">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2.5 9.5 9.5 2.5M4 2.5h5.5V8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
