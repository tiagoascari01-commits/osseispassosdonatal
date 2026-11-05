import { DecorativeDivider } from "@/components/DecorativeDivider";
import { Play } from "lucide-react";

export function DemonstrationSection() {
  return (
    <section className="w-full bg-creme text-text-escuro py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-topographic opacity-5 pointer-events-none" />
      
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px w-8 bg-dourado/60" />
          <span className="text-dourado text-xs font-semibold tracking-[0.15em] uppercase">Veja como funciona</span>
          <div className="h-px w-8 bg-dourado/60" />
        </div>

        <DecorativeDivider className="mb-6" />

        <h2 className="font-serif text-[38px] md:text-[46px] leading-[1.1] mb-6">
          ACOMPANHE A IMAGEM SURGIR DIANTE DOS SEUS OLHOS
        </h2>

        <p className="text-[17px] md:text-[20px] leading-relaxed text-text-sec-escuro mb-10 max-w-2xl mx-auto">
          Não é necessário saber desenhar. Cada número mostra qual traço deve ser reproduzido dentro da célula.
        </p>

        {/* Video Mockup */}
        <div className="w-full max-w-sm aspect-[9/16] bg-[#E8E2D2] rounded-xl border border-cinza-borda shadow-lg relative flex items-center justify-center mb-6 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHBhdGggZD0iTTAgMGgyMHYyMEgwVjB6bTEwIDEwaDEwdjEwaC0xMFYxMHoiIGZpbGw9IiNkOGQwYzIiIGZpbGwtb3BhY2l0eT0iLjQiLz48L3N2Zz4=')] opacity-50" />
          
          <button className="relative z-10 w-16 h-16 bg-grafite rounded-full flex items-center justify-center border-2 border-dourado shadow-xl">
            <Play className="w-6 h-6 text-dourado ml-1" fill="currentColor" />
          </button>
        </div>

        <p className="font-serif italic text-[19px] text-text-sec-escuro">
          Da folha numerada à imagem revelada.
        </p>
      </div>
    </section>
  );
}
