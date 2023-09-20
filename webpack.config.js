const path = require('path');
const HWP = require('html-webpack-plugin');
const CWP = require('copy-webpack-plugin');

const Paths = {
    src: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'static'),
    public: path.join(__dirname, 'public'),
};

module.exports = {
    entry: path.join(Paths.src, 'index.js'),
    resolve: {
        extensions: ['', '.js', '.jsx', '.json'],
        alias: {
            '': Paths.public,
            '@': Paths.src,
        },
    },
    output: {
        filename: '[name].bundle.js',
        path: Paths.build,
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
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
        ]
    },
    plugins: [
        new HWP({ template: path.join(Paths.src, 'index.html') }),
        new CWP({
            patterns: [
                { from: Paths.public, to: Paths.build },
            ],
        }),
    ]
}
