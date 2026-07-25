import { createFileRoute } from "@tanstack/react-router";

import avatarAsset from "@/assets/zico-avatar.jpg.asset.json";
import { Header } from "@/components/zico/Header";
import { Hero } from "@/components/zico/Hero";
import { Manifesto } from "@/components/zico/Manifesto";
import { Problema } from "@/components/zico/Problema";
import { Solucao } from "@/components/zico/Solucao";
import { Galeria } from "@/components/zico/Galeria";
import { Trajetoria } from "@/components/zico/Trajetoria";
import { ComoFunciona } from "@/components/zico/ComoFunciona";
import { Depoimentos } from "@/components/zico/Depoimentos";
import { Oferta } from "@/components/zico/Oferta";
import { FAQ } from "@/components/zico/Faq";
import { CtaFinal } from "@/components/zico/CtaFinal";
import { Footer } from "@/components/zico/Footer";
import { WhatsAppFab } from "@/components/zico/WhatsAppFab";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zico Priester" },
      {
        name: "description",
        content:
          "Telas, desenhos e gravuras assinados por Zico Priester. Acervo raro, crítico e moderno, com envio para todo o Brasil.",
      },
      { property: "og:title", content: "Zico Priester — Obras raras do modernismo" },
      {
        property: "og:description",
        content: "Acervo raro do artista José Carlos Priester. Telas, desenhos e gravuras, com envio nacional.",
      },
      { property: "og:image", content: avatarAsset.url },
      { name: "twitter:image", content: avatarAsset.url },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="paper-grain min-h-screen text-foreground antialiased">
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <Problema />
        <Solucao />
        <Galeria />
        <Trajetoria />
        <ComoFunciona />
        <Depoimentos />
        <Oferta />
        <FAQ />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}