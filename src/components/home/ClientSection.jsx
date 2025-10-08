export default function SponsorSection() {
  const sponsors = [
    { src: "/images/mitra/alfamart.png", alt: "Alfamart" },
    { src: "/images/mitra/indomaret.png", alt: "Indomaret" },
    { src: "/images/mitra/aqua-japan.png", alt: "Aqua Japan" },
    { src: "/images/mitra/casyanata.png", alt: "Casyanata" },
    { src: "/images/mitra/fifgroup.png", alt: "Fifgroup" },
    { src: "/images/mitra/kabupaten-abdya.png", alt: "Mess Bupati Kab. Abdya" },
    { src: "/images/mitra/kotty.png", alt: "Kotty" },
    { src: "/images/mitra/ninja-xpress.png", alt: "Ninja Express" },
    { src: "/images/mitra/polda-aceh.png", alt: "Polda Aceh" },
    { src: "/images/mitra/progresif-grup.png", alt: "Progresif Grup" },
    { src: "/images/mitra/rufaidah-care.png", alt: "Rufaidah Care" },
    { src: "/images/mitra/rumah-amal-usk.png", alt: "Rumah Amal USK" },
    { src: "/images/mitra/universitas-kopi.png", alt: "Universitas Kopi" },
    { src: "/images/mitra/urban.png", alt: "Urban Tea House" },
    { src: "/images/mitra/yakesma.png", alt: "Yakesma" },
  ];

  return (
    <section className="bg-gray-50 py-16 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-32 text-center">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary mb-2">
            Testimonials dan Mitra
          </h2>
          <p className="pt-2 md:mt-0 text-base sm:text-lg text-gray-700">
            <span className="font-bold text-primary">
            Testimoni </span>{" "}Nyata Dari Client yang Telah Mempercayakan Joeragan Properti
          </p>
        </div>

        {/* Carousel Logo */}
        <div className="relative w-full overflow-hidden pt-12">
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
