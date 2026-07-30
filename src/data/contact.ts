export const WHATSAPP_NUMBER =
  import.meta.env.VITE_WHATSAPP_NUMBER ?? "5548999990454";
export const WHATSAPP_MESSAGE =
  import.meta.env.VITE_WHATSAPP_MESSAGE ??
  "Olá, gostaria de pedir mais informações sobre as obras do acervo do Zico.";
export const INSTAGRAM_HANDLE =
  import.meta.env.VITE_INSTAGRAM_HANDLE ?? "zico.priester.oficial";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;
export const INSTAGRAM_URL = "https://www.instagram.com/zico.priester.oficial/";

export const whatsappUrlForObra = (titulo: string, ano: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Olá, gostaria de saber mais sobre "${titulo}" (${ano}).`,
  )}`;