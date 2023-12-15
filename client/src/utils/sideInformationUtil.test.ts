import { createSideInformationDetails } from "./sideInformationUtil"; // Adjust the path as needed

describe("createSideInformationDetails", () => {
  it("transforms weather data into side information details", () => {
    // Mock WeatherData object
    const mockWeatherData: WeatherData = {
      city: {
        name: "Test City", // Mock city name
        sunrise: 1600000000, // Example Unix timestamp for sunrise
        sunset: 1600043200, // Example Unix timestamp for sunset
      },
      list: [
        {
          dt: 1600000000,
          dt_txt: "2020-09-13 15:00:00",
          main: {
            temp: 285.92, // Example temperature
            humidity: 75, // Example humidity
            pressure: 1013, // Example pressure
          },
          weather: [
            {
              main: "Clouds", // Example weather condition
              description: "overcast clouds", // Example description
              icon: "04d", // Example icon
            },
          ],
          wind: {
            speed: 5, // Example wind speed
            deg: 180, // Example wind direction
          },
        },
        // Add more list items as needed for the test
      ],
    };

    // Call the utility function with the mock data
    const result = createSideInformationDetails(mockWeatherData);

    // Check the structure and values of the result
    expect(result).toEqual({
      sunrise: expect.any(String), // Check for correct formatting
      sunset: expect.any(String), // Check for correct formatting
      humidity: 75,
      wind: "18.0 km/h", // Check if wind speed is correctly converted and formatted
      pressure: "1013 mb",
    });
  });

  // Additional tests can be added for edge cases or specific scenarios
});
