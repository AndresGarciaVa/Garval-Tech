import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Desarrollo de Apps Low-Code",
    img: "img1.png",
    desc: "¿Quieres tener una aplicación web o móvil? Nosotros te la creamos a tu gusto, usamos tecnología low-code. Podemos crear aplicaciones para cualquier tipo de negocio o proyecto, rápidas, funcionales, atractivas y nativas. Contacta con nosotros y te daremos un presupuesto sin compromiso."
  },
  {
    id: 2,
    title: "Diseño Ui/Ux",
    img: "img2.png",
    desc: "¿Quieres que tu sitio web o aplicación móvil tenga un aspecto profesional, atractivo y funcional? te ofrecemos soluciones personalizadas para mejorar la experiencia de tus usuarios y aumentar tus conversiones. Contamos con un equipo de expertos en diseño de interfaces, usabilidad, accesibilidad y prototipado que te ayudarán a crear productos digitales de calidad. Ya sea que necesites diseñar desde cero o rediseñar tu proyecto existente, nosotros te asesoramos y acompañamos en todo el proceso. Contacta con nosotros y solicita un presupuesto sin compromiso.",
  },
  // {
  //   id: 3,
  //   title: "Vanilla JSS",
  //   img: "https://th.bing.com/th/id/OIG.y1.epARQKBYS1y_o7KkD?pid=ImgGn",
  //   desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
  // },
  // {
  //   id: 4,
  //   title: "Diseño Ui",
  //   img: "https://images.pexels.com/photos/1707213/pexels-photo-1707213.jpeg?auto=compress&cs=tinysrgb&w=400",
  //   desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
  // },
];
const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["end end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
            <div className="imageContainer" ref={ref}>
                <img src={item.img} alt="" />
            </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            {/* <button>See Demo</button> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start end"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Servicios</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
