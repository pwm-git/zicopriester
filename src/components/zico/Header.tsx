import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import logoAsset from "@/assets/zico-logo.jpg.asset.json";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Container } from "./primitives";

const NAV_LINKS = [
  { href: "#acervo", label: "Acervo" },
  { href: "#trajetoria", label: "Trajetória" },
  { href: "#processo", label: "Como funciona" },
  { href: "#faq", label: "FAQ" },
];

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
        <nav className="hidden items-center gap-8 text-[12px] uppercase tracking-[0.24em] text-foreground/80 md:flex">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <Sheet>
          <SheetTrigger
            aria-label="Abrir menu de navegação"
            className="inline-flex h-11 w-11 items-center justify-center text-foreground md:hidden"
          >
            <Menu className="h-5 w-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] bg-background">
            <SheetHeader>
              <SheetTitle className="sr-only">Menu de navegação</SheetTitle>
            </SheetHeader>
            <nav className="mt-8 flex flex-col gap-6 px-2 text-[13px] uppercase tracking-[0.28em] text-foreground/80">
              {NAV_LINKS.map((l) => (
                <SheetClose asChild key={l.href}>
                  <a href={l.href} className="hover:text-primary transition-colors">
                    {l.label}
                  </a>
                </SheetClose>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
        <div className="hidden md:block" />
      </Container>
    </header>
  );
}