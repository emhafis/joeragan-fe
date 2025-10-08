import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectGalleryModal from "./ProjectGalleryModal";
import { Plus } from "lucide-react";
import projects from "../../data/projects";

export default function ProjectGrid({ activeCategory }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredData =
    activeCategory === "Semua Proyek"
      ? projects
      : projects.filter((item) => item.kategori === activeCategory);

  const [visibleCount, setVisibleCount] = useState(8);
  const visibleData = filteredData.slice(0, visibleCount);

  const handleShowMore = () => setVisibleCount((prev) => prev + 4);

  // Animasi varian
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section>
      {filteredData.length === 0 ? (
        <p className="text-center text-gray-500">
          Tidak ada proyek untuk kategori <b>{activeCategory}</b>.
        </p>
      ) : (
        <>
          {/* Grid proyek */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            {visibleData.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                transition={{
                  duration: 0.6,
                  delay: (i % 4) * 0.1, // animasi bergiliran
                }}
                viewport={{ once: false, amount: 0.2 }}
                onClick={() => setSelectedProject(item)}
              >
                <ProjectCard {...item} />
              </motion.div>
            ))}
          </div>

          {/* Tombol tampil lebih banyak */}
          {visibleCount < filteredData.length && (
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false, amount: 0.2 }}
              className="flex justify-center mt-10"
            >
              <button
                onClick={handleShowMore}
                className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full shadow-md hover:bg-primary/90 transition-all duration-300"
              >
                <Plus size={20} />
                Tampilkan Lebih Banyak
              </button>
            </motion.div>
          )}

          {/* Modal gallery */}
          {selectedProject && (
            <ProjectGalleryModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </>
      )}
    </section>
  );
}
