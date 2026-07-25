import logoAsset from "@/assets/zico-logo.jpg.asset.json";
import { INSTAGRAM_URL, WHATSAPP_URL } from "@/data/contact";
import { Container } from "./primitives";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border py-12">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <img src={logoAsset.url} alt="Zico" className="h-16 w-auto mix-blend-multiply" />
            <p className="mt-4 max-w-sm text-sm text-foreground/80">
              José Carlos Priester. Acervo aberto pela primeira vez ao público.
            </p>
          </div>
          <div className="flex flex-col gap-3 text-[11px] uppercase tracking-[0.24em] text-muted-foreground md:items-end">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hover:text-primary">
              WhatsApp do ateliê
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="hover:text-primary">
              Instagram oficial
            </a>
            <span>Vendas apenas por WhatsApp e Instagram</span>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-[10px] uppercase tracking-[0.24em] text-muted-foreground md:flex-row">
          <span>
            © {new Date().getFullYear()} Zico Priester. Todos os direitos reservados. Desenvolvido por:{" "}
            <a href="https://contatobom.com" target="_blank" rel="noreferrer" className="underline hover:text-primary">
              Contato Bom
            </a>
          </span>
          <span>TODÁ INVENTIVIDADE · ATUALIZADO JUNHO 2026</span>
        </div>
      </Container>
    </footer>
  );
}