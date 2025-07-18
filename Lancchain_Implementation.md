# LangChain Clothing Suggestion Integration

This document explains how to integrate LangChain with the Weather App to generate smart clothing advice using OpenAI's GPT-4o Mini model.

## 1. Install Dependencies

On the **server** side, install `langchain` and `openai`:

```bash
cd server
npm install langchain openai
```

Set `OPENAI_API_KEY` in your `.env` file alongside the existing `OPENWEATHER_API_KEY`.

## 2. Add an Endpoint for AI Suggestions

In `server/server.ts`, add an API route that sends weather data to LangChain and returns the suggestion. A simple example:

```ts
import { OpenAI } from "langchain/llms/openai";

// inside app definition
app.post("/suggest-clothing", async (req, res) => {
  const weatherData = req.body; // expect { temp: number, condition: string, ... }
  const model = new OpenAI({ modelName: "gpt-4o", temperature: 0.2 });
  const prompt = `You are a helpful assistant giving short clothing advice based on current weather. Weather: ${JSON.stringify(weatherData)}.`;
  try {
    const suggestion = await model.call(prompt);
    res.json({ suggestion });
  } catch (err) {
    res.status(500).json({ error: "AI suggestion failed" });
  }
});
```

This uses LangChain's `OpenAI` wrapper and calls the GPT-4o Mini model. Adjust the weather data structure as needed.

## 3. Invoke the Endpoint from the Client

On the client, create a utility function to fetch the clothing suggestion after receiving weather data:

```ts
// client/src/utils/clothingService.ts
import axios from "axios";
export const getClothingSuggestion = async (weather: SimplifiedWeather) => {
  const res = await axios.post<{ suggestion: string }>("/suggest-clothing", weather);
  return res.data.suggestion;
};
```

Call this function inside your `useWeatherData` hook or in a new hook after obtaining the forecast. Display the returned suggestion in a new component or within `MainContent`.

## 4. Constructing Reliable Prompts

When creating prompts, keep them short and include key weather context such as temperature, condition, precipitation chance, and wind. Example prompt template:

```text
You are a friendly assistant that gives short clothing advice. Keep it under 25 words. If rain is likely, mention umbrellas or waterproof clothing. Here is the weather data: {weatherData}
```

Replace `{weatherData}` with a summary string like `"temperature 12°C, rainy, strong wind"` before sending it to the model. With GPT-4o Mini's low temperature (e.g., 0.2), the responses remain concise and consistent.

## 5. Returning the Suggestion to the User

Return the text directly from the server endpoint and render it in the React UI, for example as a new line below the current weather conditions.

---

**Example final prompt**

```text
You are a friendly assistant. Keep the clothing recommendation under 25 words. Weather data: temperature 4°C, heavy rain, strong winds.
```

A response might be:

```
"Wear a warm waterproof jacket, sturdy boots, and bring an umbrella."
```