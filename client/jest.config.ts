export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: [],
  moduleNameMapper: {},
  transform: {
    "^.+\\.(ts|tsx)?$": ["ts-jest", { tsconfig: "<rootDir>/tsconfig.json" }],
  },
  testMatch: ["**/?(*.)+(spec|test).(ts|tsx)"],
};
