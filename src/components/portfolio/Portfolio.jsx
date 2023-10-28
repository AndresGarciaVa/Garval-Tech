import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll } from "framer-motion";


const items = [
    {
        id:1,
        title:"React Commerce",
        img:"https://images.pexels.com/photos/1707213/pexels-photo-1707213.jpeg?auto=compress&cs=tinysrgb&w=400",
        desc:"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
    },
    {
        id:2,
        title:"Next.js Commerce",
        img:"https://images.pexels.com/photos/1707213/pexels-photo-1707213.jpeg?auto=compress&cs=tinysrgb&w=400",
        desc:"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
    },
    {
        id:3,
        title:"Vanilla JSS",
        img:"https://images.pexels.com/photos/1707213/pexels-photo-1707213.jpeg?auto=compress&cs=tinysrgb&w=400",
        desc:"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
    },
    {
        id:4,
        title:"Diseño Ui",
        img:"https://images.pexels.com/photos/1707213/pexels-photo-1707213.jpeg?auto=compress&cs=tinysrgb&w=400",
        desc:"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
    },
];
const Single = ({item})=>{
    return <section>{item.title}</section>;  
};

const Portfolio = () => {

  const ref = useRef()

  const {scrollYProgress} = useScroll()
  return (
    <div className="portfolio" ref={ref}>
        <div className="progress">
            <h1>Feature Works</h1>
            <div className="progressBar"></div>
        </div>
        {items.map((item) =>(
            <Single item={item} key={item.id}/>
        ))}
    </div>
  );
};

export default Portfolio;