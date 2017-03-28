const inquirer = require('inquirer');

const prompt = inquirer.createPromptModule();
const getRegistry = require('./get');
const setRegistry = require('./set');

function* switchRegistry(options) {
  const currentRegistry = yield getRegistry(options);

  const registries = require('./../../registries.json').registries;

  const selector = yield prompt({
    type: 'list',
    name: 'value',
    message: `Current registry: ${currentRegistry.blue}\n  Select a registry to set or Cancel(CTRL+C)`,
    choices: registries.map(v => `${v.url.green}(${v.name.yellow})`)
  });

  const target = registries.find(
    v => `${v.url.green}(${v.name.yellow})` === selector.value
  );

  if (!target || !target.url)
    throw new Error(`Invalid registry ${selector.value.red}`);

  yield setRegistry(target.url, options);
}

module.exports = function(options) {
  return switchRegistry(options);
};
