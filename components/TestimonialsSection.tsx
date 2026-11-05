"use client";

import Image from "next/image";
import { DecorativeDivider } from "@/components/DecorativeDivider";
import { Star, ShieldCheck, Hand } from "lucide-react";
import { config } from "@/app/config";

export function TestimonialsSection() {
  const reviews = config.REVIEWS && config.REVIEWS.length > 0 ? config.REVIEWS : [
    {
      id: 1,
      name: "NOME DA CLIENTE",
      location: "Cidade-UF",
      text: "Insira aqui o comentário verdadeiro de uma cliente após testar o produto.",
      rating: 5,
    },
    {
      id: 2,
      name: "NOME DA CLIENTE",
      location: "Cidade-UF",
      text: "Insira aqui o comentário verdadeiro de uma cliente após testar o produto.",
      rating: 5,
    }
  ];

  if (!reviews || reviews.length === 0) return null;

  return (
    <section className="w-full bg-natal-creme text-natal-texto-escuro py-16 pl-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-topographic opacity-5 pointer-events-none" />
      
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center">
        <div className="flex items-center gap-4 mb-4 md:pr-0 pr-4">
          <div className="h-px w-8 bg-natal-dourado/60" />
          <span className="text-natal-dourado text-xs font-semibold tracking-[0.15em] uppercase text-center">Experiências reais</span>
          <div className="h-px w-8 bg-natal-dourado/60" />
        </div>

        <h2 className="font-sans font-bold text-[38px] md:text-[46px] leading-[1.1] mb-6 text-center md:pr-0 pr-4">
          QUEM JÁ REVELOU<br />CONTA COMO FOI
        </h2>
        
        <div className="w-full relative">
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 md:pr-0 pr-4 hide-scrollbar w-full justify-start md:justify-center" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {reviews.map((review) => (
              <div key={review.id} className="snap-center shrink-0 w-[85%] md:w-full max-w-[320px] bg-natal-marfim border border-natal-dourado/40 rounded-xl p-6 shadow-md flex flex-col">
                <div className="border border-natal-dourado text-natal-dourado text-[10px] font-bold tracking-wider px-2 py-1 rounded-full self-start mb-4 uppercase">
                  COMPRA VERIFICADA
                </div>
                
                <div className="flex gap-1 mb-6">
                   {[...Array(5)].map((_, i) => (
                     <Star key={i} className={`w-5 h-5 ${i < review.rating ? "text-natal-dourado fill-natal-dourado" : "text-natal-borda-bege"}`} />
                   ))}
                </div>

                <p className="italic text-[22px] leading-snug mb-6 text-natal-texto-escuro">
                  "{review.text}"
                </p>

                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-natal-borda-bege rounded-full flex items-center justify-center shrink-0 overflow-hidden relative">
                     {(review as any).avatar ? (
                       <Image 
                         src={(review as any).avatar} 
                         alt={review.name} 
                         fill 
                         className="object-cover"
                         referrerPolicy="no-referrer"
                       />
                     ) : (
                       <UserIcon className="w-6 h-6 text-natal-creme" />
                     )}
                  </div>
                  <div>
                    <h4 className="font-bold text-[14px] text-natal-texto-escuro uppercase tracking-wide">{review.name}</h4>
                    <p className="text-[12px] text-natal-texto-sec-escuro">{review.location} • Avaliação real</p>
                  </div>
                </div>

                <div className="w-full aspect-[210/297] bg-natal-creme rounded border border-natal-borda-bege flex items-center justify-center relative mt-auto overflow-hidden">
                   {(review as any).image ? (
                     <Image
                       src={(review as any).image}
                       alt={`Resultado de ${review.name}`}
                       fill
                       className="object-cover"
                       referrerPolicy="no-referrer"
                     />
                   ) : (
                     <span className="text-natal-texto-sec-claro text-xs font-bold uppercase tracking-wider absolute bottom-2">FOTO DO RESULTADO</span>
                   )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mb-6 pr-4">
          <div className="w-3 h-3 rounded-full bg-natal-dourado" />
          <div className="w-3 h-3 rounded-full border border-natal-dourado bg-transparent" />
          <div className="w-3 h-3 rounded-full border border-natal-dourado bg-transparent" />
        </div>

        <div className="flex items-center gap-3 text-natal-dourado mb-10 pr-4">
          <Hand className="w-6 h-6 -rotate-90 animate-pulse" />
          <span className="font-semibold tracking-wider text-[15px]">ARRASTE PARA VER MAIS</span>
        </div>

        <div className="md:pr-0 pr-4 w-full max-w-2xl mx-auto">
          <div className="bg-natal-fundo text-natal-creme rounded-lg p-5 flex items-start gap-4 shadow-xl">
             <ShieldCheck className="w-8 h-8 text-natal-dourado shrink-0 mt-1" strokeWidth={1.5} />
             <div>
               <h4 className="font-bold text-[15px] uppercase tracking-wide mb-1 text-natal-dourado">TRANSPARÊNCIA EM PRIMEIRO LUGAR</h4>
               <p className="text-[14px] text-natal-texto-sec-claro leading-snug">Sem comentários inventados, números falsos ou fotos usadas sem autorização.</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Temporary User Icon since Lucide User doesn't exactly match the simple avatar look
function UserIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
    </svg>
  );
}
