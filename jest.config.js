/** @type {import('ts-jest').JestConfigWithTsJest} **/

export default {
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  transform: {
    '^.+.tsx?$': ['ts-jest', {}],
  },
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/test/jest.setup.ts'],
  coverageReporters: ['json-summary', 'text', 'lcov', 'clover', 'cobertura'],
};
