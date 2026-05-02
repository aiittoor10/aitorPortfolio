import { useState } from "react";
import logoAitor from "../assets/logoAitor.png";

function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const cerrarMenu = () => {
    setMenuAbierto(false);
  };

  return (
    <header className="navbar">
      <div className="navbar__contenedor">
        {/* Logo */}
        <a href="#inicio" className="navbar__marca" onClick={cerrarMenu}>
          <span className="navbar__logo">
            <img src={logoAitor} alt="Logo de Aitor" />
          </span>
          <span>Aitor</span>
        </a>

        {/* Navegación escritorio */}
        <nav className="navbar__menu">
          <a href="#inicio">Inicio</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#automatizaciones">Automatizaciones</a>
          <a href="#tecnologias">Tecnologías</a>
          <a href="#microinformatica">Microinformática</a>
          <a href="#contacto">Sobre mí</a>
          <a href="#contacto">Contacto</a>
        </nav>

        {/* Botón escritorio */}
        <a href="#contacto" className="navbar__cta">
          Hablemos
        </a>

        {/* Botón hamburguesa móvil */}
        <button
          type="button"
          className={`navbar__hamburguesa ${
            menuAbierto ? "navbar__hamburguesa--activo" : ""
          }`}
          onClick={() => setMenuAbierto(!menuAbierto)}
          aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuAbierto}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Menú móvil */}
      <div className={`navbar__mobile ${menuAbierto ? "navbar__mobile--abierto" : ""}`}>
        <nav className="navbar__mobile-menu">
          <a href="#inicio" onClick={cerrarMenu}>
            Inicio
          </a>
          <a href="#proyectos" onClick={cerrarMenu}>
            Proyectos
          </a>
          <a href="#automatizaciones" onClick={cerrarMenu}>
            Automatizaciones
          </a>
          <a href="#tecnologias" onClick={cerrarMenu}>
            Tecnologías
          </a>
          <a href="#sobre-mi" onClick={cerrarMenu}>
            Sobre mí
          </a>
          <a href="#contacto" onClick={cerrarMenu}>
            Contacto
          </a>

          <a
            href="#contacto"
            className="navbar__mobile-cta"
            onClick={cerrarMenu}
          >
            Hablemos
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;