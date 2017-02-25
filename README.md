# Npm Mirror Registry

[![Build Status](https://travis-ci.org/axetroy/nmr.svg?branch=master)](https://travis-ci.org/axetroy/nmr)
[![Dependency](https://david-dm.org/axetroy/nmr.svg)](https://david-dm.org/axetroy/nmr)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Node](https://img.shields.io/badge/node-%3E=6.9-blue.svg?style=flat-square)

a cli tool to get/set/switch npm registry

![](https://raw.githubusercontent.com/axetroy/nmr/master/screenshot.png)

## Requirement

- nodejs>=6.9
- npm

## Supports

- [x] Windows
- [x] Linux
- [x] MacOS

## Installation

```bash
npm install @axetroy/nmr -g
```

## Usage

### Command line

```bash
nmr -h

  Usage: nmr <command> [options]


  Commands:

    set|s <registry>    set registry
    get|g               get registry
    reset|r [options]   reset to npm official registry

  Switch npm registry in a easy way

  Options:

    -h, --help     output usage information
    -V, --version  output the version number

```

### Nodejs

```javascript
const co = require('co');
const npmRegistrySwitch = require('@axetroy/nmr');

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
git clone https://github.com/axetroy/nmr.git
cd ./nmr
yarn
./bin/nmr
```

You can flow [Contribute Guide](https://github.com/axetroy/nmr/blob/master/contributing.md)

## License

The [MIT License](https://github.com/axetroy/nmr/blob/master/LICENSE)