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
  {
    type: "content",
    image:
      "https://res.cloudinary.com/dqsuj0pjy/image/upload/v1778984203/Fotografia_editorial_minimalista_de_uma_202605162316_cp48ue.jpg",
    eyebrow: "Ritual · Passo 1",
    title: "Preparação da pele",
    text: `Comece do jeito mais simples

Lave o rosto normalmente, apenas com água ou seu sabonete habitual.

Não precisa ser nada especial, nada caro, nada complicado.

Seque suavemente, sem esfregar.

Use uma toalha macia e faça movimentos delicados, como se estivesse acariciando a pele, não esfregando.

Esse cuidado simples evita irritação e preserva o viço natural da pele.

Muitas mulheres machucam a pele sem perceber, só pelo jeito como secam o rosto.

Lembre-se: a pele do rosto é fina e delicada.

Trate-a com o mesmo cuidado que você trataria um tecido fino e valioso.`,
  },
  {
    type: "content",
    image:
      "https://res.cloudinary.com/dqsuj0pjy/image/upload/v1778984427/Mulher_elegante_aplicando_uma_ma%CC%81scara_202605162320_oglync.jpg",
    eyebrow: "Ritual · Passo 2",
    title: "Aplicação da máscara",
    text: `01 — Aplique com movimentos suaves
Use as pontas dos dedos para espalhar a máscara de forma uniforme.

02 — Sem pressionar a pele
Deixe os dedos deslizarem levemente, sem arrastar ou puxar.

03 — Evite a região dos olhos
A pele ao redor dos olhos é mais sensível e precisa de cuidado especial.

A ideia aqui não é força, é delicadeza.

Não é quantidade, é intenção.

Você está oferecendo um presente à sua pele, não forçando ela a mudar.`,
  },
];
