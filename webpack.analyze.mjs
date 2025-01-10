import config from './webpack.config.mjs'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

export default {
    ...config,
    plugins: [
        ...config.plugins,
        new BundleAnalyzerPlugin({
            defaultSizes: 'parsed',
        }),
    ],
}
