import { CTAButton } from './CTAButton';

export function Guarantee() {
  return (
    <section className="bg-slate-50 py-20 px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <img 
          src="https://storage.googleapis.com/msgsndr/nzRRcTGXuUWongMurRFu/media/b87e429b-0443-476f-a190-942cc762915f.png" 
          alt="Garantia Incondicional" 
          className="w-32 h-auto mb-8 animate-bounce delay-1000 origin-bottom"
        />
        
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight text-center mb-8">
          Tu compra está 100% protegida con la <span className="text-[#a921ff]">GARANTÍA INCONDICIONAL</span>
        </h2>
        
        <div className="space-y-5 text-gray-700 text-lg leading-relaxed max-w-3xl text-center md:text-left mx-auto">
          <p>Puedes iniciar el D25 (sin compromisos) con la garantía de 7 días.</p>
          <p>¿No quieres continuar en el reto? ¡Sin problemas!</p>
          <p className="font-bold text-gray-900 border-l-4 border-[#37ca37] pl-4 py-1 text-left">
            Si por cualquier motivo no quieres continuar, tienes garantía y puedes recibir todo tu dinero de vuelta.
          </p>
          <p>Basta con enviar un mensaje a nuestro WhatsApp de soporte o un email a contato@exercicioemcasa.com.br y solicitar la cancelación.</p>
          <p>Vamos a reembolsar tu inversión inmediatamente. Sin letras pequeñas.</p>
          <p className="font-medium text-gray-900">O amas el reto, o no pagas nada.</p>
        </div>
        
        <div className="w-full max-w-xl mx-auto mt-12">
          <CTAButton 
            primaryText="Garantiza el D25 Ahora" 
            secondaryText="Sin compromisos por 7 días" 
          />
        </div>
      </div>
    </section>
  );
}
