import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Plus } from "lucide-react";

export default function ProjectGrid({ activeCategory }) {
  const data = [
    { kategori: "Residence", judul: "Rumah Impian Keluarga Bahagia", lokasi: "Banda Aceh", gambar: "/images/dummy.png" },
    { kategori: "Kosan", judul: "Kosan Nyaman Mahasiswa Cerdas", lokasi: "Darussalam", gambar: "/images/dummy.png" },
    { kategori: "Konstruksi", judul: "Pembangunan Gedung Serbaguna", lokasi: "Aceh Besar", gambar: "/images/dummy.png" },
    { kategori: "Interior", judul: "Desain Interior Rumah Minimalis", lokasi: "Banda Aceh", gambar: "/images/dummy.png" },
    { kategori: "Konstruksi", judul: "Renovasi Rumah Tua Jadi Modern", lokasi: "Lhokseumawe", gambar: "/images/dummy.png" },
    { kategori: "Residence", judul: "Hunian Modern di Tengah Kota", lokasi: "Sigli", gambar: "/images/dummy.png" },
    { kategori: "Residence", judul: "Rumah Impian Keluarga Bahagia", lokasi: "Banda Aceh", gambar: "/images/dummy.png" },
    { kategori: "Kosan", judul: "Kosan Nyaman Mahasiswa Cerdas", lokasi: "Darussalam", gambar: "/images/dummy.png" },
    { kategori: "Konstruksi", judul: "Pembangunan Gedung Serbaguna", lokasi: "Aceh Besar", gambar: "/images/dummy.png" },
    { kategori: "Interior", judul: "Desain Interior Rumah Minimalis", lokasi: "Banda Aceh", gambar: "/images/dummy.png" },
    { kategori: "Konstruksi", judul: "Renovasi Rumah Tua Jadi Modern", lokasi: "Lhokseumawe", gambar: "/images/dummy.png" },
    { kategori: "Residence", judul: "Hunian Modern di Tengah Kota", lokasi: "Sigli", gambar: "/images/dummy.png" },
  ];

  const filteredData =
    activeCategory === "Semua Proyek"
      ? data
      : data.filter((item) => item.kategori === activeCategory);

  // 👉 jumlah awal yang ditampilkan
  const [visibleCount, setVisibleCount] = useState(8);

  // data yang akan ditampilkan
  const visibleData = filteredData.slice(0, visibleCount);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 4); // tampilkan 4 item tambahan setiap klik
  };

  return (
    <section>
      {filteredData.length === 0 ? (
        <p className="text-center text-gray-500">
          Tidak ada proyek untuk kategori <b>{activeCategory}</b>.
        </p>
      ) : (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            {visibleData.map((item, i) => (
              <ProjectCard key={i} {...item} />
            ))}
          </div>

          {/* Tombol Show More */}
          {visibleCount < filteredData.length && (
            <div className="flex justify-center mt-10">
              <button
                onClick={handleShowMore}
                className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full shadow-md hover:bg-primary/90 transition-all duration-300"
              >
                <Plus size={20} />
                Tampilkan Lebih Banyak
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}
