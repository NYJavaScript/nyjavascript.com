module.exports = {
    context: __dirname + '/app',
    entry: "./app.js",
    output: {
        filename: "app.js",
        path: __dirname + "/dist"
    },

    module: {
        loaders: [
            // ES6 + React parser
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}
