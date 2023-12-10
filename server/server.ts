import express from "express";
import axios from "axios";
import cors from "cors";
import "dotenv/config";

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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
