import { FileText, Download, Lock, HeadphonesIcon, ShieldCheck } from "lucide-react";
import { DecorativeDivider } from "@/components/DecorativeDivider";

export function TrustSection() {
  return (
    <section className="w-full bg-creme text-text-escuro py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-topographic opacity-5 pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px w-8 bg-dourado/60" />
          <span className="text-dourado text-xs font-semibold tracking-[0.15em] uppercase text-center">Compre com tranquilidade</span>
          <div className="h-px w-8 bg-dourado/60" />
        </div>

        <h2 className="font-serif text-[38px] md:text-[46px] leading-[1.1] mb-10 text-center">
          UMA COMPRA CLARA<br />DO INÍCIO AO FIM
        </h2>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-marfim border border-cinza-borda p-4 rounded-lg flex items-center justify-start gap-4 shadow-sm">
            <FileText className="w-8 h-8 text-dourado shrink-0 stroke-[1.5]" />
            <span className="font-bold text-[15px] uppercase tracking-wide">PRODUTO 100% DIGITAL</span>
          </div>

          <div className="bg-marfim border border-cinza-borda p-4 rounded-lg flex items-center justify-start gap-4 shadow-sm">
            <Download className="w-8 h-8 text-dourado shrink-0 stroke-[1.5]" />
            <span className="font-bold text-[15px] uppercase tracking-wide">ACESSO APÓS A CONFIRMAÇÃO</span>
          </div>

          <div className="bg-marfim border border-cinza-borda p-4 rounded-lg flex items-center justify-start gap-4 shadow-sm">
            <Lock className="w-8 h-8 text-dourado shrink-0 stroke-[1.5]" />
            <span className="font-bold text-[15px] uppercase tracking-wide">PAGAMENTO EM AMBIENTE SEGURO</span>
          </div>

          <div className="bg-marfim border border-cinza-borda p-4 rounded-lg flex items-center justify-start gap-4 shadow-sm">
            <HeadphonesIcon className="w-8 h-8 text-dourado shrink-0 stroke-[1.5]" />
            <span className="font-bold text-[15px] uppercase tracking-wide">SUPORTE PARA DÚVIDAS</span>
          </div>
        </div>

        <div className="w-full bg-marfim border border-dourado/40 rounded-lg p-5 flex items-start gap-4 shadow-sm">
           <ShieldCheck className="w-8 h-8 text-dourado shrink-0 mt-1 stroke-[1.5]" />
           <div>
             <h4 className="font-bold text-[15px] uppercase tracking-wide mb-2 text-dourado">CANCELAMENTO E ATENDIMENTO</h4>
             <p className="text-[14px] text-text-sec-escuro leading-snug font-medium">
               As condições de compra, atendimento e cancelamento estarão disponíveis de forma clara antes do pagamento.
             </p>
           </div>
        </div>
      </div>
    </section>
  );
}
