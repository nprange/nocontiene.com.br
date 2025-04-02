import nextJest from 'next/jest.js';
import type { Config } from '@jest/types';

const createJestConfig = nextJest({
  dir: '.',
});

const jestConfig: Config.InitialOptions = {
  preset: 'ts-jest',
  moduleDirectories: ['node_modules', '<rootDir>'],
  testTimeout: 60000,
};

export default createJestConfig(jestConfig);
