module.exports = {
mode: 'production',
  output: {
    filename: "[name].pack.js"
  },
  module: {
    rules: [
      {
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              {
                targets: 'browserslist',
                env: 'production', // Specify production environment
              },
              "babel-preset-env",
              "babel-preset-react"
            ]
          }
        },
        exclude: /node_modules/,
        test: /\.js$/
      }
    ]
  },
  entry: {
    index: ".src//index"
  }
};

// module.exports = {
//   mode: 'development',
//   output: {
//     filename: "[name].pack.js",
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//         },
//       },
//     ],
//   },
//   entry: {
//     index: "./src/index",
//   },
// };