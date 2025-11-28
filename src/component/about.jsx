import aboutImg from "../assets/images.png";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // ✅ Step 1

function About() {
  const navigate = useNavigate(); // ✅ Step 2

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 2 }}
        className="my-20 text-center text-7xl"
      >
        About <span className="pl-4">Me</span>
      </motion.h1>

      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 2 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-2xl w-96 border border-white" src={aboutImg} alt="about" />
          </div>
        </motion.div>

        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 2 }}
              className="my-2 max-w-xl py-6"
            >
              {ABOUT_TEXT}
            </motion.p>
          </div>

          {/* ✅ Step 3: Add navigation to education page */}
          <motion.button
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 2 }}
            className="p-2 ml-16 border text-semibold text-3xl border-blue-200 rounded text-blue-300 hover:text-blue-500"
            onClick={() => navigate("/education")}
          >
            Education
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default About;
