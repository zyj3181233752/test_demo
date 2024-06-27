#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const inquirer = require('inquirer')
const { program } = require("commander")
const myHelp = require('../lib/core/help.js')
const myCommander = require('../lib/core/commander.js')
myHelp(program)
myCommander(program)
program.parse(process.argv);

if (!process.argv.slice(2).length) {
    program.outputHelp();
}
