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
      eyebrow?: string;
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
  {
    type: "content",
    image:
      "https://res.cloudinary.com/dqsuj0pjy/image/upload/v1778975616/PROMPT_DA_IMAGEM_Close-up_editorial_202605162053_xcvub0.jpg",
    eyebrow: "Leia antes de começar",
    title: "Aviso Importante",
    text: `Este protocolo não substitui o Desafio de 28 Dias com Botox Coreano Manual.

Ele existe para potencializar a aparência da pele, melhorar viço, textura e sensação ao toque, especialmente nos dias em que você quer se sentir bonita rapidamente, sem esforço e sem exageros.

Pense nele como um ritual de acabamento, não como um tratamento profundo.

É o toque final que deixa sua pele com aquele aspecto de revista, aquela sensação de bem-estar que transparece no espelho.`,
  },
  {
    type: "content",
    image:
      "https://res.cloudinary.com/dqsuj0pjy/image/upload/v1778983689/Retrato_editorial_ultra_sofisticado_de_202605162305_siqtf5.jpg",
    eyebrow: "Capítulo 1",
    title: "O que realmente significa “pele de porcelana”",
    text: `Pele de porcelana não é pele esticada, artificial ou sem expressão.

Não é sobre parecer irreal ou perder a naturalidade do seu rosto.

É exatamente o oposto.

— Textura uniforme
Pele suave ao toque, sem irregularidades visíveis.

— Aspecto descansado
Aparência de quem dormiu bem e está relaxada.

— Viço natural
Brilho saudável que vem de dentro.

— Aparência bonita mesmo de perto
Você se sente confiante em qualquer distância, sem medo de ser vista sem filtros ou sem maquiagem pesada.

— Sensação de pele bem cuidada
É o tipo de pele que parece bonita antes da maquiagem, e muitas vezes nem precisa dela.`,
  },
];
