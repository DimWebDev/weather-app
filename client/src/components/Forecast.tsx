import React from "react";
import { Box, Grid } from "@mui/material";
import { ForecastItem } from "./ForecastItem";

interface ForecastProps {
  weeklyForecast: Array<{
    day: string;
    temperature: string;
  }>;
}

export const Forecast: React.FC<ForecastProps> = ({ weeklyForecast }) => {
  return (
    <Box sx={{ padding: 2 }}>
      <Grid container spacing={2}>
        {weeklyForecast.map((forecast, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={2}>
            <ForecastItem {...forecast} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
