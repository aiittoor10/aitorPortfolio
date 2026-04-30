import { useEffect, useRef, useState } from "react";

const respuestas = {
  proyectos:
    "He trabajado en proyectos como Joaisoft, una web profesional para mostrar servicios digitales; Tokitan, una aplicación de reservas con asistente IA integrado; y automatizaciones para publicar contenido en redes sociales de forma simultánea.",
  tecnologias:
    "Trabajo principalmente con React, JavaScript, CSS, Node.js, Spring Boot, MySQL, Docker, n8n, APIs y herramientas de automatización. Combino frontend, backend y procesos automatizados.",
  automatizaciones:
    "He creado flujos con n8n y Make para conectar formularios, enviar correos automáticos, registrar datos, integrar APIs y automatizar publicaciones en redes sociales.",
  experiencia:
    "Tengo experiencia desarrollando proyectos web, aplicaciones con React, integraciones con backend, bases de datos y automatizaciones. Me centro en construir soluciones limpias, útiles y fáciles de mantener.",
  contacto:
    "Puedes contactar conmigo por email, visitar joaisoft.es o revisar mis perfiles profesionales como GitHub y LinkedIn.",
  sobreMi:
    "Soy Aitor Cobo Fariñas, desarrollador Full Stack. Me gusta crear aplicaciones web modernas, automatizaciones útiles y soluciones digitales bien estructuradas.",
  noEntendido:
    "Puedo responderte sobre proyectos, tecnologías, automatizaciones, experiencia o contacto. Prueba con una de esas palabras.",
};

const sugerencias = [
  {
    tipo: "proyectos",
    texto: "Proyectos",
    pregunta: "¿Qué proyectos has desarrollado?",
  },
  {
    tipo: "tecnologias",
    texto: "Tecnologías",
    pregunta: "¿Qué tecnologías utilizas?",
  },
  {
    tipo: "automatizaciones",
    texto: "Automatizaciones",
    pregunta: "¿Qué automatizaciones has creado?",
  },
  {
    tipo: "experiencia",
    texto: "Experiencia",
    pregunta: "¿Qué experiencia tienes?",
  },
  {
    tipo: "contacto",
    texto: "Contacto",
    pregunta: "¿Cómo puedo contactar contigo?",
  },
];

const mensajesIniciales = [
  {
    id: "mensaje-inicial-1",
    autor: "ia",
    texto:
      "Hola 👋 Soy el asistente IA de Aitor. Puedes preguntarme sobre sus proyectos, tecnologías, automatizaciones, experiencia o contacto.",
    hora: "10:42",
  },
];

function AsistenteIA() {
  const [mensajes, setMensajes] = useState(mensajesIniciales);
  const [textoUsuario, setTextoUsuario] = useState("");
  const [tipoActivo, setTipoActivo] = useState("");

  const contadorId = useRef(1);
  const mensajesRef = useRef(null);

  useEffect(() => {
    if (!mensajesRef.current) return;

    mensajesRef.current.scrollTo({
      top: mensajesRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [mensajes]);

  const crearId = () => {
    contadorId.current += 1;
    return `mensaje-${contadorId.current}`;
  };

  const obtenerHora = () => {
    return new Date().toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const normalizarTexto = (texto) => {
    return texto
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();
  };

  const detectarRespuesta = (texto) => {
    const pregunta = normalizarTexto(texto);

    if (
      pregunta.includes("proyecto") ||
      pregunta.includes("trabajo") ||
      pregunta.includes("portfolio") ||
      pregunta.includes("joaisoft") ||
      pregunta.includes("tokitan")
    ) {
      return "proyectos";
    }

    if (
      pregunta.includes("tecnologia") ||
      pregunta.includes("stack") ||
      pregunta.includes("react") ||
      pregunta.includes("javascript") ||
      pregunta.includes("spring") ||
      pregunta.includes("node")
    ) {
      return "tecnologias";
    }

    if (
      pregunta.includes("automatizacion") ||
      pregunta.includes("automatizaciones") ||
      pregunta.includes("n8n") ||
      pregunta.includes("make") ||
      pregunta.includes("flujo") ||
      pregunta.includes("workflow") ||
      pregunta.includes("redes sociales")
    ) {
      return "automatizaciones";
    }

    if (
      pregunta.includes("experiencia") ||
      pregunta.includes("anos") ||
      pregunta.includes("años") ||
      pregunta.includes("perfil")
    ) {
      return "experiencia";
    }

    if (
      pregunta.includes("contacto") ||
      pregunta.includes("email") ||
      pregunta.includes("correo") ||
      pregunta.includes("linkedin") ||
      pregunta.includes("github") ||
      pregunta.includes("joaisoft")
    ) {
      return "contacto";
    }

    if (
      pregunta.includes("quien eres") ||
      pregunta.includes("quién eres") ||
      pregunta.includes("sobre ti") ||
      pregunta.includes("aitor") ||
      pregunta.includes("cobo")
    ) {
      return "sobreMi";
    }

    return "noEntendido";
  };

  const agregarConversacion = (pregunta, tipoRespuesta) => {
    const hora = obtenerHora();

    const mensajeUsuario = {
      id: crearId(),
      autor: "usuario",
      texto: pregunta,
      hora,
    };

    const mensajeIA = {
      id: crearId(),
      autor: "ia",
      texto: respuestas[tipoRespuesta],
      hora,
    };

    setMensajes((mensajesActuales) => [
      ...mensajesActuales,
      mensajeUsuario,
      mensajeIA,
    ]);

    setTipoActivo(tipoRespuesta);
  };

  const enviarPregunta = (event) => {
    event.preventDefault();

    const pregunta = textoUsuario.trim();

    if (!pregunta) return;

    const tipoRespuesta = detectarRespuesta(pregunta);

    agregarConversacion(pregunta, tipoRespuesta);
    setTextoUsuario("");
  };

  const usarSugerencia = (sugerencia) => {
    agregarConversacion(sugerencia.pregunta, sugerencia.tipo);
    setTextoUsuario("");
  };

  const reiniciarConversacion = () => {
    contadorId.current = 1;
    setMensajes(mensajesIniciales);
    setTextoUsuario("");
    setTipoActivo("");

    setTimeout(() => {
      if (!mensajesRef.current) return;

      mensajesRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 0);
  };

  return (
    <section className="asistente-wa" id="asistente-ia">
      <div className="asistente-wa__contenedor">
        <div className="asistente-wa__cabecera">
          <span className="asistente-wa__badge">Asistente IA</span>

          <h2>
            Chatea con el asistente de <span>Aitor</span>
          </h2>

          <p>
            Pregunta de forma rápida sobre proyectos, tecnologías,
            automatizaciones, experiencia o contacto.
          </p>
        </div>

        <div className="asistente-wa__telefono">
          <div className="asistente-wa__topbar">
            <div className="asistente-wa__perfil">
              <div className="asistente-wa__avatar">
                <span>AI</span>
              </div>

              <div>
                <h3>Aitor Assistant</h3>

                <p>
                  <span></span>
                  En línea
                </p>
              </div>
            </div>

            <button
              type="button"
              className="asistente-wa__reset"
              onClick={reiniciarConversacion}
              aria-label="Reiniciar conversación"
            >
              ↻
            </button>
          </div>

          <div className="asistente-wa__mensajes" ref={mensajesRef}>
            {mensajes.map((mensaje) => {
              const esUsuario = mensaje.autor === "usuario";

              return (
                <div
                  className={`asistente-wa__fila ${
                    esUsuario ? "asistente-wa__fila--usuario" : ""
                  }`}
                  key={mensaje.id}
                >
                  <div
                    className={`asistente-wa__burbuja ${
                      esUsuario
                        ? "asistente-wa__burbuja--usuario"
                        : "asistente-wa__burbuja--ia"
                    }`}
                  >
                    <p>{mensaje.texto}</p>

                    <span>
                      {mensaje.hora}
                      {esUsuario && <small> ✓✓</small>}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {!textoUsuario.trim() && (
            <div className="asistente-wa__sugerencias">
              {sugerencias.map((sugerencia) => (
                <button
                  type="button"
                  key={sugerencia.tipo}
                  className={
                    tipoActivo === sugerencia.tipo
                      ? "asistente-wa__sugerencia activa"
                      : "asistente-wa__sugerencia"
                  }
                  onClick={() => usarSugerencia(sugerencia)}
                >
                  {sugerencia.texto}
                </button>
              ))}
            </div>
          )}

          <form className="asistente-wa__form" onSubmit={enviarPregunta}>
            <input
              type="text"
              placeholder="Escribe un mensaje..."
              value={textoUsuario}
              onChange={(event) => setTextoUsuario(event.target.value)}
              aria-label="Escribe un mensaje"
            />

            <button type="submit" aria-label="Enviar mensaje">
              ➤
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AsistenteIA;