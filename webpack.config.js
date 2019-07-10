const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "outdist",
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
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: __dirname + '/src/index.html'
        }),
    ],
    devtool: 'source-map',
    devServer: {
      hot: true,
      port: 8080,
      host: 'localhost',
    },
}
