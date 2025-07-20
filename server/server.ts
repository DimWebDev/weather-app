import express from "express";
import axios from "axios";
import cors from "cors";
import "dotenv/config";

import { getClothingSuggestion } from "./utils/getClothingSuggestion";
import { summarizeWeather } from "./utils/summarizeWeather";
import { SimplifiedWeather } from "../types/SimplifiedWeather";

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

/**
 * POST /suggest-clothing
 *
 * This endpoint provides AI-powered clothing suggestions based on the provided weather data.
 *
 * Workflow:
 * 1. Accepts a POST request with a JSON body matching the SimplifiedWeather interface.
 * 2. Validates the structure and types of the incoming weather data.
 * 3. Summarizes the weather data into a natural language prompt for the LLM.
 * 4. Calls the getClothingSuggestion utility, which uses LangChain and OpenAI to generate a suggestion.
 * 5. Returns the suggestion as a JSON response, or an error message if something goes wrong.
 *
 * Request Body Example:
 * {
 *   "temperature": 14,
 *   "condition": "Clouds",
 *   "description": "cloudy",
 *   "humidity": 70,
 *   "pressure": 1015,
 *   "wind": { "speed": 3, "direction": 180 },
 *   "rainVolume": 0.2
 * }
 *
 * Success Response:
 *   Status: 200 OK
 *   Body: { "suggestion": "Wear a light jacket and carry an umbrella." }
 *
 * Error Responses:
 *   Status: 400 Bad Request (invalid input)
 *   Body: { "error": "Invalid weather data" }
 *
 *   Status: 500 Internal Server Error (unexpected failure)
 *   Body: { "error": "Failed to generate clothing suggestion" }
 */
app.post("/suggest-clothing", async (req, res) => {
  try {
    // Parse and validate the incoming weather data against the expected structure.
    // This ensures the LLM receives meaningful and safe input.
    const weather: SimplifiedWeather = req.body;
    console.log("Received /suggest-clothing request:", weather);

    // Basic validation for required fields and types.
    // For production, consider using a schema validation library for stricter checks.
    if (
      typeof weather.temperature !== "number" ||
      typeof weather.condition !== "string" ||
      !weather.wind ||
      typeof weather.wind.speed !== "number"
    ) {
      console.warn("/suggest-clothing: Invalid weather data", weather);
      return res.status(400).json({ error: "Invalid weather data" });
    }

    // Summarize the weather data into a natural language prompt for the LLM.
    const summary = summarizeWeather(weather);
    console.log("Weather summary for LLM:", summary);

    // Call the LLM service to get a clothing suggestion based on the weather summary.
    const suggestion = await getClothingSuggestion(summary);
    console.log("Clothing suggestion from LLM:", suggestion);

    // Respond with the generated suggestion.
    res.json({ suggestion });
  } catch (error) {
    // Log and handle unexpected errors gracefully.
    console.error("Error in /suggest-clothing:", error);
    res.status(500).json({ error: "Failed to generate clothing suggestion" });
  }
});

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

export default app;
