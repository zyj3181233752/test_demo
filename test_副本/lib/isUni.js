const path = require('path');
const chalk = require('chalk');
const fs = require('fs-extra');
const { Command } = require('commander');
const program = new Command();

const isUni = (options) => {
    // manifest.json
    if (!fs.existsSync(options.path)) {
        console.log(options.path)
        console.log(chalk.red(`${options.path} 不存在，请检查路径是否正确`));
        return;
    }
}
module.exports = {
    isUni
}