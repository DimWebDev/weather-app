import React from "react";
import { Typography, Box } from "@mui/material";
import styled from "@emotion/styled";
import { theme } from "../utils/theme"; // Import the theme directly

// Define the styled component for the header using the directly imported theme
const StyledHeaderBox = styled(Box)({
  padding: theme.spacing(2),
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  display: "flex", // Use flexbox for layout
  flexDirection: "column", // Stack items vertically
  alignItems: "center", // Center items horizontally
  justifyContent: "center", // Center items vertically
  textAlign: "center", // Center text alignment
});

interface HeaderProps {
  city: string;
  date: string; // You can pass a Date object and format it as needed
}

export const Header: React.FC<HeaderProps> = ({ city, date }) => {
  return (
    <StyledHeaderBox>
      <Typography variant="h4">{city}</Typography>
      <Typography variant="subtitle1">{date}</Typography>
    </StyledHeaderBox>
  );
};
