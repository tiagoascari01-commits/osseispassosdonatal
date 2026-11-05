import Image from "next/image";
import { DecorativeDivider } from "@/components/DecorativeDivider";
import { Check, Lock, Download, HeadphonesIcon, ShieldCheck, Crown } from "lucide-react";
import { config } from "@/app/config";

export function PricingSection() {
  return (
    <>

      <section id="premium" className="w-full bg-natal-fundo-secundario text-natal-creme py-16 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-topographic opacity-20 pointer-events-none" />
        
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
          <h2 className="font-sans font-bold text-[38px] md:text-[46px] leading-[1.1] mb-6 text-center">
            QUAL EXPERIÊNCIA<br />COMBINA COM VOCÊ?
          </h2>

          <p className="text-[17px] md:text-[20px] leading-relaxed text-natal-creme/80 mb-12 text-center max-w-2xl">
            Comece com o livro principal ou escolha a experiência mais completa.
          </p>

          <div className="w-full flex flex-col md:flex-row gap-8 md:gap-6 lg:gap-10 mb-12 items-stretch">
            {/* Oferta Básica */}
            <div id="basico" className="flex-1 bg-natal-fundo text-natal-creme rounded-xl border border-natal-dourado/30 overflow-hidden relative shadow-lg md:mt-8">
              <div className="p-6 flex flex-col items-center h-full">
                <div className="border border-natal-dourado text-natal-dourado text-[11px] font-bold tracking-wider px-3 py-1 rounded-full mb-4 uppercase">
                  Oferta Básica
                </div>
                <h3 className="font-sans font-bold text-[28px] text-center mb-6 leading-tight uppercase">O ESSENCIAL PARA COMEÇAR</h3>
                
                <div className="w-full h-px bg-natal-dourado/30 mb-6 relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rotate-45 border border-natal-dourado bg-natal-fundo" />
                </div>

                <div className="flex flex-col gap-6 w-full">
                  <div className="flex gap-4 w-full">
                    <div className="w-1/3 aspect-[3/4] relative shrink-0 rounded overflow-hidden shadow-sm">
                      <Image 
                        src="https://i.ibb.co/FLyLRn5Y/Capa-Natal-100-Atividades-100kb.webp"
                        alt="Mockup Capa Básica"
                        fill
                        className="object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="w-2/3 flex flex-col gap-3 justify-center">
                      {[
                        "100 ATIVIDADES NUMERADAS",
                        "ACESSO IMEDIATO",
                        "IMPRESSÃO ILIMITADA",
                        "COMPRA 100% SEGURA"
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="w-5 h-5 rounded-full border border-natal-dourado flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5 text-natal-dourado" />
                          </div>
                          <span className="text-[12px] font-bold uppercase leading-tight">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 mt-8 mb-2 w-full justify-center">
                  <div className="h-px w-8 bg-natal-dourado/40" />
                  <div className="h-px w-8 bg-natal-dourado/40" />
                </div>

                <div className="text-[42px] font-serif font-bold mb-6">{config.BASIC_PRICE}</div>

                <div className="mt-auto w-full">
                  <a href={config.BASIC_CHECKOUT_URL} className="w-full block bg-natal-dourado text-natal-texto-escuro font-bold text-[17px] tracking-wider py-4 rounded-full hover:bg-natal-dourado-claro transition-colors text-center uppercase mb-3">
                    QUERO A OFERTA BÁSICA
                  </a>
                </div>
              </div>
            </div>

            {/* Oferta Premium */}
            <div id="oferta-premium" className="flex-1 bg-natal-creme text-natal-texto-escuro rounded-xl border-2 border-natal-dourado relative shadow-[0_0_20px_rgba(213,175,100,0.15)] mt-4 md:mt-0 scroll-mt-24 md:scroll-mt-32">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-natal-vinho text-natal-creme text-[11px] font-bold tracking-wider px-6 py-1.5 rounded-sm shadow-md uppercase flex items-center gap-1.5 whitespace-nowrap">
                <div className="absolute -left-2 top-0 w-2 h-full bg-natal-vinho-escuro" style={{clipPath: 'polygon(100% 0, 100% 100%, 0 100%)'}} />
                <div className="absolute -right-2 top-0 w-2 h-full bg-natal-vinho-escuro" style={{clipPath: 'polygon(0 0, 100% 100%, 0 100%)'}} />
                <div className="flex items-center gap-1.5 animate-scale-pulse whitespace-nowrap">
                  <Crown className="w-3.5 h-3.5 text-natal-dourado" />
                  <span>MAIS ESCOLHIDO</span>
                </div>
              </div>
              
              <div className="absolute inset-0 bg-topographic opacity-5 pointer-events-none rounded-xl" />

              <div className="p-6 pt-10 flex flex-col items-center relative z-10">
                <h3 className="font-sans font-bold text-[34px] text-center mb-6 leading-tight uppercase text-natal-texto-escuro">OFERTA PREMIUM</h3>
                
                <div className="relative w-full max-w-[240px] mb-8 mx-auto drop-shadow-2xl animate-float" style={{ aspectRatio: '4/3' }}>
                  <Image 
                    src="https://i.ibb.co/nq1c9H0p/image.webp"
                    alt="Mockup Oferta Premium"
                    fill
                    className="object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="w-full h-px bg-natal-dourado/30 mb-6 relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rotate-45 border border-natal-dourado bg-natal-creme" />
                </div>

                <div className="flex flex-col gap-4 w-full px-4 mb-8">
                  {[
                    { title: "100 ATIVIDADES NUMERADAS" },
                    { title: "GABARITO DE TODOS OS DESENHOS PRONTOS" },
                    { title: "LIVRO ANTI-ESTRESSE", subtitle: "Colore desenhos incríveis do Natal" },
                    { title: "BÔNUS ESPECIAL", subtitle: "Mandalas Natalinas em alta resolução para colorir" },
                    { title: "PRESENTE SURPRESA ESPECIAL", subtitle: "Um presente misterioso garantido para você" },
                    { title: "ACESSO IMEDIATO" },
                    { title: "ACESSO VITALÍCIO" },
                    { title: "IMPRESSÃO ILIMITADA" },
                    { title: "COMPRA 100% SEGURA" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full border border-natal-dourado flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-natal-dourado" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[14px] font-bold uppercase leading-tight tracking-wide text-natal-texto-escuro">{item.title}</span>
                        {item.subtitle && (
                          <span className="text-[12px] text-natal-texto-sec-escuro leading-tight mt-1">{item.subtitle}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4 mb-2 w-full justify-center">
                  <div className="h-px w-8 bg-natal-dourado/40" />
                  <div className="h-px w-8 bg-natal-dourado/40" />
                </div>

                <div className="text-[46px] font-serif font-bold text-natal-texto-escuro mb-6">{config.PREMIUM_PRICE}</div>

                <div className="mt-auto w-full">
                  <a href={config.PREMIUM_CHECKOUT_URL} className="w-full block bg-natal-fundo text-natal-creme font-bold text-[17px] tracking-wider py-5 rounded-full hover:bg-natal-fundo-secundario transition-colors text-center uppercase mb-4 shadow-lg shadow-natal-dourado/20 animate-scale-pulse">
                    QUERO A OFERTA PREMIUM
                  </a>
  
                  <div className="flex items-center justify-center gap-2 text-natal-texto-sec-escuro text-[12px]">
                    <ShieldCheck className="w-3.5 h-3.5 text-natal-dourado" />
                    <span>Compra única • Sem mensalidade</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Badges footer */}
          <div className="w-full flex md:justify-center justify-between gap-2 md:gap-12 text-center pb-8 border-b border-natal-dourado/20">
            <div className="flex flex-col items-center gap-2 flex-1 px-1">
              <Lock className="w-6 h-6 text-natal-dourado" />
              <span className="text-[10px] font-bold uppercase tracking-wider">PAGAMENTO SEGURO</span>
              <span className="text-[10px] text-natal-texto-sec-claro leading-tight">Seus dados protegidos<br/>com criptografia.</span>
            </div>
            <div className="flex flex-col items-center gap-2 flex-1 px-1">
              <Download className="w-6 h-6 text-natal-dourado" />
              <span className="text-[10px] font-bold uppercase tracking-wider">ENTREGA DIGITAL</span>
              <span className="text-[10px] text-natal-texto-sec-claro leading-tight">Acesso imediato ao PDF<br/>após a confirmação.</span>
            </div>
            <div className="flex flex-col items-center gap-2 flex-1 px-1">
              <HeadphonesIcon className="w-6 h-6 text-natal-dourado" />
              <span className="text-[10px] font-bold uppercase tracking-wider">SUPORTE AO CLIENTE</span>
              <span className="text-[10px] text-natal-texto-sec-claro leading-tight">Atendimento humano<br/>quando precisar.</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
