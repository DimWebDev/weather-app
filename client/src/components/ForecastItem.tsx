// src/components/ForecastItem.tsx
import React from "react";
import { Typography, Box } from "@mui/material";
import styled from "@emotion/styled";
import { theme } from "../utils/theme";

/* ------------------------------------------------------------------
   Styled forecast card
   • Uses the same soft blue‑to‑white gradient as ClothingSuggestion
   • Subtle lift on hover (translateY) instead of the old 150 % zoom
   • Full‑width inside its Grid cell for perfect alignment
------------------------------------------------------------------- */
const StyledForecastItem = styled(Box)({
  textAlign: "center",
  width: "100%",
  marginTop: theme.spacing(1),
  padding: theme.spacing(1.5),
  borderRadius: theme.shape.borderRadius,
  background:
    "linear-gradient(135deg, rgba(226,241,255,0.85) 0%, rgba(255,255,255,0.85) 100%)",
  boxShadow: "0 1px 3px rgba(0,0,0,.12)",
  transition: "transform .25s cubic-bezier(.2,.8,.2,1), box-shadow .25s",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 4px 12px rgba(0,0,0,.15)",
  },
});

interface ForecastItemProps {
  day: string;
  temperature: string;
  icon: string;
}

export const ForecastItem: React.FC<ForecastItemProps> = ({
  day,
  temperature,
  icon,
}) => {
  const iconUrl = `http://openweathermap.org/img/wn/${icon}.png`;

  return (
    <StyledForecastItem>
      <Typography variant="subtitle2">{day}</Typography>
      <img src={iconUrl} alt="Weather icon" loading="lazy" />
      <Typography variant="body1" sx={{ fontWeight: 500 }}>
        {temperature}
      </Typography>
    </StyledForecastItem>
  );
};
