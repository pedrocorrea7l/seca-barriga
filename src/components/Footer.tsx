import { CTAButton } from './CTAButton';

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-4xl mx-auto py-16 px-4 flex flex-col items-center">
        <img 
          src="https://cdn.phototourl.com/free/2026-06-11-fa682098-9cf8-482a-bbdf-6c9e8a181c4d.jpg" 
          alt="Mockup Final D25" 
          className="w-full max-w-lg h-auto mb-10 opacity-90 drop-shadow-2xl"
        />
        
        <div className="w-full max-w-xl mx-auto mb-12">
          <CTAButton 
            primaryText="Adelgaza Rápido con el D25" 
            secondaryText="Sin dietas, sin gimnasio y sin pastillas" 
          />
        </div>
      </div>
        
      <div className="bg-[#0e0c22] py-8 px-4 text-center border-t border-slate-800/50">
        <div className="max-w-5xl mx-auto">
          <p className="text-[11px] md:text-[12px] text-gray-500/80 leading-relaxed mb-4 max-w-5xl mx-auto text-justify md:text-center font-medium">
            AVISO LEGAL: Este sitio no es parte de "YouTube", "Instagram" o "Facebook". Además, este sitio no está respaldado por "Meta Inc" o "Google LLC" de ninguna manera. Toda la información de los visitantes, como nombre y correo electrónico, está protegida y no será compartida, divulgada ni vendida a terceros. Al registrarse en este sitio, el usuario registrado podrá recibir otras promociones y avisos. Solo enviamos información importante y sus datos están seguros. De acuerdo con las leyes aplicables de protección de datos, al presionar el botón y registrarse, usted autoriza el envío de mensajes y acepta nuestra política de privacidad.
          </p>
          <div className="h-px w-full max-w-4xl mx-auto bg-slate-800/30 my-4"></div>
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} D25 - Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
