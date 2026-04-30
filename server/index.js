import process from "node:process";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const allowedOrigins = [
  "http://localhost:5173",
  "https://aiittoor10.github.io",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
        return;
      }

      callback(new Error("Origen no permitido por CORS"));
    },
  })
);

app.use(express.json());

const contextoAitor = `

`;

app.get("/", (req, res) => {
  res.json({
    mensaje: "API del portfolio de Aitor funcionando correctamente.",
  });
});

app.post("/api/chat", async (req, res) => {
  try {
    const { mensajes } = req.body;

    if (!Array.isArray(mensajes)) {
      return res.status(400).json({
        error: "El campo mensajes debe ser un array.",
      });
    }

    const historial = mensajes
      .map((mensaje) => {
        const autor = mensaje.autor === "usuario" ? "Usuario" : "Asistente";
        return `${autor}: ${mensaje.texto}`;
      })
      .join("\n");

    const response = await openai.responses.create({
      model: "gpt-4.1-mini",
      input: `
${contextoAitor}

Historial de conversación:
${historial}

Responde al último mensaje del usuario manteniendo el contexto.
      `,
      temperature: 0.35,
      max_output_tokens: 420,
    });

    return res.json({
      respuesta: response.output_text,
    });
  } catch (error) {
    console.error("Error en /api/chat:", error);

    return res.status(500).json({
      error: "No se pudo generar la respuesta del asistente.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor API funcionando en http://localhost:${PORT}`);
});