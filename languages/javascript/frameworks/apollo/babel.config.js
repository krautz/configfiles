module.exports = function (api)
{
    // disable caching
    api.cache(false);

    // declare presets
    const presets = [
        ['@babel/preset-env', {
            targets: {
                node: true
            }
        }],
        '@babel/preset-typescript'
    ];

    // export presets
    return {
        presets
    };
};
