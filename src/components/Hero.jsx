import yo from "../assets/yo.png";

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__contenedor">
        {/* COLUMNA IZQUIERDA */}
        <div className="hero__contenido">
          <div className="hero__badge">
            <span className="hero__badge-punto"></span>
            Disponible para oportunidades
          </div>

          <h1 className="hero__titulo">
            Aitor <span>Cobo Fariñas</span>
          </h1>

          <h2 className="hero__subtitulo">
            Desarrollador <span>Full Stack</span>
          </h2>

          <p className="hero__descripcion">
            Creo aplicaciones web y soluciones digitales modernas, escalables y
            centradas en ofrecer una experiencia clara, rápida y profesional.
          </p>

          <div className="hero__acciones">
            <a href="#proyectos" className="hero__boton hero__boton--principal">
              Ver proyectos
              <span>→</span>
            </a>

            <a href="#contacto" className="hero__boton hero__boton--secundario">
              Contactar
              <span>✉</span>
            </a>
          </div>
        </div>

        {/* COLUMNA CENTRAL */}
        <div className="hero__codigo-zona">
          <article className="hero__codigo">
            <div className="hero__codigo-header">
              <div className="hero__codigo-puntos">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <span className="hero__codigo-terminal">&gt;_</span>
            </div>

            <pre>
{`const developer = {
  name: "Aitor Cobo Fariñas",
  role: "Full Stack Developer",
  passion: "Resolver problemas",
  skills: ["JavaScript", "React", "Node.js"],
  focus: "Calidad de código",
};

console.log(developer);
// Construyendo soluciones digitales`}
            </pre>
          </article>

          <div className="hero__status">
            <span className="hero__status-punto"></span>
            Disponible para trabajar

            <div className="hero__status-icons">
              <span>{"</>"}</span>
              <span>▣</span>
              <span>◈</span>
            </div>
          </div>
        </div>

        {/* COLUMNA DERECHA */}
        <div className="hero__visual">
          <div className="hero__halo hero__halo--uno"></div>
          <div className="hero__halo hero__halo--dos"></div>
          <div className="hero__matrix"></div>

          <div className="hero__avatar">
            <div className="hero__avatar-foto">
              <img src={yo} alt="Aitor Cobo Fariñas" />
            </div>
          </div>

          <div className="hero__experiencia">
            <span className="hero__experiencia-icono">↗</span>
            <div>
              <strong>+3 años</strong>
              <p>de aprendizaje y desarrollo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;