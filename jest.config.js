module.exports = {
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
  ],
  moduleNameMapper: {
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/mocks/fileMock.ts",
    "\\.(css|less)$": "<rootDir>/src/mocks/fileMock.ts",
    "@/(.*)": "<rootDir>/src/$1",
    "@public/(.*)": "<rootDir>/public/$1",
  }
};
