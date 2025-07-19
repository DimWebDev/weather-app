import { SimplifiedWeather } from "../../types/SimplifiedWeather";

/**
 * Convert a SimplifiedWeather object into a short, human readable summary.
 * Example output: "14°C, cloudy, chance of rain, light wind".
 * This string is suitable for LLM prompt injection.
 */
export function summarizeWeather(weather: SimplifiedWeather): string {
  const parts: string[] = [];

  // Round the temperature to the nearest degree for brevity
  const roundedTemp = Math.round(weather.temperature);
  parts.push(`${roundedTemp}°C`);

  // Prefer detailed description if available, otherwise fall back to main condition
  let condition = weather.description || weather.condition;
  if (condition && condition.trim().length > 0) {
    parts.push(condition.toLowerCase());
  } else {
    parts.push("unknown conditions");
  }

  // Mention rain if there is measurable volume
  if (weather.rainVolume && weather.rainVolume > 0) {
    parts.push("chance of rain");
  }

  // Convert wind speed from m/s to km/h and map to a simple descriptor
  const windSpeedKmh = weather.wind.speed * 3.6;
  let windDescriptor = "";
  if (windSpeedKmh < 5) {
    windDescriptor = "calm wind";
  } else if (windSpeedKmh < 15) {
    windDescriptor = "light wind";
  } else if (windSpeedKmh < 30) {
    windDescriptor = "moderate wind";
  } else {
    windDescriptor = "strong wind";
  }
  parts.push(windDescriptor);

  return parts.join(", ");
}
