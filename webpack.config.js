const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    index: './src/vse-v-nalichii.js',
    about: './src/about.js',
    // ourProduction: '.src/our-production',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: './dist',
    compress: true,
    open: true,
  },
  mode: 'development',
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/pages/index.html',
      chunks: ['index'],
      title: 'Прицепные Решения'
    }),
    new HtmlWebpackPlugin({
      filename: 'vse-v-nalichii.html',
      template: './src/pages/vse-v-nalichii.html',
      chunks: ['vse-v-nalichii'],
      title: 'В наличии'
    }),
    new HtmlWebpackPlugin({
      filename: 'about.html',
      template: './src/pages/about.html',
      chunks: ['about'],
      title: 'О нас'
    }),
    // new HtmlWebpackPlugin({
    //   filename: 'our-production.html',
    //   template: './src/pages/our-production.html',
    //   chunks: ['our-production'],
    //   title: 'Наше производство'
    // }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader'],
        // "style-loader", //для development-режима
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          format: {
            comments: false,
          },
        },
      }),
    ],
  },
};