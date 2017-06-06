var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  loaders: {
    scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
    sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax' // <style lang="sass">
  },
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction
  })
}
