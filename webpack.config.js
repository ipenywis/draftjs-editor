const path = require("path");

const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: path.resolve("app.js"),
    target: "web",
    mode: "development",
    output: {
        filename: "app.js",
        path: path.resolve("./dist")
    },
    resolve: {
        extensions: [".js", ".jsx", ".json"]
    },
    module: {
        rules: [{
            test: /.scss?$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: ["css-loader", "sass-loader"]
            })
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({ fallback: "style-loader", use: ["css-loader"] })
        }, {
            test: /.jsx?$/,
            loader: "babel-loader",
            exclude: /node_modules/
        }]
    },
    plugins: [new ExtractTextPlugin("app.css")]
};