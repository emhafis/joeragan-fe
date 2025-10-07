import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Music2, // ganti TikTok pakai ikon netral (karena Lucide belum punya ikon TikTok)
} from "lucide-react";

export default function Footer() {
  const iconSize = 18;

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-32 py-8 lg:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8 lg:gap-12">
        
        {/* Logo & Deskripsi */}
        <div className="space-y-4">
          <div className="flex items-center">
            <img
              src="/images/logo/main-logo.png"
              alt="Joeragan Property"
              className="h-10 sm:h-12 w-auto"
            />
          </div>
          <p className="text-sm leading-relaxed text-gray-700">
            <span className="font-bold text-primary">Joeragan Property</span> agensi properti
            berbasis teknologi yang kini hadir untuk membuat jual-beli dan sewa
            properti menjadi lebih mudah dengan dukungan agen yang profesional.
          </p>
        </div>

        {/* Hubungi Kami */}
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-primary mb-4">
            Hubungi Kami
          </h3>
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <Mail size={iconSize} className="flex-shrink-0 mt-1" />
              <span className="break-words">joeraganproperti.indonesia@gmail.com</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={iconSize} className="flex-shrink-0" />
              <span>+62 823 6454 6504</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={iconSize} className="flex-shrink-0 mt-1" />
              <address className="not-italic leading-relaxed">
                Jl. Kebun Raja, Ie Masen Kaye Adang, Kec. Syiah Kuala, Kota Banda Aceh, Aceh 23116
              </address>
            </li>
          </ul>
        </div>

        {/* Ikuti Kami */}
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-primary mb-4">
            Ikuti Kami
          </h3>
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex items-center gap-2">
              <Instagram size={iconSize} className="flex-shrink-0" />
              <span>Joeraganproperty.official</span>
            </li>
            <li className="flex items-center gap-2">
              <Facebook size={iconSize} className="flex-shrink-0" />
              <span>Joeragan Property</span>
            </li>
            <li className="flex items-center gap-2">
              <Music2 size={iconSize} className="flex-shrink-0" />
              <span>Joeragan.property</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-200 py-6 text-center text-xs sm:text-sm text-gray-600">
        © {new Date().getFullYear()} Joeragan Property. All rights reserved.
      </div>
    </footer>
  );
}
