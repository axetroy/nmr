/**
 * Created by axetroy on 2017/2/25.
 */
const setRegistry = require('./set');
const registries = require('./../../registries.json').registries;

module.exports = function (options) {
  const defaultRegistry = registries.find(v => v.default);
  return setRegistry((defaultRegistry || registries[0]).url, options);
};