module.exports = {
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  testEnvironment: "jsdom",
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,jsx}"],
  coverageDirectory: "coverage",
  coverageReporters: ["json", "lcov", "text", "clover"],
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy",
  },
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
};
