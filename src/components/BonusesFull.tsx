import { CTAButton } from './CTAButton';

const bonuses = [
  {
    title: "RETO SECA BARRIGA",
    desc: "Adelgaza más de 5kg naturalmente, en 25 días, haciendo entrenamientos rápidos en casa que aceleran la quema de grasa, afinan la cintura y tonifican el abdomen.",
    img: "https://cdn.phototourl.com/free/2026-06-11-ac495934-9281-4c36-914e-6e2b1f27542a.jpg"
  },
  {
    title: "INICIO RÁPIDO",
    desc: "Comienza a entrenar rápidamente con los ejercicios más seguros para principiantes. Incluso sin haber practicado nunca, cualquier mujer puede iniciar con estos entrenamientos didácticos desde cero.",
    img: "https://storage.googleapis.com/msgsndr/nzRRcTGXuUWongMurRFu/media/69457ac266d5784af20b3862.png"
  },
  {
    title: "ENTRENAMIENTOS PEREZOSOS",
    desc: "Ejercicios de 5 minutos que cualquier persona puede hacer sentada o incluso acostada para mantener el progreso en el reto.",
    img: "https://cdn.phototourl.com/free/2026-06-11-d9fe88e7-f460-482c-b861-9593670d1a18.jpg"
  },
  {
    title: "ESTIRAMIENTOS RELAJANTES",
    desc: "Serie de estiramientos rápidos para relajar después de los entrenamientos, calmar el cuerpo después de días ajetreados o moverse cuando no quieras entrenar.",
    img: "https://cdn.phototourl.com/free/2026-06-11-0b815e3f-2cd5-4f8a-9d98-66f425ec4e37.jpg"
  },
  {
    title: "METABOLISMO ACELERADO",
    desc: "Acelera tu metabolismo naturalmente, incluso en la menopausia, para activar la quema de grasa, potenciar tus resultados y maximizar tu salud.",
    img: "https://storage.googleapis.com/msgsndr/nzRRcTGXuUWongMurRFu/media/69457ac5aad360612f771b42.png"
  },
  {
    title: "COMUNIDAD D25",
    desc: "Acceso exclusivo a la comunidad de participantes del reto (para inspirarse, compartir victorias y estar cerca de otras mujeres apoyándose).",
    img: "https://cdn.phototourl.com/free/2026-06-11-5773a1ac-af44-4877-b4e4-79ada8933716.jpg"
  }
];

export function BonusesFull() {
  return (
    <section className="bg-white py-16 px-4 border-t border-gray-200 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight text-center mb-10">
          Aquí está todo lo que <span className="text-[#a921ff]">vas a ganar con el D25</span>:
        </h2>
        
        <img 
          src="https://cdn.phototourl.com/free/2026-06-11-fa682098-9cf8-482a-bbdf-6c9e8a181c4d.jpg" 
          alt="Todos los beneficios del D25" 
          className="w-full max-w-4xl h-auto mb-16 transform hover:scale-[1.01] transition-transform duration-700 hover:-translate-y-2"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-12">
          {bonuses.map((bonus, idx) => (
            <div key={idx} className="bg-white p-6 relative rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow">
              <div className="flex flex-col items-center mb-4">
                <img src={bonus.img} alt={bonus.title} className="w-24 h-auto object-contain mb-4" />
                <h3 className="font-bold text-lg text-gray-900 text-center tracking-tight">{bonus.title}</h3>
              </div>
              <p className="text-gray-600 text-sm text-center leading-relaxed flex-grow">
                {bonus.desc}
              </p>
              
              <div className="mt-6 pt-4 border-t border-gray-100 text-center">
                 <div className="inline-flex items-center text-xs font-bold text-green-700 bg-green-50 px-3 py-1.5 rounded-full">
                    <svg className="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    Acceso Inmediato <span className="mx-1 line-through opacity-50 ml-2">R$297</span> <span className="font-black text-black">Bono</span>
                 </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="w-full max-w-xl mx-auto">
          <CTAButton 
            primaryText="Accede a Todo Ahora" 
            secondaryText="Haz clic aquí para liberar tu entrada por solo R$21" 
          />
        </div>
      </div>
    </section>
  );
}
