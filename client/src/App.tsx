import { ThemeProvider, Grid } from "@mui/material";
import { theme } from "./utils/theme";
import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";
import { SideInformation } from "./components/SideInformation";
import { Forecast } from "./components/Forecast";

export const App = () => {
  // Updated weather data with mock weekly forecast
  const weatherData = {
    city: "Seattle",
    date: "September 15, Monday",
    current: {
      condition: "Cloudy",
      temperature: "25°C",
      iconCode: "10d", // Replace with your icon code system
    },
    details: {
      sunrise: "7:00",
      sunset: "19:20",
      humidity: 60,
      wind: "10 km/h North-East",
      pressure: "1023 mb",
    },
    weeklyForecast: [
      { day: "Monday", temperature: "20°C" },
      { day: "Tuesday", temperature: "22°C" },
      { day: "Wednsday", temperature: "23°C" },
      { day: "Thursday", temperature: "24°C" },
      { day: "Friday", temperature: "25°C" },
      { day: "Saturday", temperature: "19°C" },
    ],
  };

  return (
    <ThemeProvider theme={theme}>
      <Header city={weatherData.city} date={weatherData.date} />

      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <MainContent {...weatherData.current} />
        </Grid>
        <Grid item xs={12} md={4}>
          <SideInformation details={weatherData.details} />
        </Grid>

        {/* Add the Forecast component here */}
        <Grid item xs={12}>
          <Forecast weeklyForecast={weatherData.weeklyForecast} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default App;
