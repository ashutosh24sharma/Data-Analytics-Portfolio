import logo from "../assets/logo.png";
import { FaLinkedin} from "react-icons/fa";
import { FaGithub} from "react-icons/fa";
import { FaSquareXTwitter} from "react-icons/fa6";
import { FaInstagram} from "react-icons/fa";
function Navbar() {
    return ( <nav className=" mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center "><img width={90} height={90} className=" bg-transparent rounded-full" src={logo} alt="auto" /></div>
        <div className="m-8 flex item-center justify-center gap-6 text-3xl">
            <a href="https://www.linkedin.com/in/ashutosh-sharma-980202303/"><FaLinkedin/></a>
            <a href="https://github.com/ashutosh24sharma"><FaGithub/></a>
            <a href="https://x.com/Ashu2004Sharma"><FaSquareXTwitter/></a>
            <a href="https://www.instagram.com/as.hutosh_sharma/"><FaInstagram/></a>
        </div>
        
    </nav> );
}

export default Navbar;