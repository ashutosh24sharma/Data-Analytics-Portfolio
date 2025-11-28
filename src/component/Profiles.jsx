import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { motion } from "framer-motion";


const ProfileLinks = () => {

  const conatainer=(delay)=>({hidden:{x:-100,opacity:0},
                    visible:{
                        x:0,
                        opacity:1,
                        transition:{duration:0.5, delay:delay},
                    },
})
  
  const profiles = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="text-blue-700" />,
      url: "https://www.linkedin.com/in/ashutosh-sharma-980202303/",
    },
    {
      name: "GitHub",
      icon: <FaGithub className="text-gray-800" />,
      url: "https://github.com/ashutosh24sharma",
    },
    {
      name: "LeetCode",
      icon: <SiLeetcode className="text-yellow-500" />,
      url: "https://leetcode.com/u/ashu_tosh2004/",
    },
    {
      name: "GeeksforGeeks",
      icon: <SiGeeksforgeeks className="text-green-700" />,
      url: "https://www.geeksforgeeks.org/user/ashutosh93m73m/",
    },
  ];

  

  return (
    <div className="  flex items-center justify-center px-4 py-10">
      <div className="max-w-4xl w-full">
        <motion.h1  whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.7 }} className="text-6xl font-bold text-center text-green-300 mb-10">
           My Technical Profiles
        </motion.h1>
        <motion.div variants={conatainer(0.5)} initial="hidden" animate="visible"  className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {profiles.map((profile) => (
            <a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 hover:border-indigo-300"
            >
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="text-5xl transition-transform duration-300 group-hover:scale-110">
                  {profile.icon}
                </div>
                <span className="text-xl font-semibold text-gray-700">
                  {profile.name}
                </span>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ProfileLinks;
