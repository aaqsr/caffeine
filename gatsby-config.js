module.exports = {
    siteMetadata: {
        siteUrl: "https://www.yourdomain.tld",
        title: "caffeine"
    },
    pathPrefix: "/caffeine",
    plugins: [
        "gatsby-plugin-sass",
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "src/images/coffee.svg"
            }
        },
        {
            resolve: "gatsby-plugin-sharp",
            options: {
                icon: "src/images/coffee.svg"
            }
        },
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/"
            },
            __key: "images"
        },
    ]
};
