import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SideInformation } from "./SideInformation";

describe("SideInformation", () => {
  // Define the props for the SideInformation component
  const details = {
    sunrise: "06:00 AM",
    sunset: "06:00 PM",
    humidity: 80,
    wind: "10 km/h North-East",
    pressure: "1023 mb",
  };

  it("renders all details correctly", () => {
    render(<SideInformation details={details} />);

    // Check for each detail
    Object.entries(details).forEach(([key, value]) => {
      const detailText = `${
        key.charAt(0).toUpperCase() + key.slice(1)
      }: ${value}`;
      expect(screen.getByText(detailText)).toBeInTheDocument();
    });
  });
});
