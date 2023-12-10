import axios from 'axios';


// interface WeatherData {
//     city: {
//       name: string;
//       sunrise: number; // Unix timestamp of the sunrise
//       sunset: number; // Unix timestamp of the sunset
//     };
//     list: Array<{
//       dt: number; // Unix timestamp for the forecast time
//       main: {
//         temp: number; // Temperature in Kelvin
//         humidity: number; // Humidity percentage
//         pressure: number; // Atmospheric pressure in hPa
//       };
//       weather: Array<{
//         main: string; // Group of weather parameters (Rain, Snow, etc.)
//         description?: string; // description to use in order to iplement icons
//         icon: string; // Icon code
//       }>;
//       wind: {
//         speed: number; // Wind speed in meter/sec
//         deg: number; // Wind direction in degrees
//       };
//       dt_txt: string; // Date and time of the forecast in text format
//     }>;
//     // Add other properties only if you need them
//   }

  export const getWeatherData = async (latitude: number, longitude: number): Promise<WeatherData> => {
    try {
      const response = await axios.get<WeatherData>(`/forecast?lat=${latitude}&lon=${longitude}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching weather data", error);
      throw error;
    }
  };
  
