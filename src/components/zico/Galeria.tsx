import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { obras } from "@/data/obras";
import { WHATSAPP_URL, whatsappUrlForObra } from "@/data/contact";
import { Container, SectionLabel } from "./primitives";

export function Galeria() {
  return (
    <section id="acervo" className="mt-32 md:mt-44">
      <Container>
        <div className="mb-12 flex flex-col items-end justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionLabel roman="IV" label="Acervo curado" />
            <h2 className="font-display text-4xl leading-tight md:text-6xl">
              Diversas obras. <span className="italic text-primary">E muitas histórias.</span>
            </h2>
            <p className="mt-4 max-w-xl text-base text-foreground/80">
              Fale com a curadoria oficial do Zico, para adquirir a sua obra favorita.
            </p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.24em] text-foreground underline-offset-8 hover:text-primary hover:underline"
          >
            Consultar acervo completo <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <ul className="grid auto-rows-[220px] grid-cols-2 gap-4 [grid-auto-flow:dense] md:grid-cols-3 md:gap-6 lg:grid-cols-4 list-none p-0">
          {obras.map((o, i) => (
            <motion.li
              key={o.titulo}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={o.span}
            >
              <a
                href={whatsappUrlForObra(o.titulo, o.ano)}
                target="_blank"
                rel="noreferrer"
                aria-label={`${o.titulo}, ${o.ano} — ${o.tecnica}. Consultar no WhatsApp.`}
                className="group relative block h-full overflow-hidden bg-secondary"
              >
                <figure className="h-full">
                  <img
                    src={o.src}
                    alt={`${o.titulo}, ${o.ano} — ${o.tecnica}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04] group-focus-visible:scale-[1.04]"
                  />
                  <figcaption className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-foreground/85 via-foreground/10 to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100">
                    <span className="text-[10px] uppercase tracking-[0.24em] text-background">{o.ano}</span>
                  </figcaption>
                </figure>
              </a>
            </motion.li>
          ))}
        </ul>

        <p className="mt-8 text-center text-xs uppercase tracking-[0.24em] text-muted-foreground">
          Cada obra é única. Disponibilidade confirmada no atendimento.
        </p>
      </Container>
    </section>
  );
}