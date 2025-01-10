import HtmlWebpackPlugin from 'html-webpack-plugin'
import { default as webpack } from 'webpack'

const prod = process.env.NODE_ENV === 'production'

export default {
    mode: prod ? 'production' : 'development',
    devtool: prod ? undefined : 'source-map',
    entry: './src/entry-client.tsx',
    output: {
        filename: '[name].[contenthash].js',
        path: import.meta.dirname + '/dist/',
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: 'esbuild-loader',
                options: {
                    target: 'esnext',
                    jsx: 'automatic',
                },
                resolve: {
                    extensions: ['.ts', '.tsx', '.js', '.json'],
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            minify: {
                collapseWhitespace: prod,
                removeComments: false,
            },
            template: 'index.html',
        }),
        new webpack.DefinePlugin({
            IS_PROD: prod,
        }),
    ],
}
