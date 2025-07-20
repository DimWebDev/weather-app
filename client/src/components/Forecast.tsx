// src/components/Forecast.tsx
import React from "react";
import { Box, Grid } from "@mui/material";
import { ForecastItem } from "./ForecastItem";

interface ForecastProps {
  weeklyForecast: Array<{
    day: string;
    temperature: string;
    icon: string;
  }>;
}

/**
 * Renders the five‑day forecast in a centred, responsive grid.
 * • 5 cards per row ≥ md (desktop)
 * • 3 cards on small tablets
 * • 2 cards on phones
 * The Grid container’s “justifyContent='center'” keeps the row
 * neatly aligned even when there are fewer than five items.
 */
export const Forecast: React.FC<ForecastProps> = ({ weeklyForecast }) => (
  <Box sx={{ px: 1 }}>
    <Grid container spacing={3} justifyContent="center"> 
      {weeklyForecast.map((forecast, index) => (
        <Grid item key={index} xs={6} sm={4} md={2}>
          <ForecastItem {...forecast} />
        </Grid>
      ))}
    </Grid>
  </Box>
);
