import React from "react";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { theme } from "../utils/theme";

const StyledMainContentBox = styled(Box)`
  text-align: center;
  height: 400px;
  border-left: 4px solid ${theme.palette.primary.main};
  border-top: 4px solid ${theme.palette.primary.main};
  border-radius: 4px;
  background-color: ${theme.palette.background.default};
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
  iconCode: string; // Add iconCode prop
}

export const MainContent: React.FC<MainContentProps> = ({
  condition,
  temperature,
  iconCode,
}) => {
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`; // Construct the icon URL

  return (
    <StyledMainContentBox>
      <StyledIcon src={iconUrl} alt={condition} />
      <Typography variant="h2">{temperature}</Typography>
      <Typography variant="subtitle1">{condition}</Typography>
    </StyledMainContentBox>
  );
};
