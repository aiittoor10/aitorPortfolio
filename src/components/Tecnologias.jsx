import { categoriasTecnologias } from "../data/tecnologias";

function Tecnologias() {
  return (
    <section className="tecnologias" id="tecnologias">
      <div className="tecnologias__contenedor">
        <div className="tecnologias__cabecera">
          <span className="seccion__etiqueta">Stack técnico</span>

          <h2 className="seccion__titulo">
            Tecnologías que uso para crear soluciones completas
          </h2>

          <p>
            Trabajo combinando desarrollo web, backend, bases de datos y
            automatización para construir proyectos útiles, mantenibles y
            preparados para crecer.
          </p>
        </div>

        <div className="tecnologias__grid">
          {categoriasTecnologias.map((categoria) => (
            <article className="tecnologia-card" key={categoria.id}>
              <div className="tecnologia-card__icono">{categoria.icono}</div>

              <div>
                <h3>{categoria.categoria}</h3>
                <p>{categoria.descripcion}</p>
              </div>

              <div className="tecnologia-card__lista">
                {categoria.tecnologias.map((tecnologia) => (
                  <span key={tecnologia}>{tecnologia}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Tecnologias;