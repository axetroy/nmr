const process = require('process');
const path = require('path');

// 3th lib
const program = require('caporal');
const co = require('co');
require('colors');

const pkg = require(path.join(__dirname, '../package.json'));

process.on('unhandledRejection', function(err) {
  console.error(err);
});

process.on('uncaughtException', function(err) {
  console.error(err);
});

process.on('warning', warning => {
  console.warn(warning.name); // Print the warning name
  console.warn(warning.message); // Print the warning message
  console.warn(warning.stack); // Print the stack trace
});

program.version(pkg.version).description(pkg.description);

program.action(function(argv, options) {
  co(require('./commands/switch')()).catch(function(err) {
    console.error(err);
  });
});

program
  .command('set <registry>')
  .alias('s')
  .description('set registry')
  .action(function(argv, options) {
    co(require('./commands/set')(argv.registry, options)).catch(function(err) {
      console.error(err);
    });
  });

program
  .command('get')
  .alias('g')
  .description('get registry')
  .action(function(argv, options) {
    co(require('./commands/get')(options))
      .then(function(registry) {
        process.stdout.write(registry + '\n');
      })
      .catch(function(err) {
        console.error(err);
      });
  });

program
  .command('reset')
  .alias('r')
  .description('reset to npm official registry')
  .option('--cn, --taobao', 'reset to taobao official npm mirror registry')
  .action(function(argv, options) {
    co(require('./commands/reset')(options)).catch(function(err) {
      console.error(err);
    });
  });

program
  .command('list')
  .alias('ls')
  .description('print out the registries')
  .action(function(argv, options) {
    co(require('./commands/list')(options)).catch(function(err) {
      console.error(err);
    });
  });

program
  .command('switch')
  .alias('sw')
  .description('switch the npm registry')
  .action(function(argv, options) {
    co(require('./commands/switch')(options)).catch(function(err) {
      console.error(err);
    });
  });

program.parse(process.argv);
