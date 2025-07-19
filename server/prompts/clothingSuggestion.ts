const { PromptTemplate } = require("langchain/prompts");

/**
 * Prompt template instructing the model to provide short clothing advice.
 * The `weather` variable should contain a human-readable weather summary.
 */
export const clothingSuggestionPrompt = new PromptTemplate({
  inputVariables: ["weather"],
  template:
    "You are a friendly assistant that gives short clothing and accessories advice based on the weather. " +
    "Keep it under 50 words. Here is the weather data: {weather}",
});

