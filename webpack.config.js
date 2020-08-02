const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.js',
        print: './src/print.js',
    },
    rules: [
        {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader',
            ],
        },
        {
            test: /\.(png|svg|jpg|gif|json|woff|woff2|eot|ttf|otf)$/,
            use: [
                'file-loader',
            ],
        }
    ],
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new HtmlWebpackPlugin({
            title: 'Output Management',
        }),
    ],
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
};