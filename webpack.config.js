const webpack = require('webpack');
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: [
      'react-hot-loader/patch',
      './src/index.js'
    ],
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'babel-loader' }
                ],
            },
            {
                test: /\.css$/,
                use: [
                    {loader: "style-loader"}, // 创建style标签，并将css添加进去
                    {
                      loader: "css-loader",
                      options:{
                        modules:true,
                        modules: {
                          localIdentName:'[path][name]__[local]--[hash:base64:5]',
                        }, // class 的名字编译规则，保证每一个class唯一性，造成局部样式的假象
                        sourceMap: true,
                        importLoaders: 2,
                      },
                    }, // 编译css
                ],
                exclude: /node_modules/
            },
        ],
    },
    resolve: {
      alias: {
        'react-dom': '@hot-loader/react-dom'
      },
    },
    plugins: [
        new CleanWebpackPlugin(), // 每次build时将dist目录清空
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: __dirname + '/src/index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devtool: 'eval',
    devServer: {
      hot: true,
      port: 8080,
      host: 'localhost',
    },
}
