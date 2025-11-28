import {BiLogoPostgresql, BiRepeat} from "react-icons/bi"; 
import {  motion } from "framer-motion";

import aw from "../assets/projects/award.jpeg";
import tr from "../assets/projects/trophy.jpeg";
import gr from "../assets/projects/group.jpeg";
import med from "../assets/projects/medal.jpeg";

const iconVariats=(duration)=>({
    initial: {y:-10},
    animate:{ y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat: Infinity,
            repeateType:"reverse",

        },
    }
})
function Achie() {
    return ( <div className="border-b border-neutral-800 pb-24">
        <motion.h1  whileInView={{opacity:1, y:0}} initial={{opacity:0, y:-100}} transition={{duration:1.5}} className="my-20 text-center text-4xl">achievements</motion.h1>
        <motion.div   whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1.5}} className="flex gap-15 flex-wrap justify-center gap-4 flex-col">
        <div className="contain flex gap-10 justify-center mb-20 flex-wrap">
        
           
          
            <motion.div variants={iconVariats(4)} initial="initial" animate="animate" >
               <img src={gr} width={360} height={300} className="rounded-3xl" alt="...." />
            </motion.div>
            </div>
            <div className="contain2 flex gap-10 justify-center flex-wrap">
            <motion.div variants={iconVariats(2)} initial="initial" animate="animate" >
                <img src={tr} width={300} height={250} className="rounded-3xl" alt="...." />
            </motion.div>
            <motion.div variants={iconVariats(4)} initial="initial" animate="animate" >
               <img src={aw} width={300} height={250} className="rounded-3xl" alt="....." />
            </motion.div>
            <motion.div variants={iconVariats(6)} initial="initial" animate="animate" >
                <img src={med} width={250} height={150} className="rounded-3xl" alt="...." />
            </motion.div>
            </div>
        </motion.div>
    </div> );
}

export default Achie;