const process = require('process');
const path = require('path');

// 3th lib
const program = require('commander');
const co = require('co');


const pkg = require(path.join(__dirname, '../package.json'));

function bootstrapWrapper(func) {
  return function () {
    program.__bootstrap__ = true;
    func.apply(this, arguments);
  }
}

process.on('unhandledRejection', function (err) {
  console.error(err);
});

process.on('uncaughtException', function (err) {
  console.error(err);
});

process.on('warning', (warning) => {
  console.warn(warning.name);    // Print the warning name
  console.warn(warning.message); // Print the warning message
  console.warn(warning.stack);   // Print the stack trace
});

program
  .version(pkg.version)
  .description(pkg.description)
  .usage('<command> [options]');

program
  .command('set <registry>')
  .alias('s')
  .description('set registry')
  .action(bootstrapWrapper(function (registry, options) {
    co(require('./commands/set')(registry, options))
      .catch(function (err) {
        console.error(err);
      });
  }));

program
  .command('get')
  .alias('g')
  .description('get registry')
  .action(bootstrapWrapper(function (options) {
    co(require('./commands/get')(options))
      .then(function (registry) {
        process.stdout.write(registry + '\n');
      })
      .catch(function (err) {
        console.error(err);
      });
  }));

program
  .command('reset')
  .alias('r')
  .description('reset to npm official registry')
  .action(bootstrapWrapper(function (options) {
    co(require('./commands/reset')(options))
      .catch(function (err) {
        console.error(err);
      });
  }));

program.parse(process.argv);

if (!program.args.length) {
  return co(require('./commands/switch')())
    .catch(function (err) {
      console.error(err);
    });
}

if (program.args.length && !program.__bootstrap__) program.help();