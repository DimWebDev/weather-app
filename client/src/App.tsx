// src/App.tsx
import React from "react";
import {
  ThemeProvider,
  Grid,
  Container,
  Box,          // NEW
} from "@mui/material";
import { theme } from "./utils/theme";
import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";
import { SideInformation } from "./components/SideInformation";
import { Forecast } from "./components/Forecast";
import { useWeatherData } from "./hooks/useWeatherData";
import { useClothingSuggestion } from "./hooks/useClothingSuggestion";
import { ClothingSuggestion } from "./components/ClothingSuggestion";
import { transformWeeklyForecast } from "./utils/forecastUtil";
import { createSideInformationDetails } from "./utils/sideInformationUtil";

export const App: React.FC = () => {
  const { weatherData, loading, error } = useWeatherData();

  const {
    suggestion: clothingSuggestion,
    loading: clothingLoading,
    error: clothingError,
  } = useClothingSuggestion(weatherData);

  if (!weatherData || loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const sideInformationDetails = createSideInformationDetails(weatherData);
  const weeklyForecast = transformWeeklyForecast(weatherData.list);

  return (
    <ThemeProvider theme={theme}>
      {/* ------------------------------------------------------------
           SINGLE, CENTRALISED PAGE WRAPPER
         ------------------------------------------------------------ */}
      <Container maxWidth="lg" sx={{ pt: 2, pb: 6 }}>
        {/* Header keeps the full‑width blue bar, but its content is now aligned
            to the same column as everything else. */}
        <Header
          city={weatherData.city.name}
          date={new Date().toLocaleDateString()}
        />

        {/* ------------------ HERO + SIDE PANEL ------------------ */}
        <Box component="section" mt={4}>
          <Grid container spacing={3} alignItems="flex-start">
            <Grid item xs={12} md={7}>
              <MainContent
                condition={weatherData.list[0].weather[0].main}
                temperature={`${weatherData.list[0].main.temp.toFixed(1)}°C`}
                iconCode={weatherData.list[0].weather[0].icon}
              />

              {/* Clothing hint right under the hero card */}
              <Box mt={2}>
                <ClothingSuggestion
                  suggestion={clothingSuggestion}
                  loading={clothingLoading}
                  error={clothingError}
                />
              </Box>
            </Grid>

            <Grid item xs={12} md={5}>
              <SideInformation details={sideInformationDetails} />
            </Grid>
          </Grid>
        </Box>

        {/* ------------------ FIVE‑DAY FORECAST ------------------ */}
        <Box component="section" mt={6}>
          <Forecast weeklyForecast={weeklyForecast} />
        </Box>
      </Container>
    </ThemeProvider>
  );
};
