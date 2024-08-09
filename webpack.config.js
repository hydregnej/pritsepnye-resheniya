// файл webpack.config.js
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    catalog: './src/catalog.js',
    vseVNalichii: './src/vse-v-nalichii.js',
    product: './src/product.js',
    about: './src/about.js',
    contacts: './src/contacts.js',
    privacyPolicy: './src/privacy-policy.js',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devServer: {
    static: './dist',
    compress: true,
    open: true,
    proxy: [
      {
        context: ['/api/send-message'],
        target: 'http://localhost:3000',
        secure: true,
        changeOrigin: true, // Нужно для изменения заголовка Origin в запросе
      }
    ],
  },
  mode: 'development',
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/pages/index.html',
      chunks: ['index'],
      title: 'Прицепные Решения',
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      filename: 'catalog.html',
      template: './src/pages/catalog.html',
      chunks: ['catalog'],
      title: 'Каталог',
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      filename: 'vse-v-nalichii.html',
      template: './src/pages/vse-v-nalichii.html',
      chunks: ['vseVNalichii'],
      title: 'В наличии',
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      filename: 'product.html',
      template: './src/pages/product.html',
      chunks: ['product'],
      title: 'Продукт',
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      filename: 'about.html',
      template: './src/pages/about.html',
      chunks: ['about'],
      title: 'О нас',
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      filename: 'contacts.html',
      template: './src/pages/contacts.html',
      chunks: ['contacts'],
      title: 'Контакты',
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      filename: 'privacy-policy.html',
      template: './src/pages/privacy-policy.html',
      chunks: ['privacyPolicy'],
      title: 'Политикой конфиденциальности',
      inject: 'body',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/assets/icons', to: 'icons' },
        { from: 'src/assets/image', to: 'image' },
        { from: 'src/assets/pdf', to: 'pdf' },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ],
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
