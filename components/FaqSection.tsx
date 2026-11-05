"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { DecorativeDivider } from "@/components/DecorativeDivider";

const faqs = [
  {
    question: "É UM PRODUTO FÍSICO?",
    answer: "Não. Você receberá arquivos digitais em PDF para baixar e imprimir. Nenhum item será enviado pelo correio."
  },
  {
    question: "COMO RECEBO OS ARQUIVOS?",
    answer: "Após a confirmação do pagamento, você receberá as instruções para acessar e baixar os arquivos digitais."
  },
  {
    question: "PRECISO SABER DESENHAR?",
    answer: "Não. Basta consultar a legenda e repetir dentro de cada célula o traço correspondente ao número."
  },
  {
    question: "QUAL CANETA DEVO USAR?",
    answer: "Recomendamos uma caneta preta de ponta fina. Faça um pequeno teste antes para verificar se a tinta não atravessa o papel."
  },
  {
    question: "O GABARITO ESTÁ INCLUÍDO?",
    answer: "O gabarito completo está incluído na oferta Premium. Consulte a descrição de cada opção antes de escolher."
  },
  {
    question: "POSSO IMPRIMIR NOVAMENTE?",
    answer: "Sim, para seu uso pessoal e respeitando as condições da licença. Não é permitido revender ou compartilhar os arquivos."
  },
  {
    question: "COMO FUNCIONA O CANCELAMENTO?",
    answer: "As condições e os canais para solicitar atendimento ou cancelamento estarão disponíveis na política de compra."
  }
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-natal-fundo text-natal-creme py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-topographic opacity-20 pointer-events-none" />
      
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px w-8 bg-natal-dourado/60" />
          <span className="text-natal-dourado text-xs font-bold tracking-[0.15em] uppercase text-center">Tire suas dúvidas</span>
          <div className="h-px w-8 bg-natal-dourado/60" />
        </div>

        <h2 className="font-sans text-[38px] md:text-[46px] leading-[1.1] mb-10 text-center font-bold">
          PERGUNTAS FREQUENTES
        </h2>

        <div className="w-full flex flex-col gap-3">
          {faqs.map((faq, index) => (
            <div key={index} className="w-full border border-natal-dourado/30 rounded-lg overflow-hidden bg-natal-fundo-secundario">
              <button 
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-4 text-left transition-colors hover:bg-natal-fundo/50"
                aria-expanded={openIndex === index}
              >
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full border border-natal-dourado flex items-center justify-center shrink-0">
                    {openIndex === index ? (
                      <Minus className="w-4 h-4 text-natal-dourado" />
                    ) : (
                      <Plus className="w-4 h-4 text-natal-dourado" />
                    )}
                  </div>
                  <span className={`font-bold text-[14px] uppercase tracking-wide ${openIndex === index ? 'text-natal-dourado' : 'text-natal-creme'}`}>
                    {faq.question}
                  </span>
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-4 pt-0 pl-14 text-[14px] text-natal-texto-sec-claro leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
