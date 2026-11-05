import { DecorativeDivider } from "@/components/DecorativeDivider";
import { FileText, Image as ImageIcon, Book, Download, CheckCircle } from "lucide-react";

export function ContentBundleSection() {
  return (
    <section className="w-full bg-creme text-text-escuro py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-topographic opacity-5 pointer-events-none" />
      
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px w-8 bg-dourado/60" />
          <span className="text-dourado text-xs font-semibold tracking-[0.15em] uppercase">O que está incluído</span>
          <div className="h-px w-8 bg-dourado/60" />
        </div>

        <h2 className="font-serif text-[38px] md:text-[46px] leading-[1.1] mb-6">
          TUDO O QUE VOCÊ<br />RECEBE
        </h2>

        <p className="text-[17px] md:text-[20px] leading-relaxed text-text-sec-escuro mb-10 px-2 max-w-2xl">
          Arquivos organizados para você baixar, imprimir e começar a revelar.
        </p>

        <div className="w-full flex flex-col md:flex-row gap-8 items-center mb-8">
          {/* Mockup bundle placeholder */}
          <div className="w-full md:w-1/2 h-64 md:h-96 bg-[#E8E2D2] border border-cinza-borda rounded-lg flex items-center justify-center shadow-inner">
            <span className="text-text-sec-claro text-sm font-medium">Mockup do Pacote</span>
          </div>

          <div className="w-full md:w-1/2 flex flex-col gap-3">
          <div className="bg-marfim border border-cinza-borda p-4 rounded flex items-center justify-start gap-4 shadow-sm">
            <div className="w-10 h-10 border border-dourado rounded flex flex-col items-center justify-center bg-creme text-dourado font-bold text-xs leading-none">
              <div className="border-b border-dourado w-full text-center pb-0.5 mb-0.5">1 2</div>
              <div>3 4</div>
            </div>
            <span className="font-bold text-[15px] uppercase text-text-escuro tracking-wide">100 ATIVIDADES NUMERADAS</span>
          </div>

          <div className="bg-marfim border border-cinza-borda p-4 rounded flex items-center justify-start gap-4 shadow-sm">
            <FileText className="w-10 h-10 text-dourado p-1 border border-dourado rounded bg-creme" strokeWidth={1.5} />
            <span className="font-bold text-[15px] uppercase text-text-escuro tracking-wide">FOLHA "COMO COLORIR"</span>
          </div>

          <div className="bg-marfim border border-cinza-borda p-4 rounded flex items-center justify-start gap-4 shadow-sm">
            <Book className="w-10 h-10 text-dourado p-1 border border-dourado rounded bg-creme" strokeWidth={1.5} />
            <span className="font-bold text-[15px] uppercase text-text-escuro tracking-wide">LEGENDA DOS SEIS TRAÇOS</span>
          </div>

          <div className="bg-marfim border border-cinza-borda p-4 rounded flex items-center justify-start gap-4 shadow-sm">
            <div className="w-10 h-10 border border-dourado rounded flex items-center justify-center bg-creme text-dourado font-bold text-[10px]">PDF</div>
            <span className="font-bold text-[15px] uppercase text-text-escuro tracking-wide">ARQUIVOS EM PDF A4</span>
          </div>

          <div className="bg-marfim border border-cinza-borda p-4 rounded flex items-center justify-start gap-4 shadow-sm">
            <CheckCircle className="w-10 h-10 text-dourado p-1 border border-dourado rounded bg-creme" strokeWidth={1.5} />
            <span className="font-bold text-[15px] uppercase text-text-escuro tracking-wide">GABARITO COMPLETO NO PREMIUM</span>
          </div>
          </div>
        </div>

        <div className="flex items-center gap-2 text-text-sec-escuro text-[15px] mt-4">
          <div className="w-2 h-2 rotate-45 bg-dourado" />
          <span>Compra única • Arquivos para uso pessoal</span>
          <div className="w-2 h-2 rotate-45 bg-dourado" />
        </div>
      </div>
    </section>
  );
}
