export default function Timeline() {
  const events = [
    { year: '698 M', title: 'Penaklukan Carthage', icon: '⚔️' },
    { year: '711 M', title: 'Islam mencapai Andalusia', icon: '🌍' },
    { year: '748–767 M', title: 'Pergantian Dinasti (Umayyah → Abbasiyah)', icon: '👑' },
    { year: '800 M', title: 'Masjid Agung Ezzitouna dibangun', icon: '🕌' },
    { year: 'Era Aghlabiah – Hafsiah', title: 'Kejayaan Islam', icon: '✨' },
    { year: '1574 M', title: 'Tunisia masuk Khilafah Utsmaniyah', icon: '🏛️' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-6">
        <div data-aos="fade-right">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-6 text-center">
            Timeline Perkembangan Islam
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-emerald-500 to-amber-500 mx-auto rounded-full mb-16" />
        </div>

        <div className="relative">
      

          <div className="grid md:grid-cols-6 gap-6 md:gap-4">
            {events.map((event, index) => (
              <div
                key={index}
                className="relative"
                data-aos="fade-right"
                data-aos-delay={200 + index * 100}
              >
                <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-2 border-emerald-200 h-full">
                  <div className="text-4xl mb-3 text-center">{event.icon}</div>
                  <div className="text-emerald-700 font-bold text-lg mb-2 text-center">
                    {event.year}
                  </div>
                  <div className="text-gray-700 text-sm text-center leading-snug">
                    {event.title}
                  </div>
                </div>

                
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
