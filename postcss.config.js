const hexrgba = require('postcss-hexrgba');
const cssvars = require('postcss-simple-vars');

module.exports = {
  "plugins": {
    "autoprefixer": {
      "grid": true
    },
    "postcss-simple-vars": {},
    "postcss-hexrgba": {}
  }
}
