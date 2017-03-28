/**
 * Created by axetroy on 2017/2/25.
 */
const { spawn } = require('../utils');
const getRegistry = require('./get');

function* setRegistry(url, options) {
  if (!/^https?:\/\//.test(url))
    throw new Error(
      `Invalid registry url ${url}, Must be a full url with 'http://'`
    );
  const originRegistry = yield getRegistry();
  yield spawn('npm', ['config', 'set', 'registry', url]);
  process.stdout.write(
    `Set npm registry: ${originRegistry.yellow} >>> ${url.green}\n`
  );
}

module.exports = function(url, options) {
  return setRegistry(url, options);
};
