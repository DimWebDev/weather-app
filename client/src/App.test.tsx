import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "./App";
import * as Hooks from "./hooks/useWeatherData";
import "@testing-library/jest-dom";

// A mock utility function that we might have to use in multiple test cases
const mockWeatherData = {
  city: {
    name: "Test City",
    sunrise: 1600000000,
    sunset: 1600043200,
  },
  list: [
    {
      dt: 1600000000,
      dt_txt: "2020-09-13 15:00:00",
      main: {
        temp: 20,
        humidity: 75,
        pressure: 1013,
      },
      weather: [
        {
          main: "Clear",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      wind: {
        speed: 5,
        deg: 180,
      },
    },
    // ... Add other list items as needed for your tests
  ],
};

// Mocking the `useWeatherData` hook to control the returned value
jest.mock("./hooks/useWeatherData", () => ({
  useWeatherData: jest.fn(),
}));

describe("App Component", () => {
  it("renders loading when data is being fetched", () => {
    jest.spyOn(Hooks, "useWeatherData").mockReturnValue({
      weatherData: null,
      loading: true,
      error: null,
    });

    render(<App />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders the main content when data is fetched successfully", () => {
    jest.spyOn(Hooks, "useWeatherData").mockReturnValue({
      weatherData: mockWeatherData,
      loading: false,
      error: null,
    });

    render(<App />);
    expect(screen.getByText("Test City")).toBeInTheDocument();
    // Locate all instances where "20.0°C" appears
    const temperatureElements = screen.getAllByText("20.0°C");
    // If you expect exactly two instances, assert that the length of the array is 2
    expect(temperatureElements).toHaveLength(2);
  });
});
