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
  {
    type: "content",
    image:
      "https://res.cloudinary.com/dqsuj0pjy/image/upload/v1778984565/Mulher_elegante_relaxando_com_ma%CC%81scara_202605162322_sidr1k.jpg",
    eyebrow: "Ritual · Passo 3",
    title: "Tempo de ação",
    text: `Deixe agir por 10 a 15 minutos.

Não mais que isso.

Mais tempo não significa melhores resultados, significa apenas desperdício e possível irritação.

— Relaxe o rosto
Deixe os músculos soltos, sem tensão na testa, olhos ou boca. Apenas respire e relaxe.

— Evite celular
Este é um momento seu. Deixe as notificações, as mensagens e as redes sociais de lado.

— Respire fundo
Inspire pelo nariz, expire pela boca. Deixe o corpo relaxar junto com o rosto.

Esse momento faz parte do ritual.

Não é só sobre a máscara, é sobre você se dar permissão para parar, respirar e cuidar de si mesma.`,
  },
  {
    type: "content",
    image:
      "https://res.cloudinary.com/dqsuj0pjy/image/upload/v1778984756/Fotografia_editorial_premium_de_ingredientes_202605162325_apzvuy.jpg",
    eyebrow: "A receita",
    title: "A Máscara de Porcelana",
    text: `Esta máscara não é um tratamento profundo.

Ela não vai apagar rugas, clarear manchas ou substituir procedimentos estéticos.

E está tudo bem.

Ela ajuda a melhorar viço, uniformidade e aparência descansada, e isso já é muito.

É o suficiente para você se olhar no espelho e se sentir bem.

Ingredientes simples e naturais
Use apenas os que você tiver em casa. Não precisa ter todos. A beleza está na simplicidade.

— Base líquida
• Água filtrada
• Chá de camomila
• Chá verde
• Água de arroz
• Água gelada

— Ingredientes texturizantes
• Amido natural (milho ou arroz)
• Aveia fina
• Argila branca

— Ingredientes hidratantes
• Mel puro
• Iogurte natural
• Aloe vera natural
• Óleo vegetal leve (opcional)`,
  },
  {
    type: "content",
    image:
      "https://res.cloudinary.com/dqsuj0pjy/image/upload/v1778984863/Mulher_elegante_removendo_suavemente_uma_202605162327_svnqdp.jpg",
    eyebrow: "Ritual · Passo 4",
    title: "Remoção da máscara",
    text: `📌 Lembre-se:
Ingredientes naturais não significam ausência de reações. Teste sempre em uma pequena área antes de aplicar no rosto todo.

Retire com cuidado
Use água fria ou levemente morna. Nunca água quente, que pode ressecar e irritar a pele.

Seque delicadamente, sem esfregar.
Use toques suaves, como se estivesse absorvendo a água, não removendo à força.

Evite aplicar produtos pesados logo após.
Deixe a pele respirar e absorver os benefícios do ritual que você acabou de fazer.`,
  },
  {
    type: "content",
    image:
      "https://res.cloudinary.com/dqsuj0pjy/image/upload/v1778984973/Fotografia_editorial_sofisticada_de_uma_202605162329_fe6zqh.jpg",
    eyebrow: "Atenção",
    title: "Dica importante e o que não fazer",
    text: `Se sua pele estiver sensível, use apenas água fria e evite esfregar.

A pele vai te dizer o que precisa, basta escutar.

O que NÃO fazer
Proteger sua pele é tão importante quanto cuidar dela. Às vezes, o melhor cuidado é saber quando parar.

❌ Usar todos os dias
A pele precisa de descanso. Respeite o intervalo de 2 a 3 vezes por semana.

❌ Deixar mais de 20 minutos
Mais tempo não é melhor. É apenas risco de irritação desnecessária.

❌ Esfregar ao retirar
Movimentos bruscos machucam a pele e anulam os benefícios do ritual.`,
  },
  {
    type: "content",
    image:
      "https://res.cloudinary.com/dqsuj0pjy/image/upload/v1778985102/Mulher_elegante_em_ambiente_minimalista_202605162331_fsrobi.jpg",
    eyebrow: "Cuidado extra",
    title: "Atenção especial",
    text: `Nunca misture com produtos químicos fortes ou use após procedimentos agressivos como peeling profundo ou laser.

Se sua pele estiver muito sensível, machucada ou com alguma condição ativa, consulte um dermatologista antes.

Mais não é melhor.

Consistência inteligente é melhor que exagero bem-intencionado.`,
  },
];
