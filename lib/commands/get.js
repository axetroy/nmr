/**
 * Created by axetroy on 2017/2/25.
 */
const {spawn} = require('../utils');

function* getRegistry(options) {
  return yield spawn('npm', ['config', 'get', 'registry']);
}

module.exports = function (options) {
  return getRegistry(options);
};