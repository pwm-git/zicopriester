import { Instagram, MessageCircle } from "lucide-react";
import { INSTAGRAM_URL, WHATSAPP_URL } from "@/data/contact";
import { Container } from "./primitives";

export function CtaFinal() {
  return (
    <section className="mt-32 md:mt-44">
      <Container>
        <div className="relative overflow-hidden border border-border bg-foreground px-8 py-20 text-center text-background md:px-16 md:py-32">
          <p className="text-[11px] uppercase tracking-[0.32em] text-background/60">X · Convite</p>
          <h2 className="mx-auto mt-8 max-w-4xl font-display text-4xl leading-[1.05] md:text-6xl lg:text-7xl">
            Leve para casa um pedaço do
            <br />
            <span className="italic text-primary-foreground/90">modernismo.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-background/85 md:text-lg">
            Respondemos pessoalmente em até 24h. Sem formulário, sem intermediário.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-background px-8 py-4 text-[12px] uppercase tracking-[0.28em] text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 border border-background/40 px-8 py-4 text-[12px] uppercase tracking-[0.28em] text-background transition-colors hover:border-background hover:bg-background/10"
            >
              <Instagram className="h-4 w-4" /> Mensagem no Instagram
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}