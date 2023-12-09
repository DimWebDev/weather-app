import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

// Enable All CORS Requests for all routes
app.use(cors());

// Middleware to handle json body parsing
app.use(express.json());

app.get("/", (req, res) => res.send("Weather API"));

// Weather route
app.get('/weather', async (req, res) => {
  const lat = 47.6062; // Hardcoded latitude for Seattle
  const lon = -122.3321; // Hardcoded longitude for Seattle
  const api_key = 'your_api_key'; // Replace with your actual OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=metric&appid=${api_key}`;

  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching weather data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
