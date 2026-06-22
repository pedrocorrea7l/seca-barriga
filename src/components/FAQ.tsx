import { HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: "¿Para quién es?",
    a: "Es ideal para mujeres de todas las edades que desean reducir medidas en la cintura y conquistar una barriga más definida. El reto es personalizado para diferentes biotipos y niveles de acondicionamiento, desde principiantes absolutas hasta mujeres que ya entrenan regularmente."
  },
  {
    q: "¿Qué recibo?",
    a: "Estás recibiendo el D25, con todo lo que necesitas para adelgazar en casa con entrenamientos rápidos. También estás accediendo gratuitamente a Inicio Rápido, con ejercicios simples para que las principiantes comiencen con seguridad. Estás liberando los Entrenamientos Perezosos con ejercicios de 5 minutos que pueden hacerse incluso sentada o acostada. Estás garantizando los Estiramientos Relajantes... Y además entras a la Comunidad D25."
  },
  {
    q: "¿Cómo funciona?",
    a: "La principal diferencia es que el RETO SECA BARRIGA funciona. Porque personalizamos el plan de acuerdo con tu biotipo a través del quiz inicial. Nos enfocamos en ejercicios comprobados científicamente para activar la quema de grasa acelerada (y los entrenamientos son cortos y eficientes, respetando tu tiempo y energía)."
  },
  {
    q: "¿En cuánto tiempo veo resultados?",
    a: "El D25 fue hecho para garantizarte resultados ya en los próximos días. Puedes adelgazar rápidamente siguiendo el reto seca barriga."
  },
  {
    q: "¿Tiene garantía?",
    a: "Sí, puedes iniciar el reto sin compromisos con la garantía de 7 días. Si no quieres continuar en el D25 por cualquier motivo, puedes cancelar y recibir tu dinero de vuelta inmediatamente."
  }
];

export function FAQ() {
  return (
    <section className="bg-slate-50 py-20 px-4 border-t border-gray-200">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight text-center mb-16">
          FAQ - <span className="text-[#a921ff]">Preguntas Frecuentes</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-10">
            {faqs.slice(0, 2).map((faq, idx) => (
              <div key={idx}>
                <h3 className="font-bold text-xl text-gray-900 flex items-start gap-2 mb-3">
                  <HelpCircle className="w-6 h-6 text-[#a921ff] shrink-0 fill-[#a921ff]/10" strokeWidth={2.5} />
                  {faq.q}
                </h3>
                <p className="text-gray-700 leading-relaxed pl-8">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
          
          <div className="space-y-10">
            {faqs.slice(2).map((faq, idx) => (
              <div key={idx}>
                <h3 className="font-bold text-xl text-gray-900 flex items-start gap-2 mb-3">
                  <HelpCircle className="w-6 h-6 text-[#a921ff] shrink-0 fill-[#a921ff]/10" strokeWidth={2.5} />
                  {faq.q}
                </h3>
                <p className="text-gray-700 leading-relaxed pl-8">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
