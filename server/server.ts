import express from "express";
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

// Enable All CORS Requests for all routes
app.use(cors());

// Middleware to handle json body parsing
app.use(express.json());

app.get("/", (req, res) => res.send("Weather API"));

// 5 Day / 3 Hour Forecast route
app.get("/forecast", async (req, res) => {
  const lat = req.query.lat;
  const lon = req.query.lon;
  const api_key = process.env.OPENWEATHER_API_KEY;

  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${api_key}`;

  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching weather data" });
  }
});

// Suggest clothing based on weather data
app.post("/suggest-clothing", async (req, res) => {
  try {
    const weather = validateSimplifiedWeather(req.body);
    const summary = summarizeWeather(weather);
    const prompt = await clothingSuggestionPrompt.format({ weather: summary });
    const suggestion = await getClothingSuggestion(prompt);
    res.json({ suggestion });
  } catch (error) {
    if (error instanceof ZodError) {
      // Invalid input from client
      res.status(400).json({ error: "Invalid weather data" });
    } else {
      console.error(error);
      res.status(500).json({ error: "Failed to generate suggestion" });
    }
  }
});

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

export default app;
