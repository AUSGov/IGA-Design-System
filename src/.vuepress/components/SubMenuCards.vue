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
    let result = {
      flat: [],
      children: []
    }
    for (const child of parentMenu.children) {
      if (!child.children || !child.children.length) {
        result.flat.push({
          title: child.text,
          componentsLink: child.componentsLink,
          linkUrl: child.link,
          linkText: 'Documentation',
          htmlLink: child.htmlLink ?? null,
        })
        continue
      }
      let processedChildren = child.children.map(item => ({
        title: item.text,
        linkUrl: item.link ?? null,
        linkText: 'Documentation',
      }))
      result.children.push({
        title: child.text,
        children: processedChildren
      })
    }
    return result
  })
</script>

<template>
  <div class="c-sub-menu-cards">
    <template v-if="subMenu.flat">
      <Cards :contents="subMenu.flat" :compact="true"/>
    </template>
    <template v-if="subMenu.children">
    <div v-for="menu in subMenu.children" class="mb-12">
      <h2>{{ menu.title }}</h2>
      <Cards :contents="menu.children" :compact="true"/>
    </div>
    </template>
  </div>
</template>
