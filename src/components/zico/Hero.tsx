import { motion } from "motion/react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import avatarAsset from "@/assets/zico-avatar.jpg.asset.json";
import { WHATSAPP_URL } from "@/data/contact";
import { Container } from "./primitives";

export function Hero() {
  return (
    <section id="top" className="relative pt-28 md:pt-32 lg:pt-36">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7 lg:pt-12">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8 text-[11px] uppercase tracking-[0.32em] text-muted-foreground"
            >
              <span className="text-primary">I</span> &nbsp;·&nbsp; José Carlos Priester &nbsp;·&nbsp; desde os anos
              1970
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[44px] leading-[1.02] tracking-tight md:text-[72px] lg:text-[88px]"
            >
              Obras do artista
              <br />
              <span className="italic text-primary">modernista</span>&nbsp;
              <br />—&nbsp; acervo exclusivo.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.25 }}
              className="mt-8 max-w-xl text-base leading-relaxed text-foreground/75 md:text-lg"
            >
              Telas, desenhos e gravuras assinados por Zico Priester. Acervo raro, crítico e moderno, com envio para
              todo o Brasil.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-3 border border-foreground bg-foreground px-7 py-4 text-[12px] uppercase tracking-[0.28em] text-background transition-all hover:bg-primary hover:border-primary"
              >
                <MessageCircle className="h-4 w-4" />
                ESCOLHER NO ACERVO
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="#acervo"
                className="inline-flex items-center justify-center gap-2 px-2 py-4 text-[12px] uppercase tracking-[0.28em] text-foreground underline-offset-8 hover:underline"
              >
                {"\n"}
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:col-span-5"
          >
            <div className="relative">
              <div className="absolute -inset-3 border border-border" aria-hidden />
              <img
                src={avatarAsset.url}
                alt="Retrato em aquarela de Zico Priester"
                className="relative w-full mix-blend-multiply"
                width={1200}
                height={1200}
              />
              <div className="absolute -bottom-6 -right-2 max-w-[220px] bg-background/90 p-4 text-right font-display italic text-sm leading-snug text-foreground/80 backdrop-blur-sm md:-bottom-8">
                "Desenhei o Brasil que poucos tinham coragem de olhar."
                <div className="mt-2 font-sans text-[10px] not-italic uppercase tracking-[0.24em] text-muted-foreground">
                  Z.P., caderno de 1976
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}