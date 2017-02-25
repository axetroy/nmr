/**
 * Created by axetroy on 2017/2/25.
 */
const setRegistry = require('./set');
const registries = require('./../../registries.json').registries;

module.exports = function (options) {
  let defaultRegistry = registries.filter(v => v.default);
  if (options.taobao) {
    defaultRegistry = defaultRegistry.find(v => v.tag === "taobao");
  } else {
    defaultRegistry = defaultRegistry.find(v => v.tag === "npm");
  }
  return setRegistry((defaultRegistry || registries[0]).url, options);
};