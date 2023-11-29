import React from "react";
import { Typography, Box } from "@mui/material";
import styled from "@emotion/styled";
import { theme } from "../utils/theme"; // Directly import the theme

// Define the styled component for the forecast item using the directly imported theme, due to error encountered by using the ThemeProvider with Material UI and Emotion Styled Components
const StyledForecastItem = styled(Box)({
  textAlign: "center",
  padding: theme.spacing(1),
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: theme.shape.borderRadius, // Rounded corners
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)", // Subtle box shadow for depth
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out", // Smooth transition for hover effect
  "&:hover": {
    transform: "scale(1.05)", // Slightly enlarge on hover
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)", // Increase shadow on hover
  },
});

interface ForecastItemProps {
  day: string;
  temperature: string;
}

export const ForecastItem: React.FC<ForecastItemProps> = ({
  day,
  temperature,
}) => {
  return (
    <StyledForecastItem>
      <Typography variant="subtitle2">{day}</Typography>
      <Typography variant="body1">{temperature}</Typography>
    </StyledForecastItem>
  );
};
