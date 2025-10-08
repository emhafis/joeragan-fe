import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function ProjectGalleryModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState("renderan");

  if (!project) return null;

  const images = project.gallery?.[activeTab] || [];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity duration-300 z-50">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col transform transition-all duration-300 scale-95 opacity-0 animate-fade-in-scale">
        {/* Header */}
        <header className="p-6 border-b border-gray-200 flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">{project.judul}</h1>
            <p className="text-gray-500 mt-1">{project.lokasi}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-3xl"><X size={28} /></span>
          </button>
        </header>

        {/* Tabs */}
        <nav className="border-b border-gray-200 px-6">
          <div className="flex space-x-8 -mb-px">
            {["renderan", "progress", "hasilNyata"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`inline-flex items-center px-1 py-3 border-b-2 text-sm font-medium transition-colors duration-200 ${
                  activeTab === tab
                    ? "border-primary text-primary font-bold"
                    : "border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-300"
                }`}
              >
                {tab === "renderan"
                  ? "Renderan"
                  : tab === "progress"
                  ? "Progress Pembangunan"
                  : "Hasil Nyata"}
              </button>
            ))}
          </div>
        </nav>

        {/* Gallery */}
        <main className="flex-grow overflow-y-auto">
          <div className="p-6">
            {images.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {images.map((url, i) => (
                  <div key={i} className="group aspect-square relative">
                    <div
                      className="w-full h-full bg-center bg-no-repeat bg-cover rounded-lg cursor-pointer overflow-hidden transform group-hover:scale-105 transition-transform duration-300"
                      style={{ backgroundImage: `url('${url}')` }}
                    >
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-400 italic">
                Belum ada gambar di kategori ini.
              </p>
            )}
          </div>
        </main>

        {/* Footer */}
        <footer className="p-6 border-t border-gray-200 flex justify-center">
          <button className="bg-primary/10 hover:bg-primary/20 text-primary font-bold py-2 px-6 rounded-full transition-colors duration-300">
            Lihat Semua Galeri Proyek
          </button>
        </footer>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes fade-in-scale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in-scale {
          animation: fade-in-scale 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
