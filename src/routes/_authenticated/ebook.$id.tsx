import { createFileRoute, notFound } from "@tanstack/react-router";
import { Flipbook } from "@/components/Flipbook";
import { getEbook } from "@/data/ebooks";

export const Route = createFileRoute("/_authenticated/ebook/$id")({
  loader: ({ params }) => {
    const ebook = getEbook(params.id);
    if (!ebook || !ebook.available || !ebook.pages) throw notFound();
    return { ebook };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.ebook.title} — Ebook` },
          { name: "description", content: loaderData.ebook.subtitle },
          { property: "og:title", content: loaderData.ebook.title },
          { property: "og:description", content: loaderData.ebook.subtitle },
          { property: "og:image", content: loaderData.ebook.cover },
        ]
      : [],
  }),
  component: EbookPage,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center p-6 text-center">
      <div>
        <h1 className="font-serif italic text-2xl mb-2">Ebook não encontrado</h1>
        <p className="text-sm text-muted-foreground">
          Este bônus ainda não está disponível.
        </p>
      </div>
    </div>
  ),
});

function EbookPage() {
  const { ebook } = Route.useLoaderData();
  return <Flipbook pages={ebook.pages!} />;
}
