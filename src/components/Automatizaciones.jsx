import { useEffect, useRef, useState } from "react";

const sugerencias = [
  {
    tipo: "proyectos",
    texto: "Proyectos",
    pregunta: "Háblame de los proyectos de Aitor.",
  },
  {
    tipo: "tecnologias",
    texto: "Tecnologías",
    pregunta: "¿Qué tecnologías usa Aitor?",
  },
  {
    tipo: "automatizaciones",
    texto: "Automatizaciones",
    pregunta: "¿Qué automatizaciones ha creado Aitor?",
  },
  {
    tipo: "experiencia",
    texto: "Experiencia",
    pregunta: "¿Qué experiencia tiene Aitor?",
  },
  {
    tipo: "contacto",
    texto: "Contacto",
    pregunta: "¿Cómo puedo contactar con Aitor?",
  },
];

const mensajesIniciales = [
  {
    id: "mensaje-inicial-1",
    autor: "ia",
    texto:
      "Hola 👋 Soy el asistente IA de Aitor. Puedes preguntarme sobre Tokitan, Joaisoft, automatizaciones, tecnologías, experiencia o contacto.",
    hora: "10:42",
  },
];

function AsistenteIA() {
  const [mensajes, setMensajes] = useState(mensajesIniciales);
  const [textoUsuario, setTextoUsuario] = useState("");
  const [tipoActivo, setTipoActivo] = useState("");
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState("");

  const contadorId = useRef(1);
  const mensajesRef = useRef(null);

  useEffect(() => {
    if (!mensajesRef.current) return;

    mensajesRef.current.scrollTo({
      top: mensajesRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [mensajes, cargando]);

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

  const detectarTipoActivo = (texto) => {
    const pregunta = texto
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    if (
      pregunta.includes("proyecto") ||
      pregunta.includes("tokitan") ||
      pregunta.includes("joaisoft") ||
      pregunta.includes("portfolio")
    ) {
      return "proyectos";
    }

    if (
      pregunta.includes("tecnologia") ||
      pregunta.includes("stack") ||
      pregunta.includes("react") ||
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
      pregunta.includes("redes sociales")
    ) {
      return "automatizaciones";
    }

    if (pregunta.includes("experiencia") || pregunta.includes("perfil")) {
      return "experiencia";
    }

    if (
      pregunta.includes("contacto") ||
      pregunta.includes("email") ||
      pregunta.includes("github") ||
      pregunta.includes("linkedin")
    ) {
      return "contacto";
    }

    return "";
  };

  const llamarApiChat = async (mensajesActualizados) => {
   const respuesta = await fetch("https://aitorportfolio.onrender.com/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mensajes: mensajesActualizados.map((mensaje) => ({
          autor: mensaje.autor,
          texto: mensaje.texto,
        })),
      }),
    });

    const datos = await respuesta.json();

    if (!respuesta.ok) {
      throw new Error(
        datos.error || "No se pudo obtener respuesta del asistente."
      );
    }

    return datos.respuesta;
  };

  const agregarPregunta = async (pregunta) => {
    if (cargando) return;

    const hora = obtenerHora();

    const mensajeUsuario = {
      id: crearId(),
      autor: "usuario",
      texto: pregunta,
      hora,
    };

    const mensajesConUsuario = [...mensajes, mensajeUsuario];

    setMensajes(mensajesConUsuario);
    setTextoUsuario("");
    setError("");
    setCargando(true);
    setTipoActivo(detectarTipoActivo(pregunta));

    try {
      const respuestaIA = await llamarApiChat(mensajesConUsuario);

      const mensajeIA = {
        id: crearId(),
        autor: "ia",
        texto: respuestaIA,
        hora: obtenerHora(),
      };

      setMensajes((mensajesActuales) => [...mensajesActuales, mensajeIA]);
    } catch (errorApi) {
      const mensajeError = {
        id: crearId(),
        autor: "ia",
        texto:
          "Ahora mismo no puedo conectar con la IA. Revisa que el servidor esté arrancado en localhost:3001 y que la API key esté configurada correctamente.",
        hora: obtenerHora(),
      };

      setMensajes((mensajesActuales) => [...mensajesActuales, mensajeError]);
      setError(errorApi.message);
    } finally {
      setCargando(false);
    }
  };

  const enviarPregunta = (event) => {
    event.preventDefault();

    const pregunta = textoUsuario.trim();

    if (!pregunta) return;

    agregarPregunta(pregunta);
  };

  const usarSugerencia = (sugerencia) => {
    setTipoActivo(sugerencia.tipo);
    agregarPregunta(sugerencia.pregunta);
  };

  const reiniciarConversacion = () => {
    contadorId.current = 1;
    setMensajes(mensajesIniciales);
    setTextoUsuario("");
    setTipoActivo("");
    setError("");
    setCargando(false);

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
            Pregunta sobre proyectos, tecnologías, automatizaciones, experiencia
            o contacto.
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
                  {cargando ? "Escribiendo..." : "En línea"}
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

            {cargando && (
              <div className="asistente-wa__fila">
                <div className="asistente-wa__burbuja asistente-wa__burbuja--ia asistente-wa__burbuja--typing">
                  <p>
                    <span className="asistente-wa__typing-dot"></span>
                    <span className="asistente-wa__typing-dot"></span>
                    <span className="asistente-wa__typing-dot"></span>
                  </p>
                </div>
              </div>
            )}
          </div>

          {!textoUsuario.trim() && (
            <div className="asistente-wa__sugerencias">
              {sugerencias.map((sugerencia) => (
                <button
                  type="button"
                  key={sugerencia.tipo}
                  disabled={cargando}
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
              placeholder={
                cargando
                  ? "El asistente está respondiendo..."
                  : "Escribe un mensaje..."
              }
              value={textoUsuario}
              onChange={(event) => setTextoUsuario(event.target.value)}
              aria-label="Escribe un mensaje"
              disabled={cargando}
            />

            <button type="submit" aria-label="Enviar mensaje" disabled={cargando}>
              ➤
            </button>
          </form>

          {error && <p className="asistente-wa__error">{error}</p>}
        </div>
      </div>
    </section>
  );
}

export default AsistenteIA;