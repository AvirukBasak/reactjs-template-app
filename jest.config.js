module.exports = {
    rootDir: ".",
    roots: ["<rootDir>/src/"],
    preset: "ts-jest",
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
    },
    moduleNameMapper: {
        "@/(.*)": "<rootDir>/src/$1",
        "@public/(.*)": "<rootDir>/public/$1"
    },
}
