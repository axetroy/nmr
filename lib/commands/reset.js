/**
 * Created by axetroy on 2017/2/25.
 */
const setRegistry = require('./set');
const registries = require('./../../registries.json').registries;

module.exports = function (options) {

  let defaultRegistry;
  if (options.taobao) {
    defaultRegistry = registries.find(v => v.default && v.tag == "taobao");
  } else {
    defaultRegistry = registries.find(v => v.default && v.tag == "npm");
  }
  return setRegistry((defaultRegistry || registries[0]).url, options);
};