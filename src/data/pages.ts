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
  {
    type: "content",
    image:
      "https://res.cloudinary.com/dqsuj0pjy/image/upload/v1778983869/Fotografia_editorial_premium_mostrando_uma_202605162310_er8viw.jpg",
    eyebrow: "Capítulo 2",
    title: "Por que a pele não responde aos produtos",
    text: `O erro mais comum

A maioria das mulheres tenta melhorar a pele tratando apenas a superfície.

Mais cremes. Mais produtos. Mais camadas. Mais promessas em frascos caros.

O problema é que uma pele tensionada, inchada ou desorganizada não responde bem a nada aplicado por cima.

É como tentar pintar uma parede rachada — o resultado nunca fica perfeito.

— Primeiro: organizar o rosto
Desintoxicar, relaxar músculos, melhorar circulação.

— Depois: cuidar da pele
Aplicar produtos que realmente funcionam.

Mulheres com pele bonita fazem o oposto: primeiro organizam o rosto, depois cuidam da pele.

É exatamente isso que você está aprendendo a fazer.`,
  },
  {
    type: "content",
    image:
      "https://res.cloudinary.com/dqsuj0pjy/image/upload/v1778984028/Uma_mulher_elegante_realizando_exerci%CC%81cios_202605162313_tqwp7p.jpg",
    eyebrow: "Capítulo 3",
    title: "Momentos ideais para aplicar",
    text: `Este protocolo não precisa ser feito todos os dias.

Ele funciona melhor como um ritual estratégico, algo que você faz quando realmente quer sentir diferença.

1 — Quando quiser melhorar rapidamente o aspecto da pele
Antes de um evento, encontro ou situação em que você quer se sentir bem consigo mesma.

2 — Quando sentir a pele opaca e cansada
Aqueles dias em que o espelho não reflete como você se sente por dentro.

3 — Quando for sair e quiser se olhar no espelho com confiança
Para ter aquela sensação de “estou bonita hoje”.

4 — Quando quiser um momento de autocuidado
Um ritual que é seu, sem pressa e sem cobrança.

Frequência recomendada: 2 a 3 vezes por semana.

Melhor horário: à noite ou pela manhã sem maquiagem pesada.`,
  },
];
