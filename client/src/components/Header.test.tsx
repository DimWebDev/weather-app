import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Header } from "./Header";

describe("Header", () => {
  // Define the props for the Header component
  const props = {
    city: "Athens",
    date: "2023-04-01", // Example date, can be formatted as needed
  };

  it("renders the city name correctly", () => {
    render(<Header {...props} />);
    const cityElement = screen.getByText(props.city);
    expect(cityElement).toBeInTheDocument();
    expect(cityElement).toHaveTextContent(props.city);
  });

  it("renders the date correctly", () => {
    render(<Header {...props} />);
    const dateElement = screen.getByText(props.date);
    expect(dateElement).toBeInTheDocument();
    expect(dateElement).toHaveTextContent(props.date);
  });
});
