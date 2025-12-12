
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
أنت "مستشار رونزا الذكي" (Ronza AI Consultant). 
مهمتك تقديم نصائح وصيحات أعراس 2025 بلهجة كويتية فخمة وراقية.
تحدث عن الكوش، التصوير، الدي جي، والزهور. 
اجعل إجاباتك مختصرة، مشجعة، وتعكس فخامة شركة "رونزا إيفنت" (Ronza Event).
دائماً ذكرهم بأن رونزا في مجمع زاوية سنتر بحولي هم الأفضل لتنفيذ هذه الأحلام.
استخدم كلمات مثل "يا هلا"، "تبارك الرحمن"، "ذوق ملكي"، "لا تحاتين".
`;

// Fix: Initialize GoogleGenAI with process.env.API_KEY directly inside the service function
// to ensure it always uses the most up-to-date configuration.
export const getGeminiAdvice = async (userPrompt: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userPrompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.8,
        topP: 0.95,
      },
    });
    // Fix: Directly access the .text property as a getter as per @google/genai guidelines.
    return response.text || "عذراً، حدث خطأ في التواصل مع المستشار الذكي. يرجى المحاولة لاحقاً.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "يا هلا فيك، حالياً المستشار الذكي في استراحة قصيرة. تواصل معانا واتساب وراح نخدمك بعيوننا!";
  }
};
