module.exports = {
  testMatch: ['**/__tests__/**/*_test.js?(x)'],
  testPathIgnorePatterns: ['node_modules'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass|sss|styl)$':
      '<rootDir>/node_modules/jest-css-modules'
  }
}
