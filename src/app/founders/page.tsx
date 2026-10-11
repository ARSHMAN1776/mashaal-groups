import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import ClosingCta from "@/components/ui/ClosingCta";
import FounderProfile from "@/components/founders/FounderProfile";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { LEADERS } from "@/lib/leaders";
import { BUSINESSES } from "@/lib/data";
import { houseName } from "@/lib/utils";

export const metadata = {
  alternates: { canonical: "/founders" },
  title: "Founders | MASHAAL GROUP",
  description:
    "Meet the founders of Mashaal Group: Nisar Shah, co-founder, and Muhammad Asim Khan, founder and owner, who leads the group and its four businesses today.",
  openGraph: {
    title: "Founders | MASHAAL GROUP",
    description: "Meet the founders of Mashaal Group and the four businesses they lead.",
    url: "/founders",
    type: "website",
  },
};

const LINES: Record<string, string> = {
  petroleum: "Total PARCO and PSO forecourts in Rahim Yar Khan and Lahore, open around the clock.",
  foods: "Sourcing and distribution of essential food commodities and staples.",
  rentacar: "Corporate fleet leasing and executive transit from hubs in Punjab.",
  shipping: "International freight forwarding from Dubai by sea, air and road.",
};

const LEADERSHIP = [
  {
    title: "The group sets the standard",
    text: "Strategy, capital and governance sit with the group, so every business is held to the same standard of integrity.",
  },
  {
    title: "Each business has its own team",
    text: "Specialist management runs each company day to day, with direct accountability for its results.",
  },
  {
    title: "One owner, clear direction",
    text: "Muhammad Asim Khan leads the group and oversees all four businesses, so decisions have a single, accountable source.",
  },
];

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M2.5 9.5 9.5 2.5M4 2.5h5.5V8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function FoundersPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": LEADERS.map((l) => ({
      "@type": "Person",
      name: l.name,
      jobTitle: l.role,
      image: `https://www.mashaalgroups.com${l.image}`,
      worksFor: { "@id": "https://www.mashaalgroups.com/#corporation" },
      sameAs: l.linkedin ? [l.linkedin] : undefined,
    })),
  };

  return (
    <div className="flex w-full flex-col bg-[#190308] text-[#F7F3EE]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <PageHero
        plain
        eyebrow="Founders"
        title={
          <>
            The people behind <em>Mashaal Group.</em>
          </>
        }
        lede="The founders whose work built the group, and who lead it today."
      />

      {/* Introduction */}
      <section className="border-b border-[#C5A059]/25 bg-[#190308] py-16 sm:py-24">
        <div className="mx-auto max-w-corporate px-8 sm:px-10 lg:px-14">
          <ScrollReveal variant="fade-up" duration={1.1} className="max-w-5xl">
            <p className="display text-xl italic text-[#F7F3EE] sm:text-3xl lg:text-4xl">
              Mashaal Group was built by its founders and is led today by one accountable owner,
              with four businesses working to a single standard.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {LEADERS.map((l, i) => (
        <FounderProfile
          key={l.name}
          leader={l}
          flip={i % 2 === 1}
          tone={i % 2 === 0 ? "bg-[#190308]" : "bg-[#24060C]"}
        />
      ))}

      {/* The businesses they lead */}
      <section className="bg-[#190308] py-16 sm:py-24">
        <div className="mx-auto max-w-corporate px-8 sm:px-10 lg:px-14">
          <ScrollReveal variant="fade-up" className="mb-12 max-w-3xl">
            <h2 className="display text-3xl sm:text-4xl lg:text-5xl">
              The businesses <em>they lead.</em>
            </h2>
            <p className="lede mt-4 text-base leading-[1.75] text-[#DCCFC7] sm:text-lg">
              Four independent companies, each with its own specialist team.
            </p>
          </ScrollReveal>

          <StaggerContainer
            staggerChildren={0.12}
            className="grid grid-cols-1 border-t border-[#C5A059]/40 sm:grid-cols-2 lg:grid-cols-4"
          >
            {BUSINESSES.map((b, i) => (
              <StaggerItem
                key={b.id}
                className={`flex flex-col border-b border-white/[0.12] py-8 sm:px-5 lg:border-b-0 ${
                  i > 0 ? "lg:border-l lg:border-white/[0.12]" : "lg:pl-0"
                } ${i % 2 === 1 ? "sm:border-l sm:border-white/[0.12] lg:border-l" : ""}`}
              >
                <p className="display text-4xl text-[#C5A059]/70 sm:text-5xl [font-variant-numeric:lining-nums]">
                  {b.number}
                </p>
                <h3 className="display mt-5 text-2xl text-[#F7F3EE]">{houseName(b.name)}</h3>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059]">
                  {b.category}
                </p>
                <p className="mt-4 text-[0.95rem] leading-[1.75] text-[#DCCFC7]">{LINES[b.id]}</p>
                <div className="mt-auto flex flex-nowrap items-center gap-x-4 whitespace-nowrap pt-6">
                  <Link
                    href={`/businesses/${b.slug}`}
                    className="link-line text-xs font-semibold uppercase tracking-[0.2em] text-[#F7F3EE]"
                  >
                    Details
                  </Link>
                  {b.externalUrl && (
                    <a
                      href={b.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-line text-xs font-semibold uppercase tracking-[0.2em] text-[#DEBF7D]"
                    >
                      Website <ArrowIcon />
                    </a>
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* How the group is led */}
      <section className="bg-[#24060C] py-16 sm:py-24">
        <div className="mx-auto grid max-w-corporate grid-cols-1 gap-12 px-8 sm:px-10 lg:grid-cols-12 lg:gap-16 lg:px-14">
          <ScrollReveal variant="fade-up" className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <h2 className="display text-3xl sm:text-4xl lg:text-5xl">
                How the group <em>is led.</em>
              </h2>
              <p className="lede mt-5 text-base leading-[1.75] text-[#DCCFC7]">
                A clear structure, so partners and customers know who is responsible for what.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer staggerChildren={0.14} className="border-t border-white/[0.15] lg:col-span-8">
            {LEADERSHIP.map((r) => (
              <StaggerItem key={r.title} className="border-b border-white/[0.15] py-8">
                <span aria-hidden="true" className="block h-px w-10 bg-[#C5A059]" />
                <h3 className="display mt-4 text-xl sm:text-3xl">{r.title}</h3>
                <p className="mt-3 max-w-2xl text-base leading-[1.8] text-[#DCCFC7] sm:text-lg">{r.text}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <ClosingCta
        title={
          <>
            Talk to the <em>executive office.</em>
          </>
        }
        text="For partnerships, institutional relations and media enquiries."
      />
    </div>
  );
}
