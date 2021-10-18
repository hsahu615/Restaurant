const path = require('path')


module.exports = {
  mode: "development",
  entry: './src/index.js',
  output:{
    path: path.resolve(__dirname, 'dist'),
    filename: "output.js"
  },
  module:{
    rules:[
      {
        test: /\.css$/,
        use:[
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      }
    ]
    
  }

}