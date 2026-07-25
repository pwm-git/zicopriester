import { Container, Fade, SectionLabel } from "./primitives";

export function Problema() {
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
              <p className="text-lg leading-relaxed text-foreground/85">
                Boa parte da arte produzida no Brasil dos anos <strong>1960 e 1970</strong> ficou guardada em ateliês,
                gavetas e galerias fechadas. Para quem busca peças com densidade histórica, o caminho costuma ser longo,
                caro e cheio de intermediários.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-foreground/85">
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