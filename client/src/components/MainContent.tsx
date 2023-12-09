import React from "react";
import { Box, Typography } from "@mui/material";
import SunnyWeatherIcon from "../assets/icons/sunny-weather.svg";
import styled from "@emotion/styled";
import { theme } from "../utils/theme"; // Import the theme directly

// Define the styled component for the forecast item using the directly imported theme, due to error encountered by using the ThemeProvider with Material UI and Emotion Styled Components
const StyledMainContentBox = styled(Box)`
  text-align: center;
  height: 300px;
  border-left: 4px solid ${theme.palette.primary.main};
  border-top: 4px solid ${theme.palette.primary.main};
  border-radius: 4px;
  background-color: ${theme.palette.background.paper};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), -4px 0 8px rgba(0, 0, 0, 0.2);
  margin: ${theme.spacing(2)};
`;

const StyledIcon = styled("img")`
  width: 200px;
  height: auto;
`;

interface MainContentProps {
  condition: string;
  temperature: string;

}

export const MainContent: React.FC<MainContentProps> = ({
  condition,
  temperature,

}) => {
  return (
    <StyledMainContentBox>
      <StyledIcon src={SunnyWeatherIcon} alt="Sunny Weather" />
      <Typography variant="h2">{temperature}</Typography>
      <Typography variant="subtitle1">{condition}</Typography>
    </StyledMainContentBox>
  );
};
