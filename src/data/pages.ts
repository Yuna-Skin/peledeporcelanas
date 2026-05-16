export type EbookPage =
  | {
      type: "cover";
      image: string;
      title: string;
      subtitle: string;
      badge: string;
    }
  | {
      type: "content";
      image?: string;
      title?: string;
      text: string;
    };

export const pages: EbookPage[] = [
  {
    type: "cover",
    image:
      "https://res.cloudinary.com/dqsuj0pjy/image/upload/v1778975052/Uma_mulher_relaxando_profundamente_a_202605162043_w4zm3x.jpg",
    title: "Protocolo Pele de Porcelana",
    subtitle:
      "O ritual usado para deixar a pele uniforme, viçosa e bonita, mesmo sem maquiagem.",
    badge: "Bônus exclusivo do Desafio 28 Dias Botox Coreano Manual",
  },
];
