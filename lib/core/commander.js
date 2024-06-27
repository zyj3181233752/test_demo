const myAction = require('./actions.js')

const myCommander = function (program) {
    // 自定义 create 命令，接收一个必填参数 project，[other...] 表示其他参数
    program.command('create <name>') 
    // 别名，之后运行 mycli create ... 和 mycli crt ... 效果是一样的
    .alias('crt') 
    .description('创建项目') // 描述
    .action(myAction)
}

module.exports = myCommander