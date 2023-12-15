export default {
  preset: "ts-jest",
  clearMocks: true,
  coverageDirectory: "coverage",
  testEnvironment: "node",
  testMatch: ["**/?(*.)+(spec|test).ts"],
};
