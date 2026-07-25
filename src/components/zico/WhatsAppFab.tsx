import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/data/contact";

export function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com o artista no WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 border border-foreground bg-foreground px-5 py-3 text-[11px] uppercase tracking-[0.24em] text-background shadow-lg transition-all hover:bg-primary hover:border-primary md:bottom-8 md:right-8"
    >
      <MessageCircle className="h-4 w-4" />
      <span className="hidden sm:inline">WHATSAPP</span>
    </a>
  );
}