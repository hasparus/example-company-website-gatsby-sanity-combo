const path = require('path')

module.exports = {
  parserOptions: {
    ecmaVersion: 2017
  },
  env: {
    node: true,
    es6: true
  },
  extends: ['eslint:recommended', 'plugin:import/errors', 'plugin:import/warnings'],
  rules: {
    'react/prop-types': 0
  }
}
