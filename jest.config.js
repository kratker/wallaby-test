"use strict";
module.exports = {
    resetMocks: false,
    clearMocks: true,
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100,
        },
    },
    collectCoverage:true,
    coveragePathIgnorePatterns: [
        "<rootDir>/node_modules/",
    ],
    preset: 'ts-jest',
    testMatch:['**/*.test.ts'],
    testEnvironment: 'node',
    /*transform: {
        '^.+\\.ts?$': 'ts-jest',
    },*/
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
};
