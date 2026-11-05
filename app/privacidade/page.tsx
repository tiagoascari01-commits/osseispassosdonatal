import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { config } from "@/app/config";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-creme text-text-escuro py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-dourado font-bold mb-8 hover:opacity-80 transition-opacity">
          <ArrowLeft className="w-4 h-4" />
          VOLTAR PARA A PÁGINA INICIAL
        </Link>
        
        <h1 className="font-serif text-4xl mb-8">Política de Privacidade</h1>
        
        <div className="space-y-6 text-text-sec-escuro leading-relaxed">
          <p>
            A sua privacidade é importante para nós. É política da <strong>Ativamente</strong> respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site.
          </p>
          
          <h2 className="font-bold text-lg text-text-escuro mt-8">1. Informações que coletamos</h2>
          <p>
            Solicitamos informações pessoais (como nome, e-mail e dados de pagamento) apenas quando realmente precisamos delas para lhe fornecer um serviço, ou seja, no momento da compra do produto digital. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento.
          </p>
          
          <h2 className="font-bold text-lg text-text-escuro mt-8">2. Uso de informações</h2>
          <p>
            Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Os dados de pagamento são processados através de gateways de pagamento seguros e não armazenamos detalhes do seu cartão de crédito em nossos servidores.
          </p>

          <h2 className="font-bold text-lg text-text-escuro mt-8">3. Compartilhamento de dados</h2>
          <p>
            Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
          </p>

          <h2 className="font-bold text-lg text-text-escuro mt-8">4. Contato</h2>
          <p>
            Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco através do e-mail: <strong>{config.SUPPORT_EMAIL}</strong>.
          </p>
        </div>
      </div>
    </main>
  );
}
