/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sass`, 
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Silly Christmas Site Challenge by Rinat Rezyapov`,
        short_name: `Gatsby Silly Site Challenge`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: '#ffffff',
        display: `minimal-ui`,
        icon: `content/assets/icon.png`
      }
    },
  ],
}
