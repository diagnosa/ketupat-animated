const path = require('path');

module.exports = {
    siteMetadata: {
        title: 'Ketupat Animated',
        description: 'Ketupat aninmated using GatsbyJS',
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-typography',
            options: {
                pathToConfigModule: 'src/utils/typography',
            },
        },
        {
            resolve: 'gatsby-plugin-eslint',
            options: {
                test: /\.js$|\.jsx$/,
                exclude: /(node_modules|.cache|public)/,
                stages: ['develop'],
                options: {
                    emitWarning: true,
                    failOnError: false,
                },
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: path.join(__dirname, 'src', 'images'),
            },
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Ketupat Animated',
                short_name: 'Ketupad',
                start_url: '/',
                background_color: '#fefae0',
                theme_color: '#264653',
                display: 'standalone',
                icon: 'src/images/ketupat-icon.png',
                crossOrigin: 'use-credentials',
            },
        },
        'gatsby-plugin-react-helmet',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
    ],
};
