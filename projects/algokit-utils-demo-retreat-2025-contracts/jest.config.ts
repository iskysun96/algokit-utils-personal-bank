/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */
import type { Config } from 'jest'

const config: Config = {
  preset: 'ts-jest',
  verbose: true,
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testPathIgnorePatterns: ['node_modules', '.venv', 'coverage'],
  testTimeout: 20000,
  // Setup files to handle BigInt serialization
  setupFiles: ['./jest.setup.js'],
}
export default config
