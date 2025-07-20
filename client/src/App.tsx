import { ThemeProvider, Grid } from "@mui/material";
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

export const App = () => {
  const { weatherData, loading, error } = useWeatherData();

  // Fetch clothing suggestion based on current weather
  const { suggestion: clothingSuggestion, loading: clothingLoading, error: clothingError } = useClothingSuggestion(weatherData);

  if (!weatherData) {
    return <div>Loading...</div>;
  }
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Use the utility function to create side information details
  const sideInformationDetails = createSideInformationDetails(weatherData);

  // Use the utility function to transform the forecast data
  const weeklyForecast = transformWeeklyForecast(weatherData.list);

  return (
    <ThemeProvider theme={theme}>
      <Header
        city={weatherData.city.name}
        date={new Date().toLocaleDateString()}
      />

      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <MainContent
            condition={weatherData.list[0].weather[0].main}
            temperature={`${weatherData.list[0].main.temp.toFixed(1)}°C`} // Temperature already in Celsius. // Temperature is converted to a string here
            iconCode={weatherData.list[0].weather[0].icon}
          />

          {/* Render clothing suggestion below main weather info */}
          <ClothingSuggestion
            suggestion={clothingSuggestion}
            loading={clothingLoading}
            error={clothingError}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <SideInformation details={sideInformationDetails} />
        </Grid>
        <Grid item xs={12}>
          <Forecast weeklyForecast={weeklyForecast} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
