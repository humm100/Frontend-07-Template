<!--
 * @Author: your name
 * @Date: 2020-12-01 22:30:53
 * @LastEditTime: 2021-03-22 00:24:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Frontend-07-Template/Week14/README.md
-->
学习笔记


# 为组件添加jsx语法:
1. 安装全局 webpack webpack-cli
2. 安装 webpack babel-loader
3. 安装 @babel/core @babel/preset-env
4. webpackconfig 配置
5. 安装 @babel/plugin-transform-react-jsx


## webpackconfig 配置：
```
module.exports = {
    entry: "./main.js",
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                        plugins: ["@babel/plugin-transform-react-jsx"]
                    }
                }
            }
        ]
    },
    mode: "development"
}
```
