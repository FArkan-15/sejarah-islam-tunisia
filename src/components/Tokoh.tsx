import { User, Crown, BookOpen, Heart, GraduationCap, Users } from 'lucide-react';

export default function Tokoh() {
  const figures = [
    {
      icon: User,
      name: 'Uqbah ibn Nafi',
      description: 'Pendiri Kairouan dan tokoh utama penyebaran Islam di Afrika Utara',
      color: 'emerald'
    },
    {
      icon: Crown,
      name: 'Ibrahim ibn al-Aghlab',
      description: 'Pendiri Dinasti Aghlabiyah (800–909 M). Membawa Tunisia ke masa kejayaan',
      color: 'amber'
    },
    {
      icon: BookOpen,
      name: 'Ibn Khaldun',
      description: 'Sejarawan Muslim terbesar, lahir di Tunis (1332 M). Penulis Muqaddimah',
      color: 'emerald'
    },
    {
      icon: Heart,
      name: 'Sidi Mahrez',
      description: 'Tokoh sufi dan wali besar, pelindung kota Tunis',
      color: 'amber'
    },
    {
      icon: GraduationCap,
      name: 'Imam al-Mazari',
      description: 'Ulama besar mazhab Maliki dari Tunisia',
      color: 'emerald'
    },
    {
      icon: Users,
      name: 'Abu Zayd al-Hilali',
      description: 'Tokoh utama dalam legenda “Sirat Bani Hilal” populer di Afrika Utara dan Timur Tengah yang menceritakan keberanian, strategi, dan kepahlawanan suku Hilal.',
      color: 'amber'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-6 text-center">
            Tokoh-Tokoh Besar dalam Sejarah Islam Tunisia
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-emerald-500 to-amber-500 mx-auto rounded-full mb-16" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {figures.map((figure, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${
                figure.color === 'emerald'
                  ? 'from-emerald-50 to-emerald-100 border-emerald-200'
                  : 'from-amber-50 to-amber-100 border-amber-200'
              } rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div
                className={`w-16 h-16 ${
                  figure.color === 'emerald'
                    ? 'bg-emerald-600'
                    : 'bg-amber-600'
                } rounded-full flex items-center justify-center mb-4 shadow-lg`}
              >
                <figure.icon className="w-8 h-8 text-white" strokeWidth={2} />
              </div>

              <h3 className={`text-xl font-bold ${
                figure.color === 'emerald'
                  ? 'text-emerald-800'
                  : 'text-amber-800'
              } mb-3`}>
                {figure.name}
              </h3>

              <p className="text-gray-700 leading-relaxed">
                {figure.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
