module.exports = {
    roots: ['<rootDir>/src'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    testEnvironment: 'node',
    coverageDirectory: 'coverage',
    coverageProvider: 'babel',
    collectCoverageFrom: [
        '<rootDir>/src/**/*.ts',
        '!<rootDir>/src/index.ts',
        '!<rootDir>/src/app-server.ts',
        '!<rootDir>/src/test-helper/**',
    ],
    coverageThreshold: {
        global: {
            statements: 70,
        },
    },
    testTimeout: 15000,
    globals: {
        'ts-jest': {
            isolatedModules: true,
        },
    },
};
