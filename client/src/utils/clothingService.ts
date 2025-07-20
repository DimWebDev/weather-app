import axios from 'axios';
// Reuse the shared SimplifiedWeather interface from the root types folder
import { SimplifiedWeather } from '../../../types/SimplifiedWeather';

/**
 * Request a clothing suggestion from the API based on weather data.
 * @param weather SimplifiedWeather object describing current conditions.
 * @returns Promise resolving to the suggestion text from the server.
 */
export const getClothingSuggestion = async (
  weather: SimplifiedWeather
): Promise<string> => {
  try {
    const response = await axios.post<{ suggestion: string }>(
      '/suggest-clothing',
      weather
    );
    return response.data.suggestion;
  } catch (error) {
    console.error('Error fetching clothing suggestion', error);
    throw error;
  }
};
