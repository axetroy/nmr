/**
 * Created by axetroy on 2017/2/26.
 */
const process = require('process');
function* printRegistries(options) {

  const registries = require('./../../registries.json').registries;

  registries.forEach((v, i) => process.stdout.write(v.url + (i !== registries.length - 1 ? '\n' : '')));
  return registries.map(v => v.url);
}

module.exports = function (options) {
  return printRegistries(options);
};