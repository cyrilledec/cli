## @magic/cli

declarative cli sanitization and execution for [@magic](https://magic.github.io/cli)

sanitizes cli flags from aliases to default names

rewrites process.argv accordingly

provides autogenerated --help output (that can be customized)

also handles commands and environment for you

[html-docs](https://magic.github.io/cli/)

[![NPM version][npm-image]][npm-url]
[![Linux Build Status][travis-image]][travis-url]
[![Windows Build Status][appveyor-image]][appveyor-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]

[npm-image]: https://img.shields.io/npm/v/@magic/cli.svg
[npm-url]: https://www.npmjs.com/package/@magic/cli
[travis-image]: https://img.shields.io/travis/com/magic/cli.svg?branch=master
[travis-url]: https://travis-ci.com/magic/cli
[appveyor-image]: https://img.shields.io/appveyor/ci/magic/cli/master.svg
[appveyor-url]: https://ci.appveyor.com/project/magic/cli/branch/master
[coveralls-image]: https://coveralls.io/repos/github/magic/cli/badge.svg
[coveralls-url]: https://coveralls.io/github/magic/cli
[greenkeeper-image]: https://badges.greenkeeper.io/magic/cli.svg
[greenkeeper-url]: https://badges.greenkeeper.io/magic/cli.svg
[snyk-image]: https://snyk.io/test/github/magic/cli/badge.svg
[snyk-url]: https://snyk.io/test/github/magic/cli

* [dependencies](#dependencies)
* [install](#install)
* [caveats](#caveats)
* [usage](#usage)
* [argv](#argv)
* [commands](#commands)
* [help](#help)
* [config](#configuration)
* [pure](#config-pure)
* [append / prepend](#prepend-append)
* [default](#default)

### <a name="dependencies"></a>dependencies:
* [@magic/log](https://github.com/magic/log): console.log wrapper with loglevels
* [@magic/types](https://github.com/magic/types): type checking library

@magic/log and @magic/types have no dependencies.

### <a name="install"></a>install
be in a nodejs project.
```bash
npm i --save-dev @magic/cli
```

### <a name="caveats"></a>caveats
there are some quirks that need some careful consideration when designing a cli api
depending on your requirements, these caveats should seldomly apply.

##### last argument
if your last argument does not have a corresponding flag,
it will still be assigned to the last flag prior to it.

##### command name overload
if one of your options gets an argument that is equal to a command,
this command will be executed

##### flag name overload
cli arguments that start with a - will always be treated as flags, not values.

*those issues might get addressed in the future.*

### <a name="usage"></a>Usage
full api:

first we have to define the cli.js file (in a commonjs file!):
```javascript
// ./bin.js
#!/usr/bin/env node
const path = require('path')
const spawn = require('@magic/cli')

const cmd = path.join(process.cwd(), 'path', 'to', 'your', 'bin.mjs')
const args = ['--array', 'of', 'flags', cmd]
const executable = 'node' // node is default value
spawn(args, [executable])
```

then we can write the bin.mjs file:
```javascript
// ./bin.mjs
import { cli } from '@magic/cli/src/index.mjs'

const { argv, env, commands } = cli({
  commands: [
    ['cmd1', 'cmd1alias'],
    'cmd2',
  ],
  options: [
    ['--flag1', '-f1'],
    ['--flag2', '-f2'],
  ],
  default: {
    '--default-key': 'default-value',
  },
  env: [[['--production', '--prod', '--p', '-p'], 'NODE_ENV', 'production']],
  pure: true, // do neither change process.argv nor process.env
  pureArgv: true, // do not change process.argv
  pureEnv: true, // do not change process.env
})
```

### <a name="argv"></a>options / argv
argv mappings handle options and option aliases

using the cli file above

```bash
bin.js -f1 arg1 arg2 -f2
```

resulting process.argv:
```javascript
process.argv = [
  '/path/to/bin/node',
  '/path/to/bin.js',
  '--flag1'
  'arg1',
  'arg2',
  '--flag2',
]

resulting javascript object
```javascript
{ '--flag1': ['arg1', arg2], '--flag2': []}
```

### <a name="commands"><a>commands
cli commands can be handled too.
```javascript
const cli = require('@magic/cli')

const args = {
  commands: [
    ['dev', 'development', 'start'],
    'serve',
  ],
}

const argv = cli(args)

// call
./bin.js dev serve

// results:
{
  cmds: ['dev', 'serve'],
  commands: ['dev', 'serve'],
}
```

### <a name="help"></a>help output
@magic/cli will parse your configuration and create a help text based on it.

#### <a name="help-simple"></a>simple help message
```javascript
const cli = require('@magic/cli')

const args = {
  commands: [['magic', 'm']],
  options: [['--spell', '-s']],
  env: [[['dev', 'development'], 'NODE_ENV', 'development']],
  help: 'custom help text',
}

const argv = cli(args)

// running
./bin.js
// without arguments

// help output
`
@magic/cli wrapped cli.

custom help text

cli commands
magic - aliases: ["m"]


possible command line flags:
--spell - aliases: ["-s"]

environment switches:
dev: set NODE_ENV to development - aliases ["development"]
`
```

#### <a name="help-detailed"></a>detailed help message
the help property will accept an object which maps to the args object
```javascript
const cli = require('@magic/cli')

const args = {
  commands: [['magic', 'm']],
  options: [['--spell', '-s']],
  env: [[['dev', 'development'], 'NODE_ENV', 'development']],
  prepend: 'prepend',
  append: 'append',
  help: {
    name: 'cli name',
    text: 'custom help text',
    commands: {
      magic: 'magic info help text',
    },
    options: {
      '--spell': 'cast a simple spell',
    },
    env: ['dev', 'set environment to development'],
  },
}

const argv = cli(args)

// running
./bin.js
// without arguments

// help output
`
cli name

custom help text

commands:
magic - aliases: ["m"]

flags:
--spell - aliases: ["-s"]

environment switches:
dev: set process.NODE_ENV to development - aliases ["development"]
`
```


### <a name="config"></a>configuration
there are some configuration parameters that can be passed to the cli function


#### <a name="config-pure"></a>pure
```javascript
const args = {
  pure: false,    // set to true to prevent changes to process.argv and process.env
  pureEnv: false, // set to true to prevent changes to process.env
  pureArgv: false, // set to true to prevent changes to process.argv
}

cli(args)
```

### <a name="prepend-append"></a>prepend/append
process.argv values can be prepended and appended
```javascript
const cli = require('@magic/cli)

const args = {
  prepend: ['prepended']
  append: ['appended']
}

cli(args)
```

#### <a name="default"></a>default
use this to set default process.argv key: value pairs that should be set if they are not
```javascript
const cli = require('@magic/cli')

const args = {
  options: [
    ['--default-key'],
  ],
  default: {
    '--default-key': 'default-value',
  },
}

const argv = cli(args)

// returns
{
  argv: {
    '--default-key': 'default-value',
  },
}
```

### Changelog

#### 0.0.3
cli's should now correctly process.exit(1) on error of the spawned process.

#### 0.0.4
console help output now aligns nicely

#### 0.0.5
node 12.4.0 does not have --experimental-node-modules fladg.

#### 0.0.6
readd --experimental-node-modules flag for 13.1.0+

#### 0.0.7
update dependencies
bump node version

#### 0.0.8
help is shown if cli has commands but none are given

#### 0.0.9
update dependencies

#### 0.0.10
update dependencies

#### 0.0.11 - unreleased
* parsed.args added. is copy of argv, but using camelCased keys without leading --.
* no commonjs fallback, node 13.5.0 and ecmascript modules all the way

#### 0.0.12 - unreleased
