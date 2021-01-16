const meta = require('./gatsby-meta-config');

module.exports = {
  siteMetadata: {
    title: meta.title,
    author: meta.author.name,
    description: meta.description,
    siteUrl: meta.siteUrl,
    lang: meta.lang,
    postTitle: 'All',
    navLinks: [
      {
        link:'/',
        name:'HOME'
      },
      {
        link:'/about',
        name:'ABOUT'
      },
      {
        link: meta.links.github,
        name:'GITHUB'
      },
      {
        link: meta.links.instagram,
        name:'INSTAGRAM'
      },
      {
        link: meta.links.notion,
        name:'NOTION'
      },
      {
        link: meta.links.linkedin,
        name:'LINKEDIN'
      },
    ],
    adsense:{
      adClient: 'ca-pub-5373443176805821',
      adSlot:'4000980067'
    }
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: `gatsby-remark-vscode`,
            options: {
              theme: {
                default: 'Monokai Dimmed',
                dark: 'Monokai Dimmed'
              }
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: meta.title,
        short_name:  meta.title,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,

    'gatsby-plugin-dark-mode',
    `gatsby-plugin-fontawesome-css`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    
    // Create Sitemap, Feed, Robots
    'gatsby-plugin-sitemap',
    `gatsby-plugin-feed`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://tinnia.github.io/',
        sitemap: 'https://tinnia.github.io/sitemap.xml',
        policy: [{
          userAgent: '*',
          allow: '/'
        }]
      }
    },

    // Google Adsense
    {
      resolve: `gatsby-plugin-google-adsense`,
      options: {
        publisherId: `ca-pub-5373443176805821`
      },
    },
    // Google Analytics
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-152576250-1`
      },
    },
  ],
}
