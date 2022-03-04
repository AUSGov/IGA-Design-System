const { path } = require('@vuepress/utils')

module.exports = {
  // site config
  lang: 'en-US',
  title: 'Department of Industry',
  description: 'Department of Industry style guide.',

  // theme and its config
  theme: '@vuepress/theme-default',
  plugins: [
    [
      '@vuepress/register-components',
      {
        // componentsDir: path.resolve(__dirname, './components'),
        components: {
          Test: path.resolve(__dirname, './components/Test.vue'),
        },
      },
    ],
  ],
  themeConfig: {
    logo: null,
    logoDark: null,
    darkMode: false,
    themePlugins: {
      activeHeaderLinks: true,
      backToTop: true,
      container: true,
      externalLinkIcon: true,
      git: true,
      nprogress: true
    },
    navbar: [
      // nested group - max depth is 2
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Introduction',
        link: '/introduction',
      },
      {
        text: 'Test',
        children: [
          {
            text: 'Test home',
            link: '/test',
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
