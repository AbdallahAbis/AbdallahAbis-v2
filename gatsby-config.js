// defining the path to Environment variables
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

// setting the concurrent download value to allow the queries to run even after 30s which is the default
process.env.GATSBY_CONCURRENT_DOWNLOAD = 1

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      // options: {
      //   name: `gatsby-starter-default`,
      //   short_name: `starter`,
      //   start_url: `/`,
      //   background_color: `#663399`,
      //   theme_color: `#663399`,
      //   display: `minimal-ui`,
      // },
    },
    // {
    //   resolve: `gatsby-source-strapi`,
    //   options: {
    //     apiURL: process.env.GATSBY_CMS_URL,
    //     // queryLimit: 1000, // Default to 100
    //     // contentTypes: [`navigation`],
    //     //If using single types place them in this array.
    //     singleTypes: [`hero`, `navigation`],
    //     // Possibility to login with a strapi user, when content types are not publically available (optional).
    //     loginData: {
    //       identifier: process.env.GATSBY_CMS_EMAIL,
    //       password: process.env.GATSBY_CMS_PASS,
    //     },
    //   },
    // },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: "STRAPI",
        fieldName: "strapi",
        url: process.env.GATSBY_CMS_URL,
      },
    },
    // Let's webpack to access svg files
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
