import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Proyectos from "./components/Proyectos";
import Automatizaciones from "./components/Automatizaciones";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />
        <Proyectos />
        <Automatizaciones />
        <Contacto />
      </main>

      <Footer />
    </div>
  );
}

export default App;