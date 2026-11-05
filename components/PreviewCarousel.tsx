"use client";

import Image from "next/image";
import { DecorativeDivider } from "@/components/DecorativeDivider";
import { ChevronLeft, ChevronRight, Hand } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { config } from "@/app/config";

const slides = [
  { id: 1, title: "FOLHA NUMERADA", color: "bg-natal-creme", image: "https://i.ibb.co/sdkdwKty/converted-image-10.webp" },
  { id: 2, title: "EM ANDAMENTO", color: "bg-natal-marfim", image: "https://i.ibb.co/Sw7VDrhh/284cae45-e553-41a7-8faa-4af1adc9d66b.webp" },
  { id: 3, title: "IMAGEM REVELADA", color: "bg-natal-creme", image: "https://i.ibb.co/zVtxwfrD/download-1.webp" },
];

export function PreviewCarousel() {
  const [active, setActive] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const width = scrollRef.current.offsetWidth;
      const newActive = Math.round(scrollPosition / (width * 0.8));
      if (newActive !== active && newActive >= 0 && newActive < slides.length) {
        setActive(newActive);
      }
    }
  };

  const next = () => {
    if (scrollRef.current && active < slides.length - 1) {
      scrollRef.current.scrollBy({ left: scrollRef.current.offsetWidth * 0.8, behavior: 'smooth' });
    }
  };

  const prev = () => {
    if (scrollRef.current && active > 0) {
      scrollRef.current.scrollBy({ left: -(scrollRef.current.offsetWidth * 0.8), behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-natal-fundo text-natal-creme py-16 pl-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-topographic opacity-20 pointer-events-none" />
      
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center">
        <div className="flex items-center gap-4 mb-4 pr-4 md:pr-0">
          <div className="h-px w-8 bg-natal-dourado/60" />
          <span className="text-natal-dourado text-xs font-semibold tracking-[0.15em] uppercase text-center">PRÉVIA DO CONTEÚDO</span>
          <div className="h-px w-8 bg-natal-dourado/60" />
        </div>

        <h2 className="font-serif text-[38px] md:text-[46px] leading-[1.1] mb-6 text-center pr-4 md:pr-0">
          VEJA O LIVRO<br />POR DENTRO
        </h2>

        <p className="text-[17px] md:text-[20px] leading-relaxed text-natal-texto-sec-claro mb-10 text-center px-4 max-w-xl md:pr-0 pr-4">
          Arraste para o lado e conheça algumas etapas da experiência.
        </p>
        
        <div className="w-full relative">
          <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 z-20 text-natal-dourado p-2 bg-natal-fundo/80 rounded-full" aria-label="Anterior">
             <ChevronLeft className="w-8 h-8" />
          </button>
          
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-4 md:gap-8 overflow-x-auto snap-x snap-mandatory pb-8 pr-4 hide-scrollbar w-full relative z-10 md:justify-center"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="snap-center shrink-0 w-[85%] md:w-1/3 max-w-[300px] flex flex-col">
                <div className="bg-natal-dourado text-natal-texto-escuro text-center py-2 font-bold text-sm rounded-t-lg mx-auto w-11/12">{slide.title}</div>
                <div className={`${slide.color} aspect-[3/4] rounded-lg border-2 border-natal-dourado shadow-lg flex items-center justify-center p-2 relative overflow-hidden`}>
                   {slide.image ? (
                     <Image 
                       src={slide.image} 
                       alt={slide.title} 
                       fill 
                       className="object-cover p-2 rounded-xl"
                       referrerPolicy="no-referrer"
                     />
                   ) : (
                     <div className="w-full h-full border border-natal-dourado/30 flex items-center justify-center">
                        <span className="text-natal-texto-escuro/30 text-xs font-bold">IMAGEM {slide.id}</span>
                     </div>
                   )}
                </div>
              </div>
            ))}
          </div>

          <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 z-20 text-natal-dourado p-2 bg-natal-fundo/80 rounded-full pr-4" aria-label="Próximo">
             <ChevronRight className="w-8 h-8" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mb-6 pr-4">
          {slides.map((_, i) => (
            <div key={i} className={`w-3 h-3 rounded-full transition-colors ${i === active ? 'bg-natal-dourado' : 'bg-natal-borda-bege/30'}`} />
          ))}
        </div>

        <div className="flex md:hidden items-center gap-3 text-natal-dourado mb-10 pr-4">
          <Hand className="w-6 h-6 -rotate-90 animate-pulse" />
          <span className="font-semibold tracking-wider text-[15px]">ARRASTE PARA O LADO</span>
        </div>
      </div>
    </section>
  );
}
