import obra01Asset from "@/assets/obra-01.jpg.asset.json";
import obra02Asset from "@/assets/obra-02.jpg.asset.json";
import obra03Asset from "@/assets/obra-03.jpg.asset.json";
import obra04Asset from "@/assets/obra-04.jpg.asset.json";
import obra05Asset from "@/assets/obra-05.jpg.asset.json";
import obra06Asset from "@/assets/obra-06.jpg.asset.json";
import obra07Asset from "@/assets/obra-07.jpg.asset.json";
import obra08Asset from "@/assets/obra-08.jpg.asset.json";
import obra09Asset from "@/assets/obra-09.jpg.asset.json";

export type Obra = {
  src: string;
  titulo: string;
  ano: string;
  tecnica: string;
  span: string;
};

export const obras: Obra[] = [
  { src: obra01Asset.url, titulo: "Operário em pausa", ano: "1972", tecnica: "Óleo sobre tela", span: "row-span-2" },
  { src: obra02Asset.url, titulo: "Bezerra, o santo", ano: "1968", tecnica: "Nanquim sobre papel", span: "" },
  { src: obra03Asset.url, titulo: "Rua do Triunfo, madrugada", ano: "1974", tecnica: "Óleo sobre linho", span: "" },
  { src: obra04Asset.url, titulo: "Três figuras", ano: "1971", tecnica: "Litografia, tiragem 12/30", span: "row-span-2" },
  { src: obra05Asset.url, titulo: "Centro velho", ano: "1976", tecnica: "Óleo sobre tela", span: "" },
  { src: obra06Asset.url, titulo: "Retrato do crítico", ano: "1970", tecnica: "Tinta sobre papel", span: "" },
  { src: obra07Asset.url, titulo: "O viajante", ano: "1973", tecnica: "Óleo sobre tela", span: "row-span-2" },
  { src: obra08Asset.url, titulo: "Transamazônica", ano: "1973", tecnica: "Óleo sobre tela", span: "" },
  { src: obra09Asset.url, titulo: "Edifício, esquina da Ipiranga", ano: "1969", tecnica: "Croqui a nanquim", span: "" },
];