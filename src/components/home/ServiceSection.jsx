// src/components/Services.jsx
export default function ServiceSection() {
  const services = [
    {
      title: "Joeragan Residence",
      logo: "/images/logo/residence.png",
      img: "/images/services/perumahan.jpg",
    },
    {
      title: "Joeragan Konstruksi",
      logo: "/images/logo/konstruksi.png",
      img: "/images/services/konstruksi.png",
    },
    {
      title: "Joeragan Kosan",
      logo: "/images/logo/kosan.png",
      img: "/images/services/kosan.png",
    },
    {
      title: "Joeragan Interior",
      logo: "/images/logo/interior.png",
      img: "/images/services/interior.png",
    },
  ];

  return (
    <div id="services" className="py-16 px-4 lg:px-32 sm:px-10 lg:py-24">
      {/* Heading */}
      <div className="mb-12 flex flex-col md:flex-row md:items-center md:gap-12">
        <h2 className="text-4xl lg:text-6xl font-extrabold text-primary">
          Our <span className="block">Services</span>
        </h2>
        <p className="mt-4 md:mt-0 text-base sm:text-lg text-gray-700 md:pl-4 lg:pl-12">
          <span className="font-bold text-primary">Joeragan Properti</span>{" "}
          merupakan perusahaan yang berfokus memberikan solusi bagi kebutuhan
          jasa seputar properti di Aceh. Informasi dan produk layanan yang
          diberikan cukup beragam, seperti:
        </p>
      </div>

      {/* Grid Services */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-xl shadow-md group"
          >
            <div className="relative h-64 lg:h-full w-full">
              <img
                src={service.img}
                alt={service.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay Gradient */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/30 to-transparent" /> */}
              {/* Title */}
              <div className="absolute bottom-2 lg:bottom-4 left-1/2 -translate-x-1/2 text-center">
                {/* <p className="text-white font-bold tracking-wide">
                    {service.title}
                  </p> */}
                <img
                  src={service.logo}
                  alt={service.title}
                  className="scale-50 lg:scale-100"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
