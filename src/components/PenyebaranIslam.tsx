export default function PenyebaranIslam() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div data-aos="fade-left">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-6 text-center">
            Proses Penyebaran Islam di Tunisia
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-emerald-500 to-amber-500 mx-auto rounded-full mb-12" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 md:order-1" data-aos="fade-left" data-aos-delay="200">
            <p className="text-gray-700 leading-relaxed text-lg">
              Setelah Islam masuk ke Tunisia melalui ekspansi pada masa Dinasti Umayyah, penyebarannya berlangsung secara bertahap. <span className="font-semibold text-emerald-700">Dakwah</span>. menjadi faktor utama, terutama melalui interaksi sosial antara penduduk lokal Berber dan komunitas Muslim yang menetap. Sikap para ulama dan pedagang Muslim yang santun membuat masyarakat mudah menerima ajaran baru ini.
            </p>

            <p className="text-gray-700 leading-relaxed text-lg">
              Perkembangan Islam semakin kuat setelah berdirinya <span className="font-semibold text-emerald-700">Kairouan</span>, yang kemudian menjadi pusat ilmu dan pemerintahan. Dari kota ini lahir para ulama yang menyebarkan ajaran Islam ke seluruh Afrika Utara. Masjid-masjid besar seperti <span className="font-semibold text-emerald-700">Masjid Agung Kairouan</span> dan <span className="font-semibold text-emerald-700">Masjid Zaytuna</span> berperan penting sebagai tempat ibadah sekaligus pusat pengajaran Al-Qur’an, fikih, dan bahasa Arab.
            </p>

            <p className="text-gray-700 leading-relaxed text-lg">
              Ulama setempat juga berperan besar dalam membentuk identitas keislaman Tunisia. Mazhab Maliki menjadi mazhab yang dominan, sehingga ajaran Islam semakin mengakar dalam kehidupan sosial dan hukum masyarakat. Seiring berjalannya waktu, nilai-nilai Islam terintegrasi dengan budaya lokal Berber, menghasilkan tradisi dan praktik keagamaan khas Tunisia yang bertahan hingga sekarang.
            </p>

            <div className="flex gap-4 pt-4">
              <div className="flex-1 bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500">
                <div className="font-semibold text-emerald-700 mb-1">Dakwah</div>
                <div className="text-sm text-gray-600">Ulama & Pedagang</div>
              </div>
              <div className="flex-1 bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                <div className="font-semibold text-amber-700 mb-1">Pendidikan</div>
                <div className="text-sm text-gray-600">Masjid & Madrasah</div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2" data-aos="fade-left" data-aos-delay="400">
            <img
              src="https://asset.kompas.com/crops/UvVaywrjXLkri4lihkCVa5L-RxU=/0x0:739x493/1200x800/data/photo/2020/05/21/5ec66ec2d354b.jpg"
              alt="Masjid Kairouan"
              className="rounded-lg shadow-xl w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
