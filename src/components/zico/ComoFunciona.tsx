import { steps } from "@/data/como-funciona";
import { Container, SectionLabel } from "./primitives";

export function ComoFunciona() {
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
                    <p className="mt-2 text-sm leading-relaxed text-foreground/80 md:text-base">{s.d}</p>
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