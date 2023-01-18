const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/scripts/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    module: {
        rules: [
            {
               test: /\.js$/,
               use: {
                loader: 'babel-loader',
                options:{
                    presets: ['@babel/preset-env']
                }
               }
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            }
        ]
    },   
    mode: 'production',

    plugins : [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css",
        })
    ]
}