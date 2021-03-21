/*
 * @Author: your name
 * @Date: 2021-03-21 23:51:47
 * @LastEditTime: 2021-03-22 00:19:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Frontend-07-Template/Week14/jsx/webpack.config.js
 */

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
