import request from "supertest";
import { describe, it, expect, jest, beforeEach } from "@jest/globals";
import app from "./server";
import { SimplifiedWeather } from "../types/SimplifiedWeather";

jest.mock("./utils/getClothingSuggestion", () => ({
  getClothingSuggestion: jest.fn(() => Promise.resolve("Wear a coat.")),
}));

jest.mock("./prompts/clothingSuggestion", () => ({
  clothingSuggestionPrompt: { format: jest.fn(() => Promise.resolve("prompt")) },
}));

const validWeather: SimplifiedWeather = {
  temperature: 10,
  condition: "Clouds",
  humidity: 80,
  pressure: 1012,
  wind: { speed: 3, direction: 120 },
};

describe("POST /suggest-clothing", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("returns a suggestion for valid data", async () => {
    const res = await request(app).post("/suggest-clothing").send(validWeather);
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ suggestion: "Wear a coat." });
  });

  it("returns 400 for invalid data", async () => {
    const res = await request(app).post("/suggest-clothing").send({ temp: "hot" });
    expect(res.statusCode).toBe(400);
  });
});
