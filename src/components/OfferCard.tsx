import { CTAButton } from './CTAButton';

export function OfferCard() {
  return (
    <div className="bg-white rounded-[20px] shadow-2xl border border-gray-200 overflow-hidden flex flex-col h-full ring-4 ring-[#a921ff]/20 flex-shrink-0 animate-in fade-in zoom-in duration-500 delay-300">
      <div className="bg-[#a921ff] text-white text-center py-4 px-6 font-bold uppercase text-lg sm:text-xl tracking-tight leading-snug">
        Ahora liberado para que accedas inmediatamente
      </div>
      
      <div className="p-6 sm:p-8 flex flex-col items-center flex-grow bg-slate-50">
        <img 
          src="https://cdn.phototourl.com/free/2026-06-11-fa682098-9cf8-482a-bbdf-6c9e8a181c4d.jpg" 
          alt="Desafio Seca Barriga APP Mockup" 
          className="w-full max-w-[280px] h-auto object-contain mx-auto mb-6 transform hover:scale-105 transition-transform duration-500 mix-blend-multiply"
        />
        
        <div className="w-full flex-grow flex flex-col justify-end">
          <div className="text-center font-bold text-gray-900 mb-2 uppercase text-sm md:text-base">
            100 Cupos Promocionales (Hasta Hoy)
          </div>
          
          <div className="text-center mb-1">
            <span className="text-gray-500 font-semibold line-through text-lg">R$ 297,00</span>
            <span className="text-red-600 font-black text-4xl ml-2">R$ 21</span>
          </div>
          
          <div className="text-center font-bold text-gray-900 mb-4 bg-yellow-100 py-1 px-3 rounded-full inline-block mx-auto">
            Ahorra R$ 276,00 Hoy
          </div>
          
          <div className="text-center text-sm font-semibold text-green-700 mb-6 flex items-center justify-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Liberado Ahora Para Acceso Inmediato
          </div>
          
          <CTAButton 
            primaryText="Acceder Ahora"
            secondaryText="Haz clic aquí para asegurar el D25"
          />
          
          <div className="flex items-center justify-center gap-2 mt-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
               <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            Pago Encriptado (100% Seguro)
          </div>
        </div>
      </div>
    </div>
  );
}
