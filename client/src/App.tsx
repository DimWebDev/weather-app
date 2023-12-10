import React, { useState, useEffect } from 'react';
import { ThemeProvider, Grid } from "@mui/material";
import { theme } from "./utils/theme";
import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";
import { SideInformation } from "./components/SideInformation";
import { Forecast } from "./components/Forecast";
import { getWeatherData } from './services/weatherService'; // Make sure this import is correct
import { useWeatherData } from './hooks/useWeatherData';



export const App = () => {

  const { weatherData, loading, error } = useWeatherData();

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  
  const sideInformationDetails = weatherData ? {
    sunrise: new Date(weatherData.city.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    sunset: new Date(weatherData.city.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    humidity: weatherData.list[0].main.humidity,
    wind: `${(weatherData.list[0].wind.speed * 3.6).toFixed(1)} km/h`, // Convert m/s to km/h
    pressure: `${weatherData.list[0].main.pressure} mb`,
  } : null;

  const transformWeeklyForecast = (list: WeatherData["list"]) => {
  // This function transforms the raw list of forecast data from the API into a weekly forecast array.
  // The API returns weather data in 3-hour intervals. To create a consistent daily forecast showing 
  // the temperature at 15:00 each day, we filter the raw list. We look for entries where the 'dt_txt' 
  // field ends with "15:00:00", indicating it's the forecast for 3 PM. This time was chosen because 
  // it typically represents the temperature during the warmest part of the day, which is useful for 
  // a general daily forecast. Once we have this filtered list, we map over it to extract and format 
  // the day of the week and temperature, ensuring that we only include these specific time points for 
  // our 5-day forecast.
    const dailyForecastsAt15 = list.filter(item => item.dt_txt.endsWith("15:00:00"));
  
    // Convert this filtered list into the format needed for the Forecast component
    const weeklyForecast = dailyForecastsAt15.map((item) => ({
      // Convert the Unix timestamp to a readable date string for the day of the week
      day: new Date(item.dt * 1000).toLocaleDateString("en-US", { weekday: "long" }),
      // Temperature is already provided in Celsius according to your API response
      temperature: `${item.main.temp.toFixed(1)}°C`,
      icon: item.weather[0].icon
    }));
  
    // Return only the next 5 entries (5 days forecast)
    return weeklyForecast.slice(0, 5);
  };
  

  if (!weatherData || !sideInformationDetails) {
    return <div>Loading...</div>;
  }

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
          {/* Update this to pass the correct details */}
             <SideInformation details={sideInformationDetails} />
        </Grid>
  
        {/* Update this to pass the correct weekly forecast data */}
        <Grid item xs={12}>
        <Forecast weeklyForecast={transformWeeklyForecast(weatherData.list)} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
