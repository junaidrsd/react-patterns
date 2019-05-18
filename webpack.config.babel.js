import path from 'path';
import webpack from 'webpack';

const config = {
  entry: './src/index.js',
  output: {
    library: 'react-patterns',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      }
    ]
  },
  externals: [ // excluding dependencies from build so the bundle relies on consumer's environment.
    'prop-types',
    'react',
    'react-dom',
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

export default config;