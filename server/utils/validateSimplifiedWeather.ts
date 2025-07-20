import { z } from "zod";
import { SimplifiedWeather } from "../../types/SimplifiedWeather";

/**
 * Zod schema for runtime validation of SimplifiedWeather data.
 */
export const SimplifiedWeatherSchema = z.object({
  temperature: z.number(),
  condition: z.string(),
  description: z.string().optional(),
  icon: z.string().optional(),
  humidity: z.number(),
  pressure: z.number(),
  wind: z.object({
    speed: z.number(),
    direction: z.number(),
  }),
  rainVolume: z.number().optional(),
});

/**
 * Validate unknown input as SimplifiedWeather.
 * Throws a ZodError if validation fails.
 */
export function validateSimplifiedWeather(data: unknown): SimplifiedWeather {
  return SimplifiedWeatherSchema.parse(data);
}
