import { useState, useEffect } from "react";

export default function ProjectCard({ kategori, judul, lokasi, gambar }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);

  // Lazy load image ketika elemen hampir muncul di viewport
  useEffect(() => {
    const img = new Image();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            img.src = gambar;
            img.onload = () => {
              setImageSrc(gambar);
              setIsLoaded(true);
            };
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`card-${judul}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [gambar, judul]);

  return (
    <div
      id={`card-${judul}`}
      className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 bg-white"
    >
      {/* Kategori Tag */}
      <div className="absolute top-4 right-4 z-10 bg-primary/80 text-white text-xs font-bold px-3 py-1 rounded-full">
        {kategori}
      </div>

      {/* Gambar / Background */}
      <div
        className={`w-full h-48 md:h-72 bg-center bg-cover transition-transform duration-500 group-hover:scale-105 ${
          !isLoaded ? "bg-gray-200 animate-pulse" : ""
        }`}
        style={{
          backgroundImage: isLoaded
            ? `url(${imageSrc})`
            : "linear-gradient(to right, #e5e7eb, #f3f4f6)",
        }}
      ></div>

      {/* Konten */}
      <div className="p-5">
        <h3 className="text-sm lg:text-lg font-bold text-gray-700 mb-1">
          {judul}
        </h3>
        <p className="text-sm text-gray-500">{lokasi}</p>
      </div>

      {/* Overlay Hover */}
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="border border-white text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-white hover:text-black transition-colors">
          Lihat Detail
        </button>
      </div>
    </div>
  );
}
