import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

interface FloatingWhatsAppProps {
  /** International digits only, e.g. 923042774444 */
  number: string;
  label?: string;
}

/** Fixed bottom-right WhatsApp button in the site's oxblood and gold style. */
export default function FloatingWhatsApp({ number, label = "Chat on WhatsApp" }: FloatingWhatsAppProps) {
  return (
    <a
      href={`https://wa.me/${number}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group fixed right-4 z-40 flex items-center gap-0 rounded-full border border-[#C5A059]/60 bg-[#24060C]/95 p-3.5 text-[#25D366] shadow-[0_12px_30px_-8px_rgba(0,0,0,0.7)] backdrop-blur-sm transition-[border-color,transform] duration-500 hover:border-[#DEBF7D] active:scale-95 sm:right-6"
      style={{ bottom: "max(1rem, env(safe-area-inset-bottom))" }}
    >
      <WhatsAppIcon className="h-6 w-6" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs font-semibold uppercase tracking-[0.18em] text-[#F7F3EE] opacity-0 transition-[max-width,opacity,margin] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:ml-3 group-hover:max-w-[12rem] group-hover:opacity-100 group-focus-visible:ml-3 group-focus-visible:max-w-[12rem] group-focus-visible:opacity-100">
        {label}
      </span>
    </a>
  );
}
