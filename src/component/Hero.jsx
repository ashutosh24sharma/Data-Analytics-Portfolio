import {HERO_CONTENT} from "../constants";
import  profilepic from "../assets/ashu.jpg"
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
 
const conatainer=(delay)=>({hidden:{x:-100,opacity:0},
                    visible:{
                        x:0,
                        opacity:1,
                        transition:{duration:0.5, delay:delay},
                    },
})

function Hero() {
      const navigate = useNavigate();

    return (<div className="border-b border-neutral-900 pb-4  lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full mb-10 lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
                <motion.h1 variants={conatainer(0)} initial="hidden" animate="visible" className="pb-16 text-6xl font-semi-bold tracking-tight lg:mt-16 lg:text-8xl ">Ashutosh Sharma</motion.h1>
            <motion.span variants={conatainer(0.5)} initial="hidden" animate="visible"
              className="bg-gradient-to-r from-pink-600 via-green-400  to-purple-400 bg-clip-text text-5xl tracking-tight text-transparent">DATA ANALYST</motion.span>
           <motion.p variants={conatainer(1)} initial="hidden" animate="visible" className="my-2 max-w-xl py-6 font-light tracking-tighter">{HERO_CONTENT}</motion.p>
          <div flex  > <motion.button
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 2 }}
            className="lg:p-2 p-1 justify-center border text-semibold text-2xl border-blue-200 rounded text-blue-300 hover:text-blue-500"
            onClick={() => navigate("/resumes")}
          >
            Resume
          </motion.button><motion.button
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 2 }}
            className="lg:p-2 p-1 ml-5 justify-center border text-semibold text-2xl border-blue-200 rounded text-blue-300 hover:text-blue-500"
            onClick={() =>  navigate("/profiles")}
          >
            Profiles
          </motion.button></div>
          
            </div>
            </div>
            <div className="w-full lg:w-1/2  lg:p-8">
            <div className="flex justify-center w-35 " >
                <motion.img className="bg-slate-900 rounded-full" initial={{x:100,opacity:0}} animate={{x:0, opacity:1}} transition={{duration:1, delay:1}} src={profilepic} alt="not available" />
            </div>
            </div>
        </div>
    </div>  );
}

export default Hero; 