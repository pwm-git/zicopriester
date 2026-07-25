import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/data/contact";
import { Container, SectionLabel } from "./primitives";

export function Oferta() {
  return (
    <section className="mt-32 md:mt-44">
      <Container>
        <div className="grid grid-cols-1 gap-10 border-y border-border py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-5">
            <SectionLabel roman="VIII" label="Como adquirir" />
            <h2 className="font-display text-4xl leading-tight md:text-5xl">
              Cada obra é <span className="italic text-primary">única</span>.
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="text-lg leading-relaxed text-foreground/75">
              Valores variam conforme técnica, tamanho e raridade. Parcelamento e envio combinados diretamente com a
              curadoria do artista. Cada peça acompanha certificado assinado.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-3 border border-foreground bg-foreground px-7 py-4 text-[12px] uppercase tracking-[0.28em] text-background transition-colors hover:bg-primary hover:border-primary"
            >
              <MessageCircle className="h-4 w-4" /> Pedir orçamento de uma obra
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}