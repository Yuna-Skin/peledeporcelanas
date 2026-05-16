# Corrigir capa invisível no flipbook

## Problema

Ao abrir o link, a tela aparece só com o fundo creme e os dois botões laterais — a capa (imagem + título + texto) não está visível.

Causa provável: a animação 3D atual (`rotateY: 75deg` + `opacity: 0` inicial dentro de um `AnimatePresence mode="wait"`) está deixando o cartão renderizado mas invisível em alguns navegadores. Além disso, o fundo do cartão (`--card`) é praticamente idêntico ao fundo da página (`--background`), então mesmo quando aparece fica difícil de notar.

## O que vou ajustar

1. **Trocar a animação de virar página** por uma versão mais confiável:
   - Usar `x` (slide) + `opacity` em vez de `rotateY` 3D para a primeira renderização — garante que a capa apareça imediatamente, sem depender de perspectiva 3D.
   - Manter o swipe (arrastar) e os botões funcionando igual.
   - A sensação de "virar página" continua, mais suave.

2. **Aumentar o contraste do cartão**:
   - Borda rosa suave visível ao redor da página.
   - Sombra um pouco mais marcada para o cartão se destacar do fundo.
   - Manter a paleta rosa & creme aprovada.

3. **Garantir altura correta no desktop**:
   - Ajustar o cálculo de altura do cartão (`aspect-[9/16]`) para não estourar a tela em viewports largos como 904x878.
   - Limitar altura máxima e centralizar.

4. **Fallback de imagem**:
   - Adicionar `loading="eager"` na imagem da capa para garantir que aparece de primeira.

## Resultado esperado

Ao abrir o link `/`, a capa aparece imediatamente com:
- Foto da mulher relaxando no topo
- Título "Protocolo Pele de Porcelana" em serifa
- Subtítulo
- Selo do bônus
- Botão "Começar a leitura" (desabilitado por enquanto, já que só temos 1 página)

Nada muda em conteúdo — só conserta a renderização.
