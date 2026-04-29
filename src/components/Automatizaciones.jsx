function Automatizaciones() {
  const automatizaciones = [
    {
      id: 1,
      titulo: "Formularios web conectados",
      descripcion:
        "Recepción de datos desde formularios creados en React y envío mediante Webhooks hacia herramientas de automatización.",
      icono: "🧾",
      herramientas: ["React", "Webhook", "n8n"],
    },
    {
      id: 2,
      titulo: "Correos automáticos",
      descripcion:
        "Creación de emails automáticos con datos dinámicos, avisos internos y confirmaciones personalizadas para el usuario.",
      icono: "📨",
      herramientas: ["Gmail", "HTML", "Datos dinámicos"],
    },
    {
      id: 3,
      titulo: "Registro en hojas de cálculo",
      descripcion:
        "Guardado ordenado de solicitudes y formularios en Google Sheets para poder consultar la información de forma sencilla.",
      icono: "📊",
      herramientas: ["Google Sheets", "n8n", "Make"],
    },
    {
      id: 4,
      titulo: "Flujos con n8n y Make",
      descripcion:
        "Pruebas y escenarios donde conecto distintas herramientas para automatizar pasos repetitivos dentro de un proceso.",
      icono: "⚙️",
      herramientas: ["n8n", "Make", "Workflows"],
    },
    {
      id: 5,
      titulo: "Integraciones con IA",
      descripcion:
        "Uso de inteligencia artificial para analizar mensajes, clasificar información o generar respuestas automáticas.",
      icono: "🤖",
      herramientas: ["IA", "OpenAI", "Automatización"],
    },
    {
      id: 6,
      titulo: "APIs y Webhooks",
      descripcion:
        "Conexión entre frontend, backend y herramientas externas mediante endpoints, eventos y llamadas HTTP.",
      icono: "🔗",
      herramientas: ["APIs", "HTTP", "Webhooks"],
    },
  ];

  return (
    <section className="automatizaciones" id="automatizaciones">
      <div className="automatizaciones__contenedor">
        <div className="automatizaciones__hero">
          <div className="automatizaciones__contenido">
            <span className="seccion__etiqueta">Automatizaciones</span>

            <h2 className="seccion__titulo">
              Automatizaciones e integraciones que he desarrollado
            </h2>

            <p>
              En esta sección muestro algunos flujos, pruebas y proyectos de
              automatización que he trabajado conectando formularios web,
              webhooks, correo electrónico, hojas de cálculo, APIs, herramientas
              como n8n o Make e integraciones con inteligencia artificial.
            </p>

            <div className="automatizaciones__acciones">
              <a
                href="#automatizaciones-listado"
                className="automatizaciones__boton automatizaciones__boton--principal"
              >
                Ver flujos
              </a>

              <a
                href="#proyectos"
                className="automatizaciones__boton automatizaciones__boton--secundario"
              >
                Ver proyectos
              </a>
            </div>
          </div>

          <div className="automatizaciones__visual">
            <div className="automatizaciones__logo-card">
              <img
                src="https://www.samcomtechnobrains.com/wp-content/uploads/2025/04/n8n-color.png"
                alt="Logo de n8n"
              />

              <span>n8n · Make · APIs · IA</span>
            </div>

            <div className="automatizaciones__orbita automatizaciones__orbita--uno"></div>
            <div className="automatizaciones__orbita automatizaciones__orbita--dos"></div>

            <div className="automatizaciones__nodo automatizaciones__nodo--webhook">
              <span>🔗</span>
              Webhooks
            </div>

            <div className="automatizaciones__nodo automatizaciones__nodo--ia">
              <span>🤖</span>
              IA
            </div>

            <div className="automatizaciones__nodo automatizaciones__nodo--email">
              <span>📨</span>
              Email
            </div>

            <div className="automatizaciones__nodo automatizaciones__nodo--datos">
              <span>📊</span>
              Datos
            </div>
          </div>
        </div>

        <div className="automatizaciones__grid" id="automatizaciones-listado">
          {automatizaciones.map((item) => (
            <article className="automatizacion-card" key={item.id}>
              <div className="automatizacion-card__icono">{item.icono}</div>

              <h3>{item.titulo}</h3>

              <p>{item.descripcion}</p>

              <div className="automatizacion-card__tags">
                {item.herramientas.map((herramienta) => (
                  <span key={herramienta}>{herramienta}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Automatizaciones;