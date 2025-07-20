import { useEffect, useState } from "react";
import { getClothingSuggestion } from "../utils/clothingService";
import { SimplifiedWeather } from "../../../types/SimplifiedWeather";
// WeatherData is a global type declared in declarations.d.ts

/**
 * Custom hook to fetch clothing suggestion based on weather data.
 * @param weatherData WeatherData object from API
 * @returns Clothing suggestion string and loading/error state
 */
export const useClothingSuggestion = (weatherData: WeatherData | null) => {
  const [suggestion, setSuggestion] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!weatherData) return;

    // Convert WeatherData to SimplifiedWeather for the API
    const current = weatherData.list[0];
    const simplified: SimplifiedWeather = {
      temperature: current.main.temp,
      condition: current.weather[0].main,
      description: current.weather[0].description,
      icon: current.weather[0].icon,
      humidity: current.main.humidity,
      pressure: current.main.pressure,
      wind: {
        speed: current.wind.speed,
        direction: current.wind.deg,
      },
      rainVolume: undefined, // Add if available in data
    };

    setLoading(true);
    getClothingSuggestion(simplified)
      .then(setSuggestion)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [weatherData]);

  return { suggestion, loading, error };
};
