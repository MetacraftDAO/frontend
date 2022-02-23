const webpack = require('webpack');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const Dotenv = require('dotenv-webpack');

module.exports = function override(config, env) {
    //do stuff with the webpack config...

    config.resolve.fallback = {
        os: require.resolve('os-browserify/browser'),
        buffer: require.resolve('buffer'),
        path: require.resolve("path-browserify")
    };
    config.resolve.plugins = config.resolve.plugins.filter(plugin => !(plugin instanceof ModuleScopePlugin));
    config.plugins.push(
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer'],
            fs: 'fs',
        }),
        new NodePolyfillPlugin(),
        new Dotenv() // For netlify auto rebuild.
    );
    config.experiments = {topLevelAwait: true}

    return config;
}