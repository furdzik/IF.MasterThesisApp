const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const localServer = {
  path: 'localhost/build',
  port: 3006,
};

const config = {
    entry: {
        app: './src/scripts/app.js',
      },
      output: {
        filename: 'scripts/[name].js',
        path: path.resolve(__dirname, 'build'),
      },
    module: {
        rules: [
            {
              test: /\.scss$/,
              use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
            }
        ]
    },
      plugins: [
        new BrowserSyncPlugin({
            proxy: localServer.path,
            port: localServer.port,
            files: [],
            ghostMode: {
              clicks: false,
              location: false,
              forms: false,
              scroll: false,
            },
            injectChanges: true,
            logFileChanges: true,
            logLevel: 'debug',
            logPrefix: 'wepback',
            notify: true,
            reloadDelay: 0,
          }),
        new HtmlWebpackPlugin({
            inject: true,
            hash: false,
            filename: 'index.html',
            template: path.resolve(__dirname, 'src', 'index.html')
          }),
        new MiniCssExtractPlugin({
            filename: 'styles/[name].css',
          })
          // new CopyWebpackPlugin([
          //   {
          //     from: path.resolve(__dirname, 'src', 'images'),
          //     to: path.resolve(__dirname, 'build', 'images'),
          //     toType: 'dir',
          //   },
          // ])
      ]
    
};

module.exports = config;
