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
    news: './src/news.js',
    currentNews: './src/current-news.js',
    about: './src/about.js',
    contacts: './src/contacts.js',
    privacyPolicy: './src/privacy-policy.js',
  },
  output: {
    //prod
    filename: '[name].[contenthash].js',
    // filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  // devServer: {
  //   static: './dist',
  //   compress: true,
  //   open: true,
  //   hot: false,
  //   liveReload: true,
  //   watchFiles: ['src/**/*.html'],
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
      //prod
      filename: '[name].[contenthash].css',
      // filename: '[name].css',
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/pages/index.html',
      chunks: ['index'],
      title: 'Прицепные Решения',
      inject: 'body',
      meta: {
        description: 'Поставщик полуприцепов-тяжеловозов ООО «Прицепные Решения ДТ»: Широкий выбор надежных полуприцепов высокого качества. Звоните 8 (800) 505-44-34.',
        robots: 'index, follow',
        author: 'ООО «Прицепные Решения ДТ»'
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'catalog.html',
      template: './src/pages/catalog.html',
      chunks: ['catalog'],
      title: 'Каталог',
      inject: 'body',
      meta: {
        description: 'Надежные полуприцепы-тяжеловозы от ООО «Прицепные Решения ДТ»: Откройте наш каталог и выберите полуприцеп, который идеально подойдет вам. Получите консультацию и актуальные предложения по телефону 8 (800) 505-44-34.',
        robots: 'index, follow',
        author: 'ООО «Прицепные Решения ДТ»'
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'vse-v-nalichii.html',
      template: './src/pages/vse-v-nalichii.html',
      chunks: ['vseVNalichii'],
      title: 'В наличии',
      inject: 'body',
      meta: {
        description: 'Узнайте о наличии полуприцепов-тяжеловозов в ООО «Прицепные Решения ДТ»: Мы обновляем информацию о товарах регулярно. Проверьте наши предложения и получите ответы на все вопросы по телефону 8 (800) 505-44-34.',
        robots: 'index, follow',
        author: 'ООО «Прицепные Решения ДТ»'
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'product.html',
      template: './src/pages/product.html',
      chunks: ['product'],
      title: 'Продукт',
      inject: 'body',
      meta: {
        robots: 'index, follow',
        author: 'ООО «Прицепные Решения ДТ»'
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'news.html',
      template: './src/pages/news.html',
      chunks: ['news'],
      title: 'Новости',
      inject: 'body',
      meta: {
        description: 'Читайте все последние новости компании «Прицепные Решения ДТ»: обновления продукции, инновации в области полуприцепов и актуальные события. Будьте в курсе наших новостей и предложений.',
        robots: 'index, follow',
        author: 'ООО «Прицепные Решения ДТ»'
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'current-news.html',
      template: './src/pages/current-news.html',
      chunks: ['currentNews'],
      title: 'Текущая новость',
      inject: 'body',
      meta: {
        robots: 'index, follow',
        author: 'ООО «Прицепные Решения ДТ»'
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'about.html',
      template: './src/pages/about.html',
      chunks: ['about'],
      title: 'О нас',
      inject: 'body',
      meta: {
        description: 'ООО «Прицепные Решения ДТ» — эксперт в полуприцепах-тяжеловозах: Доверьтесь нашему опыту и качеству продукции. Мы обеспечиваем надежные решения для вашего бизнеса. Контактный телефон 8 (800) 505-44-34.',
        robots: 'index, follow',
        author: 'ООО «Прицепные Решения ДТ»'
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'contacts.html',
      template: './src/pages/contacts.html',
      chunks: ['contacts'],
      title: 'Контакты',
      inject: 'body',
      meta: {
        description: 'Получите информацию о полуприцепах и тяжеловозах от ООО «Прицепные Решения ДТ»: Мы готовы ответить на ваши вопросы и предоставить помощь. Свяжитесь с нами по телефону 8 (800) 505-44-34 или через форму обратной связи на сайте.',
        robots: 'index, follow',
        author: 'ООО «Прицепные Решения ДТ»'
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'privacy-policy.html',
      template: './src/pages/privacy-policy.html',
      chunks: ['privacyPolicy'],
      title: 'Политикой конфиденциальности',
      inject: 'body',
      meta: {
        description: 'Политика конфиденциальности ООО «Прицепные Решения ДТ»: Узнайте, как мы защищаем ваши личные данные и обеспечиваем безопасность информации. Ознакомьтесь с нашими мерами и правилами на сайте.',
        robots: 'index, follow',
        author: 'ООО «Прицепные Решения ДТ»'
      }
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/assets/icons', to: 'icons' },
        { from: 'src/assets/image', to: 'image' },
        { from: 'src/assets/pdf', to: 'pdf' },
        { from: 'src/robots.txt', to: 'robots.txt' },
        { from: 'src/sitemap.xml', to: 'sitemap.xml' }
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          // 'style-loader',
          //prod
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
