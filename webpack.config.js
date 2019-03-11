const path = require('path');
const pkg = require('./package.json');

const libraryName= pkg.name;

module.exports = (env, argv) => ({
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    library: libraryName,
    libraryTarget: 'commonjs2',
    publicPath: '/build/',
  },
  devtool: argv.mode !== 'production' ? 'inline-source-map': false,
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
    ]
  },
  externals: {
    react: "react",
    "react-dom": "react-dom"
  }
});
