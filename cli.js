#!/usr/bin/env node
const fs = require('file-system');

// Use yargs (http://yargs.js.org/) for handling args
require('yargs')
    .usage('$0 <cmd> [args]')
    .command('add [patternName]', 'adding your component', (yargs) => {
      yargs.positional('patternName', {
        type: 'string',
        describe: 'the pattern you want to add at the current',
        demandOption: true
      })
    }, function (argv) {
      fs.writeFileSync(`${process.cwd()}/${argv.patternName}.md`)
      fs.writeFileSync(`${process.cwd()}/${argv.patternName}.mustache`)
      fs.writeFileSync(`${process.cwd()}/${argv.patternName}.scss`)
      fs.writeFileSync(`${process.cwd()}/${argv.patternName}.feature`)
    })
    .demandOption(['patternName',])
    .help()
    .argv