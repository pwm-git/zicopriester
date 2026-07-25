import { useState } from "react";
import { motion } from "motion/react";
import { Minus, Plus } from "lucide-react";
import { faq } from "@/data/faq";
import { Container, SectionLabel } from "./primitives";

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
            <div className="border-t border-border">
              {faq.map((it) => (
                <FAQItem key={it.q} q={it.q} a={it.a} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}