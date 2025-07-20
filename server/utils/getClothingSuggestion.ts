import { OpenAI } from "langchain/llms/openai";

/**
 * Call OpenAI\'s GPT-4o model to get a clothing suggestion.
 * @param prompt - Preformatted prompt describing the weather.
 * @returns Suggested clothing text from the model.
 */
export async function getClothingSuggestion(prompt: string): Promise<string> {
  const model = new OpenAI({ modelName: "gpt-4o", temperature: 0.2 });
  return model.invoke(prompt);
}
