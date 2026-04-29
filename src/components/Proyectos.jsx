import { proyectos } from "../data/proyectos";

const tecnologias = [
  {
    nombre: "JavaScript",
    icono: "JS",
  },
  {
    nombre: "TypeScript",
    icono: "TS",
  },
  {
    nombre: "React",
    icono: "⚛",
  },
  {
    nombre: "Next.js",
    icono: "N",
  },
  {
    nombre: "Node.js",
    icono: "⬢",
  },
  {
    nombre: "Tailwind CSS",
    icono: "≈",
  },
  {
    nombre: "PostgreSQL",
    icono: "🐘",
  },
  {
    nombre: "Git",
    icono: "◆",
  },
  {
    nombre: "Docker",
    icono: "🐳",
  },
  {
    nombre: "AWS",
    icono: "aws",
  },
  {
    nombre: "GraphQL",
    icono: "⬡",
  },
  {
    nombre: "Figma",
    icono: "F",
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
                    <span className="proyecto-card__tipo">
                      {proyecto.tipo}
                    </span>

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
              <h2>Tecnologías</h2>
            </div>

            <div className="tecnologias-mini__grid">
              {tecnologias.map((tecnologia) => (
                <article className="tecnologia-mini-card" key={tecnologia.nombre}>
                  <div className="tecnologia-mini-card__icono">
                    {tecnologia.icono}
                  </div>

                  <span>{tecnologia.nombre}</span>
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