import { MessageCircle } from "lucide-react";
import { site, whatsappLink } from "@/lib/site.js";

export function WhatsAppFab() {
  return (
    <a
      href={whatsappLink(`Hello ${site.name}, I would like some assistance.`)}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:scale-110 hover:shadow-xl animate-pulse-ring"
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
    </a>
  );
}
