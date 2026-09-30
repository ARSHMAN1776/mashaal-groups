import PageHero from "@/components/ui/PageHero";

export const metadata = {
  alternates: { canonical: "/privacy" },
  title: "Privacy | MASHAAL GROUP",
  description: "How MASHAAL GROUP handles information sent through this website.",
};

const SECTIONS = [
  {
    title: "What we collect",
    text: "Only what you choose to send us through the enquiry form or by email: your name, organization, contact details and message.",
  },
  {
    title: "How we use it",
    text: "To reply to your enquiry and to route it to the right business or office within the group. We do not sell personal information.",
  },
  {
    title: "Sharing",
    text: "Your message may be shared with the group business best placed to respond. We do not share it with unrelated third parties.",
  },
  {
    title: "Your choices",
    text: "You can ask us to correct or delete the information you sent by writing to inquiries@mashaalgroups.com.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="flex w-full flex-col bg-[#190308] text-[#F7F3EE]">
      <PageHero
        title={
          <>
            Your <em>privacy.</em>
          </>
        }
        lede="A short, plain description of how information sent through this site is handled."
        imagePosition="50% 40%"
      />
      <section className="bg-[#190308] py-28 sm:py-40">
        <div className="mx-auto max-w-3xl px-6 sm:px-8">
          <div className="border-t border-white/[0.1]">
            {SECTIONS.map((s) => (
              <div key={s.title} className="border-b border-white/[0.1] py-10">
                <h2 className="display text-3xl sm:text-4xl">{s.title}</h2>
                <p className="lede mt-4 text-base leading-[1.85] text-[#DCCFC7]">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
