import { categorias } from "@/data/solucao";
import { Container, SectionLabel } from "./primitives";

export function Solucao() {
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
            <p className="mt-8 text-lg leading-relaxed text-foreground/85">
              Telas grandes, desenhos a nanquim e gravuras assinadas, vindas do acervo pessoal de Zico Priester. Você
              conversa com a curadoria oficial de quem assinou a obra.
            </p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="grid grid-cols-3 gap-px bg-border">
              {categorias.map((s) => (
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