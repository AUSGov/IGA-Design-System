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
        text: 'Home',
        link: '/',
      },
      {
        text: 'Instructions',
        link: '/instructions',
      },
      {
        text: 'Typography',
        link: '/typography',
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
        link: '/components',
      },
      {
        text: 'Test',
        link: '/test/',
        children: [
          {
            text: 'Test Hello',
            link: '/test/hello',
          },
          // {
          //   text: 'SubGroup',
          //   children: ['/group/sub/foo.md', '/group/sub/bar.md'],
          // },
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
