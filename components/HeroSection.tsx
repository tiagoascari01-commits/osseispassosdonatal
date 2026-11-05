import Image from "next/image";
import { DecorativeDivider } from "@/components/DecorativeDivider";

export function HeroSection() {
  return (
    <section className="relative w-full bg-natal-fundo text-natal-creme overflow-hidden flex flex-col items-center pt-8 pb-16 px-4">
      <div className="absolute inset-0 bg-topographic opacity-50 pointer-events-none" />
      
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row md:items-center text-center md:text-left md:gap-12">
        <div className="flex-1 flex flex-col items-center md:items-start">
          <h2 className="text-natal-dourado text-sm md:text-base font-semibold tracking-[0.2em] mb-4 uppercase">
            100 ATIVIDADES PARA IMPRIMIR
          </h2>
          
          <DecorativeDivider className="mb-6" variant="dark" />
  
          <h1 className="font-sans font-bold text-[42px] md:text-[56px] leading-[1.1] mb-6">
            REVELE A MAGIA DO NATAL,<br />UM TRAÇO DE CADA VEZ
          </h1>
  
          <div className="hidden md:block w-full max-w-sm mt-8">
            <a 
              href="#oferta-premium"
              className="block w-full bg-natal-dourado text-natal-texto font-bold text-[17px] tracking-wider py-5 rounded-full hover:bg-natal-dourado/90 transition-colors mb-4 text-center uppercase animate-scale-pulse"
            >
              COMEÇAR A REVELAR
            </a>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center">
          <div className="relative w-full aspect-[3/4] max-w-[320px] md:max-w-[440px] drop-shadow-2xl mb-8 flex items-center justify-center overflow-hidden animate-float">
            <Image 
              src="https://i.ibb.co/xtsVJ6wF/Mockup-Natal-100kb.webp"
              alt="Mockup do Livro de Natal"
              fill
              className="object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <p className="text-[17px] md:text-[20px] leading-relaxed mb-10 text-natal-creme/80 px-4 text-center max-w-lg">
            Imprima, consulte a legenda e veja desenhos natalinos surgirem diante dos seus olhos usando apenas uma caneta preta.
          </p>
  
          <div className="md:hidden w-full px-4">
            <a 
              href="#oferta-premium"
              className="block w-full bg-natal-dourado text-natal-texto font-bold text-[17px] tracking-wider py-5 rounded-full hover:bg-natal-dourado/90 transition-colors mb-4 text-center uppercase animate-scale-pulse"
            >
              COMEÇAR A REVELAR
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}
