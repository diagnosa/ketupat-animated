module.exports = {
    siteMetadata: {
        title: `Ketupat Animated`,
        description: `Ketupat aninmated using GatsbyJS`,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            },
        },
    ],
};
