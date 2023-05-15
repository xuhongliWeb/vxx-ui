#! /usr/bin/env node
import commandLineArgs from 'command-line-args';
import commandLineUsage from 'command-line-usage';
import chalk from 'chalk';
import prompts from 'prompts'
import download from 'download-git-repo'
import ora from 'ora'
import fs from 'fs'
//帮助内容
const helpSections = [
  {
    header: 'create-vxx',
    content: '一个快速生成组件库搭建环境的脚手架',
  },
  {
    header: 'Options',
    optionList: [
      {
        name: 'version',
        typeLabel: '{underline boolean}',
        description: '版本号',
      },
      {
        name: 'arg1',
        typeLabel: '{underline string}',
        description: '参数1',
      },
      {
        name: 'arg2',
        typeLabel: '{underline number}',
        description: '参数2',
      },
    ],
  },
];
//配置命令参数
const optionDefinitions = [
  { name: 'help', alias: 'h', type: Boolean },
  { name: 'version', alias: 'v', type: Boolean },
  { name: 'arg1', type: String },
  { name: 'arg2', type: Number },
];
const options = commandLineArgs(optionDefinitions);


const promptsOptions = [
  {
    type: 'text',//单选
    name: 'name',
    message: 'project-name',
    validate(val) {
      if (!val) return '模板名称不能为空！';
      if (fs.existsSync(val)) return '项目名已存在'
      if (val.match(/[^A-Za-z0-9\u4e00-\u9fa5_-]/g)) return '模板名称包含非法字符，请重新输入';
      return true;
    }
  },

  {
    type: 'select',//单选
    name: 'template',
    message: 'select a framework',
    choices: [
      { title: 'vxx-ui', value: 1 },
      { title: 'vxx-demo', value: 2 }
    ]
  }
]

//clone方法
const gitClone = (remote, name, option) => {
  const loadingOra = ora('正在下载模板...').start();
  return new Promise((resolve, reject) => {
    download(remote, name, option, err => {
      if (err) {
        loadingOra.fail();
        console.log("err", chalk.red(err));
        reject(err);
        return;
      };
      loadingOra.succeed(chalk.green('success'));
      console.log(`Done. Now run:\r\n`);
      console.log(chalk.green(`cd ${name}`));
      console.log(chalk.blue("npm install"));
      console.log("npm run dev\r\n");
      resolve();
    });
  });
};
const remoteList = {
  1: "https://gitee.com/geeksdidi/vxxui.git",
  2: 'xxx'
}
const branch = 'master'
const getInputInfo = async () => {
  const res = await prompts(promptsOptions)
  if (!(res.name && res.template)) return
  gitClone(`direct:${remoteList[res.template]}#${branch}`, res.name, { clone: true })
}


if (options.help) {
  console.log(chalk.green(commandLineUsage(helpSections)))
} else {
  getInputInfo()
}