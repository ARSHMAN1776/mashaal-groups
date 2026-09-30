"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { BUSINESSES } from "@/lib/data";
import { houseName } from "@/lib/utils";

const LINES: Record<string, string> = {
  petroleum: "Total PARCO and PSO forecourts, open every hour of every day.",
  foods: "Food commodities and staples, sourced and distributed with care.",
  rentacar: "Executive mobility and fleet hire, driven to a higher standard.",
  shipping: "International freight forwarding, from Dubai to the world's ports.",
};

export default function HouseIndex() {
  const [active, setActive] = useState(0);
  const rows = useRef<(HTMLLIElement | null)[]>([]);

  // Scroll-driven: the row crossing the middle of the viewport becomes active.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.index));
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    rows.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
      <ul className="lg:col-span-7">
        {BUSINESSES.map((b, i) => {
          const isActive = active === i;
          return (
            <li
              key={b.id}
              ref={(el) => {
                rows.current[i] = el;
              }}
              data-index={i}
              className="border-t border-white/[0.1] last:border-b"
            >
              <Link
                href={`/businesses/${b.slug}`}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className="group block py-8 lg:py-12"
              >
                <div className="flex items-start gap-6 sm:gap-10">
                  <span className="mt-3 hidden w-8 shrink-0 text-xs tracking-[0.2em] text-[#C5A059] sm:block">
                    {b.number}
                  </span>
                  <div className="flex-1">
                    <h3
                      className={`display text-3xl transition-[color,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] sm:text-4xl lg:text-5xl ${
                        isActive ? "translate-x-2 text-[#DEBF7D]" : "text-[#F7F3EE]"
                      }`}
                    >
                      {houseName(b.name)}
                    </h3>
                    <p className="mt-2 max-w-md text-base leading-relaxed text-[#DCCFC7]">
                      {LINES[b.id]}
                    </p>
                    <span
                      className={`mt-3 inline-block text-xs font-semibold uppercase tracking-[0.26em] transition-colors duration-500 ${
                        isActive ? "text-[#DEBF7D]" : "text-[#BBA79F]"
                      }`}
                    >
                      {b.category}
                    </span>

                  </div>
                  <span
                    aria-hidden="true"
                    className={`mt-4 hidden shrink-0 transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] sm:block ${
                      isActive ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0"
                    }`}
                  >
                    <svg width="28" height="28" viewBox="0 0 12 12" fill="none">
                      <path d="M2.5 9.5 9.5 2.5M4 2.5h5.5V8" stroke="#DEBF7D" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="relative hidden lg:col-span-5 lg:block">
        <div className="sticky top-28 h-[30rem] w-full overflow-hidden border border-[#C5A059]/30 bg-gradient-to-br from-[#24060C] via-[#2C0910] to-[#370C15]">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #C5A059 1px, transparent 1px), linear-gradient(to bottom, #C5A059 1px, transparent 1px)",
              backgroundSize: "56px 56px",
            }}
          />
          {BUSINESSES.map((b, i) => (
            <div
              key={b.id}
              aria-hidden={active !== i}
              className={`absolute inset-0 flex flex-col justify-between p-10 transition-[opacity,transform] duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                active === i ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
              }`}
            >
              <div>
                <p className="display text-8xl text-[#C5A059]/70">{b.number}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#DEBF7D]">
                  {b.category}
                </p>
              </div>
              <dl className="grid grid-cols-2 gap-x-6 gap-y-6 border-t border-white/[0.12] pt-8">
                {b.keyFacts.map((f) => (
                  <div key={f.label}>
                    <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#BBA79F]">
                      {f.label}
                    </dt>
                    <dd className="display mt-1 text-xl text-[#F7F3EE]">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
