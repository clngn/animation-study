/* eslint "import/no-extraneous-dependencies": 0 */

const cssnext = require('postcss-cssnext');
const browserReporter = require('postcss-browser-reporter');
const reporter = require('postcss-reporter');

module.exports = {
  plugins: [
    cssnext(),
    browserReporter(),
    reporter(),
  ],
};
