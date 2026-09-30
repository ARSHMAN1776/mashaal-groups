import Image from "next/image";
import Link from "next/link";
import { BUSINESSES } from "@/lib/data";
import { houseName } from "@/lib/utils";
import PageHero from "@/components/ui/PageHero";
import ClosingCta from "@/components/ui/ClosingCta";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

function ArrowIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M2.5 9.5 9.5 2.5M4 2.5h5.5V8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const splitService = (s: string) => {
  const i = s.indexOf(":");
  return i === -1 ? { title: s, detail: "" } : { title: s.slice(0, i), detail: s.slice(i + 1).trim() };
};

export default function HouseDetail({ id }: { id: string }) {
  const index = BUSINESSES.findIndex((b) => b.id === id);
  const b = BUSINESSES[index];
  const next = BUSINESSES[(index + 1) % BUSINESSES.length];
  const name = houseName(b.name);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `https://www.mashaalgroups.com/#${b.id}`,
    name,
    alternateName: b.id === "foods" ? ["Mashaal Food"] : undefined,
    description: b.shortDescription,
    url: `https://www.mashaalgroups.com/businesses/${b.slug}`,
    sameAs: b.externalUrl ? [b.externalUrl] : undefined,
    email: b.contactInfo?.email,
    parentOrganization: { "@id": "https://www.mashaalgroups.com/#corporation" },
  };

  return (
    <div className="flex w-full flex-col bg-[#190308] text-[#F7F3EE]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageHero image={b.image} imageAlt={name} eyebrow={b.category} title={name} lede={b.tagline}>
        <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-6">
          {b.externalUrl && (
            <a
              href={b.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 rounded-full bg-[#FAF8F5] py-2 pl-7 pr-2 text-[0.8rem] font-semibold uppercase tracking-[0.22em] text-[#190308] transition-[background-color,transform] duration-500 hover:bg-[#DEBF7D] active:scale-[0.98]"
            >
              Visit website
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#190308]/10 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-px group-hover:translate-x-0.5">
                <ArrowIcon />
              </span>
            </a>
          )}
          <Link
            href="/businesses"
            className="link-line text-[0.8rem] font-semibold uppercase tracking-[0.22em] text-[#F7F3EE]"
          >
            All businesses
          </Link>
        </div>
      </PageHero>

      {/* Overview */}
      <section className="bg-[#190308] py-28 sm:py-40">
        <div className="mx-auto grid max-w-corporate grid-cols-1 gap-16 px-6 sm:px-8 lg:grid-cols-12 lg:gap-24 lg:px-12">
          <ScrollReveal variant="fade-up" className="lg:col-span-7">
            <h2 className="display text-4xl sm:text-5xl lg:text-6xl">
              About <em>{name}.</em>
            </h2>
            <div className="hairline my-10 max-w-[7rem]" />
            <p className="lede text-lg leading-[1.85] text-[#F7F3EE]/90">{b.longDescription}</p>
            <ul className="mt-12 space-y-5">
              {b.highlights.map((h) => (
                <li key={h} className="flex gap-5 text-base leading-relaxed text-[#DCCFC7]">
                  <span aria-hidden="true" className="mt-[0.75em] h-px w-6 shrink-0 bg-[#C5A059]" />
                  {h}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <StaggerContainer staggerChildren={0.1} className="lg:col-span-5">
            <dl className="border-t border-white/[0.1]">
              {b.keyFacts.map((f) => (
                <StaggerItem key={f.label} className="border-b border-white/[0.1] py-8">
                  <dt className="text-xs font-semibold uppercase tracking-[0.24em] text-[#BBA79F]">
                    {f.label}
                  </dt>
                  <dd className="display mt-3 text-3xl text-[#DEBF7D] sm:text-4xl">{f.value}</dd>
                </StaggerItem>
              ))}
            </dl>
          </StaggerContainer>
        </div>
      </section>

      {/* Services */}
      {b.services && (
        <section className="bg-[#24060C] py-28 sm:py-40">
          <div className="mx-auto max-w-corporate px-6 sm:px-8 lg:px-12">
            <ScrollReveal variant="fade-up" className="mb-20 max-w-3xl">
              <h2 className="display text-4xl sm:text-5xl lg:text-6xl">
                What <em>they do.</em>
              </h2>
            </ScrollReveal>
            <StaggerContainer
              staggerChildren={0.08}
              className="grid grid-cols-1 gap-x-20 border-t border-white/[0.1] md:grid-cols-2"
            >
              {b.services.map((s) => {
                const { title, detail } = splitService(s);
                return (
                  <StaggerItem key={s} className="border-b border-white/[0.1] py-10">
                    <h3 className="display text-2xl text-[#F7F3EE] sm:text-3xl">{title}</h3>
                    {detail && (
                      <p className="mt-4 text-base leading-[1.8] text-[#DCCFC7]">{detail}</p>
                    )}
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </section>
      )}

      {/* Locations and contact */}
      <section className="bg-[#190308] py-28 sm:py-40">
        <div className="mx-auto grid max-w-corporate grid-cols-1 gap-16 px-6 sm:px-8 lg:grid-cols-12 lg:px-12">
          <ScrollReveal variant="fade-up" className="lg:col-span-6">
            <p className="eyebrow">Where to find them</p>
            <ul className="mt-10 space-y-8">
              {b.locations?.map((l) => (
                <li key={l} className="display text-2xl leading-snug text-[#F7F3EE] sm:text-3xl">
                  {l}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {b.contactInfo && (
            <ScrollReveal variant="fade-up" delay={0.12} className="lg:col-span-5 lg:col-start-8">
              <div className="border border-[#C5A059]/30 p-10">
                <p className="eyebrow">Contact</p>
                <dl className="mt-8 space-y-6 text-base leading-relaxed text-[#DCCFC7]">
                  {b.contactInfo.address && (
                    <div>
                      <dt className="sr-only">Address</dt>
                      <dd>{b.contactInfo.address}</dd>
                    </div>
                  )}
                  {b.contactInfo.phone && (
                    <div>
                      <dt className="sr-only">Phone</dt>
                      <dd className="text-[#F7F3EE]">{b.contactInfo.phone}</dd>
                    </div>
                  )}
                  {b.contactInfo.email && (
                    <div>
                      <dt className="sr-only">Email</dt>
                      <dd>
                        <a href={`mailto:${b.contactInfo.email}`} className="link-line text-[#DEBF7D]">
                          {b.contactInfo.email}
                        </a>
                      </dd>
                    </div>
                  )}
                </dl>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* Next business */}
      <Link
        href={`/businesses/${next.slug}`}
        className="group relative isolate block overflow-hidden border-t border-white/[0.08] py-32 sm:py-44"
      >
        <Image
          src={next.image}
          alt=""
          fill
          sizes="100vw"
          className="-z-20 object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
        />
        <div className="absolute inset-0 -z-10 bg-[#190308]/80 transition-colors duration-700 group-hover:bg-[#190308]/65" />
        <div className="mx-auto max-w-corporate px-6 sm:px-8 lg:px-12">
          <p className="eyebrow">Next business</p>
          <p className="display mt-6 text-5xl text-[#F7F3EE] sm:text-7xl lg:text-6xl">
            {houseName(next.name)}
          </p>
        </div>
      </Link>

      <ClosingCta
        title={
          <>
            Speak with <em>the group.</em>
          </>
        }
        text="Operating questions go to the business. Partnerships and institutional matters go to the executive office."
      />
    </div>
  );
}
