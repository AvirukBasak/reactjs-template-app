const path = require('path');
const HWP = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, '/src/index.js'),
    resolve: {
        extensions: ['', '.js', '.jsx', '.json'],
        alias: {
            '@': [
                path.resolve(__dirname, "src"),
                path.resolve(__dirname, "public"),
            ]
        },
    },
    output: {
        filename: 'build.js',
        path: path.join(__dirname, '/build'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpe?g|gif|png|svg|ico)$/,
                loader: 'url-loader'
            }
        ]
    },
    plugins: [
        new HWP({ template: path.join(__dirname, '/src/index.html') }),
        new CopyWebpackPlugin({
            patterns: [{ from: path.join(__dirname, '/public') }]
        }),
    ]
}
