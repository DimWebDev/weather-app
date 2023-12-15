// in useWeatherData.ts
import { useState, useEffect } from "react";
import { getWeatherData } from "../utils/weatherService";

export const useWeatherData = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      try {
        const { latitude, longitude } = position.coords;
        const data = await getWeatherData(latitude, longitude);
        setWeatherData(data);
        setLoading(false);
      } catch (err: any) {
        setError(err);
        setLoading(false);
      }
    });
  }, []);

  return { weatherData, loading, error };
};
