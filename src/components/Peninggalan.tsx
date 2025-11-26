import { Building2, BookOpen, Shield, Landmark, School, Droplets } from 'lucide-react';

export default function Peninggalan() {
  const heritage = [
    {
      icon: Building2,
      title: 'Masjid Agung Kairouan',
      points: [
        'Dibangun oleh Uqbah ibn Nafi (670 M)',
        'Salah satu masjid tertua di dunia',
        'Pusat pendidikan fiqh Maliki',
        'Arsitektur Maghribi asli'
      ],
      image: 'https://asset.kompas.com/crops/29gR1H6k-g2-jFOM2TwTcg7fiMI=/0x0:739x493/750x500/data/photo/2020/05/21/5ec66ea66438a.jpg'
    },
    {
      icon: BookOpen,
      title: 'Masjid Zitouna – Tunis',
      points: [
        'Masjid tertua dan terbesar di Tunis',
        'Pusat ilmu sejak abad ke-8',
        'Melahirkan ulama besar seperti Ibn Khaldun'
      ],
      image: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Minaret_et_patio_de_la_mosqu%C3%A9e_Zitouna_au_centre_de_la_M%C3%A9dina_de_Tunis.jpg'
    },
    {
      icon: Shield,
      title: 'Benteng Ribat Monastir & Ribat Sousse',
      points: [
        'Benteng pertahanan Dinasti Aghlabiyah',
        'Menjaga pesisir dari serangan Bizantium'
      ],
      image: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Medina_of_Sousse-130323.jpg'
    },
    {
      icon: Landmark,
      title: 'Medina of Kairouan',
      points: [
        'Situs UNESCO',
        'Berisi madrasah, pasar, dan rumah tradisional Islam'
      ],
      image: 'https://thumbs.dreamstime.com/b/kairouan-tunisia-august-crowded-alleyway-souk-medina-garment-shisha-hookah-stalls-august-kairouan-124200373.jpg'
    },
    {
      icon: School,
      title: 'Madrasah & Zawiyah',
      points: [
        'Madrasah Slimaniya dan Bachiya masih aktif sebagai pusat ilmu'
      ],
      image: 'https://aktual.com/wp-content/uploads/2017/02/Mengaji-Ist-681x379.jpg'
    },
    {
      icon: Droplets,
      title: 'Peninggalan Dinasti Aghlabiyah',
      points: [
        'Sistem kanal air dan reservoir raksasa',
        'Teknologi pengairan maju abad ke-9'
      ],
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Akcistern.jpg'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-6">
        <div data-aos="zoom-in">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-6 text-center">
            Peninggalan Islam Di Tunisia yang Masih Ada Hingga Kini
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-emerald-500 to-amber-500 mx-auto rounded-full mb-16" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {heritage.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg">
                  <item.icon className="w-6 h-6 text-emerald-600" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-emerald-800 mb-4">
                  {item.title}
                </h3>

                <ul className="space-y-2">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <span className="text-amber-500 text-lg">•</span>
                      <span className="text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
