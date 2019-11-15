//node.js的一个核心模块
let path=require('path');
let miniCssExtractPlugin=require('mini-css-extract-plugin');
let htmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
  mode:"development",
  entry:{
    app:"./app/app.js"
  },
  output:{
    path:path.resolve(__dirname + '/build'),
    filename:'[name].min.js'
  },
  module:{
    rules:[
      {
        test:/\.css$/,
        use:[
          // {loader:'style-loader'},
          {loader:miniCssExtractPlugin.loader},
          {loader:'css-loader'}
        ]
      },
      {
        test:/\.less$/,
        use:[
          // {loader:'style-loader'},
          {loader:miniCssExtractPlugin.loader},
          {loader:'css-loader'},
          {loader:'less-loader'}
        ]
      },
      {
        test:/\.(png|gif|jpg|jpeg)$/,
        use:[
          {
            loader:'url-loader',
            options:{
              limit:1000
            }
          }
        ]
      },
      {
        test:/\.html?$/,
        use:[
          {loader:'html-withimg-loader'}
        ]
      }

    ]

  },
  plugins:[
    new miniCssExtractPlugin({
      filename: '[name].min.css'
    }),
    new htmlWebpackPlugin({
      template:'./index.html',
      inject:'body',
      minify:{
        removeComments:true,
        removeAttributeQuotes:true,
        collapseWhitespace:true
      },
      filename:'ohho.min.html'
    })
  ]
}