const { path } = require('@vuepress/utils')
const localTheme = require('./theme/index')
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')
const { viteBundler } = require('@vuepress/bundler-vite')

module.exports = {
  templateDev: path.resolve(__dirname, 'theme/templates/dev.html'),
  templateBuild: path.resolve(__dirname, 'theme/templates/build.html'),

  // site config
  lang: 'en-US',
  title: 'Department of Industry',
  description: 'Department of Industry style guide.',
  base: process.env.NODE_ENV === 'production' ? '/IGA-Design-System/' : '/',

  // theme and its config
  theme: localTheme({
    logoDark: '/images/DISR-logo-inverted.png',
    logo: '/images/DISR-logo-inverted.png',
    darkMode: false,
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
        link: '/',
        children: [
          {
            text: 'Introduction',
            link: '/'
          },
          {
            text: 'Getting Started',
            link: '/introduction/getting-started'
          }
        ]
      },
      {
        text: 'Foundations',
        link: '/foundations',
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
          {
            text: 'Forms',
            link: '/foundations/forms',
          },
        ],
      },
      {
        text: 'Components',
        link: '/components',
        children: [
          {
            text: 'Headers and footers',
            link: '/components/headers-footers/header',
            children: [
              {
                text: 'Header',
                link: '/components/headers-footers/header',
                htmlLink: '/html-components/headers-footers#header',
              },
              {
                text: 'Global Footer',
                link: '/components/headers-footers/global-footer',
                htmlLink: '/html-components/headers-footers#global-footer',
              },
              {
                text: 'Secondary Footer',
                link: '/components/headers-footers/secondary-footer',
                htmlLink: '/html-components/headers-footers#secondary-footer',
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
                htmlLink: '/html-components/headers-footers#header',
              },
              {
                text: 'Breadcrumbs',
                link: '/components/navigation/breadcrumbs',
                htmlLink: '/html-components/navigation#breadcrumbs',
              },
              {
                text: 'In-section navigation',
                link: '/components/navigation/in-section-navigation',
                htmlLink: '/html-components/navigation#in-section-navigation',
              },
              {
                text: 'On this page menu',
                link: '/components/navigation/on-this-page-menu',
                htmlLink: '/html-components/navigation#on-this-page-menu',
              },
              {
                text: 'Directory links',
                link: '/components/navigation/directory-links',
                componentsLink: '/components-html/navigation#directory-links',
              },
              {
                text: 'Chapter Banner',
                link: '/components/navigation/chapter-banner',
                componentsLink: '/components-html/navigation#chapter-banner',
              },
              {
                text: 'Content Stepper',
                link: '/components/navigation/content-stepper',
                componentsLink: '/components-html/navigation#content-stepper',
              },
              {
                text: 'Read More',
                link: '/components/navigation/read-more',
                componentsLink: '/components-html/navigation#read-more',
              },
              {
                text: 'Tile navigation',
                link: '/components/navigation/tile-navigation',
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
                link: '/components/cards/news',
                htmlLink: '/html-components/cards#featured-news',
              },
              {
                text: 'Event card and containers',
                link: '/components/cards/event',
                htmlLink: '/html-components/cards#event-card',
              },
              {
                text: 'Filtered landing page card',
                link: '/components/cards/filtered-landing-page',
                htmlLink: '/html-components/cards#filtered-landing-page-card',
              },
              {
                text: 'Bio card',
                link: '/components/cards/bio',
                htmlLink: '/html-components/cards#biography-card',
              },
              {
                text: 'Request for quote (NMI)',
                link: '/components/cards/request-for-quote',
                htmlLink: '/html-components/cards#rfq-card',
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
                htmlLink: '/html-components/filters#checkbox-filter',
              },
              {
                text: 'Tabs filter',
                link: '/components/filters/tabs',
                htmlLink: '/html-components/filters#tabs-filter',
              },
              {
                text: 'Dropdown filter',
                link: '/components/filters/dropdown',
                htmlLink: '/html-components/filters#dropdown-filter',
              },
              {
                text: 'Tags filter',
                link: '/components/filters/tags',
                htmlLink: '/html-components/filters#tabs-filter',
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
                htmlLink: '/html-components/banners#carousel',
              },
              {
                text: 'Standard content banner',
                link: '/components/banners/standard-content',
                htmlLink: '/html-components/banners#standard-banner',
              },
              {
                text: 'Standard content ADC banner',
                link: '/components/banners/standard-content-adc',
              },
              {
                text: 'Publication banners',
                link: '/components/banners/publication',
                htmlLink: '/html-components/banners#publication-banner',
              },
              {
                text: 'News article, case study, event banner',
                link: '/components/banners/news-case-event',
                htmlLink: '/html-components/banners#news-article',
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
        text: 'Components HTML',
        link: '/html-components',
        hidden: true,
        children: [
          {
            text: 'Banners',
            link: '/html-components/banners.html',
          },
          {
            text: 'Cards',
            link: '/html-components/cards.html',
          },
          {
            text: 'Filters',
            link: '/html-components/filters.html',
          },
          {
            text: 'Headers & Footers',
            link: '/html-components/headers-footers.html',
          },
          {
            text: 'Navigation',
            link: '/html-components/navigation.html',
          },
          {
            text: 'Other Components',
            link: '/html-components/other-components.html',
          },
        ]
      },
      {
        text: 'Page Patterns',
        link: '/page-patterns',
        children: [
          {
            text: 'Biography',
            link: '/page-patterns/biography.html',
            htmlLink: '/html-page-patterns/biography.html',
          },
          {
            text: 'Biography without Image',
            link: '/page-patterns/biography-imageless.html',
            htmlLink: '/html-page-patterns/biography-imageless.html',
          },
          {
            text: 'Case Study',
            link: '/page-patterns/case-study.html',
            htmlLink: '/html-page-patterns/case-study.html',
          },
          {
            text: 'Event',
            link: '/page-patterns/event.html',
            htmlLink: '/html-page-patterns/event.html',
          },
          {
            text: 'Filtered Homepage',
            link: '/page-patterns/filtered-homepage.html',
            htmlLink: '/html-page-patterns/filtered-homepage.html',
          },
          {
            text: 'Filtered Homepage ADC',
            link: '/page-patterns/filtered-homepage-adc.html',
            htmlLink: '/html-page-patterns/filtered-homepage-adc.html',
          },
          {
            text: 'Homepage',
            link: '/page-patterns/homepage.html',
            htmlLink: '/html-page-patterns/homepage.html',
          },
          {
            text: 'News Article',
            link: '/page-patterns/news-article.html',
            htmlLink: '/html-page-patterns/news-article.html',
          },
          {
            text: 'News Homepage',
            link: '/page-patterns/news-homepage.html',
            htmlLink: '/html-page-patterns/news-homepage.html',
          },
          {
            text: 'News Subsection',
            link: '/page-patterns/news-subsection.html',
            htmlLink: '/html-page-patterns/news-subsection.html',
          },
          {
            text: 'Organisational Chart',
            link: '/page-patterns/org-chart.html',
            htmlLink: '/html-page-patterns/org-chart.html',
          },
          {
            text: 'Publications Chaptered',
            link: '/page-patterns/publications-chaptered.html',
            htmlLink: '/html-page-patterns/publications-chaptered.html',
          },
          {
            text: 'Publications Chaptered Child',
            link: '/page-patterns/publications-chaptered-child.html',
            htmlLink: '/html-page-patterns/publications-chaptered-child.html',
          },
          {
            text: 'Publications Homepage',
            link: '/page-patterns/publications-homepage.html',
            htmlLink: '/html-page-patterns/publications-homepage.html',
          },
          {
            text: 'Publications Single Basic',
            link: '/page-patterns/publications-single-basic.html',
            htmlLink: '/html-page-patterns/publications-single-basic.html',
          },
          {
            text: 'Publications Single Page',
            link: '/page-patterns/publications-single-page.html',
            htmlLink: '/html-page-patterns/publications-single-page.html',
          },
          {
            text: 'Search Landing',
            link: '/page-patterns/search-landing.html',
            htmlLink: '/html-page-patterns/search-landing.html',
          },
          {
            text: 'Standard Content',
            link: '/page-patterns/standard-content.html',
            htmlLink: '/html-page-patterns/standard-content.html',
          }
        ]
      },
      {
        text: 'Page Patterns HTML',
        link: '/html-page-patterns',
        hidden: true,
        children: [
          {
            text: 'Biography',
            link: '/html-page-patterns/biography.html',
          },
          {
            text: 'Biography without Image',
            link: '/html-page-patterns/biography-imageless.html',
          },
          {
            text: 'Case Study',
            link: '/html-page-patterns/case-study.html',
          },
          {
            text: 'Event',
            link: '/html-page-patterns/event.html',
          },
          {
            text: 'Filtered Homepage',
            link: '/html-page-patterns/filtered-homepage.html',
          },
          {
            text: 'Filtered Homepage ADC',
            link: '/html-page-patterns/filtered-homepage-adc.html',
          },
          {
            text: 'Homepage',
            link: '/html-page-patterns/homepage.html',
          },
          {
            text: 'News Article',
            link: '/html-page-patterns/news-article.html',
          },
          {
            text: 'News Homepage',
            link: '/html-page-patterns/news-homepage.html',
          },
          {
            text: 'News Subsection',
            link: '/html-page-patterns/news-subsection.html',
          },
          {
            text: 'Organisational Chart',
            link: '/html-page-patterns/org-chart.html',
          },
          {
            text: 'Publications Chaptered',
            link: '/html-page-patterns/publications-chaptered.html',
          },
          {
            text: 'Publications Chaptered Child',
            link: '/html-page-patterns/publications-chaptered-child.html',
          },
          {
            text: 'Publications Homepage',
            link: '/html-page-patterns/publications-homepage.html',
          },
          {
            text: 'Publications Single Basic',
            link: '/html-page-patterns/publications-single-basic.html',
          },
          {
            text: 'Publications Single Page',
            link: '/html-page-patterns/publications-single-page.html',
          },
          {
            text: 'Search Landing',
            link: '/html-page-patterns/search-landing.html',
          },
          {
            text: 'Standard Content',
            link: '/html-page-patterns/standard-content.html',
          }
        ]
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
    vuePluginOptions: {
      template: {
        compilerOptions: {
          whitespace: 'preserve'
        }
      },
      build: {
        emptyOutDir: false
      }
    }
  })
}
