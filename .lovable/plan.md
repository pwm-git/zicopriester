## Opção 1: Despublicar via configurações do projeto (recomendada para "tirar do ar")

Ação manual que você deve fazer no editor do Lovable, pois não há ferramenta de unpublish disponível por API:

- Desktop: clique no nome do projeto no topo esquerdo → **Settings** → **Project** → **General** → botão **Unpublish**.
- Mobile: modo Chat → menu `...` no canto inferior direito → **Settings** → **Project** → **General** → **Unpublish**.

Para voltar ao ar depois, basta clicar em **Publish** novamente.

## Opção 2: Página de "em breve" (implementação no código)

Se quiser manter a URL pública mas esconder a landing page atual, eu substituo a rota `/` por uma tela de "em breve" ou "manutenção" com:

- Logo manuscrito Zico + identidade visual do site (off-white, verde #44726f, serifas).
- Frase curta, por exemplo: "Voltamos em breve" ou "Novo acervo em breve".
- Links de WhatsApp e Instagram já configurados (48999990454 e @zico.priester.oficial).
- Sem acesso à galeria, FAQ, depoimentos ou outras seções até que você peça para reativar.

### Implementação
1. Criar `src/routes/index.tsx` com o layout de "em breve".
2. Preservar `head()` com SEO apropriado (título, descrição, OG tags).
3. Manter `__root.tsx`, fontes e tokens do `styles.css`.
4. Guardar a landing page atual em um arquivo separado para fácil reativação.

## Próximo passo

Confirme qual opção prefere:
- **A** — despublicar via configurações (eu explico como fazer).
- **B** — eu implemento a página de "em breve" agora, substituindo a landing page.