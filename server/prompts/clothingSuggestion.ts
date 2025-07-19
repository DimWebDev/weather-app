const { PromptTemplate } = require("langchain/prompts");

/**
 * Prompt template instructing the model to provide short clothing advice.
 * The `weather` variable should contain a human-readable weather summary.
 */
export const clothingSuggestionPrompt = new PromptTemplate({
  inputVariables: ["weather"],
  template:
    "You are a friendly assistant that gives short clothing advice. " +
    "Keep it under 25 words. Here is the weather data: {weather}",
});

