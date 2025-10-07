export default function SponsorSection() {
  const sponsors = [
    { src: "/images/sponsors/bi.png", alt: "Bank Indonesia" },
    { src: "/images/sponsors/bsi.png", alt: "Bank Syariah Indonesia" },
    { src: "/images/sponsors/btn.png", alt: "Bank BTN" },
    { src: "/images/sponsors/bri.png", alt: "Bank BRI" },
    { src: "/images/sponsors/mandiri.png", alt: "Bank Mandiri" },
    { src: "/images/sponsors/pekon.png", alt: "Pekon Properti" },
    { src: "/images/sponsors/reap.png", alt: "Reap Indonesia" },
    { src: "/images/sponsors/pemko.png", alt: "Pemko Banda Aceh" },
  ];

  return (
    <section className="bg-gray-50 py-16 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-32 text-center">
        {/* Judul Section */}
        <h2 className="text-2xl md:text-4xl font-bold text-primary mb-10">
          Mitra & Kerjasama
        </h2>

        {/* Carousel Logo */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll">
            {[...sponsors, ...sponsors].map((sponsor, index) => (
              <div key={index} className="flex-shrink-0 px-8 md:px-12">
                <img
                  src={sponsor.src}
                  alt={sponsor.alt}
                  className="h-14 md:h-20 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
