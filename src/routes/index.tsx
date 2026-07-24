import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { MessageCircle, Instagram, ArrowUpRight } from "lucide-react";

import logoAsset from "@/assets/zico-logo.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zico Priester — Em breve" },
      {
        name: "description",
        content: "Acervo de Zico Priester. Voltamos em breve com novas obras raras.",
      },
      { property: "og:title", content: "Zico Priester — Em breve" },
      {
        property: "og:description",
        content: "Acervo de Zico Priester. Voltamos em breve com novas obras raras.",
      },
      { property: "og:image", content: logoAsset.url },
      { name: "twitter:image", content: logoAsset.url },
    ],
  }),
  component: Index,
});

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER ?? "48999990454";
const WHATSAPP_MESSAGE =
  import.meta.env.VITE_WHATSAPP_MESSAGE ?? "Olá, gostaria de pedir mais informações sobre as obras do acervo do Zico.";
const INSTAGRAM_HANDLE = import.meta.env.VITE_INSTAGRAM_HANDLE ?? "zico.priester.oficial";

const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_HANDLE}`;

function Index() {
  return (
    <div className="paper-grain min-h-screen bg-background text-foreground antialiased">
      <main className="flex min-h-screen flex-col items-center justify-center px-6 py-20">
        <div className="max-w-2xl text-center">
          <motion.img
            src={logoAsset.url}
            alt="Zico Priester"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mb-12 h-16 w-auto md:h-20 mix-blend-multiply"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 text-[11px] uppercase tracking-[0.32em] text-muted-foreground"
          >
            José Carlos Priester
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[48px] leading-[1.02] tracking-tight md:text-[72px]"
          >
            Voltamos em breve.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-8 max-w-lg text-lg leading-relaxed text-foreground/70"
          >
            O acervo de Zico Priester está em atualização. Enquanto isso, fale com a curadoria oficial.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-3 border border-foreground bg-foreground px-8 py-4 text-[12px] uppercase tracking-[0.28em] text-background transition-all hover:bg-primary hover:border-primary"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-[12px] uppercase tracking-[0.28em] text-foreground underline-offset-8 hover:text-primary hover:underline"
            >
              <Instagram className="h-4 w-4" />
              Instagram
            </a>
          </motion.div>
        </div>
      </main>

      <footer className="border-t border-border py-8">
        <p className="text-center text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
          © 2026 Zico Priester. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
