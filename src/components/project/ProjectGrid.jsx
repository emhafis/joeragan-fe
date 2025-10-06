import ProjectCard from "./ProjectCard";

export default function ProjectGrid({ activeCategory }) {
  const data = [
    {
      kategori: "Residence",
      judul: "Rumah Impian Keluarga Bahagia",
      lokasi: "Banda Aceh",
      gambar:
        "/images/dummy.png",
    },
    {
      kategori: "Kosan",
      judul: "Kosan Nyaman Mahasiswa Cerdas",
      lokasi: "Darussalam",
      gambar:
        "/images/dummy.png",
    },
    {
      kategori: "Konstruksi",
      judul: "Pembangunan Gedung Serbaguna",
      lokasi: "Aceh Besar",
      gambar:
        "/images/dummy.png",
    },
    {
      kategori: "Interior",
      judul: "Desain Interior Rumah Minimalis",
      lokasi: "Banda Aceh",
      gambar:
        "/images/dummy.png",
    },
    {
      kategori: "Konstruksi",
      judul: "Renovasi Rumah Tua Jadi Modern",
      lokasi: "Lhokseumawe",
      gambar:
        "/images/dummy.png",
    },
    {
      kategori: "Residence",
      judul: "Hunian Modern di Tengah Kota",
      lokasi: "Sigli",
      gambar:
        "/images/dummy.png",
    },
  ];

  const filteredData =
    activeCategory === "Semua Proyek"
      ? data
      : data.filter((item) => item.kategori === activeCategory);

  return (
    <section>
      {filteredData.length === 0 ? (
        <p className="text-center text-gray-500">
          Tidak ada proyek untuk kategori <b>{activeCategory}</b>.
        </p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {filteredData.map((item, i) => (
            <ProjectCard key={i} {...item} />
          ))}
        </div>
      )}

      
    </section>
  );
}
