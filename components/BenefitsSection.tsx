import Image from "next/image";
import { Smartphone, Eye, List, Gift } from "lucide-react";
import { DecorativeDivider } from "@/components/DecorativeDivider";

export function BenefitsSection() {
  return (
    <section className="w-full bg-natal-fundo-secundario text-natal-creme py-16 px-4 relative">
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px w-8 bg-natal-dourado/60" />
          <span className="text-natal-dourado text-xs font-semibold tracking-[0.15em] uppercase">Uma experiência diferente</span>
          <div className="h-px w-8 bg-natal-dourado/60" />
        </div>

        <h2 className="font-serif text-[38px] md:text-[46px] leading-[1.1] mb-6">
          MUITO MAIS DO QUE<br className="md:hidden" /> PREENCHER CÉLULAS
        </h2>

        <p className="text-[17px] md:text-[20px] leading-relaxed text-natal-creme/80 mb-12 px-2 max-w-2xl">
          Cada página transforma um conjunto de números em uma descoberta natalina feita pelas suas próprias mãos.
        </p>

        <div className="w-full flex flex-col md:flex-row items-center gap-10 mb-10">
          {/* Large Image */}
          <div className="w-full md:w-1/2 aspect-[4/5] bg-natal-creme border-4 border-natal-creme shadow-2xl relative flex items-center justify-center rounded-sm shrink-0 overflow-hidden">
             <Image 
               src="https://i.ibb.co/Z1dG2GHh/download.webp"
               alt="Imagem da atividade com caneta"
               fill
               className="object-cover"
               referrerPolicy="no-referrer"
             />
             <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-natal-dourado/40 z-10" />
             <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-natal-dourado/40 z-10" />
          </div>

          <div className="w-full md:w-1/2 flex flex-col gap-4">

          <div className="bg-natal-creme text-black p-4 rounded flex items-center justify-start gap-4">
            <div className="w-10 h-10 border border-black rounded-full flex flex-col items-center justify-center bg-natal-creme shrink-0">
               <Smartphone className="w-5 h-5 text-black stroke-[1.5]" />
            </div>
            <span className="font-medium text-[15px] uppercase tracking-wide text-left text-black">UMA PAUSA LONGE DAS TELAS</span>
          </div>

          <div className="bg-natal-fundo border border-natal-dourado/30 p-4 rounded flex items-center justify-start gap-4">
            <div className="w-10 h-10 border border-natal-dourado rounded-full flex flex-col items-center justify-center bg-natal-fundo-secundario shrink-0">
               <Eye className="w-5 h-5 text-natal-dourado stroke-[1.5]" />
            </div>
            <span className="font-medium text-[15px] uppercase tracking-wide text-left text-natal-dourado">UM DESAFIO VISUAL SATISFATÓRIO</span>
          </div>

          <div className="bg-natal-creme text-black p-4 rounded flex items-center justify-start gap-4">
            <div className="w-10 h-10 border border-black rounded-full flex flex-col items-center justify-center bg-natal-creme shrink-0">
               <List className="w-5 h-5 text-black stroke-[1.5]" />
            </div>
            <span className="font-medium text-[15px] uppercase tracking-wide text-left text-black">INSTRUÇÕES FÁCEIS DE ACOMPANHAR</span>
          </div>

          <div className="bg-natal-fundo border border-natal-dourado/30 p-4 rounded flex items-center justify-start gap-4">
            <div className="w-10 h-10 border border-natal-dourado rounded-full flex flex-col items-center justify-center bg-natal-fundo-secundario shrink-0">
               <Gift className="w-5 h-5 text-natal-dourado stroke-[1.5]" />
            </div>
            <span className="font-medium text-[15px] uppercase tracking-wide text-left text-natal-dourado">UMA SURPRESA NATALINA EM CADA PÁGINA</span>
          </div>
          </div>
        </div>

        <div className="w-full md:w-auto md:px-12 border border-natal-dourado/50 py-4 px-2 rounded border-dashed text-natal-dourado flex items-center justify-center gap-2 mt-4">
           <div className="w-4 h-4 text-xl leading-none">✨</div>
           <span className="font-bold text-[15px] tracking-wide">VOCÊ NÃO PRECISA SABER DESENHAR.</span>
        </div>
      </div>
    </section>
  );
}
