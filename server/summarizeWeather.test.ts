import { summarizeWeather } from "./utils/summarizeWeather";
import { SimplifiedWeather } from "../types/SimplifiedWeather";

describe("summarizeWeather", () => {
  it("creates a readable summary from weather data", () => {
    const weather: SimplifiedWeather = {
      temperature: 14,
      condition: "Clouds",
      description: "cloudy",
      humidity: 70,
      pressure: 1015,
      wind: {
        speed: 3,
        direction: 180,
      },
      rainVolume: 0.2,
    };

    const summary = summarizeWeather(weather);
    expect(summary).toBe("14°C, cloudy, chance of rain, light wind");
  });
});
