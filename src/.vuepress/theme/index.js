const { path } = require('@vuepress/utils')
const { defaultTheme } = require('@vuepress/theme-default')

module.exports = options => {
  return {
    name: 'vuepress-theme-local',
    extends: defaultTheme(options),
    layouts: {
      Layout: path.resolve(__dirname, 'layouts/Layout.vue'),
      ParentPage: path.resolve(__dirname, 'layouts/ParentPage.vue'),
    },
    alias: {
      '@theme/SidebarSubMenu.vue': path.resolve(__dirname, 'components/SidebarSubMenu.vue'),
      '@theme/NavbarItems.vue': path.resolve(__dirname, 'components/NavbarItems.vue'),
      '@theme/SidebarPageSections.vue': path.resolve(__dirname, 'components/SidebarPageSections.vue'),
      '@theme/SidebarItem.vue': path.resolve(__dirname, 'components/SidebarItem.vue'),
      '@theme/NavbarBrand.vue': path.resolve(__dirname, 'components/NavbarBrand.vue'),
      '@theme/Navbar.vue': path.resolve(__dirname, 'components/Navbar.vue'),
    }
  }
}
