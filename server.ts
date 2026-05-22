import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Check for configuration
  if (!process.env.GEMINI_API_KEY) {
    console.warn("WARNING: GEMINI_API_KEY is not set. Chat assistant will return errors.");
  } else {
    // Only initialize if we have the key, though it will crash properly if we tried otherwise.
  }

  // Define API routes
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, historyContext = [] } = req.body;
      
      if (!message) {
        return res.status(400).json({ error: "Message is required" });
      }

      if (!process.env.GEMINI_API_KEY) {
        return res.status(500).json({ error: "Gemini API key is not configured." });
      }

      const ai = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });

      // Simple implementation: generate text instead of true chat object for stateless, 
      // or we can just send the string array if we want simple stateless interactions.
      
      // Convert history for model if needed. 
      // For a simple implementation, let's just pass the most recent message with a system instruction.
      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: message,
        config: {
          systemInstruction: "أنت مساعد ذكي لخدمة عملاء شركة آفاق للاتصالات. أجب بتهذيب واحترافية وباللغة العربية. اسمك مساعد آفاق الذكي. قدم حلولاً لمشاكل العملاء المحتملة واسألهم عن التفاصيل عند الحاجة كأرقام الهواتف أو مواقعهم لحل مشاكل التغطية.",
        },
      });

      res.json({ reply: response.text });
    } catch (error: any) {
      console.error("Error generating answer:", error);
      res.status(500).json({ error: "Failed to generate response." });
    }
  });

  // إضافة نقطة اتصال برمجية للمستشار التقني المحايد لـ آفاق (Afaq Neutral Tech Advisor)
  app.post("/api/advisor", async (req, res) => {
    try {
      const { query } = req.body;
      
      if (!query) {
        return res.status(400).json({ error: "الرجاء إدخال استفسار فني أو تقني." });
      }

      if (!process.env.GEMINI_API_KEY) {
        // الاستجابة الافتراضية للحياد في غياب مفتاح التشغيل لضمان استقرار التطبيق وعمله
        return res.json({ 
          reply: `[استشارة محاكاة محايدة] لقد تم تلقي طلبك الاستشاري بخصوص: "${query}". تعتمد فلسفة آفاق الاستشارية على الموازنة التقنية الدقيقة:
          1. الميزات الفنية: يتطلب هذا النظام واجهات ربط مرنة (APIs) لتوفير أداء أمثل.
          2. التكلفة الجدوى: نوصي بوضع ميزانية تأخذ في الاعتبار الدعم الفني وتكاليف الصيانة السنوية.
          3. التوافق والذكاء: يجب اختبار توافقه مع بيئات تشغيل مشغلي الاتصالات المحليين (stc / زين) بصورة متكافئة دون أولوية تلقائية.
          4. الأمن السيبراني: يتطلب الهيكل الفني تطابقاً تاماً مع ضوابط الأمن السيبراني للهيئة الوطنية للأمن السيبراني (NCA).`
        });
      }

      const ai = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });

      const advisorSystemInstruction = `
      أنت "المستشار التقني المحايد والمسؤول لشركة آفاق (Afaq Neutral Tech Advisor)".
      دورك تقديم استشارات تقنية محايدة، نزيهة، ومدروسة بعناية فائقة تليق بمنصة وطنية استشارية.
      يجب أن تلتزم التزاماً صارماً ومطلقاً بالتعليمات التالية في إجاباتك:
      1. الحياد المطلق والشفافية الكاملة: يُمنع منعاً باتاً تفضيل أو إعطاء الأولوية التلقائية لأي شركة، مشغل اتصالات محلي (stc أو زين)، أو مورد معدات أو أنظمة دون مستند فني أو ميزانية محددة من العميل.
      2. مقارنة معيارية شاملة: اعرض دوماً مقارنات فنية منظمة وموضوعية تعتمد على أربعة محاور أساسية:
         أ. الميزات الفنية والقدرة الوظيفية (Feature Competence).
         ب. التكلفة الاقتصادية الإجمالية والجدوى وعائد الاستثمار (Cost & ROI).
         ج. التوافق التكنولوجي وتكامل الأنظمة القائمة (System Compatibility).
         د. معايير الأمن السيبراني وضوابط الهيئة الوطنية للأمن السيبراني (NCA Compliance).
      3. حظر التوجيه التسويقي: لا تفرض خياراً واحداً أبداً. اعرض المزايا والعيوب والبدائل المتكافئة بكل شفافية واترك القرار النهائي للمستخدم بالكامل.
      4. أسلوب استشاري رصين وصياغة احترافية ممتازة باللغة العربية، تركز على القيمة والأثر التقني الوطني.
      `;

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: query,
        config: {
          systemInstruction: advisorSystemInstruction,
        },
      });

      res.json({ reply: response.text });
    } catch (error: any) {
      console.error("خطأ في محرك المستشار الذكي المحايد:", error);
      res.status(500).json({ error: "فشل نظام المستشار في معالجة طلب المقارنة الفنية." });
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
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    // Fallback to index.html for SPA routing
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
