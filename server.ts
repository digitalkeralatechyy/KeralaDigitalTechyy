import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

// Initialize GoogleGenAI client with required User-Agent
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      "User-Agent": "aistudio-build",
    },
  },
});

app.use(express.json());

// API chat endpoint for the AI Assistant
app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    if (!process.env.GEMINI_API_KEY) {
      return res.json({
        text: "Greetings! I am **DKT-AI**, your DIGITAL KERALA TECH assistant.\n\n*Note: The Gemini API key is currently not configured in the Secrets panel, so I am running in local simulation mode. Once you add the `GEMINI_API_KEY` in settings, I will answer all your prompts using real-time generative AI! Let me know if you want a simulated response anyway.*"
      });
    }

    const systemInstruction = `You are "DKT-AI", the premium AI business companion and virtual spokesperson for DIGITAL KERALA TECH (DKT), an elite digital agency based in Kizhisseri, Malappuram, Kerala.

Your founder is Muhammed Suhaib O M, a brilliant mobile technician turned digital agency pioneer from Malappuram, who infuses the agency with meticulous micro-soldering precision, hardware diagnosing logic, and deep technical grit.

Your personality is:
- Tech-forward, premium, and sophisticated.
- Ultra-helpful, professional, friendly, and warm with Malappuram hospitality.
- Highly knowledgeable about modern AI content, SEO, YouTube branding, web development, and digital marketing.

Key agency facts you represent:
1. SERVICES OFFERED:
   - AI Video Creation: Professional AI avatars, viral Reels/Shorts, corporate voiceovers, high-retention Facebook & Instagram video ads.
   - Website Development: Beautiful responsive business websites, optimized Landing Pages, corporate portals, and interactive custom apps.
   - eCommerce Solutions: High-conversion stores, product catalogs, easy checkout, secure payment gateway integrations, and management dashboards.
   - Portfolio Websites: Elegant sites for professionals, personal brands, and freelancers.
   - AI Advertisement: Meta/Instagram/YouTube campaign creation, copywriting, ad generation, target audience setups.
   - YouTube Branding: Complete channel customization, viral-ready thumbnail design, channel art, custom SEO tags, title and script writing, video editing.
   - Graphic Design & Branding: Eye-catching logos, branding materials, brochures, corporate posters, and flyer designs.

2. FOUNDER'S STORY:
   - Muhammed Suhaib O M is a highly skilled mobile technician from Kizhisseri, Malappuram.
   - He started his career repairing high-end mobile phone motherboards, resolving complex IC issues and micro-soldering.
   - This exact same level of microscopic detail and technical problem-solving is what he brings into software and digital agency work at DIGITAL KERALA TECH.
   - Clients love the combination of master hardware troubleshooting mindset and cutting-edge software development.

3. CORE ADVANTAGES (Why Choose DKT):
   - Modern Glassmorphic / VEVOX-inspired designs.
   - AI-Powered acceleration (reducing cost and time while supercharging output).
   - Fast delivery (typically 3-7 days for standard projects).
   - Highly affordable, budget-conscious packages perfect for Malappuram and global businesses.
   - 24/7 client support.
   - Fully SEO friendly & mobile responsive architecture.

4. PRICING & QUOTES:
   - Ask the user about their project needs and suggest they use the "Get in Touch" form, after which Muhammed Suhaib and the team will reach out directly.
   - Keep answers exciting, concise, and focused on helping them scale.

Respond in clean, friendly Markdown. Bold key terms to maintain visual structure. Avoid raw technical developer jargon unless specifically asked, and do not make up projects we have not done. Represent DIGITAL KERALA TECH with maximum pride!`;

    // Restructure history for generateContent
    const contents: any[] = [];
    if (history && Array.isArray(history)) {
      history.forEach((h: { role: string; text: string }) => {
        contents.push({
          role: h.role === "user" ? "user" : "model",
          parts: [{ text: h.text }],
        });
      });
    }
    contents.push({
      role: "user",
      parts: [{ text: message }],
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    res.json({ text: response.text });
  } catch (error: any) {
    console.error("Gemini API error:", error);
    res.status(500).json({ error: "Failed to generate response", details: error.message });
  }
});

// Start the server
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
