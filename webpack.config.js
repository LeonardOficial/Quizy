const path = require("path");

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractTextPluginConfig = new ExtractTextPlugin("styles.css");

module.exports = {
  resolve: {
    extensions: ['*', '.js']
  },
  entry: ["./src/main.js"],
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
    // Javascript
      {
        test: /\.js$/,
        include: /src/,
        loader: "babel-loader",
        options: {
          plugins: [
            "react-html-attrs",
            "transform-decorators-legacy",
            "transform-class-properties"
          ]
        }
      },
    // Stylesheets
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("css-loader!postcss-loader")
      },
    // Font
      { 
        test: /\.svg$/, 
        loader: 'url-loader?limit=65000&mimetype=image/svg+xml&name=public/fonts/[name].[ext]'
      }, 
      { 
        test: /\.woff$/,
        loader: 'url-loader?limit=65000&mimetype=application/font-woff&name=public/fonts/[name].[ext]' 
      },
      { 
        test: /\.woff2$/, 
        loader: 'url-loader?limit=65000&mimetype=application/font-woff2&name=public/fonts/[name].[ext]'
      }, 
      { 
        test: /\.[ot]tf$/, 
        loader: 'url-loader?limit=65000&mimetype=application/octet-stream&name=public/fonts/[name].[ext]' 
      }, 
      { 
        test: /\.eot$/, 
        loader: 'url-loader?limit=65000&mimetype=application/vnd.ms-fontobject&name=public/fonts/[name].[ext]' 
      } 
    ]
  },
  devServer: {
    inline: true,
    contentBase: "./public"
  },
  plugins: [
    extractTextPluginConfig
  ]
}



