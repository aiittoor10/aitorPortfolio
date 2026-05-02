import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Proyectos from "./components/Proyectos";
import Automatizaciones from "./components/Automatizaciones";
import AsistenteIA from "./components/AsistenteIA";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import MicroinformaticaRedes from "./components/MicroinformaticaRedes";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />
        <Contacto />

        <Proyectos />
        <Automatizaciones />
        <AsistenteIA />
        <MicroinformaticaRedes/>
      </main>

      <Footer />
    </div>
  );
}

export default App;
