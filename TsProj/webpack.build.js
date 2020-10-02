const path = require('path');
module.exports = [{
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    },
    externals: {
        csharp: 'commonjs2 csharp',
        puerts: 'commonjs2 puerts'

    },
    devtool: 'source-map',
    mode: 'production'
}];
