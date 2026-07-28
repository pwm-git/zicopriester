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
  { src: obra01Asset.url, titulo: "Imagem #001", span: "row-span-2" },
  { src: obra02Asset.url, titulo: "Imagem #002", span: "" },
  { src: obra03Asset.url, titulo: "Imagem #003", span: "" },
  { src: obra04Asset.url, titulo: "Imagem #004", span: "row-span-2" },
  { src: obra05Asset.url, titulo: "Imagem #005", span: "" },
  { src: obra06Asset.url, titulo: "Imagem #006", span: "" },
  { src: obra07Asset.url, titulo: "Imagem #007", span: "row-span-2" },
  { src: obra08Asset.url, titulo: "Imagem #008", span: "" },
  { src: obra09Asset.url, titulo: "Imagem #009", span: "" },
];
