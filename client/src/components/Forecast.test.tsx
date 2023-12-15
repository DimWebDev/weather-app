import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Forecast } from "./Forecast";
import { ForecastItem } from "./ForecastItem";

describe("Forecast", () => {
  // Define the props for the Forecast component
  const weeklyForecast = [
    { day: "Monday", temperature: "20°C", icon: "cloud" },
    { day: "Tuesday", temperature: "22°C", icon: "sun" },
    // Add more entries as needed
  ];

  it("renders a ForecastItem for each forecast entry", () => {
    render(<Forecast weeklyForecast={weeklyForecast} />);

    // Check that each ForecastItem day and temperature are rendered
    weeklyForecast.forEach((forecast) => {
      const { day, temperature } = forecast;
      const dayElement = screen.getByText(day);
      const temperatureElement = screen.getByText(temperature);

      expect(dayElement).toBeInTheDocument();
      expect(temperatureElement).toBeInTheDocument();
    });
  });
});
