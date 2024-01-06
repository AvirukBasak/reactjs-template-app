module.exports = {
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "ts-jest",
  },
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
  ],
};
