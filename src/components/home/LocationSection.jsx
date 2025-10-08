export default function LocationSection() {
  return (
    <div className="relative w-full bg-white py-8 px-4 lg:px-32 sm:px-4">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary mb-12 text-center">
          Our Location
        </h2>

        <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.027104874898!2d95.3526088!3d5.5630006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3040376c8c2f5597%3A0x9f96d20e68f3c0b4!2sKantor%20Joeragan%20Properti%20Banda%20Aceh!5e0!3m2!1sid!2sid!4v1759390033245!5m2!1sid!2sid"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            className="border-0"
          ></iframe>
        </div>
    </div>
  );
}