module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'sass',
      patterns: [
      ],
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/MesuemOfTaiwanOldTiles/'
    : ''
}
