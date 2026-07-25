import retratoAtelieAsset from "@/assets/zico-retrato-atelie.jpg.asset.json";
import { eras } from "@/data/trajetoria";
import { Container, Fade, SectionLabel } from "./primitives";

export function Trajetoria() {
  return (
    <section id="trajetoria" className="mt-32 md:mt-44">
      <Container>
        <SectionLabel roman="V" label="Trajetória" />
        <h2 className="font-display text-4xl leading-tight md:text-5xl lg:text-6xl">
          Arquiteto. Músico. <span className="italic text-primary">Cronista visual.</span>
        </h2>
        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Retrato editorial */}
          <div className="lg:col-span-5">
           <Fade>
            <figure className="relative">
              <div className="absolute -left-3 -top-3 hidden h-full w-full border border-primary/40 md:block" aria-hidden />
              <div className="relative overflow-hidden bg-muted">
                <img
                  src={retratoAtelieAsset.url}
                  alt="Zico Priester em seu ateliê, ao lado de um desenho em processo"
                  className="block h-[520px] w-full object-cover object-top grayscale-[0.15] sepia-[0.25] md:h-[640px]"
                  loading="lazy"
                />
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(120% 80% at 50% 20%, transparent 55%, rgba(0,0,0,0.28) 100%)",
                  }}
                  aria-hidden
                />
              </div>
            </figure>
           </Fade>
          </div>

          {/* Timeline */}
          <div className="lg:col-span-7">
            <ol className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2">
              {eras.map((e) => (
                <Fade key={e.ano}>
                  <li className="h-full bg-background p-6 md:p-8">
                    <div className="font-display text-2xl italic text-primary">{e.ano}</div>
                    <div className="mt-4 font-display text-xl">{e.titulo}</div>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/80">{e.txt}</p>
                  </li>
                </Fade>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}