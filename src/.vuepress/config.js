const { path } = require('@vuepress/utils')

module.exports = {
  // site config
  lang: 'en-US',
  title: 'Department of Industry',
  description: 'Department of Industry style guide.',
  base: process.env.NODE_ENV === 'production' ? '/DOI-Styleguide/' : '/',

  // theme and its config
  theme: path.resolve(__dirname, './theme'),
  plugins: [
    [
      '@vuepress/register-components',
      {
        componentsDir: path.resolve(__dirname, './components'),
      },
    ],
    // '@vuepress/plugin-search'
  ],
  themeConfig: {
    logo: '/images/diser-logo.svg',
    logoDark: '/images/diser-logo.svg',
    // darkMode: false,
    contributors: false,
    themePlugins: {
      activeHeaderLinks: true,
      backToTop: true,
      container: true,
      externalLinkIcon: true,
      git: true,
      nprogress: true
    },
    search: true,
    navbar: [
      // nested group - max depth is 2
      {
        text: 'Introduction',
        link: '/introduction',
      },
      {
        text: 'Foundations',
        link: '/foundations/colour-palette',
        children: [
          {
            text: 'Colour Palette',
            link: '/foundations/colour-palette',
          },
          {
            text: 'Typography',
            link: '/foundations/typography',
          },
        ],
      },
      {
        text: 'Colour Palette',
        link: '/colour-palette',
      },
      {
        text: 'Icons',
        link: '/icons',
      },
      {
        text: 'Atoms',
        link: '/atoms',
      },
      {
        text: 'Components',
        link: '/components/',
        children: [
          {
            text: 'Headers and footers',
            link: '/components/header',
            children: [
              {
                text: 'Header',
                link: '/components/header',
              },
              {
                text: 'Footer',
                link: '/components/footer',
              },
              {
                text: 'Secondary Footer',
                link: '/components/secondary-footer',
              },
            ],
          },
          {
            text: 'Banner',
            link: '/components/homepage-banner',
            children: [
              {
                text: 'Homepage banner',
                link: '/components/homepage-banner',
              },
              {
                text: 'Standard content banner',
                link: '/components/standard-content-banner',
              },
            ],
          },
          {
            text: 'Entity Bar',
            link: '/components/entity-bar',
          },
          {
            text: 'In Section',
            link: '/components/in-section',
          },
          {
            text: 'On this page',
            link: '/components/on-this-page',
          },
          {
            text: 'Navigate (pubs)',
            link: '/components/navigate-pubs',
          },
          {
            text: 'Publications',
            link: '/components/publications',
          },
          {
            text: 'Standard + News',
            link: '/components/standard-news',
          },
          {
            text: 'Filtered Landing Pages',
            link: '/components/filtered-landing-pages',
          },
          {
            text: 'Outlier Components and Page Patterns',
            link: '/components/outlier-components-page-patterns',
          },
          {
            text: 'Homepage',
            link: '/components/homepage',
          },
          {
            text: 'Tables',
            link: '/components/tables',
          },
        ],
      },
      // control when should the item be active
      // {
      //   text: 'Group 2',
      //   children: [
      //     {
      //       text: 'Always active',
      //       link: '/',
      //       // this item will always be active
      //       activeMatch: '/',
      //     },
      //     {
      //       text: 'Active on /foo/',
      //       link: '/not-foo/',
      //       // this item will be active when current route path starts with /foo/
      //       // regular expression is supported
      //       activeMatch: '^/foo/',
      //     },
      //   ],
      // }
    ]
  }
}
