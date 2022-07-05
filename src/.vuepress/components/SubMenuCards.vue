<script setup lang="ts">
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'
  import { useThemeLocaleData } from '@vuepress/theme-default/lib/client/composables'

  const themeLocale = useThemeLocaleData()
  const route = useRoute()

  const shouldBeActiveInSubpath = (item) => {
    const localeKeys = Object.keys(item.value.locales)
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

  const subMenu = computed(() => {
    const parentMenu = [...themeLocale.value.navbar].reverse().find(item => item.children && isActive(item)) // Flip it so that it doesn't accidentally match introduction -> /
    if (!parentMenu) {
      return null
    }
    let result = []
    for (const child of parentMenu.children) {
      if (!child.children || !child.children.length) {
        continue
      }
      let processedChildren = child.children.map(item => ({
        title: item.text,
        componentsLink: item.componentsLink,
        linkUrl: item.link,
        linkText: 'Documentation',
      }))
      result.push({
        title: child.text,
        children: processedChildren
      })
    }
    return result
  })
</script>

<template>
  <div v-if="subMenu" class="c-sub-menu-cards">
    <div v-for="menu in subMenu" class="mb-12">
      <h2>{{ menu.title }}</h2>
      <Cards :contents="menu.children" :compact="true"/>
    </div>
  </div>
</template>
