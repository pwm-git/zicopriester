import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_contact_info",
  title: "Obter contato do artista",
  description: "Retorna os canais oficiais de contato com o artista Zico Priester (WhatsApp e Instagram).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const whatsappNumber = "5548999990454";
    const instagram = "zico.priester.oficial";
    const info = {
      whatsapp: `https://wa.me/${whatsappNumber}`,
      whatsappNumber,
      instagram: `https://instagram.com/${instagram}`,
      instagramHandle: instagram,
      site: "https://zicopriester.lovable.app",
    };
    return {
      content: [{ type: "text", text: JSON.stringify(info, null, 2) }],
      structuredContent: info,
    };
  },
});