import React from "react";
import { CircularProgress, Typography, Box } from "@mui/material";

interface ClothingSuggestionProps {
  suggestion: string;
  loading: boolean;
  error: Error | null;
}

/**
 * Displays clothing suggestion with loading and error states.
 */
export const ClothingSuggestion: React.FC<ClothingSuggestionProps> = ({
  suggestion,
  loading,
  error,
}) => {
  if (loading) return <Box my={2}><CircularProgress size={20} /> Loading clothing advice...</Box>;
  if (error) return <Box my={2}><Typography color="error">Clothing advice unavailable.</Typography></Box>;
  if (!suggestion) return null;
  return (
    <Box my={2}>
      <Typography variant="subtitle1" color="primary">
        Clothing Advice:
      </Typography>
      <Typography variant="body1">{suggestion}</Typography>
    </Box>
  );
};
