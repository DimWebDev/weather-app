import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { MainContent } from "./MainContent";

describe("MainContent", () => {
  // Define the props for the component
  const props = {
    condition: "Sunny",
    temperature: "26°C",
    iconCode: "01d", // this would be the icon code for clear day in openweathermap API
  };

  it("renders the weather icon correctly", () => {
    render(<MainContent {...props} />);
    const icon = screen.getByRole("img", { name: props.condition });
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute(
      "src",
      expect.stringContaining(props.iconCode)
    );
  });

  it("renders the temperature correctly", () => {
    render(<MainContent {...props} />);
    const temperatureElement = screen.getByText(props.temperature, {
      exact: false,
    });
    expect(temperatureElement).toBeInTheDocument();
    expect(temperatureElement).toHaveTextContent(props.temperature);
  });

  it("renders the condition correctly", () => {
    render(<MainContent {...props} />);
    const conditionElement = screen.getByText(props.condition, {
      exact: false,
    });
    expect(conditionElement).toBeInTheDocument();
    expect(conditionElement).toHaveTextContent(props.condition);
  });

  // Additional tests could include checking for styling, testing user interactions, etc.
});
