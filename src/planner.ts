import { GoogleGenerativeAI } from "@google/generative-ai";
import { Plan } from "./types";

export async function generatePlan(request: string): Promise<Plan | null> {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        throw new Error("GEMINI_API_KEY environment variable not set.");
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

    const prompt = `You are a planning layer for software development. Break down the request "${request}" into tasks and dependencies. Output JSON with { "plan": [{"id": 1, "description": "..."}], "dependencies": "1 -> 2 -> 3" }.`;

    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = await response.text();

        const cleanedText = text.replace(/```json/g, "").replace(/```/g, "").trim();
        const parsed: Plan = JSON.parse(cleanedText);
        return parsed;
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        return null;
    }
}