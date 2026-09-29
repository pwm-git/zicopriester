import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const obras = [
  { id: "obra-01", titulo: "Imagem #001" },
  { id: "obra-02", titulo: "Imagem #002" },
  { id: "obra-03", titulo: "Imagem #003" },
  { id: "obra-04", titulo: "Imagem #004" },
  { id: "obra-05", titulo: "Imagem #005" },
  { id: "obra-06", titulo: "Imagem #006" },
  { id: "obra-07", titulo: "Imagem #007" },
  { id: "obra-08", titulo: "Imagem #008" },
  { id: "obra-09", titulo: "Imagem #009" },
  { id: "obra-11", titulo: "Imagem #011", tecnica: "Gravura" },
];

export default defineTool({
  name: "list_obras",
  title: "Listar obras do acervo",
  description: "Lista as obras originais de Zico Priester disponíveis no acervo, com título, ano e técnica.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(obras, null, 2) }],
    structuredContent: { obras },
  }),
});
