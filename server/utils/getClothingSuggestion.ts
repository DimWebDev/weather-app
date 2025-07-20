import { OpenAI } from "langchain/llms/openai";

/**
 * Calls OpenAI's GPT model (model name from .env) to get a clothing suggestion.
 *
 * This function is used on the server side to communicate directly with the LLM (Large Language Model)
 * and generate a clothing suggestion based on the provided prompt.
 *
 * In contrast, the function with the same name on the client side is only used to fetch the clothing suggestion
 * from the server (via the API) – it does not communicate directly with the LLM.
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
  return model.invoke(prompt);
}