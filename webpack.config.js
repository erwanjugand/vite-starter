import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export default {
  entry: './src/index.ts',

  output: {
    filename: 'script.js',
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: ['ts-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['autoprefixer']],
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
}
