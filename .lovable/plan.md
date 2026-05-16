# Protocolo Pele de Porcelana — Ebook Flipbook

Um ebook digital acessível por link, com efeito de virar página (flipbook), otimizado primeiro para celular e também bonito no desktop.

## Como vai funcionar

- Você abre o link e vê o ebook em tela cheia.
- Toque/arraste para virar a página (ou setas no desktop).
- Indicador de página (ex: 1/12) e botão de voltar à capa.
- Construção página por página: começamos pela **Capa** agora e adicionamos cada nova página conforme você for me mandando imagem + texto.

## Estilo visual

Paleta **Rosa suave & creme**:
- Fundo creme `#fdf6f0`
- Rosa claro `#f4e4e1`
- Rosa principal `#d4a5a5`
- Marrom rosado (texto/títulos) `#8b5a5a`

Tipografia delicada e feminina: serifa elegante para títulos (ex: Cormorant/Playfair) + sans leve para corpo (ex: Inter/Karla). Cantos arredondados sutis, sombra suave nas páginas, textura de papel leve.

## Mobile-first

- Layout vertical otimizado para tela de celular (proporção ~9:16 por página).
- Gestos de swipe (esquerda/direita) para virar.
- Botões grandes o suficiente para o dedo.
- Imagens e textos escalam sem cortar.
- No desktop: página centralizada com margens generosas, mesma experiência.

## Primeira entrega (esta etapa)

Página 1 — Capa:
- Imagem: a foto da mulher relaxando (URL que você enviou).
- Título: "Protocolo Pele de Porcelana"
- Subtítulo: "O ritual usado para deixar a pele uniforme, viçosa e bonita, mesmo sem maquiagem."
- Selo/badge: "Bônus exclusivo do Desafio 28 Dias Botox Coreano Manual"
- Botão "Começar a leitura" (mesmo que ainda não tenha próxima página — fica preparado).

## Próximos passos

A cada nova mensagem sua com imagem + texto, eu adiciono uma nova página ao flipbook na ordem que você mandar. O link permanece o mesmo.

## Detalhes técnicos

- Rota única `/` renderizando o flipbook em tela cheia.
- Dados das páginas em um array (`src/data/pages.ts`) — fácil de adicionar/editar/reordenar.
- Animação de virar página com Framer Motion (transform 3D + perspective).
- Swipe via gestos do Framer Motion (`drag="x"`).
- Imagens hospedadas externamente (Cloudinary) — usadas via `<img src>` direto.
- Sem backend nesta etapa (conteúdo estático no código).
