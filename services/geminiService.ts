import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

// Initialize the API client
// Note: In a real production app, ensure API_KEY is set in environment variables.
const apiKey = process.env.API_KEY || ''; 
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
You are "InkBot", a professional, edgy, and helpful admission counselor for Aliens Tattoo School. 
Your goal is to answer questions about tattoo courses, art careers, and the school itself to prospective students.
The school is world-renowned, famous for realism and advanced techniques.
Tone: Creative, encouraging, slightly edgy but very professional.
Do not make up specific dates if you don't know them, but you can give general estimates (e.g., courses start monthly).
If asked about prices, provide a range ($2000 - $5000 depending on duration) and encourage them to fill out the form for a quote.
Keep responses concise (under 100 words) unless asked for details.
`;

let chatSession: Chat | null = null;

export const initChat = () => {
  if (!chatSession) {
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<AsyncGenerator<string, void, unknown>> => {
  if (!chatSession) {
    initChat();
  }

  if (!chatSession) {
    throw new Error("Failed to initialize chat session");
  }

  try {
    const result = await chatSession.sendMessageStream({ message });
    
    // Create a generator to yield text chunks as they arrive
    async function* streamGenerator() {
      for await (const chunk of result) {
        const c = chunk as GenerateContentResponse;
        if (c.text) {
          yield c.text;
        }
      }
    }
    
    return streamGenerator();

  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    throw error;
  }
};