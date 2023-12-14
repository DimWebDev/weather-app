import { transformWeeklyForecast } from "./forecastUtil";

describe("transformWeeklyForecast", () => {
  it("transforms and filters the forecast data to a 5-day forecast at 15:00", () => {
    // Mock data that resembles the expected API response structure
    const mockData: WeatherDataListItem[] = [
      {
        dt: 1600000000, // Unix timestamp for a day at 15:00:00
        dt_txt: "2020-09-13 15:00:00",
        main: { temp: 285.92 },
        weather: [{ icon: "10d" }],
      },
      {
        dt: 1600086400,
        dt_txt: "2020-09-14 15:00:00",
        main: { temp: 287.55 },
        weather: [{ icon: "01d" }],
      },
      {
        dt: 1600172800,
        dt_txt: "2020-09-15 15:00:00",
        main: { temp: 289.82 },
        weather: [{ icon: "02d" }],
      },
      {
        dt: 1600259200,
        dt_txt: "2020-09-16 15:00:00",
        main: { temp: 290.37 },
        weather: [{ icon: "03d" }],
      },
      {
        dt: 1600345600,
        dt_txt: "2020-09-17 15:00:00",
        main: { temp: 294.15 },
        weather: [{ icon: "04d" }],
      },
      // Add more if needed for other test cases
    ];

    // Call the utility function with the mock data
    const result = transformWeeklyForecast(mockData);

    // Expect result to be an array of 5 items
    expect(result).toHaveLength(5);

    // Expect each item to have a specific structure
    result.forEach((forecast) => {
      expect(forecast).toHaveProperty("day");
      expect(forecast).toHaveProperty("temperature");
      expect(forecast.temperature).toMatch(/°C$/); // Temperature ends with °C
      expect(forecast).toHaveProperty("icon");
    });

    // Optionally, check for specific day and time conversions if needed
    // ...
  });

  // Additional tests can be added for edge cases or specific scenarios
});
