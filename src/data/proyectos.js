import joaisoft from "../assets/joaisoft.jpg";
import ddh from "../assets/ddh.jpg";
import tokitan from "../assets/tokitan.png";



export const proyectos = [
  {
    id: 1,
    titulo: "Joaisoft",
    descripcion:
      "Proyecto web profesional orientado a mostrar servicios digitales, desarrollo web y soluciones tecnológicas.",
    tecnologias: ["React", "JavaScript", "CSS", "Bootstrap"],
    icono: "📊",
    imagen: joaisoft,
    tipo: "Web Empresa",
  },
  {
    id: 2,
    titulo: "Tokitan",
    descripcion:
      "Aplicación web de reservas con un asistente de IA integrado para mejorar la gestión y la experiencia del usuario.",
    tecnologias: ["React", "Node.js", "SpringBoot", "OpeanAI API", "MySQL", "Docker"],
    icono: "✅",
    imagen: tokitan,
    tipo: "Productividad",
  },
  {
    id: 3,
    titulo: "Automatización subida de contenido a Redes Sociales",
    descripcion:
      "Flujo automatizado para publicar contenido de forma simultánea en todas las redes sociales del cliente, optimizando tiempo y manteniendo una gestión centralizada.",
    tecnologias: ["n8n", "HTTP Request", "Gmail", "Webhook"],
    icono: "⚙️",
    imagen: ddh,
    tipo: "Automatización",
  },
];