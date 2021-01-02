module.exports = {
  webpack: {
    configure: (config) => {
      config.module.rules[1].oneOf.unshift({
        test: /.mdx$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  require.resolve('babel-preset-react-app')
                ]
              ]
            }
          },
          '@mdx-js/loader',
        ],
      })
      return config
    },
  },
}
