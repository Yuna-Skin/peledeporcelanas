import { createFileRoute } from "@tanstack/react-router";
import { Flipbook } from "@/components/Flipbook";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Protocolo Pele de Porcelana — Ebook" },
      {
        name: "description",
        content:
          "O ritual usado para deixar a pele uniforme, viçosa e bonita, mesmo sem maquiagem. Bônus exclusivo do Desafio 28 Dias Botox Coreano Manual.",
      },
      { property: "og:title", content: "Protocolo Pele de Porcelana" },
      {
        property: "og:description",
        content: "O ritual para uma pele uniforme, viçosa e bonita.",
      },
      {
        property: "og:image",
        content:
          "https://res.cloudinary.com/dqsuj0pjy/image/upload/v1778975052/Uma_mulher_relaxando_profundamente_a_202605162043_w4zm3x.jpg",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return <Flipbook />;
}
