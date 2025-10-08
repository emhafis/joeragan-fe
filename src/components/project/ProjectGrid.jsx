import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Plus } from "lucide-react";
import projects from "../../data/projects";

export default function ProjectGrid({ activeCategory }) {
  const filteredData =
    activeCategory === "Semua Proyek"
      ? projects
      : projects.filter((item) => item.kategori === activeCategory);

  const [visibleCount, setVisibleCount] = useState(8);
  const visibleData = filteredData.slice(0, visibleCount);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 4);
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
