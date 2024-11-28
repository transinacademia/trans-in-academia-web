// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  rules: {
    // JavaScript Rules
    eqeqeq: ['error', 'always'], // Require === and !==
    curly: ['error', 'all'], // Require braces around all control blocks
    'no-implicit-coercion': 'error', // Disallow shorthand type conversions
    'no-var': 'error', // Require let or const instead of var
    'prefer-const': 'error', // Prefer const over let when possible
  },
});
// Your custom configs here
