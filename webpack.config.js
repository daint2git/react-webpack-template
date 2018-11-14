const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const path = require('path')
const rootDir = path.resolve(process.cwd())
const srcPath = path.resolve(rootDir, 'src')
const assetsPath = path.resolve(rootDir, 'assets')
const buildPath = path.resolve(rootDir, 'build')

const getMode = mode => mode ? mode : 'development'

module.exports = (env ={}, argv = {}) => {
  const mode = getMode(argv.mode)
  const isDevelopment = mode === 'development'
  return {
    mode,
    entry: {
      app: `${srcPath}/index.js`,
    },
    output: {
      path: buildPath,
      filename: isDevelopment ? '[name].js' : '[name].[hash].js',
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        {
          test: /\.(c|sc)ss$/,
          use: [
            isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
              },
            },
            'postcss-loader',
          ]
        },
        {
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
          loader: 'url-loader',
          options: {
            limit: 8192,
          },
        },
      ],
    },
    optimization: {
      splitChunks: {
        name: 'vendor',
        chunks: 'all',
      },
    },
    plugins: [
      new webpack.ProvidePlugin({
        React: 'react',
      }),
      new HtmlWebpackPlugin({
        template: `${assetsPath}/template.html`,
        favicon: `${assetsPath}/favicon.ico`,
        hash: true,
        minify: {
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true,
          keepClosingSlash: true,
        },
      }),
      new MiniCssExtractPlugin({
        filename: isDevelopment ? '[name].css' : '[name].[hash].css',
        chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css',
      }),
    ],
    devServer: {
      contentBase: buildPath,
      port: 9999,
      historyApiFallback: true,
    },
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
  }
}