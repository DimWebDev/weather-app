import React from "react";
import { Box, Typography } from "@mui/material";
import SunnyWeatherIcon from "../assets/icons/sunny-weather.svg";
import styled from "@emotion/styled";

const StyledIcon = styled("img")`
  width: 100px;
  height: auto;
`;

interface MainContentProps {
  condition: string;
  temperature: string;
  iconCode: string; // Icon code to select the right weather icon
}

export const MainContent: React.FC<MainContentProps> = ({
  condition,
  temperature,
  iconCode,
}) => {
  // You can use a function or a mapping to select the correct icon based on iconCode
  // For example:
  //   const weatherIcon = iconCode === "01d" ? SunnyWeatherIcon : "default_icon";

  return (
    <Box sx={{ textAlign: "center" }}>
      {/* Here you can use an img tag to display the icon */}
      <StyledIcon src={SunnyWeatherIcon} alt="Sunny Weather" />
      <Typography variant="h2">{temperature}</Typography>
      <Typography variant="subtitle1">{condition}</Typography>
    </Box>
  );
};
