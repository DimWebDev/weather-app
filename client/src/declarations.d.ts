declare module "*.svg" {
  const content: any;
  export default content;
}



declare global {
  interface WeatherData {
    city: {
      name: string;
      sunrise: number;
      sunset: number;
    };
    list: Array<{
      dt: number;
      main: {
        temp: number;
        humidity: number;
        pressure: number;
      };
      weather: Array<{
        main: string;
        description?: string;
        icon: string;
      }>;
      wind: {
        speed: number;
        deg: number;
      };
      dt_txt: string;
    }>;
// The WeatherData interface currently includes only a subset of the properties available in the API response.
// You should extend this interface to include additional properties as needed for new features. For a complete
// list of available data points and detailed information about each one, refer to the OpenWeatherMap 5-day forecast
// API documentation. This documentation is essential for understanding the data structure and scaling the application
// to incorporate more comprehensive weather details. The API offers a wide range of weather information that can be
// utilized to enhance the app's functionality and user experience.
// API Documentation: https://openweathermap.org/forecast5
  }
}

export {};
