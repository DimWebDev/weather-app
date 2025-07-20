// src/components/MainContent.tsx
import React from "react";
import { Typography, Paper } from "@mui/material";
import { styled, keyframes } from "@mui/system";
import { theme } from "../utils/theme";

/* ------------------------------------------------------------------
   Weather → background map
   ------------------------------------------------------------------ */
const conditionBackground: Record<string, string> = {
  Clear: "linear-gradient(135deg,#ffe082 0%, #ffd54f 100%)",
  Clouds: "linear-gradient(135deg,#cfd8dc 0%, #eceff1 100%)",
  Rain: "linear-gradient(135deg,#90caf9 0%, #e3f2fd 100%)",
  Thunderstorm: "linear-gradient(135deg,#616161 0%, #9e9e9e 100%)",
  Snow: "linear-gradient(135deg,#ffffff 0%, #e1f5fe 100%)",
  default: "linear-gradient(135deg,#e3f2fd 0%, #bbdefb 100%)",
};

/* ------------------------------------------------------------------
   Styled components
   ------------------------------------------------------------------ */
const float = keyframes`
  0%   { transform: translateY(0); }
  50%  { transform: translateY(-6px); }
  100% { transform: translateY(0); }
`;

const Root = styled(Paper)<{ bg: string }>(({ bg }) => ({
  background: bg,
  textAlign: "center",
  padding: theme.spacing(4, 2),
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2],
  transition: "transform .25s",
  "&:hover": {
    transform: "translateY(-4px)",
  },
}));

const Icon = styled("img")({
  width: 140,
  height: 140,
  animation: `${float} 6s ease-in-out infinite`,
  userSelect: "none",
});

/* ------------------------------------------------------------------
   Component
   ------------------------------------------------------------------ */
interface MainContentProps {
  condition: string;
  temperature: string;
  iconCode: string;
}

export const MainContent: React.FC<MainContentProps> = ({
  condition,
  temperature,
  iconCode,
}) => {
  const bg =
    conditionBackground[condition as keyof typeof conditionBackground] ??
    conditionBackground.default;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

  return (
    <Root bg={bg}>
      <Icon src={iconUrl} alt={condition} loading="lazy" />
      <Typography variant="h2" sx={{ mt: 1 }}>
        {temperature}
      </Typography>
      <Typography variant="subtitle1">{condition}</Typography>
    </Root>
  );
};
