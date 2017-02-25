# npm-registry-switch

[![Build Status](https://travis-ci.org/axetroy/npm-registry-switch.svg?branch=master)](https://travis-ci.org/axetroy/npm-registry-switch)
[![Dependency](https://david-dm.org/axetroy/npm-registry-switch.svg)](https://david-dm.org/axetroy/npm-registry-switch)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Node](https://img.shields.io/badge/node-%3E=6.9-blue.svg?style=flat-square)

a cli tool to get/set/switch npm registry

![](https://raw.githubusercontent.com/axetroy/npm-registry-switch/master/screenshot.png)

## Requirement

- nodejs>=6.9
- npm

## Supports

- [x] Windows
- [x] Linux
- [x] MacOS

## Installation

```bash
npm install @axetroy/npm-registry-switch -g
```

## Usage

### Command line

```bash
npm-registry-switch -h

  Usage: npm-registry-switch <command> [options]


  Commands:

    set|s <registry>  set registry
    get|g             get registry
    reset|r           reset to npm official registry

  Switch npm registry in a easy way

  Options:

    -h, --help     output usage information
    -V, --version  output the version number

```

### Nodejs

```javascript
const co = require('co');
const npmRegistrySwitch = require('@axetroy/npm-registry-switch');

co(function*() {
  yield npmRegistrySwitch.get();    // https://registry.npmjs.org
  yield npmRegistrySwitch.set("https://registry.npm.taobao.org");
  yield npmRegistrySwitch.get();    // https://registry.npm.taobao.org
  yield npmRegistrySwitch.reset();
  yield npmRegistrySwitch.get();    // https://registry.npmjs.org
}).catch(function(err) {
  console.error(err);
})
```

## Why I need this module

Cause i hate type ``npm config set registry https://xxxxxxxx``
npm's network is terrible, we gonna set the mirror registry like cnpm in China.

but, if we set mirror registry, then i can't use npm service anymore, like ``npm publish, npm whoami, npm login``

if you want use it agian, you gonna set to npm official registry.

such as said, I hate type ``npm config set registry https://xxxxxxxx``

## Contribute

```bash
git clone https://github.com/axetroy/npm-registry-switch.git
cd ./npm-registry-switch
yarn
./bin/npm-registry-switch
```

You can flow [Contribute Guide](https://github.com/axetroy/npm-registry-switch/blob/master/contributing.md)

## License

The [MIT License](https://github.com/axetroy/npm-registry-switch/blob/master/LICENSE)