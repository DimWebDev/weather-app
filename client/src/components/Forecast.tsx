import React from "react";
import { Box, Grid } from "@mui/material";
import { ForecastItem } from "./ForecastItem";
import styled from "@mui/system/styled";

// Create a styled component for the flex container
const FlexContainer = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; // You can adjust the alignment as needed
`;

interface ForecastProps {
  weeklyForecast: Array<{
    day: string;
    temperature: string;
    icon: string;
  }>;
}

export const Forecast: React.FC<ForecastProps> = ({ weeklyForecast }) => {
  return (
    <Box sx={{ padding: 2 }}>
      <FlexContainer>
        {weeklyForecast.map((forecast, index) => (
          <ForecastItem key={index} {...forecast} />
        ))}
      </FlexContainer>
    </Box>
  );
};
