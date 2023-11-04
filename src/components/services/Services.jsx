import "./services.scss";
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

const Services = () => {
  const ref = useRef()
  const isInView = useInView(ref,{margin:"-100px"})


return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <hr id="hr2" />
        <p>
          Somos tu aliado estratégico para impulsar el crecimiento y <br />
          el desarrollo de tu marca o idea.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="./people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Ideas</motion.b> Únicas.
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>Innovación </motion.b>Para Ti
          </h1>
          {/* <button>QUE HACEMOS?</button> */}
        </div>

        <h3>
            <motion.b>Ventajas del Low-Code</motion.b>
        </h3>
        
      </motion.div>

      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Personalizables</h2>

          <p>
          las plataformas low-code ofrecen la posibilidad de personalizar las aplicaciones según las necesidades y preferencias de los usuarios, crear funcionalidades a la medida, así como de integrarlas con otras fuentes de datos, pagos y servicios.
          </p>
            
          {/* <button>Ir</button> */}
        </motion.div>

      { /* Cajas de servicios - inicio */}

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Desarrollo rápido</h2>
          <p>
          el desarrollo low-code permite crear aplicaciones de forma rápida y sencilla con la menor cantidad de código posible, lo que reduce el tiempo de desarrollo, implementación, mantenimiento y actualización. El ahorro de tiempo conlleva un ahorro de los costes de desarrollo y despliegue de la aplicación.
          </p>
          {/* <button>Ir</button> */}
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Apps Nativas</h2>
          <p>
            desarrollo de apps nativas proporcionan una mejor experiencia de usuario, ya que se adaptan a las características y funcionalidades específicas de cada dispositivo y sistema operativo. Esto significa que las aplicaciones low-code nativas pueden aprovechar al máximo las capacidades del hardware, como la cámara, el GPS, el sensor de huellas dactilares, etc, y ofrecer una interfaz de usuario más fluida, intuitiva y atractiva
          </p>
          {/* <button>Ir</button> */}
          </motion.div>

        {/* <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam sed
            deserunt at possimus! Harum ut sed quisquam. A quisquam consequatur
            tenetur beatae perspiciatis et non. Voluptas dolores rerum ipsa
            itaque!
          </p> */}
          {/* <button>Ir</button> */}
        {/* </motion.div> */}
      </motion.div>
    </motion.div>

    
  );
};

export default Services;
