function Footer() {
  const anioActual = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__contenedor">
        {/* ==============================
            BLOQUE SUPERIOR
           ============================== */}
        <div className="footer__top">
          <div className="footer__marca">
            <a href="#inicio" className="footer__logo-link">
              <span className="footer__logo">A</span>
              <div>
                <strong>Aitor Cobo Fariñas</strong>
                <p>Desarrollador Full Stack</p>
              </div>
            </a>

            <p className="footer__descripcion">
              Portfolio personal orientado al desarrollo web, backend,
              automatizaciones, bases de datos e integraciones digitales.
            </p>
          </div>

          <div className="footer__cta">
            <span>Disponible para nuevos proyectos</span>
            <a href="#contacto">Hablemos</a>
          </div>
        </div>

        {/* ==============================
            BLOQUE CENTRAL
           ============================== */}
        <div className="footer__grid">
          <div className="footer__columna">
            <h3>Navegación</h3>

            <nav className="footer__links">
              <a href="#inicio">Inicio</a>
              <a href="#proyectos">Proyectos</a>
              <a href="#automatizaciones">Automatizaciones</a>
              <a href="#tecnologias">Tecnologías</a>
              <a href="#contacto">Contacto</a>
            </nav>
          </div>

          <div className="footer__columna">
            <h3>Especialidades</h3>

            <div className="footer__tags">
              <span>React</span>
              <span>JavaScript</span>
              <span>Spring Boot</span>
              <span>Node.js</span>
              <span>n8n</span>
              <span>APIs</span>
              <span>Bases de datos</span>
              <span>Automatización</span>
            </div>
          </div>

          <div className="footer__columna">
            <h3>Contacto</h3>

            <div className="footer__contacto">
              <a href="mailto:aitor@cobofarinas.dev">
                <span>✉</span>
                aitor@cobofarinas.dev
              </a>

              <a
                href="https://joaisoft.es"
                target="_blank"
                rel="noreferrer"
              >
                <span>🚀</span>
                joaisoft.es
              </a>

              <a
                href="https://github.com/aiittoor10"
                target="_blank"
                rel="noreferrer"
              >
                <span>💻</span>
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/aitor-cobo-fari%C3%B1as-320616297/"
                target="_blank"
                rel="noreferrer"
              >
                <span>🔗</span>
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* ==============================
            BLOQUE INFERIOR
           ============================== */}
        <div className="footer__bottom">
          <p>© {anioActual} Aitor Cobo Fariñas. Todos los derechos reservados.</p>

          <p>
            Hecho con <span>React</span>, código limpio y muchas ganas de seguir
            creciendo.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;