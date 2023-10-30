// import Test from "./Test";
import "./app.scss";
import Contacto from "./components/contact/Contacto";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";

const App = () => {
  return (
    <div>
      <section id="Home">
        <Navbar />
        <Hero />
      </section>
      <section id="Servicios">
        <Parallax type="servicios" />
      </section>
      <section>
        <Services/>
      </section>
      <Portfolio />

      {/* <section id="Portfolio">
        <Parallax type="portfolio" />
      </section> */}

      <section id="Contacto">
        <Contacto/>
      </section>
      {/* <Test/> */}
    </div>
  );
};

export default App;
