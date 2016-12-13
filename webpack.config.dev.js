import webpack from 'webpack';
import path from 'path';

export default {
    debug: true,
    devtool: 'cheap-module-eval-source-map',
    // Webpack will display list of all files bundling
    // Can turn off, esp for production
    noInfo: false,
    // Entry point for app - also good way to inject middleware for things like hot reloading
    // *************** App's actual entry point has to be last *******************
    entry: [
        'eventsource-polyfill', // necessary for hot reloading with IE
        'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
        './src/index'
    ],
    // Can replace 'web' to 'node' to have webpack bundle code for Node
    target: 'web',
    // Where it should create web bundle that it serves to the browser - does not actual write any files
    output: {
        path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
        publicPath: '/',
        filename: 'bundle.js'
    },
    // Where our code exists
    devServer: {
        contentBase: './src'
    },
    // HotModuleReplacementPlugin: replace modules w/o full browser refresh
    // webpack.NoErrorsPlugin(): keep errors from breaking hot reload
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    // Types of files we want handled
    // Last 4: bootstrap for fonts
    module: {
        loaders: [
            {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
            {test: /(\.css)$/, loaders: ['style', 'css']},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
            {test: /\.(woff|woff2)$/, loader: "url?prefix=font/&limit=5000"},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream"},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"}
        ]
    }
};
