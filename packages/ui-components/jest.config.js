/** @type {import('ts-jest').JestConfigWithTsJest} **/

export default {
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  transform: {
    '^.+.tsx?$': ['ts-jest', {}],
  },
  setupFilesAfterEnv: ['<rootDir>/test/setupTests.ts'],
};
