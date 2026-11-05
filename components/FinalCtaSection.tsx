import { DecorativeDivider } from "@/components/DecorativeDivider";
import { config } from "@/app/config";

export function FinalCtaSection() {
  return (
    <section className="w-full bg-natal-fundo-secundario text-natal-creme py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-topographic opacity-30 pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px w-8 bg-natal-dourado/60" />
          <span className="text-natal-dourado text-xs font-semibold tracking-[0.15em] uppercase text-center">Uma caneta. Seis traços.</span>
          <div className="h-px w-8 bg-natal-dourado/60" />
        </div>

        <h2 className="font-sans font-bold text-[38px] md:text-[46px] leading-[1.1] mb-6 text-center">
          PRONTO PARA REVELAR<br />SEU PRIMEIRO DESENHO?
        </h2>

        <p className="text-[17px] md:text-[20px] leading-relaxed text-natal-texto-sec-claro mb-12 text-center px-4">
          Escolha sua oferta e descubra a magia escondida em cada página.
        </p>

        <div className="w-full flex justify-center mb-8">
          <a href="#oferta-premium" className="w-full md:w-auto px-10 bg-natal-dourado text-natal-texto-escuro font-bold text-[17px] tracking-wider py-5 rounded-full hover:bg-natal-dourado-claro transition-colors text-center uppercase shadow-lg shadow-natal-dourado/10 animate-scale-pulse">
            DESCOBRIR MEU PRIMEIRO DESENHO
          </a>
        </div>
      </div>
    </section>
  );
}
