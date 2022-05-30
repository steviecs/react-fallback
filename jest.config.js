// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  moduleFileExtensions: [
    "js",
    "ts",
    "jsx",
    "tsx"
  ],
  testEnvironment: 'node',
  testMatch: ['**/*.test.[jt]s?(x)'],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
};
