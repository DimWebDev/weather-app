import React from "react";
import { Typography, Box } from "@mui/material";

interface HeaderProps {
  city: string;
  date: string; // You can pass a Date object and format it as needed
}

export const Header: React.FC<HeaderProps> = ({ city, date }) => {
  return (
    <Box
      sx={{
        padding: 2,
        backgroundColor: "primary.main",
        color: "primary.contrastText",
      }}
    >
      <Typography variant="h4">{city}</Typography>
      <Typography variant="subtitle1">{date}</Typography>
    </Box>
  );
};
