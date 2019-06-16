const path = require('path');
const { generateTheme, getLessVars } = require('antd-theme-generator');
const fs = require("fs");

fs.mkdir('./public/static',function(err){
     if(err){
         console.log("主题目录创建失败",err)
     }else{
        console.log("主题目录创建成功");
        fs.writeFile('./public/static/color.less',{},function(err){
             if(err){
                 console.log("主题color.less文件写入失败",err)
             }else{
                 console.log("主题color.less文件写入成功");
             }
        }) 
     }
})

const options = {
  stylesDir: path.join(__dirname, './src/styles'),    //对应具体位置
  antDir: path.join(__dirname, './node_modules/antd'), //对应具体位置
  varFile: path.join(__dirname, './src/styles/vars.less'), //对应具体位置
  mainLessFile: path.join(__dirname, './src/styles/main.less'), //对应具体位置
  themeVariables: [
    '@primary-color',
    '@secondary-color',
    '@text-color',
    '@text-color-secondary',
    '@heading-color',
    '@layout-body-background',
    '@btn-primary-bg',
    '@layout-header-background'
  ],
  indexFileName: 'index.html',
  outputFilePath: path.join(__dirname, './public/static/color.less'),
}

generateTheme(options)
.then(less => {
    console.log('Theme generated successfully');
})
  .catch(error => {
    console.log('Error', error);
  });