import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { config } from "@/app/config";

export default function TermsOfUse() {
  return (
    <main className="min-h-screen bg-creme text-text-escuro py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-dourado font-bold mb-8 hover:opacity-80 transition-opacity">
          <ArrowLeft className="w-4 h-4" />
          VOLTAR PARA A PÁGINA INICIAL
        </Link>
        
        <h1 className="font-serif text-4xl mb-8">Termos de Uso</h1>
        
        <div className="space-y-6 text-text-sec-escuro leading-relaxed">
          <p>
            Ao acessar ao site do produto <strong>Fauna em Seis Traços</strong> da <strong>Ativamente</strong>, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis.
          </p>
          
          <h2 className="font-bold text-lg text-text-escuro mt-8">1. Licença de Uso</h2>
          <p>
            É concedida permissão para baixar temporariamente uma cópia dos materiais (arquivos digitais, PDFs) contidos neste site para uso pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você <strong>não</strong> pode:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Modificar ou copiar os materiais;</li>
            <li>Usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);</li>
            <li>Remover quaisquer direitos autorais ou outras notações de propriedade dos materiais;</li>
            <li>Transferir os materiais para outra pessoa ou 'espelhar' os materiais em qualquer outro servidor;</li>
            <li>Distribuir, revender ou compartilhar os arquivos originais adquiridos.</li>
          </ul>
          
          <h2 className="font-bold text-lg text-text-escuro mt-8">2. Isenção de responsabilidade</h2>
          <p>
            Os materiais neste site são fornecidos 'como estão'. A <strong>Ativamente</strong> não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.
          </p>

          <h2 className="font-bold text-lg text-text-escuro mt-8">3. Produto Digital</h2>
          <p>
            Por se tratar de um produto digital em formato PDF, não há envio de produtos físicos. O acesso aos arquivos é liberado automaticamente após a confirmação do pagamento.
          </p>
          
          <h2 className="font-bold text-lg text-text-escuro mt-8">4. Política de Reembolso</h2>
          <p>
            Oferecemos uma garantia incondicional de 7 dias. Se por qualquer motivo você não ficar satisfeito com o material, poderá solicitar o reembolso integral enviando um e-mail para <strong>{config.SUPPORT_EMAIL}</strong> dentro de 7 dias após a data da compra.
          </p>
        </div>
      </div>
    </main>
  );
}
