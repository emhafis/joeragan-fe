import { Header, Footer } from "../components";

export default function About() {
  return (
    <>
      <Header />
      <img
        className="w-full h-60 object-cover"
        src="/images/dummy.png"
      />
      <div className="absolute inset-0 bg-black/50 h-60"></div>

      <div className="relative w-full bg-white py-16 px-4 lg:px-32 sm:px-10 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary text-center">
              Tentang Kami
            </h2>
            <p className="mt-4 text-md lg:text-lg text-subtle-light dark:text-subtle-dark max-w-2xl mx-auto">
              Membangun masa depan properti di Aceh dengan integritas, kualitas, dan inovasi.
            </p>
          </div>
        </div>

        <div className="bg-background-light dark:bg-background-dark/50 rounded-xl p-8 lg:p-12 border border-border-light dark:border-border-dark mb-16 shadow-sm">
          <p className="text-sm lg:text-md leading-relaxed text-subtle-light dark:text-subtle-dark">
            Joeragan Properti adalah perusahaan pengembang properti dan pemasaran yang berdedikasi untuk menciptakan ruang hidup berkualitas tinggi di Aceh. Dengan pengalaman bertahun-tahun, kami berkomitmen untuk memberikan solusi properti inovatif dan berkelanjutan yang memenuhi kebutuhan masyarakat modern.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-32 px-2">
          <div className="space-y-4">
            <h3 className="text-4xl font-extrabold text-primary text-center">Visi</h3>
            <p className="text-subtle-light dark:text-subtle-dark">Menjadi pengembang properti terkemuka di Aceh yang dikenal dengan kualitas, inovasi, dan kepuasan pelanggan.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-4xl font-extrabold text-primary text-center">Misi</h3>
            <ul className="space-y-2 text-subtle-light dark:text-subtle-dark list-disc list-inside">
              <li>Mengembangkan proyek properti yang memenuhi standar kualitas tertinggi.</li>
              <li>Menerapkan inovasi dalam desain dan konstruksi.</li>
              <li>Membangun hubungan jangka panjang dengan pelanggan.</li>
              <li>Berkontribusi pada pembangunan berkelanjutan di Aceh.</li>
            </ul>
          </div>
        </div>
        <div className="space-y-8 mb-16">
          <h3 className="text-4xl font-extrabold text-primary text-center">Nilai-Nilai <br />Perusahaan</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
            <div className="bg-background-light dark:bg-background-dark/50 p-6 rounded-lg border border-border-light dark:border-border-dark text-center">
              <h4 className="font-bold text-lg mb-2">Integritas</h4>
              <p className="text-sm text-subtle-light dark:text-subtle-dark">Kejujuran dan transparansi dalam setiap aspek bisnis.</p>
            </div>
            <div className="bg-background-light dark:bg-background-dark/50 p-6 rounded-lg border border-border-light dark:border-border-dark text-center">
              <h4 className="font-bold text-lg mb-2">Kualitas</h4>
              <p className="text-sm text-subtle-light dark:text-subtle-dark">Komitmen pada produk dan layanan dengan kualitas terbaik.</p>
            </div>
            <div className="bg-background-light dark:bg-background-dark/50 p-6 rounded-lg border border-border-light dark:border-border-dark text-center">
              <h4 className="font-bold text-lg mb-2">Inovasi</h4>
              <p className="text-sm text-subtle-light dark:text-subtle-dark">Terus mencari cara baru untuk meningkatkan dan beradaptasi.</p>
            </div>
            <div className="bg-background-light dark:bg-background-dark/50 p-6 rounded-lg border border-border-light dark:border-border-dark text-center sm:col-span-2 lg:col-span-1 lg:col-start-2">
              <h4 className="font-bold text-lg mb-2">Pelayanan Pelanggan</h4>
              <p className="text-sm text-subtle-light dark:text-subtle-dark">Mengutamakan kepuasan pelanggan dan melampaui harapan.</p>
            </div>
          </div>
        </div>
        <div className="text-center mb-16"></div>
      </div>
      <Footer />
    </>
  )
}