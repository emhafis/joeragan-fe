import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  // Warna teks diganti dari 'text-primary' ke 'text-gray-700' untuk warna hitam normal
  const textColor = "text-gray-700";
  const iconSizeClass = "w-4 h-4"; // Ukuran ikon yang konsisten

  return (
    <footer className="bg-white border-t border-gray-200 font-sans">
      <div className="container mx-auto px-4 lg:px-32 sm:px-10 py-12 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 lg:gap-12">
        {/* Logo & Deskripsi */}
        <div className="space-y-4">
          <div className="flex items-center">
            {/* Sesuaikan ukuran logo jika perlu, h-12 sudah cukup besar */}
            <img
              src="/logo.png"
              alt="Joeragan Property"
              className="h-12 w-auto"
            />
          </div>
          <p className={`text-sm leading-relaxed ${textColor}`}>
            <span className="font-bold">Joeragan Property</span> agensi properti
            berbasis teknologi yang kini hadir untuk membuat jual - beli dan
            sewa properti menjadi lebih mudah dengan dukungan agen yang
            profesional.
          </p>
        </div>

        {/* Tautan */}
        <div>
          <h3 className={`text-base font-semibold ${textColor} mb-4`}>Tautan</h3>
          <ul className={`space-y-3 text-sm ${textColor}`}>
            <li><a href="#" className="hover:text-blue-600 transition-colors">Dijual</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">Disewa</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">Properti Baru</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">KPR</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">Tentang Kami</a></li>
          </ul>
        </div>

        {/* Hubungi Kami */}
        <div>
          <h3 className={`text-base font-semibold ${textColor} mb-4`}>Hubungi Kami</h3>
          <ul className={`space-y-3 text-sm ${textColor}`}>
            <li className="flex items-start gap-2">
              <FontAwesomeIcon icon={faEnvelope} className={`flex-shrink-0 ${iconSizeClass} mt-1`} />
              <span>joeraganproperti.indonesia@gmail.com</span>
            </li>
            <li className="flex items-center gap-2">
              <FontAwesomeIcon icon={faPhone} className={`flex-shrink-0 ${iconSizeClass}`} />
              <span>+6281277303838</span>
            </li>
            {/* Menggunakan `items-start` untuk alamat multi-baris agar ikon di atas */}
            <li className="flex items-start gap-2">
              <FontAwesomeIcon icon={faMapMarkerAlt} className={`flex-shrink-0 ${iconSizeClass} mt-1`} />
              <address className="not-italic">
                Jl. William Iskandar Ps. V No.25N,
                Kenangan, Baru, Kec. Percut Sei Tuan,
                Kabupaten Deli Serdang, Sumatera Utara 20371
              </address>
            </li>
          </ul>
        </div>

        {/* Ikuti Kami */}
        <div>
          <h3 className={`text-base font-semibold ${textColor} mb-4`}>Ikuti Kami</h3>
          <ul className={`space-y-3 text-sm ${textColor}`}>
            <li className="flex items-center gap-2">
              <FontAwesomeIcon icon={faInstagram} className={`flex-shrink-0 ${iconSizeClass}`} />
              <span>Joeraganproperty.official</span>
            </li>
            <li className="flex items-center gap-2">
              <FontAwesomeIcon icon={faFacebook} className={`flex-shrink-0 ${iconSizeClass}`} />
              <span>Joeragan Property</span>
            </li>
            <li className="flex items-center gap-2">
              <FontAwesomeIcon icon={faTiktok} className={`flex-shrink-0 ${iconSizeClass}`} />
              <span>Joeragan.property</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      {/* Warna teks `text-gray-600` untuk copyright agar lebih soft */}
      <div className="border-t border-gray-200 py-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Joeragan Property. All rights reserved.
      </div>
    </footer>
  );
}