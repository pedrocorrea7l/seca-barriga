import { CTAButton } from './CTAButton';

const testimonials2 = [
  { img: 'https://storage.googleapis.com/msgsndr/Nu6Elz1XoqEbDZXJFplW/media/019b1921-3ed8-412a-84f9-3d5f4b140c64.jpg' },
  { img: 'https://storage.googleapis.com/msgsndr/Nu6Elz1XoqEbDZXJFplW/media/098fb07d-0224-4fa9-a966-e4f3c689a967.jpg' },
  { img: 'https://storage.googleapis.com/msgsndr/Nu6Elz1XoqEbDZXJFplW/media/4945d16c-1188-4e84-aba4-f42aa016a207.jpg' },
  { img: 'https://storage.googleapis.com/msgsndr/Nu6Elz1XoqEbDZXJFplW/media/8cd45002-5f46-4f0b-b925-443ce76d86ba.jpg' }
];

export function MoreTestimonials() {
  return (
    <section className="bg-white py-16 px-4 border-t border-gray-100">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="text-center font-bold text-gray-900 text-3xl md:text-5xl mb-12 max-w-3xl leading-tight tracking-tight">
          Tú también puedes <span className="text-[#a921ff]">adelgazar rápidamente con el D25</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full mx-auto mb-12">
          {testimonials2.map((t, idx) => (
            <div key={idx} className="bg-gray-100 rounded-xl overflow-hidden shadow-md ring-1 ring-gray-200/50 hover:shadow-lg transition-transform hover:-translate-y-1 block max-h-[300px] object-cover">
              <img src={t.img} alt={`Un resultado más ${idx + 1}`} className="w-full h-auto object-cover" />
            </div>
          ))}
        </div>
        
        <div className="w-full max-w-2xl mx-auto">
          <CTAButton 
            primaryText="¡SÍ! También quiero adelgazar" 
            secondaryText="Haz clic aquí para acceder al D25 y secar la barriga como ellas" 
          />
        </div>
      </div>
    </section>
  );
}
