const { path } = require('@vuepress/utils')
const localTheme = require('./theme/index')
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')
const { viteBundler } = require('@vuepress/bundler-vite')

module.exports = {
  // site config
  lang: 'en-US',
  title: 'Department of Industry',
  description: 'Department of Industry style guide.',
  base: process.env.NODE_ENV === 'production' ? '/DOI-Styleguide/' : '/',

  // theme and its config
  theme: localTheme({
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
          {
            text: 'CTAs and links',
            link: '/foundations/cta-links',
          },
        ],
      },
      {
        text: 'Components',
        link: '/components/',
        children: [
          {
            text: 'Headers and footers',
            link: '/components/headers-footers/header',
            children: [
              {
                text: 'Header',
                link: '/components/headers-footers/header',
              },
              {
                text: 'Global Footer',
                link: '/components/headers-footers/global-footer',
              },
              {
                text: 'Secondary Footer',
                link: '/components/headers-footers/secondary-footer',
              },
            ],
          },
          {
            text: 'Navigation',
            link: '/components/navigation/mega-menu',
            children: [
              {
                text: 'Mega Menu',
                link: '/components/navigation/mega-menu',
              },
              {
                text: 'Breadcrumbs',
                link: '/components/navigation/breadcrumbs',
              },
              {
                text: 'In-section navigation',
                link: '/components/navigation/in-section-navigation',
              },
              {
                text: 'On this page menu',
                link: '/components/navigation/on-this-page-menu',
              },
              {
                text: 'Tile navigation',
                link: '/components/navigation/tile-navigation',
              },
              {
                text: 'Publication section divider',
                link: '/components/navigation/publication-section-divider',
              },
            ],
          },
          {
            text: 'Cards and Card Containers',
            link: '/components/cards/publication',
            children: [
              {
                text: 'Publication card and containers',
                link: '/components/cards/publication'
              },
              {
                text: 'News card and containers',
                link: '/components/cards/news'
              },
              {
                text: 'Event card and containers',
                link: '/components/cards/event'
              },
              {
                text: 'Filtered landing page card',
                link: '/components/cards/filtered-landing-page'
              },
              {
                text: 'Bio card',
                link: '/components/cards/bio'
              },
              {
                text: 'Request for quote (NMI)',
                link: '/components/cards/request-for-quote'
              },
            ]
          },
          {
            text: 'Filters',
            link: '/components/filters/checkbox',
            children: [
              {
                text: 'Checkbox filter',
                link: '/components/filters/checkbox',
              },
              {
                text: 'Tabs filter',
                link: '/components/filters/tabs',
              },
              {
                text: 'Dropdown filter',
                link: '/components/filters/dropdown',
              },
              {
                text: 'Tags filter',
                link: '/components/filters/tags',
              },
            ]
          },
          {
            text: 'Banners',
            link: '/components/banners/homepage',
            children: [
              {
                text: 'Homepage banner',
                link: '/components/banners/homepage',
              },
              {
                text: 'Standard content banner',
                link: '/components/banners/standard-content',
              },
              {
                text: 'Standard content ADC banner',
                link: '/components/banners/standard-content-adc',
              },
              {
                text: 'Publication banners',
                link: '/components/banners/publication',
              },
              {
                text: 'News article, case study, event banner',
                link: '/components/banners/news-case-event',
              },
              {
                text: 'Biography banner',
                link: '/components/banners/biography',
              },
            ]
          },
          {
            text: 'Information Components',
            link: '/components/information-components/alert',
            children: [
              {
                text: 'Alert',
                link: '/components/information-components/alert',
              },
              {
                text: 'Callout',
                link: '/components/information-components/callout',
              },
              {
                text: 'Document download',
                link: '/components/information-components/document-download',
              },
              {
                text: 'Form',
                link: '/components/information-components/form',
              },
              {
                text: 'Media',
                link: '/components/information-components/media',
              },
              {
                text: 'Pagination',
                link: '/components/information-components/pagination',
              },
              {
                text: 'Table',
                link: '/components/information-components/table',
              },
              {
                text: 'Filterable table',
                link: '/components/information-components/filterable-table',
              },
              {
                text: 'Timeline',
                link: '/components/information-components/timeline',
              }
            ]
          }
        ],
      },
      {
        text: 'Page Patterns',
        link: '/page-patterns',
      },
      {
        text: 'Accessibility',
        link: '/accessibility',
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
  }),

  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components')
    })
  ],
  bundler: viteBundler({
    viteOptions: {
      // build: {
      //   rollupOptions: {
      //     external: ['https://code.jquery.com/jquery-3.6.0.min.js']
      //   }
      // },
      // output: {
      //   globals: {
      //     jquery: 'jQuery'
      //   }
      // },
      ssr: {
        noExternal: ['https://code.jquery.com/jquery-3.6.0.min.js'],
      },
    },
    vuePluginOptions: {
      template: {
        compilerOptions: {
          whitespace: 'preserve'
        }
      }
    }
  })
}
