module.exports = {
  extends: ['../../tools/eslint-config'],
  rules: {
    // Storybook specific rules
    'react/no-unescaped-entities': 'off',
    'import/no-anonymous-default-export': 'off',
  },
};
