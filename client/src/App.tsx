import { ThemeProvider, Grid } from "@mui/material";
import { theme } from "./utils/theme";
import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";
import { SideInformation } from "./components/SideInformation";
import { Forecast } from "./components/Forecast";
import { useWeatherData } from './hooks/useWeatherData';
import { transformWeeklyForecast } from './utils/forecastUtil';


export const App = () => {

  const { weatherData, loading, error } = useWeatherData();

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  
  // Create side information details
  const sideInformationDetails = {
    sunrise: new Date(weatherData.city.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    sunset: new Date(weatherData.city.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    humidity: weatherData.list[0].main.humidity,
    wind: `${(weatherData.list[0].wind.speed * 3.6).toFixed(1)} km/h`, // Convert m/s to km/h
    pressure: `${weatherData.list[0].main.pressure} mb`,
  };

  // Use the utility function to transform the forecast data
  const weeklyForecast = transformWeeklyForecast(weatherData.list);

  return (
    <ThemeProvider theme={theme}>
      <Header city={weatherData.city.name} date={new Date().toLocaleDateString()} />
  
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <MainContent
            condition={weatherData.list[0].weather[0].main}
            temperature={`${weatherData.list[0].main.temp.toFixed(1)}°C`} // Temperature already in Celsius
            iconCode={weatherData.list[0].weather[0].icon}
          />
        </Grid>
  
        <Grid item xs={12} md={4}>
             <SideInformation details={sideInformationDetails} />
        </Grid>
        <Grid item xs={12}>
        <Forecast weeklyForecast={transformWeeklyForecast(weatherData.list)} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
