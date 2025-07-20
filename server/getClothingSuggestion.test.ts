
const mockInvoke = jest.fn().mockResolvedValue("Wear a jacket.");

jest.mock("@langchain/openai", () => ({
  OpenAI: jest.fn().mockImplementation(() => ({
    invoke: mockInvoke,
  })),
}));

import { OpenAI } from "@langchain/openai";
import { getClothingSuggestion } from "./utils/getClothingSuggestion";

describe("getClothingSuggestion", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    process.env.OPENAI_MODEL = "gpt-4o-mini";
  });

  it("returns the suggestion from the OpenAI model", async () => {
    const result = await getClothingSuggestion("Tell me what to wear");
    expect(result).toBe("Wear a jacket.");
    expect(OpenAI).toHaveBeenCalledWith({ modelName: "gpt-4o-mini", temperature: 0.2 });
    expect(mockInvoke).toHaveBeenCalledWith("Tell me what to wear");
  });
});
