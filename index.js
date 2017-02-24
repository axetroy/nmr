/**
 * Created by axetroy on 2017/2/25.
 */
const co = require('co');

function get(options) {
  return co(require('./lib/commands/get')(options));
}

function set(url, options) {
  return co(require('./lib/commands/set')(url, options));
}

function reset(options) {
  return co(require('./lib/commands/reset')(options));
}

module.exports = {
  get,
  set,
  reset
};