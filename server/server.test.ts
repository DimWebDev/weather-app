import request from "supertest";
import { describe, it, expect, jest } from "@jest/globals";
import app from "./server";

// Mock the axios.get method before importing the actual server file
jest.mock("axios", () => ({
  get: jest.fn(() => Promise.resolve({ data: { forecast: "sunny" } })),
}));

describe("Weather API Server", () => {
  it('GET / should return "Weather API"', async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain("Weather API");
  });

  it("GET /forecast should return weather data", async () => {
    const res = await request(app)
      .get("/forecast")
      .query({ lat: "35", lon: "139" }); // Use example coordinates or mock coordinates

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("forecast");
    expect(res.body.forecast).toEqual("sunny");
  });
});
