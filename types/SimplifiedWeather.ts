export interface SimplifiedWeather {
  /** Temperature in degrees Celsius */
  temperature: number;
  /** Main weather condition, e.g. "Clouds" */
  condition: string;
  /** More detailed description of the condition */
  description?: string;
  /** Icon code from the API, if available */
  icon?: string;
  /** Relative humidity percentage */
  humidity: number;
  /** Atmospheric pressure in hPa */
  pressure: number;
  /** Wind speed in meters per second */
  windSpeed: number;
  /** Wind direction in degrees */
  windDirection: number;
  /** Rain volume for the last 3 hours in mm, if provided */
  rainVolume?: number;
}
