import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

const ai = new GoogleGenAI({ apiKey });

export const askResearchAssistant = async (query: string): Promise<string> => {
  if (!apiKey) {
    return "Error: API Key not configured. Please set process.env.API_KEY.";
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: query,
      config: {
        systemInstruction: "You are a concise, formal academic research assistant. Provide answers in plain text or simple markdown. Avoid flowery language, emojis, or conversational filler. Focus on facts, citations (if known), and logical structure. Format your response like a technical note or a brief abstract.",
        temperature: 0.2, // Low temperature for deterministic, serious outputs
      }
    });

    return response.text || "No response generated.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "An error occurred while processing the request.";
  }
};
