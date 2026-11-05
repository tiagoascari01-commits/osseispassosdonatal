import Image from "next/image";
import { DecorativeDivider } from "@/components/DecorativeDivider";
import { Printer } from "lucide-react";

export function AudienceSection() {
  return (
    <section className="w-full bg-natal-creme text-natal-texto py-16 px-4">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px w-8 bg-natal-dourado/60" />
          <span className="text-natal-dourado text-xs font-bold tracking-[0.15em] uppercase">Feito para você</span>
          <div className="h-px w-8 bg-natal-dourado/60" />
        </div>

        <h2 className="font-sans font-bold text-[38px] md:text-[46px] leading-[1.1] mb-10">
          PARA QUEM É ESTE LIVRO?
        </h2>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
          {/* PARA QUEM QUER UMA ATIVIDADE MANUAL */}
          <div className="bg-natal-marfim border border-natal-borda-bege rounded-lg overflow-hidden flex shadow-sm h-28">
            <div className="aspect-square relative shrink-0 bg-natal-fundo/10 flex items-center justify-center border-r border-natal-borda-bege">
              <Image src="https://i.ibb.co/Pvyz5yyF/converted-image-11.webp" alt="Para quem quer uma atividade manual" fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="flex-1 p-4 flex items-center justify-start text-left">
               <span className="font-bold text-[14px] uppercase leading-tight text-natal-texto-escuro">PARA QUEM QUER UMA ATIVIDADE MANUAL</span>
            </div>
          </div>

          {/* PARA QUEM GOSTA DE PASSATEMPOS */}
          <div className="bg-natal-marfim border border-natal-borda-bege rounded-lg overflow-hidden flex shadow-sm h-28">
            <div className="aspect-square relative shrink-0 bg-natal-fundo/10 flex items-center justify-center border-r border-natal-borda-bege">
              <Image src="https://i.ibb.co/SwYmsmdK/converted-image-12.webp" alt="Para quem gosta de passatempos" fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="flex-1 p-4 flex items-center justify-start text-left">
               <span className="font-bold text-[14px] uppercase leading-tight text-natal-texto-escuro">PARA QUEM GOSTA DE PASSATEMPOS</span>
            </div>
          </div>

          {/* PARA QUEM AMA O NATAL */}
          <div className="bg-natal-marfim border border-natal-borda-bege rounded-lg overflow-hidden flex shadow-sm h-28">
            <div className="aspect-square relative shrink-0 bg-natal-fundo/10 flex items-center justify-center border-r border-natal-borda-bege">
              <Image src="https://i.ibb.co/vCSwcxQ8/Papai-Noel-em-Gravura-Vintage.webp" alt="Para quem ama o natal" fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="flex-1 p-4 flex items-center justify-start text-left">
               <span className="font-bold text-[14px] uppercase leading-tight text-natal-texto-escuro">PARA QUEM AMA O NATAL</span>
            </div>
          </div>

          {/* PARA JOVENS E ADULTOS CURIOSOS */}
          <div className="bg-natal-marfim border border-natal-borda-bege rounded-lg overflow-hidden flex shadow-sm h-28">
            <div className="aspect-square relative shrink-0 bg-natal-fundo/10 flex items-center justify-center border-r border-natal-borda-bege">
              <Image src="https://i.ibb.co/wj5xy4M/761fb564-2888-40df-9b11-71aede886ec8.webp" alt="Para jovens e adultos curiosos" fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="flex-1 p-4 flex items-center justify-start text-left">
               <span className="font-bold text-[14px] uppercase leading-tight text-natal-texto-escuro">PARA JOVENS E ADULTOS CURIOSOS</span>
            </div>
          </div>
        </div>

        <div className="w-full max-w-2xl mx-auto bg-natal-creme border border-natal-dourado/40 rounded-lg p-5 flex items-center justify-center gap-6 mb-10 shadow-sm">
           <Printer className="w-10 h-10 text-black shrink-0" strokeWidth={1.5} />
           <p className="text-left text-[15px] md:text-[17px] font-bold leading-snug text-black">
             Tudo o que você precisa é uma impressora, papel A4 e uma caneta preta.
           </p>
        </div>

        <a href="#oferta-premium" className="w-full max-w-md bg-natal-dourado text-natal-texto font-bold text-[17px] tracking-wider py-5 rounded-full hover:bg-natal-dourado/90 transition-colors text-center uppercase animate-scale-pulse">
          ESCOLHER MEU PACOTE
        </a>
      </div>
    </section>
  );
}
