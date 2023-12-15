jest.mock("axios");
import axios from "axios";
import { getWeatherData } from "./weatherService";

jest.mock("axios"); // Ensure Axios is properly mocked

describe("getWeatherData", () => {
  afterEach(() => {
    jest.clearAllMocks(); // Clear all mock calls after each test
  });

  it("fetches weather data successfully from an API", async () => {
    const mockWeatherData: WeatherData = {
      city: {
        name: "Test City",
        sunrise: 1600000000, // Example Unix timestamp for sunrise
        sunset: 1600043200, // Example Unix timestamp for sunset
      },
      list: [
        {
          dt: 1600000000,
          dt_txt: "2020-09-13 15:00:00",
          main: {
            temp: 285.92, // Example temperature in Kelvin
            humidity: 75, // Example humidity percentage
            pressure: 1013, // Example pressure in mb
          },
          weather: [
            {
              main: "Clouds",
              description: "overcast clouds",
              icon: "04d",
            },
          ],
          wind: {
            speed: 5, // Wind speed in m/s
            deg: 180, // Wind direction in degrees
          },
        },
        // ... other necessary list items
      ],
    };

    const latitude = 40.7128;
    const longitude = -74.006;

    // Mock the Axios get function to resolve with a response object
    (axios.get as jest.Mock).mockResolvedValue({ data: mockWeatherData });

    const result = await getWeatherData(latitude, longitude);

    expect(axios.get).toHaveBeenCalledWith(
      `/forecast?lat=${latitude}&lon=${longitude}`
    );
    expect(result).toEqual(mockWeatherData);
  });

  it("handles errors when fetching weather data", async () => {
    const error = new Error("Network error");

    // Mock the Axios get function to reject with an error
    (axios.get as jest.Mock).mockRejectedValue(error);

    // Check if the function correctly re-throws the error
    await expect(getWeatherData(40.7128, -74.006)).rejects.toThrow(
      "Network error"
    );
  });
});
