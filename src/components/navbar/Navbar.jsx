import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import {motion} from "framer-motion"


const navbar = () => {
  return (
    <div className="navbar">
        {/* Sidebar */}
        <Sidebar/>
        <div className="wrapper">
            <motion.img className="img2" src="/public/logo.png" 
            initial={{opacity:0, scale:0.5}}
            animate={{opacity:1, scale:1}}
            transition={{duration:0.5}}>
              </motion.img>
            <div className="social">
                <a href="#"><img src="/facebook.png" alt="Facebook" /></a>
                <a href="#"><img src="/instagram.png" alt="Instagram"/></a>
                <a href="#"><img src="/tiktok.png" alt="Tiktok" /></a>

            </div>
        </div>
    </div>
  )
}

export default navbar
