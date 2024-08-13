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
  // devServer: {
  //   static: './dist',
  //   compress: true,
  //   open: true,
  //   proxy: [
  //     {
  //       context: ['/api/send-message'],
  //       target: 'http://localhost:3000',
  //       secure: true,
  //       changeOrigin: true, // Нужно для изменения заголовка Origin в запросе
  //     }
  //   ],
  // },
  mode: 'production',
  // mode: 'development',
  devtool: false,
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
      meta: {
        description: 'ООО &quot;Прицепные Решения ДТ&quot; — ведущий производитель и поставщик прицепов в Челябинске. Мы предлагаем качественные прицепы для легковых, грузовых и коммерческих нужд. Обратитесь к нам для надежных и проверенных решений',
        robots: 'index, follow',
        author: 'ООО &quot;Прицепные Решения ДТ&quot;'
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'catalog.html',
      template: './src/pages/catalog.html',
      chunks: ['catalog'],
      title: 'Каталог',
      inject: 'body',
      meta: {
        description: 'ООО &quot;Прицепные Решения ДТ&quot; — ведущий производитель и поставщик прицепов. Мы предлагаем широкий ассортимент прицепов для различных нужд: от легковых до коммерческих. Высокое качество, надежность и индивидуальный подход к каждому клиенту.',
        robots: 'index, follow',
        author: 'ООО &quot;Прицепные Решения ДТ&quot;'
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'vse-v-nalichii.html',
      template: './src/pages/vse-v-nalichii.html',
      chunks: ['vseVNalichii'],
      title: 'В наличии',
      inject: 'body',
      meta: {
        description: 'ООО &quot;Прицепные Решения ДТ&quot; — ведущий производитель и поставщик прицепов. Мы предлагаем широкий ассортимент прицепов для различных нужд: от легковых до коммерческих. Высокое качество, надежность и индивидуальный подход к каждому клиенту.',
        robots: 'index, follow',
        author: 'ООО &quot;Прицепные Решения ДТ&quot;'
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'product.html',
      template: './src/pages/product.html',
      chunks: ['product'],
      title: 'Продукт',
      inject: 'body',
      meta: {
        description: 'ООО &quot;Прицепные Решения ДТ&quot; — ведущий производитель и поставщик прицепов. Мы предлагаем широкий ассортимент прицепов для различных нужд: от легковых до коммерческих. Высокое качество, надежность и индивидуальный подход к каждому клиенту.',
        robots: 'index, follow',
        author: 'ООО &quot;Прицепные Решения ДТ&quot;'
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'about.html',
      template: './src/pages/about.html',
      chunks: ['about'],
      title: 'О нас',
      inject: 'body',
      meta: {
        description: 'ООО &quot;Прицепные Решения ДТ&quot; — ведущий производитель и поставщик прицепов. Мы предлагаем широкий ассортимент прицепов для различных нужд: от легковых до коммерческих. Высокое качество, надежность и индивидуальный подход к каждому клиенту.',
        robots: 'index, follow',
        author: 'ООО &quot;Прицепные Решения ДТ&quot;'
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'contacts.html',
      template: './src/pages/contacts.html',
      chunks: ['contacts'],
      title: 'Контакты',
      inject: 'body',
      meta: {
        description: 'ООО &quot;Прицепные Решения ДТ&quot; — ведущий производитель и поставщик прицепов. Мы предлагаем широкий ассортимент прицепов для различных нужд: от легковых до коммерческих. Высокое качество, надежность и индивидуальный подход к каждому клиенту.',
        robots: 'index, follow',
        author: 'ООО &quot;Прицепные Решения ДТ&quot;'
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'privacy-policy.html',
      template: './src/pages/privacy-policy.html',
      chunks: ['privacyPolicy'],
      title: 'Политикой конфиденциальности',
      inject: 'body',
      meta: {
        description: 'ООО &quot;Прицепные Решения ДТ&quot; — ведущий производитель и поставщик прицепов. Мы предлагаем широкий ассортимент прицепов для различных нужд: от легковых до коммерческих. Высокое качество, надежность и индивидуальный подход к каждому клиенту.',
        robots: 'index, follow',
        author: 'ООО &quot;Прицепные Решения ДТ&quot;'
      }
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
      {
        test: /\.(jpe?g|png|gif)$/i,
        type: 'asset/resource',

        generator: {
          filename: 'images/[name].[hash][ext][query]',
        },
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
