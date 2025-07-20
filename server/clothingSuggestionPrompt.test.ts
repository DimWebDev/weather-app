import { clothingSuggestionPrompt } from "./prompts/clothingSuggestion";

describe("clothingSuggestionPrompt", () => {
  it("injects the weather summary into the template", async () => {
    const prompt = await clothingSuggestionPrompt.format({ weather: "10\u00B0C, rain" });
    expect(prompt).toBe(
      "You are a friendly assistant that gives short clothing and accessories advice based on the weather. " +
        "Keep it under 50 words. Here is the weather data: 10\u00B0C, rain"
    );
  });
});

