import { pages as peleDePorcelanaPages, type EbookPage } from "./pages";

export type Ebook = {
  id: string;
  title: string;
  subtitle: string;
  cover: string;
  badge: string;
  available: boolean;
  pages?: EbookPage[];
};

export const ebooks: Ebook[] = [
  {
    id: "pele-de-porcelana",
    title: "Protocolo Pele de Porcelana",
    subtitle:
      "O ritual para uma pele uniforme, viçosa e bonita, mesmo sem maquiagem.",
    cover:
      "https://res.cloudinary.com/dqsuj0pjy/image/upload/v1778975052/Uma_mulher_relaxando_profundamente_a_202605162043_w4zm3x.jpg",
    badge: "Bônus 01",
    available: true,
    pages: peleDePorcelanaPages,
  },
  {
    id: "bonus-2",
    title: "Em breve",
    subtitle: "Novo bônus exclusivo do Desafio 28 Dias.",
    cover:
      "https://res.cloudinary.com/dqsuj0pjy/image/upload/v1778975616/PROMPT_DA_IMAGEM_Close-up_editorial_202605162053_xcvub0.jpg",
    badge: "Bônus 02",
    available: false,
  },
  {
    id: "bonus-3",
    title: "Em breve",
    subtitle: "Novo bônus exclusivo do Desafio 28 Dias.",
    cover:
      "https://res.cloudinary.com/dqsuj0pjy/image/upload/v1778983689/Retrato_editorial_ultra_sofisticado_de_202605162305_siqtf5.jpg",
    badge: "Bônus 03",
    available: false,
  },
];

export const getEbook = (id: string) => ebooks.find((e) => e.id === id);
