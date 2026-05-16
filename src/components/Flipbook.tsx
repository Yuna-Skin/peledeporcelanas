import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { pages, type EbookPage } from "@/data/pages";

export function Flipbook() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const total = pages.length;

  const go = (delta: number) => {
    const next = index + delta;
    if (next < 0 || next >= total) return;
    setDir(delta);
    setIndex(next);
  };

  const page = pages[index];

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-background overflow-hidden px-3 py-4 sm:px-6 sm:py-6">
      {/* Page stage */}
      <div
        className="relative w-full max-w-[440px] flex-1 flex items-center justify-center"
        style={{ perspective: 1800 }}
      >
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={index}
            custom={dir}
            initial={{ rotateY: dir > 0 ? 75 : -75, opacity: 0, x: dir * 40 }}
            animate={{ rotateY: 0, opacity: 1, x: 0 }}
            exit={{ rotateY: dir > 0 ? -75 : 75, opacity: 0, x: -dir * 40 }}
            transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60) go(1);
              else if (info.offset.x > 60) go(-1);
            }}
            className="relative w-full aspect-[9/16] max-h-full rounded-2xl shadow-[0_30px_60px_-20px_oklch(0.45_0.05_20/0.35)] overflow-hidden paper cursor-grab active:cursor-grabbing"
            style={{ transformStyle: "preserve-3d" }}
          >
            <PageRenderer page={page} onStart={() => go(1)} hasNext={index < total - 1} />
          </motion.div>
        </AnimatePresence>

        {/* Desktop arrows */}
        <button
          onClick={() => go(-1)}
          disabled={index === 0}
          aria-label="Página anterior"
          className="hidden sm:flex absolute -left-14 top-1/2 -translate-y-1/2 h-11 w-11 items-center justify-center rounded-full bg-card text-foreground shadow-md border border-border disabled:opacity-30 transition hover:scale-105"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => go(1)}
          disabled={index === total - 1}
          aria-label="Próxima página"
          className="hidden sm:flex absolute -right-14 top-1/2 -translate-y-1/2 h-11 w-11 items-center justify-center rounded-full bg-card text-foreground shadow-md border border-border disabled:opacity-30 transition hover:scale-105"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Footer controls */}
      <div className="mt-4 flex items-center gap-4 w-full max-w-[440px] justify-between">
        <button
          onClick={() => go(-1)}
          disabled={index === 0}
          aria-label="Anterior"
          className="sm:hidden h-11 w-11 flex items-center justify-center rounded-full bg-card border border-border shadow-sm disabled:opacity-30"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="flex-1 text-center text-xs tracking-[0.2em] uppercase text-muted-foreground">
          {index + 1} / {total}
        </div>

        <button
          onClick={() => go(1)}
          disabled={index === total - 1}
          aria-label="Próxima"
          className="sm:hidden h-11 w-11 flex items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm disabled:opacity-30"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

function PageRenderer({
  page,
  onStart,
  hasNext,
}: {
  page: EbookPage;
  onStart: () => void;
  hasNext: boolean;
}) {
  if (page.type === "cover") {
    return (
      <div className="relative h-full w-full flex flex-col">
        <div className="relative h-[58%] w-full overflow-hidden">
          <img
            src={page.image}
            alt={page.title}
            className="h-full w-full object-cover"
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-card" />
        </div>
        <div className="relative -mt-8 flex-1 flex flex-col items-center justify-between px-6 pb-6 text-center">
          <div>
            <div className="inline-block text-[10px] tracking-[0.25em] uppercase text-primary mb-3 border border-primary/40 rounded-full px-3 py-1">
              Ebook
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl leading-[1.05] text-foreground italic">
              {page.title}
            </h1>
            <div className="mx-auto my-4 h-px w-12 bg-primary/50" />
            <p className="font-sans text-sm sm:text-base text-foreground/80 leading-relaxed max-w-[28ch] mx-auto">
              {page.subtitle}
            </p>
          </div>

          <div className="w-full space-y-3">
            <p className="text-[11px] tracking-wider uppercase text-muted-foreground">
              {page.badge}
            </p>
            {hasNext && (
              <button
                onClick={onStart}
                className="w-full rounded-full bg-primary text-primary-foreground py-3 text-sm font-medium tracking-wide shadow-md hover:opacity-90 transition"
              >
                Começar a leitura
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full w-full flex flex-col">
      {page.image && (
        <div className="h-[40%] w-full overflow-hidden">
          <img src={page.image} alt={page.title ?? ""} className="h-full w-full object-cover" draggable={false} />
        </div>
      )}
      <div className="flex-1 overflow-y-auto px-6 py-6">
        {page.title && (
          <h2 className="font-serif text-2xl sm:text-3xl text-foreground mb-3 italic">
            {page.title}
          </h2>
        )}
        <p className="font-sans text-sm sm:text-base text-foreground/85 leading-relaxed whitespace-pre-line">
          {page.text}
        </p>
      </div>
    </div>
  );
}
