import Link from "next/link";
import { BUSINESSES } from "@/lib/data";
import { houseName } from "@/lib/utils";
import BrandLogo from "@/components/ui/BrandLogo";

export default function Footer() {
  return (
    <footer className="relative bg-[#0F0104] text-[#F7F3EE]">
      {/* Gold rule that clearly separates the footer from the page above */}
      <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />

      <div
        className="pointer-events-none absolute inset-x-0 top-[3px] h-full opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #C5A059 1px, transparent 1px), linear-gradient(to bottom, #C5A059 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto max-w-corporate px-6 pb-12 pt-16 sm:px-8 lg:px-12 lg:pt-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link href="/" className="group inline-flex items-center gap-4">
              <BrandLogo className="h-12 w-12" />
              <span className="font-serif text-2xl font-semibold tracking-[0.14em] uppercase sm:text-3xl">
                Mashaal <span className="text-[#C5A059]">Group</span>
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-base leading-[1.75] text-[#DCCFC7]">
              A family of four independent businesses across energy, shipping, food and mobility,
              held to one standard.
            </p>
            <a
              href="mailto:inquiries@mashaalgroups.com"
              className="link-line mt-6 text-xs font-semibold uppercase tracking-[0.24em] text-[#DEBF7D]"
            >
              inquiries@mashaalgroups.com
            </a>
          </div>

          <div className="grid grid-cols-2 gap-10 lg:col-span-7 lg:pl-16">
            <div>
              <h2 className="eyebrow mb-5 border-b border-[#C5A059]/30 pb-3">Businesses</h2>
              <ul className="space-y-3">
                {BUSINESSES.map((b) => (
                  <li key={b.id}>
                    <Link
                      href={`/businesses/${b.slug}`}
                      className="font-serif text-lg font-semibold text-[#F7F3EE] transition-colors duration-500 hover:text-[#DEBF7D]"
                    >
                      {houseName(b.name)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="eyebrow mb-5 border-b border-[#C5A059]/30 pb-3">The Group</h2>
              <ul className="space-y-3 text-[0.95rem] text-[#DCCFC7]">
                <li>
                  <Link href="/about" className="transition-colors duration-500 hover:text-[#DEBF7D]">
                    About the group
                  </Link>
                </li>
                <li>
                  <Link href="/about#leadership" className="transition-colors duration-500 hover:text-[#DEBF7D]">
                    Leadership
                  </Link>
                </li>
                <li>
                  <Link href="/#presence" className="transition-colors duration-500 hover:text-[#DEBF7D]">
                    Where we operate
                  </Link>
                </li>
                <li>
                  <Link href="/partnerships" className="transition-colors duration-500 hover:text-[#DEBF7D]">
                    Partnerships
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="transition-colors duration-500 hover:text-[#DEBF7D]">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="transition-colors duration-500 hover:text-[#DEBF7D]">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar, a separate darker band */}
      <div className="relative border-t border-white/[0.08] bg-black/40">
        <div className="mx-auto flex max-w-corporate flex-col items-start justify-between gap-3 px-6 py-5 text-[0.78rem] tracking-[0.05em] text-[#BBA79F] sm:flex-row sm:items-center sm:px-8 lg:px-12">
          <p>&copy; {new Date().getFullYear()} Mashaal Group. All rights reserved.</p>
          <p>Dubai, United Arab Emirates and Punjab, Pakistan</p>
          <a
            href="#main"
            className="text-xs font-semibold uppercase tracking-[0.22em] text-[#DEBF7D] transition-colors hover:text-[#F7F3EE]"
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
