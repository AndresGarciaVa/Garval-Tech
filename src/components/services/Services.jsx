import "./services.scss";
import { animate, motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
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
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Somos tu aliado estratégico para impulsar el crecimiento y <br />
          el desarrollo de tu marca o idea.
        </p>
        <hr />
      </motion.div>
      <motion.iv className="titleContainer" variants={variants}>
        <div className="title">
          <img src="./people.webp" alt="" />
          <h1>
            <b>Ideas</b> Únicas.
          </h1>
        </div>
        <div className="title">
          <h1>
            <b>Innovación </b>Para Ti
          </h1>
          <button>QUE HACEMOS?</button>
        </div>
      </motion.iv>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam sed
            deserunt at possimus! Harum ut sed quisquam. A quisquam consequatur
            tenetur beatae perspiciatis et non. Voluptas dolores rerum ipsa
            itaque!
          </p>
          {/* <button>Ir</button> */}
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam sed
            deserunt at possimus! Harum ut sed quisquam. A quisquam consequatur
            tenetur beatae perspiciatis et non. Voluptas dolores rerum ipsa
            itaque!
          </p>
          {/* <button>Ir</button> */}
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam sed
            deserunt at possimus! Harum ut sed quisquam. A quisquam consequatur
            tenetur beatae perspiciatis et non. Voluptas dolores rerum ipsa
            itaque!
          </p>
          {/* <button>Ir</button> */}
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam sed
            deserunt at possimus! Harum ut sed quisquam. A quisquam consequatur
            tenetur beatae perspiciatis et non. Voluptas dolores rerum ipsa
            itaque!
          </p>
          {/* <button>Ir</button> */}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
