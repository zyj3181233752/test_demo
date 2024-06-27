const ora = require('ora')
const inquirer = require('inquirer')
const download = require('download-git-repo');
const { FrameName, FrameNameUrls } = require('../../config.js')

const myAction = function (object, arg) {
    // 命令行的执行逻辑代码
    inquirer.prompt([{ // 数组中每一个对象表示一个问题
        type: 'list', // 问题类型，list表示选择列表
        name: 'FrameName', // 用于接收答案的键值
        choices: FrameName, // 选项
        message: '请选择你所使用的框架' // 问题
    }]).then(({ FrameName }) => {
        // 进行模版的下载
        const spinner = ora().start() // 创建实例并启动加载指示器
        spinner.text = '代码正在下载……' // 下载过程中在命令行展示的 loading 信息
        spinner.color = 'yellow' // 下载过程中 loading 信息的颜色
        download(`direct:${FrameNameUrls[FrameName]}`, object, { clone: true }, err => {
            if (!err) {
                spinner.succeed('代码下载成功')
                // 下载成功后，提示使用者j接下来可执行的操作
                console.log('Done! you run:');
                console.log('cd ' + object);
                console.log('npm install ');
                console.log('npm run dev ');
            } else {
                spinner.fail('代码下载失败')
            }
        });
    })

}


module.exports = myAction