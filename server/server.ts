import express, { Request, Response } from "express";
import axios from "axios";
import cors from "cors";
import "dotenv/config";
import { ZodError } from "zod";
import { clothingSuggestionPrompt } from "./prompts/clothingSuggestion";
import { getClothingSuggestion } from "./utils/getClothingSuggestion";
import { summarizeWeather } from "./utils/summarizeWeather";
import { validateSimplifiedWeather } from "./utils/validateSimplifiedWeather";

const app = express();
const PORT = process.env.PORT || 3001;

// Enable CORS for all routes
app.use(cors());
// Parse JSON bodies
app.use(express.json());

// Root endpoint for health check
app.get("/", (req: Request, res: Response) => {
  res.send("Weather API");
});

// 5 Day / 3 Hour Forecast route
app.get("/forecast", async (req: Request, res: Response) => {
  const lat = req.query.lat;
  const lon = req.query.lon;
  const apiKey = process.env.OPENWEATHER_API_KEY;
  const url =
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error("/forecast error:", error);
    res.status(500).json({ message: "Error fetching weather data" });
  }
});

/**
 * POST /suggest-clothing
 * Generate AI-powered clothing suggestions based on SimplifiedWeather data.
 */
app.post("/suggest-clothing", async (req: Request, res: Response) => {
  try {
    // Validate input
    const weather = validateSimplifiedWeather(req.body);
    // Summarize weather for prompt
    const summary = summarizeWeather(weather);
    // Format prompt and call LLM
    const prompt = await clothingSuggestionPrompt.format({ weather: summary });
    const suggestion = await getClothingSuggestion(prompt);
    // Return suggestion
    res.json({ suggestion });
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json({ error: "Invalid weather data" });
    }
    console.error("/suggest-clothing error:", error);
    res.status(500).json({ error: "Failed to generate suggestion" });
  }
});

// Start server if not in test mode
if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

export default app;

