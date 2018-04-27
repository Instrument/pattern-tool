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
      // console.log('hi')
      fs.writeFileSync(`${process.cwd()}/${argv.patternName}.md`)
      fs.writeFileSync(`${process.cwd()}/${argv.patternName}.mustache`)
      fs.writeFileSync(`${process.cwd()}/${argv.patternName}.scss`)
      fs.writeFileSync(`${process.cwd()}/${argv.patternName}.feature`)
    })
    .demandOption(['patternName',])
    .help()
    .argv

// require('yargs')
//     .usage('$0 <cmd> [args]')
//     .command('hello [name]', 'welcome ter yargs!', (yargs) => {
//       yargs.positional('name', {
//         type: 'string',
//         default: 'Cambi',
//         describe: 'the name to say hello to'
//       })
//     }, function (argv) {
//       console.log('hello', argv.name, 'welcome to yargs!')
//     })
//     .help()
//     .argv


//console.log(`Hi here are the args: ${process.cwd()}`)