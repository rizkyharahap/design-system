/** @type {import('jest').Config} */

module.exports = {
  collectCoverageFrom: ["<rootDir>/src/**/*.{js,jsx,ts,tsx}", "!src/**/*.d.ts"],
  resetMocks: true,
  moduleNameMapper: {
    "^~/(.*)$": "<rootDir>/src/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/jest/setupTests.ts"],
  testEnvironment: "jsdom",
  testMatch: ["<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}", "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}"],
  transform: {
    "^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/jest/file-transformer.js",
    "^.+\\.(css|scss|sass|less)$": "<rootDir>/jest/style-transformer.js",
    "^.+\\.(t|j)sx?$": [
      "@swc/jest",
      {
        jsc: {
          transform: {
            react: {
              runtime: "automatic",
            },
          },
        },
      },
    ],
  },
};
