module.exports = {
  root: true,
  extends: ['./tools/eslint-config'],
  ignorePatterns: [
    'node_modules/',
    'dist/',
    'build/',
    '.next/',
    'storybook-static/',
    'apps/*/node_modules/',
    'packages/*/node_modules/',
  ],
};
