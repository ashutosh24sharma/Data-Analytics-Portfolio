import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  SiPython,
  SiMicrosoftexcel,
  SiPowerbi,
  SiMysql,
} from "react-icons/si";
import { RiRobot2Line } from "react-icons/ri";
import { FaBrain } from "react-icons/fa";

const techStack = [
  { name: "Python", icon: SiPython, color: "text-yellow-400", path: "/tech/python" },
  { name: "Excel", icon: SiMicrosoftexcel, color: "text-green-600", path: "/tech/excel" },
  { name: "Power BI", icon: SiPowerbi, color: "text-yellow-500", path: "/tech/powerbi" },
  { name: "SQL", icon: SiMysql, color: "text-blue-600", path: "/tech/sql" },
  { name: "ChatGPT", icon: RiRobot2Line, color: "text-teal-400", path: "/tech/chatgpt" },
  { name: "AI Tools", icon: FaBrain, color: "text-pink-500", path: "/tech/ai-tools" },
];

const SkillsTechnologies = () => {
  const navigate = useNavigate();

  const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });

  return (
    <div className="border-b border-neutral-900 pb-16 px-4 sm:px-8">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-green-600 font-semibold text-5xl tracking-wide"
      >
        Data Analytics Tools & Technologies
      </motion.h1>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap justify-center gap-12 sm:gap-6 md:gap-8 lg:gap-12"
      >
        {techStack.map((tech, index) => {
          const IconComponent = tech.icon;
          return (
            <motion.div
              variants={iconVariants(2 + index * 0.3)}
              initial="initial"
              animate="animate"
              whileHover={{ scale: 1.1, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              key={index}
              onClick={() => navigate(tech.path)}
              className="bg-gradient-to-tr from-gray-800 to-gray-700 p-5 sm:p-6 rounded-2xl shadow-xl cursor-pointer border border-gray-700 hover:border-yellow-400 hover:shadow-yellow-400/30 transition-all w-28 h-28 sm:w-32 sm:h-32 flex flex-col items-center justify-center"
            >
              <IconComponent className={`text-5xl sm:text-6xl ${tech.color} mb-2`} />
              <p className="text-center text-sm font-semibold text-gray-200">{tech.name}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default SkillsTechnologies;
