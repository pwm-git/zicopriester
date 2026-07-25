import { useEffect, useState } from "react";
import logoAsset from "@/assets/zico-logo.jpg.asset.json";
import { Container } from "./primitives";

export function Header() {
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
        <div className="hidden md:block" />
      </Container>
    </header>
  );
}