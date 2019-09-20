module.exports = {
  lintOnSave: false,

  chainWebpack: config => {
    config.module
      .rule('svg-sprite')
      .use('svgo-loader')
      .loader('svgo-loader');
  },

  pluginOptions: {
    svgSprite: {
      dir: 'src/assets/icons/svg',
      test: /\.(svg)(\?.*)?$/,
      loaderOptions: {
        extract: true,
        spriteFilename: 'src/assets/svg-icons--[hash:8].svg',
      },
      pluginOptions: {
        plainSprite: true,
      },
    },
  },
};
