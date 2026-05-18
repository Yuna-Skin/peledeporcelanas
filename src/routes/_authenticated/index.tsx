import { createFileRoute, Link } from "@tanstack/react-router";
import { ebooks } from "@/data/ebooks";
import { Lock } from "lucide-react";
import { Logo } from "@/components/Logo";

export const Route = createFileRoute("/_authenticated/")({
  head: () => ({
    meta: [
      { title: "Biblioteca de Bônus — Desafio 28 Dias" },
      {
        name: "description",
        content:
          "Sua biblioteca de bônus exclusivos do Desafio 28 Dias com Yuna Skin.",
      },
      { property: "og:title", content: "Biblioteca de Bônus" },
      {
        property: "og:description",
        content: "Ebooks exclusivos do Desafio 28 Dias.",
      },
    ],
  }),
  component: Library,
});

function Library() {
  return (
    <div className="min-h-screen bg-background px-5 py-10 sm:py-16">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-10 sm:mb-14">
          <Logo className="mx-auto h-20 sm:h-24 w-auto mb-6" />
          <p className="text-[10px] tracking-[0.3em] uppercase text-primary mb-3">
            Desafio 28 Dias · Yuna Skin
          </p>
          <h1 className="font-serif italic text-3xl sm:text-5xl text-foreground leading-[1.05]">
            Sua biblioteca de bônus
          </h1>
          <div className="mx-auto my-4 h-px w-12 bg-primary/50" />
          <p className="font-sans text-sm sm:text-base text-foreground/75 max-w-md mx-auto leading-relaxed">
            Rituais e protocolos pensados para potencializar seus resultados.
            Escolha um ebook e comece a leitura.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
          {ebooks.map((ebook) =>
            ebook.available ? (
              <Link
                key={ebook.id}
                to="/ebook/$id"
                params={{ id: ebook.id }}
                className="group block rounded-2xl overflow-hidden bg-card border border-border shadow-[0_15px_40px_-15px_oklch(0.45_0.05_20/0.3)] hover:shadow-[0_25px_60px_-15px_oklch(0.45_0.05_20/0.45)] hover:-translate-y-1 transition-all duration-300"
              >
                <EbookCard ebook={ebook} />
              </Link>
            ) : (
              <div
                key={ebook.id}
                className="rounded-2xl overflow-hidden bg-card border border-border opacity-70 cursor-not-allowed"
                aria-disabled
              >
                <EbookCard ebook={ebook} locked />
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}

function EbookCard({
  ebook,
  locked = false,
}: {
  ebook: (typeof ebooks)[number];
  locked?: boolean;
}) {
  return (
    <>
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={ebook.cover}
          alt={ebook.title}
          loading="lazy"
          className={`h-full w-full object-cover transition-transform duration-500 ${
            locked ? "grayscale" : "group-hover:scale-105"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        <span className="absolute top-3 left-3 text-[9px] tracking-[0.25em] uppercase text-white bg-black/35 backdrop-blur-sm rounded-full px-2.5 py-1 border border-white/20">
          {ebook.badge}
        </span>
        {locked && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-11 w-11 rounded-full bg-black/45 backdrop-blur-sm flex items-center justify-center border border-white/25">
              <Lock className="h-4 w-4 text-white" />
            </div>
          </div>
        )}
      </div>
      <div className="px-4 py-4">
        <h2 className="font-serif italic text-lg leading-tight text-foreground mb-1">
          {ebook.title}
        </h2>
        <p className="text-xs text-foreground/70 leading-relaxed line-clamp-2">
          {ebook.subtitle}
        </p>
      </div>
    </>
  );
}
