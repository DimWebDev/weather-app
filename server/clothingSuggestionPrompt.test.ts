import { clothingSuggestionPrompt } from "../prompts/clothingSuggestion";

describe("clothingSuggestionPrompt", () => {
  it("injects the weather summary into the template", async () => {
    const prompt = await clothingSuggestionPrompt.format({ weather: "10\u00B0C, rain" });
    expect(prompt).toBe(
      "You are a friendly assistant that gives short clothing advice. " +
        "Keep it under 25 words. Here is the weather data: 10\u00B0C, rain"
    );
  });
});

