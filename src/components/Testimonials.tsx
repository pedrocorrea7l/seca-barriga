import { Star } from 'lucide-react';

const testimonials1 = [
  { img: 'https://anxious-white-ehffrtvp.edgeone.app/mantenha_a_mulher_altere_escrita_202606111900.jpeg' },
  { img: 'https://visual-coral-sx2asmxq.edgeone.app/mais_uma_para_mudar_escrita_202606111902.jpeg' },
  { img: 'https://dual-coffee-5qo26vzc.edgeone.app/mude_a_legenda_para_espanhol_202606111908.jpeg' },
  { img: 'https://extra-aquamarine-6wlbno7m.edgeone.app/mude_a_legenda_para_espanhol_202606111910.jpeg' }
];

export function Testimonials() {
  return (
    <section className="bg-white py-16 px-4 border-t border-gray-100">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <div className="flex items-center justify-center gap-1 text-orange-400 mb-4 bg-orange-50 px-4 py-1.5 rounded-full border border-orange-100">
          <Star className="w-4 h-4 fill-current" />
          <Star className="w-4 h-4 fill-current" />
          <Star className="w-4 h-4 fill-current" />
          <Star className="w-4 h-4 fill-current" />
          <Star className="w-4 h-4 fill-current" />
          <span className="text-gray-800 font-bold ml-2 text-sm tracking-wide uppercase">Excelente basado en más de 376+ evaluaciones</span>
        </div>
        
        <h2 className="text-center font-bold text-gray-900 text-3xl md:text-4xl mb-12 max-w-3xl leading-tight tracking-tight">
          Mira solo algunos de los resultados de miles de mujeres que adelgazaron con nuestro método
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-4xl mx-auto">
          {testimonials1.map((t, idx) => (
            <div key={idx} className="bg-gray-100 rounded-xl overflow-hidden shadow-md ring-1 ring-gray-200/50 hover:shadow-lg transition-transform hover:-translate-y-1">
              <img src={t.img} alt={`Resultado ${idx + 1}`} className="w-full h-auto object-cover object-center aspect-square" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
