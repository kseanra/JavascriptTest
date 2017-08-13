const ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: "./controllers/entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    plugins: [new HtmlWebpackPlugin()],
    module: {
        loaders: [
             {
                test: /\.html$/,
                loader: 'html-loader',
            },
            { 
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    }
};