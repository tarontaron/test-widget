module.exports = () => ({
    webpack: {
        configure: (config) => ({
            ...config,
            optimization: {
                ...config.optimization,
                splitChunks: {
                    chunks: "all",
                    minChunks: 2,
                    maxInitialRequests: Infinity,
                    minSize: 0,
                    cacheGroups: {
                        icons: {
                            test: /[\\/]src[\\/]icons[\\/]/,
                        },
                    },
                },
            },
        }),
    },
});