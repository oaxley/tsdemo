const path = require('path')
const plugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
    entry: './src/main.ts',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader'
            }
        ]
    },
    resolve: {
        plugins: [
            new plugin()
        ],
        extensions: [ '.ts', '.js' ]
    },
    output: {
        filename: 'bump.js',
        path: path.resolve(__dirname, '../demo/public/javascripts')
    }
};
