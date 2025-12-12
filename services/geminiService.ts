import { GoogleGenAI } from "@google/genai";

// Initialize the API client
// Note: In a real production app, ensure your API key is secure.
// For this demo, we assume process.env.API_KEY is available.
let ai: GoogleGenAI | null = null;

if (process.env.API_KEY) {
  ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
}

const SYSTEM_INSTRUCTION = `
You are an AI assistant living in the portfolio website of Kumarjit Hazra, a B.Tech CST student from India.
Your goal is to answer visitor questions about Kumarjit based on the following profile:

- Name: Kumarjit Hazra
- Role: B.Tech Computer Science & Technology Student & Flutter Developer
- Location: Kolkata, India
- Key Skills: Flutter, Dart, Firebase, REST APIs, Riverpod, Provider, BLoC, Git, GitHub, Android Studio, VS Code, UI/UX Basics, Linux/Terminal
- Interests: Indian startups, tech, UI/UX design, cricket, open source, mobile app development
- Projects:
    • Icon Computer — A desktop-style responsive UI system built in Flutter featuring smooth animations and modern layouts.
    • MPanel Agent & User App — A dual-role service app ecosystem with authentication, service workflows, and clean Material-style UI.
    • EduSathi — An education companion app offering course modules, tracking, and a polished Material 3-inspired interface.
- Contact: kumarjithazra43@gmail.com

Keep answers short (under 50 words), friendly, and in simple Indian English.
If asked about his background, highlight his engineering journey, Flutter development experience, and passion for building smooth mobile experiences.
`;


export const runGeminiChat = async (userPrompt: string): Promise<string> => {
  if (!ai) {
    // Fallback if no API key is present for the demo
    return "I'm currently in demo mode without an API key. In a full deployment, I would use the Gemini API to answer questions about Kumarjit!";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userPrompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return response.text || "I didn't catch that. Could you rephrase?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having a bit of trouble thinking right now. Try again?";
  }
};