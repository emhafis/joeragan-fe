export default function HeroSection() {
  return (
    <section className="relative rounded-xl overflow-hidden my-10">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80')",
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/10"></div>
      <div className="relative min-h-[380px] sm:min-h-[440px] md:min-h-[520px] flex flex-col items-center justify-center text-center text-white p-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4">
          Proyek Kami
        </h1>
        <p className="max-w-xl text-base sm:text-lg font-light text-white/90">
          Temukan portofolio proyek-proyek unggulan yang telah kami bangun
          dengan dedikasi dan kualitas terbaik di seluruh Aceh.
        </p>
      </div>
    </section>
  );
}
