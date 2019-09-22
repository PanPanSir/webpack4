const webpack = require('webpack');
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PurifyCSS = require('purifycss-webpack');
const glob = require('glob-all');

module.exports = {
    entry: [
      // 向 entry 属性传入文件路径数组，将创建出一个 多主入口(multi-main entry)。在你想要一次注入多个依赖文件，并且将它们的依赖导向(graph)到一个 chunk 时，这种方式就很有用。
      './src/polyfill',
      'react-hot-loader/patch',
      './src/index.js'
    ],
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
      splitChunks: {
        chunks: "all", // 所有的 chunks 代码公共的部分分离出来成为一个单独的文件
      },
      usedExports: true, // 做 js tree shaking
    },
    mode: 'development',
    module: {
        rules: [
            {
              test: /\.*$/,
              sideEffects: false,
            },
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
                    {loader: "style-loader"}, // 在html中创建style标签，并将css添加进去，与MiniCssExtractPlugin.loader功能重复了
                    {loader: MiniCssExtractPlugin.loader}, // 将css单独打包成一个文件，通过link标签插入到html中
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
            {// 当图片较小的时候会把图片BASE64编码，大于limit参数的时候还是使用file-loader 进行拷贝, 其中url-loader封装了file-loader，但url-loader并不依赖于file-loader。
              test: /\.(png|jpg|jpeg|gif|svg)/,
              use: {
                loader: 'url-loader',
                options: {
                  outputPath: 'images/', // 图片输出的路径
                  limit: 1
                }
              }
            },
        ],
    },
    resolve: {
      extensions: ['.js', '.jsx'], // 指定extension之后可以不用在require或是import的时候加文件扩展名,会依次尝试添加扩展名进行匹配
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
        new MiniCssExtractPlugin({
          filename: "[name].css",
          chunkFilename: "[id].css"
        }),
        new webpack.DefinePlugin({
          'process.env': { // 在环境变量中注入全局变量
            VUEP_BASE_URL: JSON.stringify('http://localhost:9000')
          }
        }),
        new PurifyCSS({
          paths: glob.sync([
            // 要做 CSS Tree Shaking 的路径文件，样式文件中没有被引用的css不会被打包进来
            path.resolve(__dirname, './src/*.*'), // 请注意，我们同样需要对 html 文件进行 tree shaking
          ])
        })
    ],
    devtool: 'eval',
    devServer: {
      hot: true,
      port: 8080,
      host: 'localhost',
    },
}
