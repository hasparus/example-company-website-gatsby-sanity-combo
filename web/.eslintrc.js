const path = require('path')

module.exports = {
  extends: ['eslint:recommended', 'plugin:import/errors', 'plugin:import/warnings'],
  rules: {
    'react/prop-types': 0
  }
}
