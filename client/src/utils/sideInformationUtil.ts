export const createSideInformationDetails = (weatherData: WeatherData) => {
  return {
    sunrise: new Date(weatherData.city.sunrise * 1000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
    sunset: new Date(weatherData.city.sunset * 1000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
    humidity: weatherData.list[0].main.humidity,
    wind: `${(weatherData.list[0].wind.speed * 3.6).toFixed(1)} km/h`,
    pressure: `${weatherData.list[0].main.pressure} mb`,
  };
};
