import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Instagram, MessageCircle, Plus, Minus } from "lucide-react";

import avatarAsset from "@/assets/zico-avatar.jpg.asset.json";
import logoAsset from "@/assets/zico-logo.jpg.asset.json";
import obra01Asset from "@/assets/obra-01.jpg.asset.json";
import obra02Asset from "@/assets/obra-02.jpg.asset.json";
import obra03Asset from "@/assets/obra-03.jpg.asset.json";
import obra04Asset from "@/assets/obra-04.jpg.asset.json";
import obra05Asset from "@/assets/obra-05.jpg.asset.json";
import obra06Asset from "@/assets/obra-06.jpg.asset.json";
import obra07Asset from "@/assets/obra-07.jpg.asset.json";
import obra08Asset from "@/assets/obra-08.jpg.asset.json";
import obra09Asset from "@/assets/obra-09.jpg.asset.json";
import retratoAtelieAsset from "@/assets/zico-retrato-atelie.jpg.asset.json";

const obra01 = obra01Asset.url;
const obra02 = obra02Asset.url;
const obra03 = obra03Asset.url;
const obra04 = obra04Asset.url;
const obra05 = obra05Asset.url;
const obra06 = obra06Asset.url;
const obra07 = obra07Asset.url;
const obra08 = obra08Asset.url;
const obra09 = obra09Asset.url;
const retratoAtelie = retratoAtelieAsset.url;

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

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER ?? "5548999990454";
const WHATSAPP_MESSAGE =
  import.meta.env.VITE_WHATSAPP_MESSAGE ?? "Olá, gostaria de pedir mais informações sobre as obras do acervo do Zico.";
const INSTAGRAM_HANDLE = import.meta.env.VITE_INSTAGRAM_HANDLE ?? "zico.priester.oficial";

const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM_HANDLE}`;

const obras = [
  { src: obra01, titulo: "Operário em pausa", ano: "1972", tecnica: "Óleo sobre tela", span: "row-span-2" },
  { src: obra02, titulo: "Bezerra, o santo", ano: "1968", tecnica: "Nanquim sobre papel", span: "" },
  { src: obra03, titulo: "Rua do Triunfo, madrugada", ano: "1974", tecnica: "Óleo sobre linho", span: "" },
  { src: obra04, titulo: "Três figuras", ano: "1971", tecnica: "Litografia, tiragem 12/30", span: "row-span-2" },
  { src: obra05, titulo: "Centro velho", ano: "1976", tecnica: "Óleo sobre tela", span: "" },
  { src: obra06, titulo: "Retrato do crítico", ano: "1970", tecnica: "Tinta sobre papel", span: "" },
  { src: obra07, titulo: "O viajante", ano: "1973", tecnica: "Óleo sobre tela", span: "row-span-2" },
  { src: obra08, titulo: "Transamazônica", ano: "1973", tecnica: "Óleo sobre tela", span: "" },
  { src: obra09, titulo: "Edifício, esquina da Ipiranga", ano: "1969", tecnica: "Croqui a nanquim", span: "" },
];

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

/* ------------------------------- primitives ------------------------------- */

function SectionLabel({ roman, label }: { roman: string; label: string }) {
  return (
    <div className="mb-10 flex items-baseline gap-4 text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
      <span className="font-display text-base italic text-primary">{roman}</span>
      <span className="h-px flex-1 bg-border" />
      <span>{label}</span>
    </div>
  );
}

function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1280px] px-6 md:px-12 lg:px-20 ${className}`}>{children}</div>;
}

function Fade({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* --------------------------------- header --------------------------------- */

function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled ? "backdrop-blur-md bg-background/85 border-b border-border" : ""
      }`}
    >
      <Container className="flex h-16 items-center justify-between md:h-20">
        <a href="#top" className="flex items-center gap-3">
          <img src={logoAsset.url} alt="Zico Priester" className="h-9 w-auto md:h-11 mix-blend-multiply" />
          <span className="hidden text-[10px] uppercase tracking-[0.3em] text-muted-foreground sm:inline">
            José Carlos Priester
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-[12px] uppercase tracking-[0.24em] text-foreground/70 md:flex">
          <a href="#acervo" className="hover:text-primary transition-colors">
            Acervo
          </a>
          <a href="#trajetoria" className="hover:text-primary transition-colors">
            Trajetória
          </a>
          <a href="#processo" className="hover:text-primary transition-colors">
            Como funciona
          </a>
          <a href="#faq" className="hover:text-primary transition-colors">
            FAQ
          </a>
        </nav>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-2 border border-foreground bg-foreground px-4 py-2.5 text-[11px] uppercase tracking-[0.24em] text-background transition-colors hover:bg-primary hover:border-primary md:inline-flex"
        >
          <MessageCircle className="h-3.5 w-3.5" /> Falar com a curadoria
        </a>
      </Container>
    </header>
  );
}

/* ---------------------------------- hero ---------------------------------- */

function Hero() {
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

/* ------------------------------- manifesto -------------------------------- */

function Manifesto() {
  return (
    <section className="mt-32 md:mt-44">
      <Container>
        <Fade>
          <p className="mx-auto max-w-4xl font-display text-2xl leading-relaxed text-foreground/80 md:text-3xl lg:text-4xl">
            Há mais de cinco décadas, Zico Priester desenha o Brasil que poucos têm coragem de olhar.{" "}
            <span className="italic text-primary">Modernista</span> por formação, sarcástico por instinto, arquiteto por
            ofício. Esta página é um arquivo aberto — e um convite para levar uma obra original para casa.
          </p>
        </Fade>
      </Container>
    </section>
  );
}

/* --------------------------------- problema ------------------------------- */

function Problema() {
  return (
    <section className="mt-32 md:mt-44">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionLabel roman="II" label="O que se perdeu" />
            <h2 className="font-display text-4xl leading-tight md:text-5xl">
              Acervos raros raramente atravessam gerações.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 lg:pt-16">
            <Fade>
              <p className="text-lg leading-relaxed text-foreground/75">
                Boa parte da arte produzida no Brasil dos anos <strong>1960 e 1970</strong> ficou guardada em ateliês,
                gavetas e galerias fechadas. Para quem busca peças com densidade histórica, o caminho costuma ser longo,
                caro e cheio de intermediários.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-foreground/75">
                Arquitetos, decoradores e colecionadores curiosos terminam optando por reproduções decorativas — quando
                poderiam viver com uma obra que carrega um país inteiro dentro dela.
              </p>
            </Fade>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* --------------------------------- solução -------------------------------- */

function Solucao() {
  return (
    <section className="mt-32 md:mt-44">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel roman="III" label="Um acervo direto do ateliê" />
            <h2 className="font-display text-4xl leading-tight md:text-5xl">
              Sem leiloeiro. Sem galeria intermediária.
              <span className="italic text-primary"> Direto do artista.</span>
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-foreground/75">
              Telas grandes, desenhos a nanquim e gravuras assinadas, vindas do acervo pessoal de Zico Priester. Você
              conversa com a curadoria oficial de quem assinou a obra.
            </p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="grid grid-cols-3 gap-px bg-border">
              {[
                { n: "A4", l: "GRAVURAS EXCLUSIVAS\n\n\n" },
                { n: "+", l: "Desenhos a nanquim" },
                { n: "+", l: "\u00a0TELAS" },
              ].map((s) => (
                <div key={s.l} className="bg-background p-6 text-center md:p-8">
                  <div className="font-display text-5xl text-primary md:text-6xl">{s.n}</div>
                  <div className="mt-3 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* --------------------------------- galeria -------------------------------- */

function Galeria() {
  return (
    <section id="acervo" className="mt-32 md:mt-44">
      <Container>
        <div className="mb-12 flex flex-col items-end justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionLabel roman="IV" label="Acervo curado" />
            <h2 className="font-display text-4xl leading-tight md:text-6xl">
              Diversas obras. <span className="italic text-primary">E muitas histórias.</span>
            </h2>
            <p className="mt-4 max-w-xl text-base text-foreground/70">
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

        <div className="grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
          {obras.map((o, i) => (
            <motion.a
              key={o.titulo}
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Olá, gostaria de saber mais sobre "${o.titulo}" (${o.ano}).`)}`}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative block overflow-hidden bg-secondary ${o.span}`}
            >
              <img
                src={o.src}
                alt={`${o.titulo}, ${o.ano} — ${o.tecnica}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-foreground/85 via-foreground/10 to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="font-display text-xl italic text-background">{o.titulo}</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.24em] text-background/80">
                  {o.ano} · {o.tecnica}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <p className="mt-8 text-center text-xs uppercase tracking-[0.24em] text-muted-foreground">
          Cada obra é única. Disponibilidade confirmada no atendimento.
        </p>
      </Container>
    </section>
  );
}

/* ------------------------------- trajetória ------------------------------- */

function Trajetoria() {
  const eras = [
    {
      ano: "1940s",
      titulo: "Origens paulistas",
      txt: "Infância e formação em São Paulo. Os primeiros cadernos de desenho.",
    },
    {
      ano: "1970s",
      titulo: "Arquitetura & editorial",
      txt: "Ilustra a Revista Veja em 1973 — a ocupação da Amazônia durante o regime militar.",
    },
    {
      ano: "1980 – 90s",
      titulo: "Música & cidade",
      txt: "Design gráfico, música e projetos urbanos. Atravessa décadas como observador crítico.",
    },
    {
      ano: "Hoje",
      titulo: "Acervo aberto",
      txt: "Pela primeira vez, o acervo pessoal é apresentado diretamente ao público.",
    },
  ];
  return (
    <section id="trajetoria" className="mt-32 md:mt-44">
      <Container>
        <SectionLabel roman="V" label="Trajetória" />
        <h2 className="font-display text-4xl leading-tight md:text-5xl lg:text-6xl">
          Arquiteto. Músico. <span className="italic text-primary">Cronista visual.</span>
        </h2>
        <div className="mt-16 grid grid-cols-1 gap-px bg-border md:grid-cols-4">
          {eras.map((e) => (
            <Fade key={e.ano}>
              <div className="h-full bg-background p-6 md:p-8">
                <div className="font-display text-2xl italic text-primary">{e.ano}</div>
                <div className="mt-4 font-display text-xl">{e.titulo}</div>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">{e.txt}</p>
              </div>
            </Fade>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------ como funciona ----------------------------- */

function ComoFunciona() {
  const steps = [
    { n: "01", t: "Escolha uma obra", d: "Navegue o acervo e selecione a peça que conversa com você." },
    { n: "02", t: "Converse com o artista", d: "Atendimento pessoal pelo WhatsApp ou direct no Instagram." },
    { n: "03", t: "Reserve com sinal", d: "Confirmação, certificado de autenticidade assinado pelo próprio Zico." },
    { n: "04", t: "Receba em casa", d: "Embalagem técnica e envio para qualquer cidade do Brasil." },
  ];
  return (
    <section id="processo" className="mt-32 md:mt-44">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionLabel roman="VI" label="Processo" />
            <h2 className="font-display text-4xl leading-tight md:text-5xl">
              Quatro passos, <span className="italic text-primary">sem fricção.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <ol className="space-y-px bg-border">
              {steps.map((s) => (
                <li key={s.n} className="grid grid-cols-[auto_1fr] items-baseline gap-6 bg-background p-6 md:p-8">
                  <span className="font-display text-3xl italic text-primary md:text-4xl">{s.n}</span>
                  <div>
                    <div className="font-display text-xl md:text-2xl">{s.t}</div>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/70 md:text-base">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}


/* ------------------------------ depoimentos ------------------------------- */

function Depoimentos() {
  const items = [
    {
      t: "Comprei um nanquim para o escritório de arquitetura. Os clientes param para olhar antes de qualquer cadeira.",
      n: "Marina A.",
      c: "Arquiteta, Pinheiros",
    },
    {
      t: "É raro encontrar quem ainda pinte com a memória dos anos 70 ainda viva. Vale cada centímetro.",
      n: "Henrique L.",
      c: "Decorador, Higienópolis",
    },
    {
      t: "Recebi a tela embalada como um documento histórico. A conversa pelo WhatsApp foi a parte mais inesperada.",
      n: "Sofia R.",
      c: "Colecionadora, Curitiba",
    },
  ];
  return (
    <section className="mt-32 md:mt-44">
      <Container>
        <SectionLabel roman="VII" label="Quem já levou para casa" />
        <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-3">
          {items.map((d) => (
            <Fade key={d.n}>
              <figure className="flex h-full flex-col justify-between bg-background p-8">
                <blockquote className="font-display text-xl italic leading-snug text-foreground/85 md:text-2xl">
                  "{d.t}"
                </blockquote>
                <figcaption className="mt-8 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                  <strong className="text-foreground">{d.n}</strong> · {d.c}
                </figcaption>
              </figure>
            </Fade>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------------------------------- oferta -------------------------------- */

function Oferta() {
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

/* ---------------------------------- FAQ ----------------------------------- */

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-primary"
      >
        <span className="font-display text-xl md:text-2xl">{q}</span>
        {open ? <Minus className="h-4 w-4 shrink-0" /> : <Plus className="h-4 w-4 shrink-0" />}
      </button>
      {open && (
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.4 }}
          className="pb-6 text-base leading-relaxed text-foreground/75"
        >
          {a}
        </motion.p>
      )}
    </div>
  );
}

function FAQ() {
  const qs = [
    {
      q: "Como sei que a obra é do Zico?",
      a: "Cada peça acompanha um certificado de autenticidade assinado pelo próprio Zico Priester, com técnica, ano e dimensões.",
    },
    {
      q: "Vocês enviam para fora de São Paulo?",
      a: "Sim, para todo o Brasil. Usamos embalagem técnica adequada para telas, gravuras e desenhos.",
    },
    {
      q: "Posso parcelar?",
      a: "Sim. Condições e formas de pagamento são combinadas diretamente no atendimento pelo WhatsApp.",
    },
    {
      q: "Posso pedir uma exposição?",
      a: "Sim, sob agendamento prévio, em São Paulo. Basta solicitar pelo WhatsApp ou Instagram.",
    },
    {
      q: "Por que não há checkout no site?",
      a: "Cada obra é única e exige conversa. Preferimos o atendimento pessoal — pelo WhatsApp ou direct no Instagram oficial.",
    },
  ];
  return (
    <section id="faq" className="mt-32 md:mt-44">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionLabel roman="IX" label="Dúvidas" />
            <h2 className="font-display text-4xl leading-tight md:text-5xl">
              Antes de levar uma obra <span className="italic text-primary">para casa.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <div className="border-t border-border">
              {qs.map((it) => (
                <FAQItem key={it.q} q={it.q} a={it.a} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* -------------------------------- CTA final ------------------------------- */

function CtaFinal() {
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
          <p className="mx-auto mt-6 max-w-xl text-base text-background/70 md:text-lg">
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

/* --------------------------------- footer --------------------------------- */

function Footer() {
  return (
    <footer className="mt-24 border-t border-border py-12">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <img src={logoAsset.url} alt="Zico" className="h-16 w-auto mix-blend-multiply" />
            <p className="mt-4 max-w-sm text-sm text-foreground/70">
              José Carlos Priester. Acervo aberto pela primeira vez ao público.
            </p>
          </div>
          <div className="flex flex-col gap-3 text-[11px] uppercase tracking-[0.24em] text-muted-foreground md:items-end">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hover:text-primary">
              WhatsApp do ateliê
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="hover:text-primary">
              Instagram oficial
            </a>
            <span>Vendas apenas por WhatsApp e Instagram</span>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-[10px] uppercase tracking-[0.24em] text-muted-foreground md:flex-row">
          <span>© {new Date().getFullYear()} Zico Priester. Todos os direitos reservados.</span>
          <span>TODÁ INVENTIVIDADE · ATUALIZADO JUNHO 2026</span>
        </div>
      </Container>
    </footer>
  );
}

/* -------------------------------- whatsapp fab ---------------------------- */

function WhatsAppFab() {
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
