import { resolve } from 'node:path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import TerserPlugin from 'terser-webpack-plugin'
import { VueLoaderPlugin } from 'vue-loader'

/**
 * Define webpack config
 *
 * @returns {import('webpack').Configuration}
 */
export default function defineConfig(env) {
  return {
    mode: 'development',
    entry: {
      main: resolve(import.meta.dirname, 'src/main.js'),
    },
    module: {
      rules: [
        {
          resourceQuery: /raw/,
          type: 'asset/source',
        },
        {
          resourceQuery: /^((?!raw).)*$/,
          test: /\.vue$/,
          use: 'vue-loader',
        },
        {
          resourceQuery: /^((?!raw).)*$/,
          test: /.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          resourceQuery: /^((?!raw).)*$/,
          test: /.less$/,
          use: ['style-loader', 'css-loader', 'less-loader'],
        },
        {
          resourceQuery: /^((?!raw).)*$/,
          test: /\.jsx?$/i,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
                plugins: ['@emotion', '@vue/babel-plugin-jsx'],
              },
            },
          ],
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: resolve(import.meta.dirname, 'src/index.html'),
      }),
      new VueLoaderPlugin(),
    ],
    resolve: {
      alias: {
        '@': resolve(import.meta.dirname, 'src'),
      },
    },
    optimization: {
      minimizer: [new TerserPlugin({ extractComments: false })],
    },
    output: {
      iife: true,
      filename: '[name].js',
    },
    performance: {
      maxEntrypointSize: 1024 * 1024,
      maxAssetSize: 1024 * 1024,
    },
    devServer: {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      allowedHosts: 'all',
      host: 'localhost',
      liveReload: true,
      hot: true,
    },
  }
}
