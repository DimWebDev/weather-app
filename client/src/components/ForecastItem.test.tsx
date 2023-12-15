import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ForecastItem } from "./ForecastItem";

describe("ForecastItem", () => {
  // Define the props for the ForecastItem component
  const props = {
    day: "Monday",
    temperature: "20°C",
    icon: "cloud", // Assuming 'cloud' is a valid icon code
  };

  it("renders the day correctly", () => {
    render(<ForecastItem {...props} />);
    const dayElement = screen.getByText(props.day);
    expect(dayElement).toBeInTheDocument();
  });

  it("renders the temperature correctly", () => {
    render(<ForecastItem {...props} />);
    const temperatureElement = screen.getByText(props.temperature);
    expect(temperatureElement).toBeInTheDocument();
  });

  it("renders the weather icon correctly", () => {
    render(<ForecastItem {...props} />);
    const iconElement = screen.getByRole("img", { name: "Weather icon" });
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveAttribute(
      "src",
      `http://openweathermap.org/img/wn/${props.icon}.png`
    );
  });
});
