import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const certificates = [
  {title: "Innovation and Design Cource", image: "/images/Idt.jpg"},
  { title: "BIG DATA COURSE CERTIFICATION", image: "/images/big data.jpg" },
  { title: "FULLSTACK INTERNSHIP COMPLETION CERTIFICATE", image: "/images/interncompletion.jpg" },
  { title: "GenAI CERTIFICATION", image: "/images/gdg.jpg" },
   { title: "DATA ANALYTICS NTERNSHIP COMPLETION CERTIFICATE", image: "/images/certificate data.jpg" },
  { title: "DIGITAL PRODUCTIVITY CERTIFICATION", image: "/images/cirtificate.jpeg" },
  { title: "Android Development Lead at GDG_BNCET", image: "/images/gdgfinal.jpg" },
 
  { title: "NAUKARI CAMPUS YOUNGTURK PARTICIPATION", image: "/images/naukari.jpg" },
  { title: "OFFER LATTER OF INTERNSHIP BY UNIFIED MENTOR", image: "/images/interoffer.jpg" },
,
];

function CertificationPage() {
  const [modalImage, setModalImage] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showAll, setShowAll] = useState(false);

  // Check for mobile screen on first load
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640); // sm breakpoint in Tailwind
    };

    checkMobile(); // Initial check
    window.addEventListener("resize", checkMobile); // Update on resize
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Determine how many to show
  const visibleCertificates = isMobile && !showAll ? certificates.slice(0, 2) : certificates;

  return (
    <div className="border-b border-neutral-900 text-white px-6 py-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.7 }}
        className="text-5xl font-bold text-center text-purple-400 mb-16 drop-shadow"
      >
        Certifications
      </motion.h1>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto"
      >
        {visibleCertificates.map((cert, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => setModalImage(cert.image)}
            className="bg-neutral-900 border border-purple-700 rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-purple-400/20 transition"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg text-center font-semibold text-purple-300">
                {cert.title}
              </h2>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Show More/Less button only on mobile */}
      {isMobile && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}

      {/* Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50"
          onClick={() => setModalImage(null)}
        >
          <img
            src={modalImage}
            alt="Full Certificate"
            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-xl"
          />
        </div>
      )}
    </div>
  );
}

export default CertificationPage;
