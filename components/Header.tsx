"use client";

import { useState, useEffect } from "react";

export function AnnouncementBar() {
  const [currentDate, setCurrentDate] = useState<string>("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const updateDate = () => {
      try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat("pt-BR", {
          timeZone: "America/Recife",
          day: "2-digit",
          month: "2-digit",
          year: "numeric"
        });
        setCurrentDate(formatter.format(now));
      } catch (e) {
        const now = new Date();
        const dd = String(now.getDate()).padStart(2, '0');
        const mm = String(now.getMonth() + 1).padStart(2, '0');
        const yyyy = now.getFullYear();
        setCurrentDate(`${dd}/${mm}/${yyyy}`);
      }
    };

    updateDate();
    
    const intervalId = setInterval(updateDate, 30000);
    
    return () => clearInterval(intervalId);
  }, []);

  if (!mounted) {
    return (
      <div 
        className="w-full relative z-50 flex justify-center items-center overflow-hidden border-b shadow-sm"
        style={{
          background: "linear-gradient(90deg, #062B22 0%, #103C30 50%, #062B22 100%)",
          borderColor: "rgba(213, 175, 100, 0.3)",
          height: "46px"
        }}
      />
    );
  }

  const DecorativeSymbol = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden sm:block shrink-0 opacity-80" aria-hidden="true">
      <circle cx="12" cy="12" r="11" stroke="#D5AF64" strokeWidth="1" />
      <path d="M12 5.5C12 9 9 12 5.5 12C9 12 12 15 12 18.5C12 15 15 12 18.5 12C15 12 12 9 12 5.5Z" fill="#D5AF64" />
    </svg>
  );

  return (
    <div 
      className="w-full relative z-[100] flex justify-center items-center border-b shadow-sm overflow-hidden animate-announcement"
      style={{
        background: "linear-gradient(90deg, #062B22 0%, #103C30 50%, #062B22 100%)",
        borderColor: "rgba(213, 175, 100, 0.3)",
      }}
    >
      <div className="absolute inset-0 bg-topographic opacity-[0.05] pointer-events-none" />
      
      <div className="relative z-10 w-full px-2 md:px-4 h-[42px] md:h-[46px] flex justify-center items-center gap-3">
        <DecorativeSymbol />
        
        <p className="font-sans font-[750] text-[12px] md:text-[14px] text-natal-creme tracking-[0.03em] uppercase text-center flex items-center justify-center whitespace-nowrap">
          <span className="hidden sm:inline">CONDIÇÃO ESPECIAL DISPONÍVEL HOJE</span>
          <span className="inline sm:hidden">CONDIÇÃO ESPECIAL HOJE</span>
          <span className="mx-1.5 md:mx-2 opacity-60">•</span>
          <time dateTime={currentDate} aria-live="polite" className="text-natal-dourado">
            {currentDate}
          </time>
        </p>

        <DecorativeSymbol />
      </div>
    </div>
  );
}

export function Header() {
  return (
    <header className="w-full bg-natal-fundo border-b border-natal-dourado/20 py-4 px-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex flex-col">
          <h1 className="font-sans font-bold text-xl tracking-widest text-natal-creme leading-none">
            NATAL
          </h1>
          <span className="font-serif italic text-natal-dourado text-[10px] tracking-[0.2em] uppercase mt-1">
            Em seis traços
          </span>
        </div>
        
        <a href="#premium" className="border border-natal-dourado text-natal-dourado text-xs font-bold tracking-wider px-4 py-2 rounded hover:bg-natal-dourado/10 transition-colors uppercase">
          Ver Ofertas
        </a>
      </div>
    </header>
  );
}
