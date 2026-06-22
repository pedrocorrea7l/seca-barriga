import { CTAButton } from './CTAButton';

export function Explanation() {
  return (
    <section className="bg-slate-50 py-16 px-4 md:px-8 border-t border-gray-200">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        <div className="lg:w-2/3 flex flex-col gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tight mb-4">
            El Reto "Seca Barriga en 25 Días" es un <span className="text-[#a921ff]">ATAJO.</span>
          </h2>
          
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>Antes de nuestro método, muchas mujeres pasaron años luchando contra el aumento de peso y con esa grasita obstinada en la barriga...</p>
            <p>Y ellas hasta probaron prácticamente todo lo que existe por ahí…</p>
            <p>… Desde dietas restrictivas, horas de cardio en la cinta y entrenamientos pesados en el gimnasio, hasta suplementos caros o pastillas milagrosas como mounjaro u ozempic...</p>
            <p className="font-medium text-gray-900">... Pero, nada funcionaba de verdad.</p>
            <p>Solo cuando comenzaron a aplicar la metodología correcta — con entrenamientos rápidos, específicos y personalizados para cada biotipo — finalmente lograron secar la barriga.</p>
            <p>Como Mónica que adelgazó 36kg…</p>
            <p>Como Sindy que adelgazó 22kg…</p>
            <p>… O como Elida, madre de dos, que adelgazó 28kg…</p>
            <p>… Y muchas otras mujeres que hicieron lo mismo.</p>
            <p className="font-bold text-gray-900 border-l-4 border-[#37ca37] pl-4 py-1">Todo gracias al método probado, comprobado y validado.</p>
          </div>
        </div>
        
        <div className="lg:w-1/3 static lg:sticky lg:top-8 w-full">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden ring-4 ring-gray-100">
            <div className="p-1">
              <img 
                src="https://cdn.phototourl.com/free/2026-06-11-fa682098-9cf8-482a-bbdf-6c9e8a181c4d.jpg" 
                alt="Bonos Incluidos" 
                className="w-full h-auto p-4"
              />
            </div>
            
            <div className="px-6 pb-8 bg-slate-50 pt-4 border-t border-gray-100">
              <div className="text-center font-bold text-gray-900 mb-2 uppercase text-sm">
                100 Cupos Promocionales (Hasta Hoy)
              </div>
              <div className="text-center mb-1">
                <span className="text-gray-500 font-semibold line-through text-lg">R$ 297,00</span>
                <span className="text-red-500 font-black text-3xl ml-2">R$ 21</span>
              </div>
              <div className="text-center font-bold text-gray-900 mb-6 text-sm">
                Ahorra R$ 276,00 Hoy
              </div>
              
              <CTAButton 
                primaryText="Comenzar Ahora"
                secondaryText="Toca aquí para comenzar el D25"
                className="py-3"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto mt-16 lg:mt-24 bg-white p-2 md:p-6 rounded-2xl shadow-xl border border-gray-200">
        <h3 className="text-center font-bold text-gray-900 text-2xl md:text-3xl mb-6 tracking-tight">
          La diferencia entre los métodos <span className="text-red-500">viejos</span> y el <span className="text-[#37ca37]">nuevo método</span>:
        </h3>
        <img 
          src="https://theoretical-moccasin-ozaz0mtj.edgeone.app/refaça_a_imagem_em_espanhol_202606111857.jpeg" 
          alt="Métodos Tradicionales vs Nuevo Método" 
          className="w-full h-auto rounded-lg shadow-sm"
        />
      </div>
    </section>
  );
}
