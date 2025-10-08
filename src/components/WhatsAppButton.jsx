import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const whatsappNumber = "628123456789"; // ganti dengan nomor WhatsApp kamu
  const message = encodeURIComponent("Halo, saya ingin menanyakan informasi lebih lanjut!");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 lg:bottom-10 right-5 lg:right-10 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110 duration-300"
    >
      <MessageCircle size={28} />
    </a>
  );
}
