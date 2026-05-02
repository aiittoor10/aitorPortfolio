import { proyectos } from "../data/proyectos";

const tecnologias = [
  // Frontend
  {
    nombre: "HTML",
    icono: "HTML",
    categoria: "Frontend",
  },
  {
    nombre: "CSS",
    icono: "CSS",
    categoria: "Frontend",
  },
  {
    nombre: "Bootstrap",
    icono: "B",
    categoria: "Frontend",
  },
  {
    nombre: "JavaScript",
    icono: "JS",
    categoria: "Frontend",
  },
  {
    nombre: "React",
    icono: "⚛",
    categoria: "Frontend",
  },

  // Backend
  {
    nombre: "Java",
    icono: "☕",
    categoria: "Backend",
  },
  {
    nombre: "Spring Boot",
    icono: "SB",
    categoria: "Backend",
  },
  {
    nombre: "Node.js",
    icono: "⬢",
    categoria: "Backend",
  },

  // Bases de datos
  {
    nombre: "MySQL",
    icono: "SQL",
    categoria: "Base de datos",
  },
  {
    nombre: "PostgreSQL",
    icono: "🐘",
    categoria: "Base de datos",
  },
  {
    nombre: "SQLite",
    icono: "Lite",
    categoria: "Base de datos",
  },

  // Automatización
  {
    nombre: "Make",
    icono: "MK",
    categoria: "Automatización",
  },
  {
    nombre: "n8n",
    icono: "n8n",
    categoria: "Automatización",
  },

  // Inteligencia Artificial
  {
    nombre: "OpenAI",
    icono: "AI",
    categoria: "IA",
  },
  {
    nombre: "Claude",
    icono: "CL",
    categoria: "IA",
  },
  {
    nombre: "Gemini",
    icono: "G",
    categoria: "IA",
  },

  // Servidores / sistemas
  {
    nombre: "Docker",
    icono: "🐳",
    categoria: "Sistemas",
  },
  {
    nombre: "Linux Server",
    icono: "🐧",
    categoria: "Sistemas",
  },
  {
    nombre: "Windows Server",
    icono: "WIN",
    categoria: "Sistemas",
  },

  // Herramientas
  {
    nombre: "Git",
    icono: "◆",
    categoria: "Herramientas",
  },
  {
    nombre: "GitHub",
    icono: "GH",
    categoria: "Herramientas",
  },
  {
    nombre: "Figma",
    icono: "F",
    categoria: "Herramientas",
  },
  {
    nombre: "VS Code",
    icono: "</>",
    categoria: "Herramientas",
  },
  {
    nombre: "Eclipse",
    icono: "E",
    categoria: "Herramientas",
  },
];

function Proyectos() {
  return (
    <section className="proyectos" id="proyectos">
      <div className="proyectos__contenedor">
        <div className="proyectos__layout">
          {/* ==============================
              COLUMNA IZQUIERDA: PROYECTOS
             ============================== */}
          <div className="proyectos__zona">
            <div className="proyectos__cabecera-compacta">
              <div>
                <span className="proyectos__icono-titulo">{"</>"}</span>
                <h2>Proyectos destacados</h2>
              </div>

              <a href="#contacto" className="proyectos__ver-todos">
                Ver todos los proyectos →
              </a>
            </div>

            <div className="proyectos__grid">
              {proyectos.map((proyecto) => (
                <article className="proyecto-card" key={proyecto.id}>
                  <div className="proyecto-card__visual">
                    {proyecto.imagen ? (
                      <div className="proyecto-card__imagen">
                        <img src={proyecto.imagen} alt={proyecto.titulo} />
                      </div>
                    ) : (
                      <div className="proyecto-card__mockup">
                        <div className="proyecto-card__barra">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>

                        <div className="proyecto-card__contenido-falso">
                          <div className="proyecto-card__linea grande"></div>
                          <div className="proyecto-card__linea"></div>

                          <div className="proyecto-card__grafico">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="proyecto-card__icono">
                      {proyecto.icono || "↗"}
                    </div>
                  </div>

                  <div className="proyecto-card__body">
                    <span className="proyecto-card__tipo">{proyecto.tipo}</span>

                    <h3>{proyecto.titulo}</h3>

                    <p>{proyecto.descripcion}</p>

                    <div className="proyecto-card__tags">
                      {proyecto.tecnologias.map((tecnologia) => (
                        <span key={tecnologia}>{tecnologia}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* ==============================
              COLUMNA DERECHA: TECNOLOGÍAS
             ============================== */}
          <aside className="tecnologias-mini" id="tecnologias">
            <div className="tecnologias-mini__cabecera">
              <span className="tecnologias-mini__icono">◈</span>
              <div>
                <h2>Tecnologías</h2>
              </div>
            </div>

            <div className="tecnologias-mini__grid tecnologias-mini__grid--compacta">
              {tecnologias.map((tecnologia) => (
                <article
                  className="tecnologia-mini-card"
                  key={`${tecnologia.categoria}-${tecnologia.nombre}`}
                  title={tecnologia.categoria}
                >
                  <div className="tecnologia-mini-card__icono">
                    {tecnologia.icono}
                  </div>

                  <span>{tecnologia.nombre}</span>

                  <small>{tecnologia.categoria}</small>
                </article>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Proyectos;