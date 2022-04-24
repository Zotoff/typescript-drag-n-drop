const path = require('path');
const cleanPlugin = require('clean-webpack-plugin');
const { CleanPlugin } = require('webpack');

module.exports = {
    mode: 'production',
    entry: './src/app.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'none',
    module: {
        rules: [
            {
                test: /\.ts$/,  // checks each file with .ts
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: [
        new CleanPlugin.CleanWebpackPlugin()
    ]
};