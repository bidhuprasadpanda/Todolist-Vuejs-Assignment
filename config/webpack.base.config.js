module.exports = {
  entry: {
    'todo-list-page': './src/todo-list-index.js'
  },
  output: {
    path: './dist',
    publicPath: 'dist/',
    filename: '[name]-webpack.js'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel!eslint',
        // make sure to exclude 3rd party code in node_modules
        exclude: /node_modules/
      },
      {
        // edit this for additional asset file types
        test: /\.(png|jpg|gif|jpeg)$/,
        loader: 'url',
        query: {
          // inline files smaller then 10kb as base64 dataURL
          limit: 10000,
          // fallback to file-loader with this naming scheme
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
     /* FIX for
        You are using the runtime-only build of Vue where the template option is not available.
        Either pre-compile the templates into render functions, or use the compiler-included build */
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  // vue-loader config:
  // lint all JavaScript inside *.vue files with ESLint
  // make sure to adjust your .eslintrc
  vue: {
    loaders: {
      js: 'babel!eslint'
    },
    postcss: [require('cssnext')(), require('postcss-nested')(), require('postcss-mixins')()]
  }
}
