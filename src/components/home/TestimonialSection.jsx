import { useState } from "react";

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Udin Yang Pertama",
      source: "Google Review",
      avatar: "/images/avatar-dummy.jpg",
      text: "Renovasi selesai tepat waktu. Sangat solutif ketika menaikkan tinggi rumah saya yg rendah tanpa perlu bongkar atap. Pelayanan sangat bagus. Complain dilayani sampai benar benar beres. Mantap.",
      rating: 5,
    },
    {
      name: "Awalluddin",
      source: "Google Review",
      avatar: "/images/avatar-dummy.jpg",
      text: "Pelayanannya bagus dan ramah. Bener-bener versi anak muda. Semoga semakin baik, dan terus berkembang.",
      rating: 5,
    },
    {
      name: "Kamaruddin",
      source: "Google Review",
      avatar: "/images/avatar-dummy.jpg",
      text: "Pengerjaan Detail, baru tau bisa interior juga.",
      rating: 5,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Wrapper */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">
          
          {/* Tab List */}
          <ul className="flex flex-row lg:flex-col gap-4 w-full lg:w-1/3 overflow-x-auto lg:overflow-visible pb-2">
            {testimonials.map((t, index) => (
              <li
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`flex-shrink-0 cursor-pointer border rounded-xl p-3 sm:p-4 flex items-center gap-3 sm:gap-4 w-64 sm:w-auto lg:w-full transition ${
                  activeIndex === index
                    ? "bg-primary text-white shadow-lg"
                    : "bg-white hover:bg-gray-100"
                }`}
              >
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 sm:w-14 sm:h-14 rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-sm sm:text-base">{t.name}</h3>
                  <p className="text-xs sm:text-sm">{t.source}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* Testimonial Content */}
          <div className="flex-1 bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
            <img
              src="/images/avatar-dummy.jpg"
              alt="Quote"
              className="w-8 h-8 sm:w-10 sm:h-10 mb-4"
            />
            <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
              {testimonials[activeIndex].text}
            </p>

            {/* Rating */}
            <div className="flex text-yellow-400">
              {Array.from({ length: testimonials[activeIndex].rating }).map(
                (_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.945a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.449a1 1 0 00-.364 1.118l1.287 3.945c.3.922-.755 1.688-1.54 1.118l-3.371-2.449a1 1 0 00-1.175 0l-3.37 2.449c-.785.57-1.84-.196-1.54-1.118l1.287-3.945a1 1 0 00-.364-1.118L2.074 9.372c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.945z" />
                  </svg>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
