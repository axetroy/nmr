/**
 * Created by axetroy on 17-2-14.
 */
const process = require('process');
const Promise = require('bluebird');
const spawn = require('cross-spawn');

function spawnShell(commander, argv, config) {
  return new Promise(function(resolve, reject) {
    let data = '';

    let child = spawn(commander, argv, config);

    child.stdout.on('data', function(buf) {
      data += buf;
    });

    child.on('error', err => {
      reject(err instanceof Error ? err : new Error(err));
      process.exit(1);
    });

    child.on('exit', (code, signal) => {
      code === 0
        ? resolve(data)
        : reject(new Error(`Error Code: ${code}, Exist Signal: ${signal}`));
    });
  });
}

module.exports = {
  spawn: spawnShell
};
