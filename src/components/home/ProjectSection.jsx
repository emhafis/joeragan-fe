import { ReactTyped } from "react-typed";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ProjectSection() {
  const units = ["232+ Unit", "106+ Unit", "130+ Unit"];
  const labels = ["Joeragan Residence", "Joeragan Kosan", "Project Konstruksi"];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % units.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-secondary py-16 px-4 lg:px-32 sm:px-10 lg:py-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Heading */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.2 }}
            className="flex flex-col justify-start"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white mb-2">
              Our Gallery
            </h2>
            <h3 className="text-white font-semibold text-base sm:text-lg md:text-xl mb-6 sm:mb-8">
              Result, Progress & Review
            </h3>
          </motion.div>

          {/* Spacer */}
          <div className="hidden md:block"></div>

          {/* Gambar tinggi kanan */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false, amount: 0.2 }}
            className="row-span-2"
          >
            <div
              className="rounded-2xl overflow-hidden bg-cover bg-center w-full h-64 sm:h-80 md:h-full"
              style={{ backgroundImage: "url('/images/dummy.png')" }}
            >
              <img
                src="/images/dummy.png"
                alt="Gallery"
                className="w-full h-full object-cover hidden"
              />
            </div>
          </motion.div>

          {/* Box animasi angka + label */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: false, amount: 0.2 }}
            className="bg-white rounded-2xl h-60"
          >
            <div className="flex flex-col items-center justify-center h-full px-4 py-6 sm:py-8">
              <h2 className="text-4xl font-extrabold text-primary mb-2">
                <ReactTyped
                  key={units[currentIndex]}
                  strings={[units[currentIndex]]}
                  typeSpeed={70}
                  backSpeed={40}
                  showCursor={false}
                />
              </h2>
              <p className="text-gray-700 font-semibold text-2xl mb-2 text-center">
                <ReactTyped
                  key={labels[currentIndex]}
                  strings={[labels[currentIndex]]}
                  typeSpeed={70}
                  backSpeed={40}
                  showCursor={false}
                />
              </p>
            </div>
          </motion.div>

          {/* Gambar kecil */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <img
              src="/images/dummy.png"
              alt="Gallery"
              className="rounded-2xl object-cover w-full md:w-full h-40 sm:h-60"
            />
          </motion.div>

          {/* Gambar lebar */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: false, amount: 0.2 }}
            className="col-span-1 md:col-span-2"
          >
            <img
              src="/images/dummy.png"
              alt="Gallery"
              className="rounded-2xl object-cover w-full md:w-full h-40 sm:h-60"
            />
          </motion.div>

          {/* Gambar kecil */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <img
              src="/images/dummy.png"
              alt="Gallery"
              className="rounded-2xl object-cover w-full h-40 sm:h-60"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
