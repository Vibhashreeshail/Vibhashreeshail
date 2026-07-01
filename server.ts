import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes FIRST
  app.post("/api/enhance-copy", async (req, res) => {
    try {
      const { text } = req.body;
      if (!text) {
        return res.status(400).json({ error: "Text is required" });
      }

      const key = process.env.GEMINI_API_KEY;
      if (!key) {
        return res.status(500).json({ error: "GEMINI_API_KEY is not configured" });
      }

      const ai = new GoogleGenAI({ apiKey: key });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `You are an expert editorial copywriter and tech editor. Rewrite the following project description or text to sound professional, minimalist, and engaging, fitting a modern tech portfolio. Use a sharp, slightly cryptic, retro-futurist or "glitch art" tone if appropriate, but keep it highly readable. Keep it concise (max 2-3 sentences). Do not use emojis.

Text to rewrite: "${text}"`,
      });

      res.json({ result: response.text });
    } catch (error) {
      console.error("AI Generation Error:", error);
      res.status(500).json({ error: "Failed to process text" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
