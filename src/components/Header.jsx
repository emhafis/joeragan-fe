import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-20 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md text-gray-900"
          : "bg-transparent text-white"
      }`}
    >
      <div className="flex items-center justify-between py-8 px-4 lg:px-32 sm:px-10">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <svg
            className={`h-6 w-6 ${isScrolled ? "text-primary" : "text-white"}`}
            fill="none"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
          <h2
            className={`text-xl font-bold tracking-tighter ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}
          >
            Joeragan Properti
          </h2>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <a
            className={`text-sm font-medium ${
              isScrolled
                ? "text-gray-900 hover:text-primary"
                : "text-white hover:text-gray-200"
            }`}
            href="#"
          >
            Beranda
          </a>
          <a
            className={`text-sm font-medium ${
              isScrolled
                ? "text-gray-900 hover:text-primary"
                : "text-white hover:text-gray-200"
            }`}
            href="#about"
          >
            Tentang Kami
          </a>
          <a
            className={`text-sm font-medium ${
              isScrolled
                ? "text-gray-900 hover:text-primary"
                : "text-white hover:text-gray-200"
            }`}
            href="#services"
          >
            Layanan
          </a>
          <a
            className={`text-sm font-medium ${
              isScrolled
                ? "text-gray-900 hover:text-primary"
                : "text-white hover:text-gray-200"
            }`}
            href="#portfolio"
          >
            Portofolio
          </a>
          <a
            className={`text-sm font-medium ${
              isScrolled
                ? "text-gray-900 hover:text-primary"
                : "text-white hover:text-gray-200"
            }`}
            href="#contact"
          >
            Kontak
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className={`md:hidden ${isScrolled ? "text-gray-900" : "text-white"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`md:hidden px-12 py-6 space-y-4 ${
            isScrolled ? "bg-white text-gray-900" : "bg-white/50 text-gray-900"
          }`}
        >
          <a className="block text-lg" href="#">
            Beranda
          </a>
          <a className="block text-lg" href="#about">
            Tentang Kami
          </a>
          <a className="block text-lg" href="#services">
            Layanan
          </a>
          <a className="block text-lg" href="#portfolio">
            Portofolio
          </a>
          <a className="block text-lg" href="#contact">
            Kontak
          </a>
        </div>
      )}
    </header>
  );
}
