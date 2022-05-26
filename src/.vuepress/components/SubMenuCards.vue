<script setup lang="ts">
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'
  import { useThemeLocaleData } from '@vuepress/theme-default/lib/client/composables'

  const themeLocale = useThemeLocaleData()
  const route = useRoute()

  const shouldBeActiveInSubpath = (item) => {
    const localeKeys = Object.keys(site.value.locales)
    if (localeKeys.length) {
      return !localeKeys.some((key) => key === item.link)
    }
    return item.value.link !== '/'
  }
  const isActiveInSubpath = (item) => {
    if (!shouldBeActiveInSubpath) {
      return false
    }
    return route.path.startsWith(item.link)
  }
  const isActive = (child) => {
    if (child.activeMatch) {
      return new RegExp(child.activeMatch).test(route.path)
    }
    return isActiveInSubpath(child)
  }

  // console.log('$front', frontmatter)
  console.log('children', themeLocale)
  const subMenu = computed(() => {
    const parentMenu = themeLocale.value.navbar.find(item => item.children && isActive(item))
    if (!parentMenu) {
      return null
    }
    let result = []
    for (const child of parentMenu.children) {
      result.push({
        image: '',
        title: child.text,
        linkUrl: child.link,
        linkText: 'Link',
      })
    }
    return result
  })
</script>

<template>
  <div v-if="subMenu" class="c-sub-menu-cards">
    <Cards :contents="subMenu" :compact="true"/>
  </div>
</template>
