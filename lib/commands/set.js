/**
 * Created by axetroy on 2017/2/25.
 */
const {spawn} = require('../utils');

function* setRegistry(url, options) {
  return yield spawn('npm', ['config', 'set', 'registry', url]);
}

module.exports = function (url, options) {
  return setRegistry(url, options);
};