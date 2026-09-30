"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { BUSINESSES } from "@/lib/data";
import { houseName } from "@/lib/utils";
import BrandLogo from "@/components/ui/BrandLogo";

const PRIMARY_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "The Group" },
  { href: "/businesses", label: "Our Businesses" },
  { href: "/partnerships", label: "Partnerships" },
  { href: "/contact", label: "Contact" },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-[background-color,border-color] duration-700 ${
          scrolled || open
            ? "bg-[#190308]/85 backdrop-blur-xl border-b border-white/[0.07]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-corporate items-center justify-between px-6 sm:px-8 lg:px-12">
          <Link
            href="/"
            className="group relative z-50 flex items-center gap-3"
            aria-label="Mashaal Group home"
          >
            <BrandLogo className="h-9 w-9" />
            <span className="font-serif text-[1.35rem] font-medium tracking-[0.14em] text-[#F7F3EE] uppercase">
              Mashaal
              <span className="ml-2 hidden text-[#C5A059] sm:inline">Group</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-10 lg:flex" aria-label="Main">
            {PRIMARY_LINKS.slice(1, 4).map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={isActive(l.href) ? "page" : undefined}
                className={`text-xs font-semibold uppercase tracking-[0.24em] transition-colors duration-500 hover:text-[#DEBF7D] ${
                  isActive(l.href) ? "text-[#DEBF7D]" : "text-[#F7F3EE]/90"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full border border-[#C5A059]/50 py-1.5 pl-5 pr-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-[#F7F3EE] transition-[background-color,border-color] duration-500 hover:border-[#DEBF7D] hover:bg-[#C5A059]/10 active:scale-[0.98]"
            >
              Contact
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#C5A059]/20 text-[#DEBF7D] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-px group-hover:translate-x-0.5">
                <Arrow />
              </span>
            </Link>
            <button
              onClick={() => setOpen(true)}
              className="text-xs font-semibold uppercase tracking-[0.24em] text-[#F7F3EE]/90 transition-colors hover:text-[#DEBF7D]"
              aria-label="Open menu"
            >
              Menu
            </button>
          </nav>

          <button
            onClick={() => setOpen((v) => !v)}
            className="relative z-50 flex h-11 w-11 items-center justify-center lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span
              className={`absolute h-px w-6 bg-[#F7F3EE] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                open ? "rotate-45" : "-translate-y-[4px]"
              }`}
            />
            <span
              className={`absolute h-px w-6 bg-[#F7F3EE] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                open ? "-rotate-45" : "translate-y-[4px]"
              }`}
            />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.5, ease: EASE }}
            className="fixed inset-0 z-30 overflow-y-auto bg-[#190308]/97 backdrop-blur-2xl"
            data-lenis-prevent
          >
            <div className="mx-auto grid min-h-[100dvh] max-w-corporate grid-cols-1 gap-12 px-6 pb-16 pt-28 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:px-12 lg:pt-36">
              <ul className="space-y-1 lg:col-span-7">
                {PRIMARY_LINKS.map((l, i) => (
                  <li key={l.href} className="overflow-hidden">
                    <motion.div
                      initial={reduce ? false : { y: "110%" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.9, ease: EASE, delay: 0.08 + i * 0.07 }}
                    >
                      <Link
                        href={l.href}
                        className={`display block py-1 text-5xl transition-colors duration-500 hover:text-[#DEBF7D] sm:text-6xl lg:text-6xl ${
                          isActive(l.href) ? "text-[#DEBF7D]" : "text-[#F7F3EE]"
                        }`}
                      >
                        {l.label}
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>

              <motion.div
                initial={reduce ? false : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.4 }}
                className="lg:col-span-5 lg:pt-6"
              >
                <p className="eyebrow mb-6">The four businesses</p>
                <ul className="divide-y divide-white/10 border-y border-white/10">
                  {BUSINESSES.map((b) => (
                    <li key={b.id}>
                      <Link
                        href={`/businesses/${b.slug}`}
                        className="group flex items-baseline justify-between gap-4 py-4"
                      >
                        <span className="font-serif text-2xl text-[#F7F3EE] transition-colors duration-500 group-hover:text-[#DEBF7D]">
                          {houseName(b.name)}
                        </span>
                        <span className="max-w-[38%] text-right text-xs tracking-[0.08em] text-[#BBA79F]">
                          {b.category.split("&")[0].trim()}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <p className="mt-10 max-w-xs text-sm leading-relaxed text-[#DCCFC7]">
                  inquiries@mashaalgroups.com
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Arrow() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M2.5 9.5 9.5 2.5M4 2.5h5.5V8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
