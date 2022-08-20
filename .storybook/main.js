const path = require('path')

module.exports = {
  stories: [
    '../src/components/**/*.stories.@(ts|tsx|js|jsx|mdx)'
  ],
  addons: [
    '@storybook/addon-links', 
    '@storybook/addon-essentials'
  ],

  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              auto: true,
            },
          },
        },
        'sass-loader',
      ],
      include: path.resolve(__dirname, '../'),
    })
    config.resolve.alias = {
      'components': path.resolve(__dirname, '../src/components'),
    }
    return config
  },

  core: {
    builder: 'webpack5',
  },
}