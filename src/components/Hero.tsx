import { OfferCard } from './OfferCard';
import { VideoPlayer } from './VideoPlayer';

export function Hero() {
  return (
    <section className="bg-[#0e0c22] pt-10 pb-20 px-4 flex justify-center text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://storage.googleapis.com/msgsndr/2XGluQ9LzVFGOXSPPIk4/media/66cf7847eb46225b619e3adb.svg')] bg-cover bg-center opacity-30 mix-blend-overlay pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto w-full z-10 relative">
        <div className="flex flex-col items-center mb-10 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-center max-w-4xl tracking-tight leading-[1.1] mb-6 drop-shadow-lg">
            RETO "SECA BARRIGA" EN 25 DÍAS:
            <br />
            <span className="text-[#a921ff]">Adelgaza más de 5kg</span>{' '}
            <span className="text-[#a921ff]">rápidamente entrenando en casa</span>
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-extrabold opacity-90 mt-2 block tracking-normal text-white">
              (incluso SIN dietas, SIN gimnasio y SIN pastillas)
            </span>
          </h1>
          <p className="text-gray-300 font-medium text-lg md:text-xl text-center max-w-3xl drop-shadow-md">
            Con ejercicios que activan la quema de grasa acelerada, afinan la cintura y tonifican el abdomen.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start justify-center">
          <div className="w-full lg:w-[60%] flex flex-col gap-6">
            <VideoPlayer />
            <div className="text-center font-bold text-gray-400 tracking-widest text-sm uppercase mt-[-8px]">
              Haz "Play" en el Video
            </div>
            
            <div className="hidden lg:block mt-8 bg-slate-900/50 p-8 rounded-2xl border border-white/5 shadow-2xl backdrop-blur-sm">
              <h2 className="text-3xl font-black mb-6">¿Qué es el <span className="text-[#a921ff]">"D25"</span>?</h2>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed font-medium">
                <p>Es un nuevo reto que permite a cualquier mujer <strong className="text-white">adelgazar más de 5kg — SIN dietas, SIN gimnasio y SIN pastillas.</strong></p>
                <p>Nosotros garantizamos esto <u className="decoration-[#a921ff] underline-offset-4 text-white font-bold">con entrenamientos rápidos de hasta 25 minutos que pueden ser hechos en casa, sin equipos.</u></p>
                <p><strong className="text-white">Son ejercicios simples, seguros y personalizados para tu biotipo que activan la quema de grasa acelerada, afinan tu cintura y tonifican tu abdomen rápidamente.</strong></p>
                <p className="text-[#37ca37] font-bold text-xl uppercase tracking-wide mt-6 pt-4 border-t border-white/10">Este es el RETO "SECA BARRIGA" EN 25 DÍAS.</p>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-[35%] lg:sticky lg:top-8 mt-4 lg:mt-0">
            <OfferCard />
          </div>
          
          {/* Mobile Only D21 block */}
          <div className="w-full block lg:hidden mt-8 bg-slate-900/50 p-6 sm:p-8 rounded-2xl border border-white/5 shadow-2xl">
            <h2 className="text-2xl font-black mb-6">¿Qué es el <span className="text-[#a921ff]">"D25"</span>?</h2>
            <div className="space-y-4 text-gray-300 text-base leading-relaxed">
              <p>Es un nuevo reto que permite a cualquier mujer <strong className="text-white">adelgazar más de 5kg — SIN dietas, SIN gimnasio y SIN pastillas.</strong></p>
              <p>Nosotros garantizamos esto <u className="decoration-[#a921ff] underline-offset-4 text-white font-bold">con entrenamientos rápidos de hasta 25 minutos que pueden ser hechos en casa, sin equipos.</u></p>
              <p><strong className="text-white">Son ejercicios simples, seguros y personalizados para tu biotipo que activan la quema de grasa acelerada, afinan tu cintura y tonifican tu abdomen rápidamente.</strong></p>
              <p className="text-[#37ca37] font-bold uppercase tracking-wide pt-4 border-t border-white/10 mt-6">Este es el RETO "SECA BARRIGA" EN 25 DÍAS.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
