jest.mock('axios');
import axios from 'axios';
import { getClothingSuggestion } from './clothingService';
import { SimplifiedWeather } from '../../../types/SimplifiedWeather';

describe('getClothingSuggestion', () => {
  const weather: SimplifiedWeather = {
    temperature: 12,
    condition: 'Clouds',
    humidity: 80,
    pressure: 1010,
    wind: { speed: 3, direction: 150 },
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('posts weather data and returns a suggestion', async () => {
    (axios.post as jest.Mock).mockResolvedValue({
      data: { suggestion: 'Wear a coat.' },
    });

    const result = await getClothingSuggestion(weather);

    expect(axios.post).toHaveBeenCalledWith('/suggest-clothing', weather);
    expect(result).toBe('Wear a coat.');
  });

  it('throws when the request fails', async () => {
    const error = new Error('Network error');
    (axios.post as jest.Mock).mockRejectedValue(error);

    await expect(getClothingSuggestion(weather)).rejects.toThrow('Network error');
  });
});
