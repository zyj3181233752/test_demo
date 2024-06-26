#!/usr/bin/env node
const path = require('path');
const fs = require('fs-extra');
const chalk = require('chalk');
const { Command } = require('commander');
const program = new Command();
const { getAllFilePaths } = require('../lib/utils')
const chokidar = require('chokidar');
const { exec } = require('child_process');

program
    .command('build')
    .description(chalk.green('Compile code and integrate into uni-app project'))
    .option('-p, --path <path>', '源目录', String, './ttSourse')
    .action(options => {
        console.log(options);
        const sourcePath = path.resolve(options.path);
        const destPath = path.resolve('./unpackage/dist/dev/mp-toutiao/' + options.path);
        // 复制文件到指定目录
        fs.copy(sourcePath, destPath, err => {
            console.log(sourcePath, destPath, 111)
            if (err) {
                console.error(err);
                process.exit(1);
            }
            console.log(chalk.green('复制成功'));
        });
    });

program.parse(process.argv);

if (!process.argv.slice(2).length) {
    program.outputHelp();
}
