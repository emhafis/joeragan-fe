export default function HeroSection() {
  return (
    <div className="relative h-screen flex items-end  text-white">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/jumbotron-vid.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      
      {/* Overlay gelap supaya teks tetap terbaca */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Konten Hero */}
      <div className="relative z-10 text-start px-6 lg:px-32 sm:px-10 py-24">
        <h1 className="text-4xl md:text-6xl font-bold py-0">
          Joeragan Properti
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl">
          Pengembang, Pemasaran, dan Jasa Konstruksi Properti di Aceh
        </p>
        <button className="mt-6 px-6 py-3 bg-primary text-white rounded-full shadow-lg hover:bg-white hover:text-primary border-2 border-solid border-white">
          Scroll Down
        </button>
      </div>
    </div>
  )
}