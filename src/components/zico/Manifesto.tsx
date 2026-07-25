import { Container, Fade } from "./primitives";

export function Manifesto() {
  return (
    <section className="mt-32 md:mt-44">
      <Container>
        <Fade>
          <p className="mx-auto max-w-4xl font-display text-2xl leading-relaxed text-foreground/80 md:text-3xl lg:text-4xl">
            Há mais de cinco décadas, Zico Priester desenha o Brasil que poucos têm coragem de olhar.{" "}
            <span className="italic text-primary">Modernista</span> por formação, sarcástico por instinto, arquiteto por
            ofício. Esta página é um arquivo aberto — e um convite para levar uma obra rara para casa.
          </p>
        </Fade>
      </Container>
    </section>
  );
}