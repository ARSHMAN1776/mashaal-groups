import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[100dvh] items-center bg-[#190308] px-6 py-32 sm:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-corporate">
        <p className="eyebrow">Page not found</p>
        <h1 className="display mt-8 text-6xl text-[#F7F3EE] sm:text-7xl">
          This page <em>does not exist.</em>
        </h1>
        <p className="lede mt-8 text-lg leading-[1.8] text-[#DCCFC7]">
          The address may have changed. Return to the home page or browse the group&apos;s businesses.
        </p>
        <div className="mt-12 flex flex-wrap gap-x-10 gap-y-6">
          <Link href="/" className="link-line text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#DEBF7D]">
            Home
          </Link>
          <Link href="/businesses" className="link-line text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#F7F3EE]">
            Our businesses
          </Link>
        </div>
      </div>
    </section>
  );
}
