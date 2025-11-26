import { Landmark } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-amber-50">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="flex justify-center mb-8" data-aos="fade-down">
          <Landmark className="w-20 h-20 text-emerald-600" strokeWidth={1.5} />
        </div>

        <h1
          className="text-5xl md:text-7xl font-bold text-emerald-800 mb-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Sejarah Islam Tunisia
        </h1>

        <p
          className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Perjalanan Peradaban Islam di Tanah Maghribi yang Menginspirasi Dunia
        </p>

        <div
          className="mt-12 inline-block"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div className="h-1 w-32 bg-gradient-to-r from-emerald-500 to-amber-500 mx-auto rounded-full" />
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-emerald-600 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-emerald-600 rounded-full" />
        </div>
      </div>
    </section>
  );
}
