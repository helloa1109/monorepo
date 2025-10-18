module.exports = {
  extends: ['../../tools/eslint-config'],
  rules: {
    // UI package specific rules
    'react/prop-types': 'off', // Using TypeScript for prop validation
  },
};
