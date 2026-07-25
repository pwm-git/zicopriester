import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq } from "@/data/faq";
import { Container, SectionLabel } from "./primitives";

export function FAQ() {
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
            <Accordion type="single" collapsible className="border-t border-border">
              {faq.map((it, i) => (
                <AccordionItem key={it.q} value={`faq-${i}`} className="border-b border-border">
                  <AccordionTrigger className="py-6 font-display text-xl md:text-2xl hover:no-underline hover:text-primary">
                    {it.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-base leading-relaxed text-foreground/80">
                    {it.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Container>
    </section>
  );
}