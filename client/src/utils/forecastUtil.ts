// interface WeatherDataListItem {
//     dt: number;
//     dt_txt: string;
//     main: {
//       temp: number;
//     };
//     weather: Array<{
//       icon: string;
//     }>;
//   }

export const transformWeeklyForecast = (
  list: WeatherDataListItem[]
): { day: string; temperature: string; icon: string }[] => {
  const dailyForecastsAt15 = list.filter((item) =>
    item.dt_txt.endsWith("15:00:00")
  );

  const weeklyForecast = dailyForecastsAt15.map((item) => ({
    day: new Date(item.dt * 1000).toLocaleDateString("en-US", {
      weekday: "long",
    }),
    temperature: `${item.main.temp.toFixed(1)}°C`,
    icon: item.weather[0].icon,
  }));

  return weeklyForecast.slice(0, 5);
};

// The WeatherData interface currently includes only a subset of the properties available in the API response.
// You should extend this interface to include additional properties as needed for new features. For a complete
// list of available data points and detailed information about each one, refer to the OpenWeatherMap 5-day forecast
// API documentation. This documentation is essential for understanding the data structure and scaling the application
// to incorporate more comprehensive weather details. The API offers a wide range of weather information that can be
// utilized to enhance the app's functionality and user experience.
// API Documentation: https://openweathermap.org/forecast5
