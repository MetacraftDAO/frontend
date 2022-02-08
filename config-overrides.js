const webpack = require('webpack');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');

module.exports = function override(config, env) {
    //do stuff with the webpack config...

    config.resolve.fallback = {
        os: require.resolve('os-browserify/browser'),
        buffer: require.resolve('buffer'),
    };
    config.resolve.plugins = config.resolve.plugins.filter(plugin => !(plugin instanceof ModuleScopePlugin));
    config.plugins.push(
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer'],
        }),
    );
    config.experiments = {topLevelAwait: true}

    return config;
}