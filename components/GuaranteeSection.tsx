import { DecorativeDivider } from "@/components/DecorativeDivider";
import { ShieldCheck } from "lucide-react";

export function GuaranteeSection() {
  return (
    <section className="w-full bg-natal-creme text-natal-texto-escuro py-16 px-4">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-natal-marfim border-2 border-natal-dourado/30 rounded-xl p-8 md:p-12 shadow-lg">
        <div className="flex-shrink-0">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-natal-dourado/10 border border-natal-dourado flex items-center justify-center relative">
            <div className="absolute inset-2 rounded-full border border-dashed border-natal-dourado/50" />
            <ShieldCheck className="w-16 h-16 md:w-20 md:h-20 text-natal-dourado" strokeWidth={1.5} />
          </div>
        </div>
        
        <div className="flex-1 text-center md:text-left">
          <h2 className="font-sans text-[32px] md:text-[38px] leading-[1.1] mb-4 text-natal-texto-escuro uppercase font-bold">
            Garantia Incondicional<br className="hidden md:block" />
            de 7 dias
          </h2>
          <DecorativeDivider className="mb-6 mx-auto md:mx-0" variant="light" />
          <p className="text-[16px] md:text-[18px] leading-relaxed text-natal-texto-sec-escuro font-normal">
            Temos total confiança na qualidade do nosso material. Se por qualquer motivo você não se adaptar, achar que não é para você ou simplesmente não gostar, basta nos enviar um único e-mail em até 7 dias após a compra.
          </p>
          <p className="text-[16px] md:text-[18px] leading-relaxed text-natal-vinho font-bold mt-4">
            Devolvemos 100% do seu dinheiro, sem perguntas e sem complicações. O risco é todo nosso.
          </p>
        </div>
      </div>
    </section>
  );
}
