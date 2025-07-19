/// <reference path="../types/langchain-core-prompts.d.ts" />
/// <reference path="../types/langchain-prompts.d.ts" />
// Using require avoids issues with ESM package exports during Jest tests
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { PromptTemplate } = require("@langchain/core/prompts");

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

