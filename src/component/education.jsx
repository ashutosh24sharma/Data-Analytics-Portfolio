import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    institution: "BN Collage of Engineering and technology,Lucknow",
    year: "2022 - 2026",
    details: "Branch-CSE(AI&Ml), CGPA: 8.3/10",
  },
  {
    degree: "Senior Secondary (XII)",
    institution: "Amernath Inter Collage",
    year: "2021 - 2022",
    details: "UP Board, Percentage: 80%",
  },
  {
    degree: "Secondary (X)",
    institution: "Amernath Inter Collage",
    year: "2019 - 2020",
    details: "UP Board,Percentage: 85% ",
  },
];

const Education = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-neutral-900 to-black text-white py-12 px-6 md:px-20">
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold text-center text-green-400 mb-16 drop-shadow-lg"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        Education
      </motion.h1>

      <div className="grid gap-14 md:grid-cols-2 xl:grid-cols-3">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="relative rounded-3xl bg-gray-900 p-8 shadow-2xl border border-green-800 hover:shadow-green-400/40 hover:scale-105 transition-all duration-300 group overflow-hidden"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            {/* Glowing blur effect */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-400 opacity-20 rounded-full blur-3xl group-hover:opacity-40 transition-all duration-500"></div>

            <h2 className="text-2xl font-bold text-green-300 mb-2">{edu.degree}</h2>
            <p className="text-md text-gray-300 font-medium">{edu.institution}</p>
            <p className="text-sm text-gray-400 mt-1 italic">{edu.year}</p>
            <hr className="my-4 border-green-600 opacity-30" />
            <p className="text-base text-white leading-relaxed">{edu.details}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
