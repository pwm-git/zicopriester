import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const obras = [
  { id: "obra-01", titulo: "Operário em pausa", ano: "1972", tecnica: "Óleo sobre tela" },
  { id: "obra-02", titulo: "Bezerra, o santo", ano: "1968", tecnica: "Nanquim sobre papel" },
  { id: "obra-03", titulo: "Rua do Triunfo, madrugada", ano: "1974", tecnica: "Óleo sobre linho" },
  { id: "obra-04", titulo: "Três figuras", ano: "1971", tecnica: "Litografia, tiragem 12/30" },
  { id: "obra-05", titulo: "Centro velho", ano: "1976", tecnica: "Óleo sobre tela" },
  { id: "obra-06", titulo: "Retrato do crítico", ano: "1970", tecnica: "Tinta sobre papel" },
  { id: "obra-07", titulo: "O viajante", ano: "1973", tecnica: "Óleo sobre tela" },
  { id: "obra-08", titulo: "Transamazônica", ano: "1973", tecnica: "Óleo sobre tela" },
  { id: "obra-09", titulo: "Edifício, esquina da Ipiranga", ano: "1969", tecnica: "Croqui a nanquim" },
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