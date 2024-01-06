/* If you do not know webpack, DO NOT TOUCH this file.
   IDK webpack so I don't know 80% of what's is going on. */

/* This file is in CommonJS syntax.
   Converting it into ES modules syntax MAY NOT work. */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';

/** list of paths of this project */
const PATHS = {
    this: __dirname,
    src: path.join(__dirname, 'src'),          // jsx, styles and browser js
    build: path.join(__dirname, 'dist'),       // output can be served statically
    public: path.join(__dirname, 'public'),    // public resources
};

PATHS.include = [PATHS.src];
PATHS.exclude = [
    path.join(PATHS.this, 'node_modules'),
    path.join(PATHS.this, 'dist'),
    path.join(PATHS.this, 'public'),
    path.join(PATHS.this, 'lib'),
];


/** webpack mode */
const wpcMode = isProduction ? 'producion' : 'development';

/** webpack entry point */
const wpcEntry = path.join(PATHS.src, 'index');

const wpcResolve = {
    /* no idea why I put it and at this point am too
       afraid to remove it */
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json', '...'],
    /* the magic that allows importing via '@' prefix */
    alias: {
        '@': PATHS.src,
        '@public': PATHS.public,
    },
};

/* webpack build directory and bundle script name.
   the bundle script is the result of compiling
   all js and jsx code into one js script.
   this compilation is done by webpack and babel. */
const wpcOutput = {
    path: PATHS.build,
};

/* to prevent a warning coz bundle size exceeds a certain limit */
const wpcPerformance = {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
};

/* webpack dev server config */
const wpcDevServer = {
    port: 3000,
    host: '0.0.0.0',
    compress: true,
    allowedHosts: 'all',
    hot: true
};

const wpcModule = {
    rules: [
        /* loader rules for css files */
        {
            test: /\.css$/,
            use: [
                { loader: 'style-loader' },
                { loader: 'css-loader', options: { modules: true } },
                { loader: 'postcss-loader' },
            ],
            include: PATHS.include,
            exclude: PATHS.exclude,
        },
        /* assets, file-loader and url-loader are unnecessary for new webpack versions */
        {
            test: /\.(eot|svg|ttf|woff|woff2|png|jpe?g|jp2|gif)$/i,
            type: 'asset/resource',
            include: PATHS.include,
            exclude: PATHS.exclude,
        },
        /* ts-loader supports react JSX */
        {
            test: /\.(ts|tsx)$/i,
            use: ['babel-loader'],
            include: PATHS.include,
            exclude: PATHS.exclude,
        },
    ]
};

const wpcPlugins = [
    /* browser entry point html, hooked up with *.bundle.js */
    new HtmlWebpackPlugin({ template: path.join(PATHS.src, 'index.html') }),

    /* copy public resources into build dir, otherwise you cannot
       access the public resources in browser */
    new CopyWebpackPlugin({
        patterns: [
            { from: PATHS.public, to: PATHS.build },
        ],
    }),
];

module.exports = {
    mode: wpcMode,
    entry: wpcEntry,
    resolve: wpcResolve,
    output: wpcOutput,
    performance: wpcPerformance,
    devServer: wpcDevServer,
    module: wpcModule,
    plugins: wpcPlugins,
};
