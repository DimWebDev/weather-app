import axios from 'axios';

  export const getWeatherData = async (latitude: number, longitude: number): Promise<WeatherData> => {
    try {
      const response = await axios.get<WeatherData>(`/forecast?lat=${latitude}&lon=${longitude}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching weather data", error);
      throw error;
    }
  };
  
