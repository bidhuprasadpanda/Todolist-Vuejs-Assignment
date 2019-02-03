var config = require('./webpack.base.config')

config.devtool = '#source-map'

config.devServer = {
  noInfo: true,
  port: 4545
}

module.exports = config
