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
        extensions: ['.tsx', '.ts', '.js', 'jsx'],
    },
    output: {
        filename: 'index.js.txt',
        path: path.resolve(__dirname, '..', "Assets", "Resources")
    },
    externals: {
        csharp: 'commonjs2 csharp',
        puerts: 'commonjs2 puerts'
    },
    devtool: 'source-map',
    // 模式 development 开发， production 生产
    mode: 'development',

}];
