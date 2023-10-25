// import Test from "./Test";
import "./app.scss";
import Navbar from "./components/navbar/Navbar";


const App = () => {
  return <div>
    <section id="Home">
      <Navbar/>
    </section>
    <section id="Servicios">Parallax</section>
    <section>Services</section>
    <section id="Portfolio">Parallax</section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id="Contacto">Contact</section>
    {/* <Test/> */}

  </div>;
};

export default App;
