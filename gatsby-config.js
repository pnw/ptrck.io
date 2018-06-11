module.exports = {
    siteMetadata: {
        title: `PTRCK.IO | Patrick Walsh`,
    },
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: `UA-120643550-1`
            }
        }
    ]
}