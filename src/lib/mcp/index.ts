import { defineMcp } from "@lovable.dev/mcp-js";
import listObrasTool from "./tools/list-obras";
import getContactTool from "./tools/get-contact";

export default defineMcp({
  name: "zico-priester-mcp",
  title: "Zico Priester — Acervo",
  version: "0.1.0",
  instructions:
    "Ferramentas para consultar o acervo de obras originais do artista modernista Zico Priester e obter os canais oficiais de contato (WhatsApp e Instagram).",
  tools: [listObrasTool, getContactTool],
});