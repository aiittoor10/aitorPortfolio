const flujosAutomatizacion = [
  {
    icono: "🔁",
    titulo: "Flujos automatizados",
    descripcion:
      "Diseño flujos para conectar herramientas, mover datos entre aplicaciones y reducir tareas repetitivas.",
  },
  {
    icono: "📩",
    titulo: "Formularios y correos",
    descripcion:
      "Automatizaciones para recibir datos desde formularios, enviar correos automáticos y registrar información.",
  },
  {
    icono: "🌐",
    titulo: "APIs y Webhooks",
    descripcion:
      "Integraciones mediante APIs, Webhooks y peticiones HTTP para conectar sistemas externos.",
  },
  {
    icono: "📊",
    titulo: "Datos y registros",
    descripcion:
      "Procesos para guardar información en bases de datos, hojas de cálculo o servicios externos.",
  },
];

const herramientas = [
  "n8n",
  "Make",
  "Webhooks",
  "HTTP Request",
  "APIs",
  "Gmail",
  "Google Sheets",
  "OpenAI",
];

function Automatizaciones() {
  return (
    <section className="automatizaciones" id="automatizaciones">
      <div className="automatizaciones__contenedor">
        <div className="automatizaciones__grid">
          {/* ==============================
              COLUMNA IZQUIERDA
             ============================== */}
          <div className="automatizaciones__contenido">
            <span className="seccion__etiqueta">Automatizaciones</span>

            <h2 className="seccion__titulo">
              Automatizo procesos para ahorrar tiempo y conectar herramientas
            </h2>

            <p className="automatizaciones__descripcion">
              Trabajo con herramientas como <strong>n8n</strong>, Make,
              Webhooks, APIs y servicios externos para crear flujos que ayuden a
              reducir tareas manuales, mejorar la productividad y conectar
              distintas plataformas.
            </p>

            <div className="automatizaciones__acciones">
              <a
                href="#contacto"
                className="automatizaciones__boton automatizaciones__boton--principal"
              >
                Hablemos de automatización
                <span>↗</span>
              </a>

              <a
                href="#proyectos"
                className="automatizaciones__boton automatizaciones__boton--secundario"
              >
                Ver proyectos
              </a>
            </div>

            <div className="automatizaciones__herramientas">
              {herramientas.map((herramienta) => (
                <span key={herramienta}>{herramienta}</span>
              ))}
            </div>
          </div>

          {/* ==============================
              COLUMNA DERECHA
             ============================== */}
          <div className="automatizaciones__visual">
            <div className="automatizaciones__logo-card">
              <div className="automatizaciones__logo-glow"></div>

              <img
                src="https://www.sysprovider.es/wp-content/uploads/2026/03/N8n-logo-new.svg.png"
                alt="Logo de n8n"
                className="automatizaciones__logo"
              />

              <div className="automatizaciones__mini-info">
                <span>Workflow automation</span>
                <strong>n8n + APIs</strong>
              </div>
            </div>

            <div className="automatizaciones__cards">
              {flujosAutomatizacion.map((flujo) => (
                <article className="automatizaciones__card" key={flujo.titulo}>
                  <span className="automatizaciones__card-icono">
                    {flujo.icono}
                  </span>

                  <div>
                    <h3>{flujo.titulo}</h3>
                    <p>{flujo.descripcion}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Automatizaciones;