const serviciosTecnicos = [
  {
    icono: "🖥️",
    titulo: "Soporte microinformático",
    descripcion:
      "Diagnóstico, mantenimiento y resolución de incidencias en equipos, sistemas y entornos de usuario.",
  },
  {
    icono: "🧩",
    titulo: "Montaje y configuración",
    descripcion:
      "Preparación de equipos, instalación de software, configuración inicial y puesta a punto del entorno.",
  },
  {
    icono: "🌐",
    titulo: "Redes y conectividad",
    descripcion:
      "Configuración básica de redes, conexión de dispositivos, revisión de conectividad y solución de problemas.",
  },
  {
    icono: "🔐",
    titulo: "Seguridad básica",
    descripcion:
      "Buenas prácticas, revisión de accesos, copias de seguridad y protección básica de equipos y datos.",
  },
];

const competencias = [
  "Windows",
  "Hardware",
  "Redes LAN",
  "Routers",
  "Switches",
  "TCP/IP",
  "Soporte técnico",
  "Resolución de incidencias",
  "Instalación de software",
  "Mantenimiento",
];

function MicroinformaticaRedes() {
  return (
    <section className="microredes" id="microinformatica">
      <div className="microredes__contenedor">
        <div className="microredes__layout">
          {/* COLUMNA IZQUIERDA */}
          <div className="microredes__contenido">
            <span className="seccion__etiqueta">Perfil técnico</span>

            <h2 className="seccion__titulo">
              También soy Técnico Microinformático y de Redes
            </h2>

            <p className="microredes__descripcion">
              Además del desarrollo web y las automatizaciones, tengo base
              técnica en <strong>microinformática, soporte, hardware y redes</strong>.
              Esto me permite entender mejor los entornos reales donde se usan
              las aplicaciones y aportar una visión más completa.
            </p>

            <p className="microredes__descripcion microredes__descripcion--secundaria">
              Puedo moverme entre software, sistemas, conectividad y soporte
              técnico, combinando conocimientos de programación con una base
              práctica de infraestructura.
            </p>

            <div className="microredes__competencias">
              {competencias.map((competencia) => (
                <span key={competencia}>{competencia}</span>
              ))}
            </div>
          </div>

          {/* COLUMNA DERECHA */}
          <div className="microredes__visual">
            <div className="microredes__terminal">
              <div className="microredes__terminal-header">
                <div>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <strong>system-check</strong>
              </div>

              <div className="microredes__terminal-body">
                <p>
                  <span>$</span> comprobando_red...
                </p>
                <p className="ok">Conectividad estable</p>

                <p>
                  <span>$</span> revisando_equipo...
                </p>
                <p className="ok">Sistema operativo activo</p>

                <p>
                  <span>$</span> diagnosticando_incidencia...
                </p>
                <p className="ok">Solución aplicada correctamente</p>
              </div>
            </div>

            <div className="microredes__cards">
              {serviciosTecnicos.map((servicio) => (
                <article className="microredes__card" key={servicio.titulo}>
                  <span className="microredes__card-icono">
                    {servicio.icono}
                  </span>

                  <div>
                    <h3>{servicio.titulo}</h3>
                    <p>{servicio.descripcion}</p>
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

export default MicroinformaticaRedes;