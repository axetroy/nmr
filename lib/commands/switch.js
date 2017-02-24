const inquirer = require('inquirer');

const prompt = inquirer.createPromptModule();
const getRegistry = require('./get');
const setRegistry = require('./set');

function* switchRegistry(options) {

  const registries = require('./../../registries.json').registries;

  const selector = yield prompt({
    type: 'list',
    name: 'value',
    message: `Select a registry to set`,
    choices: registries.map(v => `${v.url}(${v.name})`)
  });

  const target = registries.find(v => `${v.url}(${v.name})` === selector.value);

  if (!target || !target.url) throw new Error(`Invalid registry ${selector.value}`);

  const originRegistry = yield getRegistry();
  yield setRegistry(target.url);
  console.log(`Set npm registry: ${originRegistry.green} >>> ${target.url.green}`);
}

module.exports = function (options) {
  return switchRegistry(options);
};