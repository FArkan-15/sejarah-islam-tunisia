import { GraduationCap, Building, Users, Lightbulb } from 'lucide-react';

export default function Budaya() {
  const aspects = [
    {
      icon: GraduationCap,
      title: 'Pendidikan',
      description: 'Universitas Zitouna sebagai pusat ilmu tertua',
      color: 'emerald',
      gradient: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: Building,
      title: 'Arsitektur',
      description: 'Masjid, benteng, dan madrasah bergaya Maghribi-Islam',
      color: 'amber',
      gradient: 'from-amber-500 to-amber-600'
    },
    {
      icon: Users,
      title: 'Sosial & Budaya',
      description: 'Tradisi sufi, seni kaligrafi, dan kehidupan sosial Islam di medina.',
      color: 'emerald',
      gradient: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: Lightbulb,
      title: 'Teknologi',
      description: 'Sistem irigasi Aghlabiyah yang masih dikaji',
      color: 'amber',
      gradient: 'from-amber-500 to-amber-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-6">
        <div data-aos="fade-left">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-6 text-center">
            Peradaban Islam di Tunisia
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-emerald-500 to-amber-500 mx-auto rounded-full mb-16" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {aspects.map((aspect, index) => (
            <div
              key={index}
              className="group relative"
              data-aos="fade-left"
              data-aos-delay={index * 100}
            >
              <div className="bg-white rounded-xl shadow-lg p-8 h-full hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-white hover:border-emerald-200">
                <div className={`w-20 h-20 bg-gradient-to-br ${aspect.gradient} rounded-full flex items-center justify-center mb-6 shadow-lg mx-auto transform group-hover:scale-110 transition-transform duration-300`}>
                  <aspect.icon className="w-10 h-10 text-white" strokeWidth={2} />
                </div>

                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <span className="text-2xl">✔</span>
                    <h3 className={`text-xl font-bold ${
                      aspect.color === 'emerald'
                        ? 'text-emerald-800'
                        : 'text-amber-800'
                    }`}>
                      {aspect.title}
                    </h3>
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    {aspect.description}
                  </p>
                </div>

                <div className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${aspect.gradient} rounded-b-xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center" data-aos="fade-left" data-aos-delay="400">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto border-2 border-emerald-200">
            <p className="text-gray-700 leading-relaxed text-lg">
              Peradaban Islam di Tunisia mencerminkan keseimbangan antara <span className="font-semibold text-emerald-700">spiritualitas, pendidikan, dan kemajuan teknologi</span>. Warisan intelektual dan arsitektur yang ditinggalkan menjadi inspirasi bagi generasi masa kini dalam memahami kejayaan Islam di era klasik.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
