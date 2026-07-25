import { motion } from "motion/react";

export function SectionLabel({ roman, label }: { roman: string; label: string }) {
  return (
    <div className="mb-10 flex items-baseline gap-4 text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
      <span className="font-display text-base italic text-primary">{roman}</span>
      <span className="h-px flex-1 bg-border" />
      <span>{label}</span>
    </div>
  );
}

export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1280px] px-6 md:px-12 lg:px-20 ${className}`}>
      {children}
    </div>
  );
}

export function Fade({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
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