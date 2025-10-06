import { useState } from "react";
import { Header, Footer } from "../components";
import HeroSection from "../components/project/HeroSection";
import ProjectTabs from "../components/project/ProjectTabs";
import ProjectGrid from "../components/project/ProjectGrid";

export default function Project() {
  const [activeCategory, setActiveCategory] = useState("Semua Proyek");

  return (
    <>
      <Header />

      <div className="py-24 px-4 sm:px-6 md:px-10 lg:px-32 lg:py-32">
        <HeroSection />
        <ProjectTabs
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <ProjectGrid activeCategory={activeCategory} />
      </div>

      <Footer />
    </>
  );
}
