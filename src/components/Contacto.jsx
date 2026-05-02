function Contacto() {
  return (
    <section className="contacto" id="contacto">
      <div className="contacto__contenedor">
        <div className="contacto__card">
          {/* ==============================
              BLOQUE IZQUIERDO: SOBRE MÍ
             ============================== */}
          <div className="contacto__sobre-mi">
            <div className="contacto__titulo-bloque">
              <span>♙</span>
              <h2>Sobre mí</h2>
            </div>

            <div className="contacto__sobre-layout contacto__sobre-layout--sin-foto">
              <div className="contacto__texto">
                <p>
                  Soy Aitor Cobo Fariñas, desarrollador Full Stack apasionado
                  por construir soluciones digitales que combinan diseño,
                  tecnología y rendimiento.
                </p>

                <p>
                  Me especializo en desarrollo web, automatizaciones, bases de
                  datos e integraciones con herramientas externas. Me gusta
                  aprender, resolver problemas y crear proyectos útiles.
                </p>

                <p>
                  Cuando no estoy programando, sigo explorando nuevas
                  tecnologías y mejorando mi forma de construir software.
                </p>

                <div className="contacto__stats">
                  <article>
                    <strong>+10</strong>
                    <span>Proyectos completados</span>
                  </article>

                  <article>
                    <strong>+7</strong>
                    <span>Automatizaciones</span>
                  </article>

                  <article>
                    <strong>3+</strong>
                    <span>Años de aprendizaje</span>
                  </article>

                  <article>
                    <strong>100%</strong>
                    <span>Compromiso</span>
                  </article>
                </div>
              </div>
            </div>
          </div>

          {/* ==============================
              BLOQUE DERECHO: HABLEMOS
             ============================== */}
          <div className="contacto__hablemos">
            <div className="contacto__contenido">
              <h2>Hablemos</h2>

              <p>
                ¿Tienes un proyecto en mente o quieres contactar conmigo?
                Estoy abierto a nuevas oportunidades, colaboraciones y proyectos
                interesantes.
              </p>

              <div className="contacto__enlaces">
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

              <a href="mailto:aitor@cobofarinas.dev" className="contacto__boton">
                Enviar mensaje
                <span>↗</span>
              </a>
            </div>

            <div className="contacto__ilustracion">
              <div className="contacto__sobre-icono"></div>
              <div className="contacto__sobre-tapa"></div>
              <div className="contacto__particula contacto__particula--uno"></div>
              <div className="contacto__particula contacto__particula--dos"></div>
              <div className="contacto__particula contacto__particula--tres"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacto;