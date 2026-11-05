import { DecorativeDivider } from "@/components/DecorativeDivider";
import { Printer, Search, PenTool, Eye } from "lucide-react";

export function HowItWorksSection() {
  return (
    <section className="w-full bg-natal-fundo text-natal-creme py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-topographic opacity-20 pointer-events-none" />
      
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="text-natal-dourado text-sm md:text-base font-semibold tracking-[0.2em] mb-4 uppercase text-center">
          COMO FUNCIONA
        </h2>
        
        <DecorativeDivider className="mb-10" variant="dark" />

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {/* Card 1 */}
          <div className="bg-natal-creme text-natal-texto p-5 rounded-lg flex items-start gap-4">
            <div className="mt-1"><Printer className="w-10 h-10 text-black stroke-1" /></div>
            <div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-sans font-bold text-[32px] text-black leading-none">1.</span>
                <h3 className="font-bold text-[15px] uppercase text-black">IMPRIMA A ATIVIDADE</h3>
              </div>
              <p className="text-[15px] text-black leading-snug">Use papel A4 comum ou imprima em uma gráfica.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-natal-fundo-secundario text-natal-creme p-5 rounded-lg flex items-start gap-4 border border-natal-dourado/20">
            <div className="mt-1"><Search className="w-10 h-10 text-natal-dourado stroke-1" /></div>
            <div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-sans font-bold text-[32px] text-natal-dourado leading-none">2.</span>
                <h3 className="font-bold text-[15px] uppercase">OBSERVE O NÚMERO</h3>
              </div>
              <p className="text-[15px] text-natal-creme/80 leading-snug">Cada número corresponde a um dos seis traços.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-natal-creme text-natal-texto p-5 rounded-lg flex items-start gap-4">
            <div className="mt-1"><PenTool className="w-10 h-10 text-black stroke-1" /></div>
            <div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-sans font-bold text-[32px] text-black leading-none">3.</span>
                <h3 className="font-bold text-[15px] uppercase text-black">PREENCHA A CÉLULA</h3>
              </div>
              <p className="text-[15px] text-black leading-snug">Repita o sinal indicado sem ultrapassar os limites.</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-natal-fundo-secundario text-natal-creme p-5 rounded-lg flex items-start gap-4 border border-natal-dourado/20">
            <div className="mt-1"><Eye className="w-10 h-10 text-natal-dourado stroke-1" /></div>
            <div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-sans font-bold text-[32px] text-natal-dourado leading-none">4.</span>
                <h3 className="font-bold text-[15px] uppercase">REVELE O NATAL</h3>
              </div>
              <p className="text-[15px] text-natal-creme/80 leading-snug">Afaste a folha e veja o desenho aparecer.</p>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="w-full grid grid-cols-3 md:grid-cols-6 gap-6 md:gap-4 bg-natal-fundo-secundario p-6 rounded-lg border border-natal-dourado/20 mb-8 justify-items-center">
          {[
            { num: 1, name: "PONTO FINO", svg: <circle cx="20" cy="20" r="3" fill="black" /> },
            { num: 2, name: "DIAGONAL", svg: <line x1="8" y1="32" x2="32" y2="8" stroke="black" strokeWidth="2.5" strokeLinecap="round" /> },
            { num: 3, name: "X", svg: (<g stroke="black" strokeWidth="2.5" strokeLinecap="round"><line x1="10" y1="10" x2="30" y2="30" /><line x1="30" y1="10" x2="10" y2="30" /></g>) },
            { num: 4, name: "X - HORIZONTAL", svg: (<g stroke="black" strokeWidth="2.5" strokeLinecap="round"><line x1="10" y1="10" x2="30" y2="30" /><line x1="30" y1="10" x2="10" y2="30" /><line x1="6" y1="20" x2="34" y2="20" /></g>) },
            { num: 5, name: "TRAMA DENSA", svg: (<g stroke="black" strokeWidth="2.5" strokeLinecap="round"><line x1="10" y1="10" x2="30" y2="30" /><line x1="30" y1="10" x2="10" y2="30" /><line x1="6" y1="20" x2="34" y2="20" /><line x1="20" y1="6" x2="20" y2="34" /></g>) },
            { num: 6, name: "PRETO SÓLIDO", svg: <rect x="1" y="1" width="38" height="38" fill="black" /> }
          ].map((item) => (
            <div key={item.num} className="flex flex-col items-center gap-3">
              <span className="text-natal-dourado font-serif text-lg font-medium leading-none">{item.num}</span>
              <div className="w-14 h-14 md:w-16 md:h-16 relative flex items-center justify-center shrink-0">
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 40 40" preserveAspectRatio="none">
                  <path d="M 1,1 Q 10,0.5 20,1 T 39,1 L 39,39 Q 20,39.5 10,39 T 1,39 Z" fill="#FFF4DD" stroke="#D5AF64" strokeWidth="0.75" vectorEffect="non-scaling-stroke" />
                </svg>
                
                <div className="absolute top-[3px] left-[3px] w-[2.5px] h-[2.5px] bg-natal-texto rounded-full z-10" />
                <div className="absolute top-[3px] right-[3px] w-[2.5px] h-[2.5px] bg-natal-texto rounded-full z-10" />
                <div className="absolute bottom-[3px] left-[3px] w-[2.5px] h-[2.5px] bg-natal-texto rounded-full z-10" />
                <div className="absolute bottom-[3px] right-[3px] w-[2.5px] h-[2.5px] bg-natal-texto rounded-full z-10" />

                <svg viewBox="0 0 40 40" className="w-full h-full absolute inset-0 z-20 overflow-visible pointer-events-none">
                  {item.svg}
                </svg>
              </div>
              <span className="text-[10px] md:text-xs text-natal-creme font-bold tracking-wider text-center uppercase h-8 flex items-center">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
