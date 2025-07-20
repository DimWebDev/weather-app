import { OpenAI } from "langchain/llms/openai";

/**
 * Call OpenAI's GPT model (model name from .env) to get a clothing suggestion.
 * 
 * This function is used on the server side to communicate directly with the LLM (Large Language Model)
 * and generate a clothing suggestion based on the provided prompt.
 * 
 * Im Gegensatz dazu dient die gleichnamige Funktion auf der Client-Seite lediglich dazu,
 * den Kleidungsvorschlag vom Server (über die API) abzurufen – sie kommuniziert nicht direkt mit dem LLM.
 * 
 * @param prompt - Preformatted prompt describing the weather.
 * @returns Suggested clothing text from the model.
 */
export async function getClothingSuggestion(prompt: string): Promise<string> {
  const modelName = process.env.OPENAI_MODEL;
  if (!modelName) {
    throw new Error("OPENAI_MODEL environment variable is not set.");
  }
  const model = new OpenAI({ modelName, temperature: 0.2 });