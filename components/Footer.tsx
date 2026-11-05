import { config } from "@/app/config";

export function Footer() {
  return (
    <footer className="w-full bg-natal-fundo text-natal-texto-sec-claro py-12 px-4 border-t border-natal-dourado/20">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Logo Text */}
        <div className="flex flex-col items-center mb-8">
          <h2 className="font-sans font-bold text-2xl tracking-widest text-natal-creme">
            NATAL
          </h2>
          <span className="font-serif italic text-natal-dourado text-sm tracking-[0.2em] uppercase mt-1">
            Em seis traços
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-8 text-[12px] uppercase tracking-wider text-natal-dourado/80">
          <a href={config.TERMS_URL} className="hover:text-natal-dourado transition-colors">Termos de uso</a>
          <a href={config.PRIVACY_URL} className="hover:text-natal-dourado transition-colors">Política de privacidade</a>
        </div>

        <div className="text-center text-[11px] text-natal-texto-sec-claro flex flex-col gap-2">
          <p>
            Produto digital para uso pessoal. Proibida a revenda ou o compartilhamento dos arquivos.
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} <span className="mx-1">•</span> Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
