import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-20 transition-all duration-300 
        ${isScrolled || !isHome
          ? "bg-white shadow-md text-gray-900"
          : "bg-transparent text-white"
        }`}
    >
      <div className="flex items-center justify-between py-6 px-4 lg:px-32 sm:px-10">
        {/* Logo */}
        <div className="flex items-center gap-3">

          {
            isScrolled || !isHome
              ? <img src="/images/logo/main-logo.png" alt="Joeragan Properti" className="max-h-8 lg:max-h-12" />
              : <img src="/images/logo/white-logo.png" alt="Joeragan Properti" className="max-h-8 lg:max-h-12" />
          }
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            className={`text-sm font-medium 
              ${isScrolled || !isHome
                ? "text-gray-900 hover:text-primary"
                : "text-white hover:text-gray-200"
              }`}
            to="/"
          >
            Home
          </Link>
          <Link
            className={`text-sm font-medium 
              ${isScrolled || !isHome
                ? "text-gray-900 hover:text-primary"
                : "text-white hover:text-gray-200"
              }`}
            to="/about"
          >
            About Us
          </Link>
          <a
            className={`text-sm font-medium 
              ${isScrolled || !isHome
                ? "text-gray-900 hover:text-primary"
                : "text-white hover:text-gray-200"
              }`}
            href="#projects"
          >
            Our Projects
          </a>
          <a
            className={`text-sm font-medium 
              ${isScrolled || !isHome
                ? "text-gray-900 hover:text-primary"
                : "text-white hover:text-gray-200"
              }`}
            href="#contact"
          >
            Contact Us
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className={`md:hidden 
            ${isScrolled || !isHome
              ? "text-gray-900"
              : "text-white"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}
          ${isScrolled ? "bg-white text-gray-900" : "bg-white/70 text-gray-900 backdrop-blur"}
        `}
      >
        <div className="px-12 py-6 space-y-4 text-center">
          <Link className="block text-lg hover:text-primary" to="/">Home</Link>
          <Link className="block text-lg hover:text-primary" to="/about">About Us</Link>
          <Link className="block text-lg hover:text-primary" to="#projects">Our Projects</Link>
          <Link className="block text-lg hover:text-primary" to="#contact">Contact Us</Link>
        </div>
      </div>

    </header>
  );
}
