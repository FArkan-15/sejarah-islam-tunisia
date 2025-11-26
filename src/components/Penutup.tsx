import { Landmark } from "lucide-react";

export default function Penutup() {
  return (
    <section className="py-20 mt-auto bg-gradient-to-br from-emerald-50 via-white to-amber-50">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <div className="flex justify-center mb-8" data-aos="fade-down">
          <Landmark className="w-16 h-16 text-emerald-700" strokeWidth={1.5} />
        </div>

        <h2
          className="text-4xl md:text-5xl font-bold text-emerald-800 mb-6"
          data-aos="fade-up"
        >
          Penutup
        </h2>

        <p
          className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Sejarah Islam di Tunisia menunjukkan perjalanan panjang peradaban
          yang penuh nilai, ilmu, dan budaya. Semoga pengetahuan ini menjadi
          inspirasi untuk kita semua dalam memahami warisan peradaban Islam
          serta menghargai kekayaan sejarah yang membentuk dunia saat ini.
        </p>

        <div
          className="h-1 w-24 bg-gradient-to-r from-emerald-500 to-amber-500 mx-auto rounded-full mb-10"
          data-aos="fade-up"
          data-aos-delay="300"
        />
      </div>
    </section>
  );
}
