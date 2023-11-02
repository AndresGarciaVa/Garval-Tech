import "./about.scss/";
import {motion, useInView, animate } from "framer-motion";
import { useRef } from "react";

const variants = {
  initial: {
    x: -500,
    y: 20,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};


const About = () => {

  const ref = useRef()

  const isInView = useInView(ref,{margin:"-100px"})

  return (

    <motion.div
      className="about"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        {/* <hr id="hr2" /> */}
        <h1>
          Sobre Nosotros
        </h1>
        {/* <hr /> */}
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          {/* <img src="./people.webp" alt="" /> */}
          <p>
            <motion.b>Somos una empresa que crea apps móviles low-code con FlutterFlow y Firebase, dos plataformas que nos permiten <br/>diseñar la interfaz y el backend de la app sin código. Te ofrecemos un servicio completo y personalizado, donde nos<br/>ocupamos de todo el desarrollo y la publicación de tu app. Nuestro servicio es ideal para PYMES, emprendedores,<br/> freelancers, ONGs, y cualquier persona que tenga una idea de forma rápida y económica.</motion.b>
          </p>
        </div>
        {/* <div className="title">
          <p>
            <motion.b>Innovación </motion.b>Para Ti
          </p> */}
          {/* <button>QUE HACEMOS?</button> */}
        {/* </div> */}
        </motion.div>
    </motion.div>
  );
};

export default About;