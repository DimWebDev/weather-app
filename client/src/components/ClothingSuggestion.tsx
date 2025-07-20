// src/components/ClothingSuggestion.tsx
import React from "react";
import { CircularProgress, Typography, Box } from "@mui/material";
import styled from "@emotion/styled";
import { theme } from "../utils/theme"; // to reuse theme spacing if desired

interface ClothingSuggestionProps {
  suggestion: string;
  loading: boolean;
  error: Error | null;
}

/* ---------------------------------------------------------------
   Styled wrapper:
   • centres itself
   • gentle blue‑to‑white gradient
   • rounded corners + subtle shadow
   --------------------------------------------------------------- */
const SuggestionBox = styled(Box)({
  maxWidth: 640,
  marginInline: "auto",
  padding: theme.spacing(2.5),
  borderRadius: 12,
  background:
    "linear-gradient(135deg, rgba(226,241,255,0.7) 0%, rgba(255,255,255,0.7) 100%)",
  boxShadow: "0 1px 4px rgba(0,0,0,.08)",
  textAlign: "left",
});

export const ClothingSuggestion: React.FC<ClothingSuggestionProps> = ({
  suggestion,
  loading,
  error,
}) => {
  if (loading)
    return (
      <SuggestionBox my={3}>
        <CircularProgress size={20} />{" "}
        <Typography component="span" sx={{ fontSize: 16, ml: 1 }}>
          Loading clothing advice…
        </Typography>
      </SuggestionBox>
    );

  if (error)
    return (
      <SuggestionBox my={3}>
        <Typography color="error" sx={{ fontSize: 16 }}>
          Clothing advice unavailable.
        </Typography>
      </SuggestionBox>
    );

  if (!suggestion) return null;

  return (
    <SuggestionBox my={3}>
      <Typography
        variant="subtitle1"
        color="primary"
        gutterBottom
        sx={{ fontWeight: 600, fontSize: 18 }}
      >
        Clothing Advice&nbsp;
        <Typography
          component="span"
          variant="caption"
          sx={{ fontStyle: "italic", fontSize: 12 }}
        >
          (AI‑generated)
        </Typography>
      </Typography>

      <Typography variant="body1" sx={{ fontSize: 17, lineHeight: 1.6 }}>
        {suggestion}
      </Typography>
    </SuggestionBox>
  );
};
