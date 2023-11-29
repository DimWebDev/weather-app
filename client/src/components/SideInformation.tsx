import React from "react";
import { Box, Typography, List, ListItem } from "@mui/material";
import styled from "@emotion/styled";
import { theme } from "../utils/theme"; // Import the theme directly

// Define the styled component for the forecast item using the directly imported theme, due to error encountered by using the ThemeProvider with Material UI and Emotion Styled Components
const StyledSideInformationBox = styled(Box)`
  text-align: center;
  height: 300px;
  border-left: 4px solid ${theme.palette.primary.main};
  border-top: 4px solid ${theme.palette.primary.main};
  border-radius: 4px;
  background-color: ${theme.palette.background.paper};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), -4px 0 8px rgba(0, 0, 0, 0.2);
  margin: ${theme.spacing(2)};
`;

interface SideInformationProps {
  details: {
    sunrise: string;
    sunset: string;
    humidity: number;
    wind: string; // e.g., "10 km/h North-East"
    pressure: string; // e.g., "1023 mb"
  };
}

export const SideInformation: React.FC<SideInformationProps> = ({
  details,
}) => {
  return (
    <StyledSideInformationBox>
      <List>
        {Object.entries(details).map(([key, value]) => (
          <ListItem key={key}>
            <Typography variant="body1">
              {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
            </Typography>
          </ListItem>
        ))}
      </List>
    </StyledSideInformationBox>
  );
};
