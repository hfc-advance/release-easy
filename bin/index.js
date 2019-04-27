#!/usr/bin/env node

const program = require('commander')
const release = require('../scripts/release.js')

program
  .version(require('../package').version)
  .usage('<command> [options]')

program
  .description('发布项目')
  .option('-c --callback <npmScript>', '语义化版本之后执行的npm脚本')
  .option('-r, --registry <npmRegistry>', '设置发布的npm源')
  .action(cmd => {
    const options = cleanArgs(cmd)
    let releasOption = {}
    if (options.callback) releasOption.semVerCallback = options.callback
    if (options.registry) releasOption.npmRegistry = options.registry
    release(releasOption)
  })

function camelize (str) {
  return str.replace(/-(\w)/g, (_, c) => c ? c.toUpperCase() : '')
}

function cleanArgs (cmd) {
  const args = {}
  cmd.options.forEach(o => {
    const key = camelize(o.long.replace(/^--/, ''))
    // if an option is not present and Command has a method with the same name
    // it should not be copied
    if (typeof cmd[key] !== 'function' && typeof cmd[key] !== 'undefined') {
      args[key] = cmd[key]
    }
  })
  return args
}

program.parse(process.argv)

