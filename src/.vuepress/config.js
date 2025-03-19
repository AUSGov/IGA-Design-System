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
    logoDark: 'images/DISR-logo-inverted.png',
    logo: 'images/DISR-logo-inverted.png',
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
            text: 'Icons',
            link: '/foundations/icons',
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
        mobileNavbarDropdown: true,
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
                text: 'Section Header',
                link: '/components/headers-footers/section-header',
                htmlLink: '/html-components/headers-footers#section-header',
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
            ],
          },
          {
            text: 'Cards and Card Containers',
            link: '/components/cards/publication',
            children: [
              {
                text: 'Editorial card and containers',
                link: '/components/cards/editorial'
              },
              {
                text: 'Featured full image card (Large)',
                link: '/components/cards/featured-full-lg'
              },
              {
                text: 'Featured card (Large)',
                link: '/components/cards/featured-lg'
              },
              {
                text: 'Featured card (Overlay)',
                link: '/components/cards/featured-overlay'
              },
              {
                text: 'Navigation card and containers',
                link: '/components/cards/navigation'
              },
              {
                text: 'Snippet card',
                link: '/components/cards/snippet'
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
              {
                text: 'Latest news',
                link: '/components/cards/news',
                htmlLink: '/html-components/cards#featured-news',
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
              {
                text: 'Range slider',
                link: '/components/filters/range-slider',
                htmlLink: '/html-components/filters#checkbox-filter',
              },
              {
                text: 'Search',
                link: '/components/filters/search',
                htmlLink: '/html-components/filters#search-filter',
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
                text: 'Section banner',
                link: '/components/banners/section',
                htmlLink: '/html-components/banners#section-banner',
              },
              {
                text: 'Featured publication banner',
                link: '/components/banners/featured-publication',
                htmlLink: '/html-components/banners#publication-banner',
              },
              {
                text: 'Basic publication banner',
                link: '/components/banners/basic-publication',
                htmlLink: '/html-components/banners#publication-banner',
              },
              {
                text: 'News article, case study, event banner',
                link: '/components/banners/news-case-event',
                htmlLink: '/html-components/banners#news-article',
              },
            ]
          },
          {
            text: 'Information Components',
            link: '/components/information-components/alert',
            children: [
              {
                text: 'Callout',
                link: '/components/information-components/callout',
                htmlLink: '/html-components/other-components#callout',
              },
              {
                text: 'Form',
                link: '/components/information-components/form',
                htmlLink: '/html-components/other-components#form',
              },
              {
                text: 'Image',
                link: '/components/information-components/image',
                htmlLink: '/html-components/other-components#image',
              },
              {
                text: 'Video',
                link: '/components/information-components/video',
                htmlLink: '/html-components/other-components#video',
              },
              {
                text: 'Gallery',
                link: '/components/information-components/gallery',
                htmlLink: '/html-components/other-components#gallery',
              },
              {
                text: 'Blockquote',
                link: '/components/information-components/blockquote',
                htmlLink: '/html-components/other-components#blockquote',
              },
              {
                text: 'Publication Overview',
                link: '/components/information-components/publication-overview',
                htmlLink: '/html-components/other-components#publication-overview',
              },
              {
                text: 'Pagination',
                link: '/components/information-components/pagination',
                htmlLink: '/html-components/other-components#pagination',
              },
              {
                text: 'Table',
                link: '/components/information-components/table',
                htmlLink: '/html-components/other-components#table',
              },
              {
                text: 'Timeline',
                link: '/components/information-components/timeline',
                htmlLink: '/html-components/other-components#horizontal-timeline',
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
        mobileNavbarDropdown: true,
        children: [
          {
            text: 'Standard content',
            link: '/page-patterns/standard-content/alert',
            children: [
              {
                text: 'Biography',
                link: '/page-patterns/standard-content/biography.html',
                htmlLink: '/html-page-patterns/biography.html',
              },
              {
                text: 'Filtered Homepage',
                link: '/page-patterns/standard-content/filtered-homepage.html',
                htmlLink: '/html-page-patterns/filtered-homepage.html',
              },
              {
                text: 'Organisational Chart',
                link: '/page-patterns/standard-content/org-chart.html',
                htmlLink: '/html-page-patterns/org-chart.html',
              },
              {
                text: 'Topic landing page (standard)',
                link: '/page-patterns/standard-content/topic-landing-standard.html',
                htmlLink: '/html-page-patterns/org-chart.html',
              },
              {
                text: 'Entity landing page (standard)',
                link: '/page-patterns/standard-content/entity-landing-standard.html',
                htmlLink: '/html-page-patterns/org-chart.html',
              }
            ]
          },
          {
            text: 'News',
            link: '/page-patterns/news/alert',
            children: [

              {
                text: 'News article',
                link: '/page-patterns/news/news-article.html',
                htmlLink: '/html-page-patterns/news-article.html',
              }



            ]
          },
          {
            text: 'Publications',
            link: '/page-patterns/publications/alert',
            children: [

              {
                text: 'Publications Homepage',
                link: '/page-patterns/publications/publications-homepage.html',
                htmlLink: '/html-page-patterns/publications-homepage.html',
              }




            ]
          },
          {
            text: 'Site pages',
            link: '/page-patterns/site-pages/alert',
            children: [
              {
                text: 'Homepage',
                link: '/page-patterns/site-pages/homepage.html',
                htmlLink: '/html-page-patterns/homepage.html',
              },
              {
                text: 'Search Landing',
                link: '/page-patterns/site-pages/search-landing.html',
                htmlLink: '/html-page-patterns/search-landing.html',
              }


            ]
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
