import { useState } from "react";
import { depoimentos } from "@/data/depoimentos";
import { Container, Fade, SectionLabel } from "./primitives";

function Depoimento({ t, n, c, long }: { t: string; n: string; c: string; long?: boolean }) {
  const [expanded, setExpanded] = useState(false);
  const shouldClamp = long && !expanded;
  return (
    <figure className="flex h-full flex-col justify-between bg-background p-8">
      <blockquote
        className={`font-display text-xl italic leading-snug text-foreground/85 md:text-2xl ${
          shouldClamp ? "line-clamp-5" : ""
        }`}
      >
        "{t}"
      </blockquote>
      {long && (
        <button
          onClick={() => setExpanded((v) => !v)}
          className="mt-3 self-start text-[11px] uppercase tracking-[0.24em] text-primary transition-colors hover:text-foreground"
        >
          {expanded ? "ler menos" : "ler mais..."}
        </button>
      )}
      <figcaption className="mt-8 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
        <strong className="text-foreground">{n}</strong> · {c}
      </figcaption>
    </figure>
  );
}

export function Depoimentos() {
  return (
    <section className="mt-32 md:mt-44">
      <Container>
        <SectionLabel roman="VII" label="quem já conquistou uma obra do Zico" />
        <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-3">
          {depoimentos.map((d) => (
            <Fade key={d.n}>
              <Depoimento t={d.t} n={d.n} c={d.c} long={d.long} />
            </Fade>
          ))}
        </div>
      </Container>
    </section>
  );
}