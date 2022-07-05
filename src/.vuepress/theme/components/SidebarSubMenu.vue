<script setup lang="ts">
  import AutoLink from '@theme/AutoLink.vue'
  import { useSiteData } from '@vuepress/client'
  import { isLinkHttp, isLinkMailto, isLinkTel, isString } from '@vuepress/shared'
  import { computed } from 'vue'
  import type { ComputedRef } from 'vue'
  import { useRoute } from 'vue-router'
  import type { NavbarGroup, NavbarItem, ResolvedNavbarItem } from '@vuepress/theme-default/lib/shared'
  import { useNavLink, useThemeLocaleData } from '@vuepress/theme-default/lib/client/composables'

  const resolveNavbarItem = (
    item: NavbarItem | NavbarGroup | string
  ): ResolvedNavbarItem => {
    if (isString(item)) {
      return useNavLink(item)
    }
    if ((item as NavbarGroup).children) {
      return {
        ...item,
        children: (item as NavbarGroup).children.map(resolveNavbarItem),
      }
    }
    return item as ResolvedNavbarItem
  }

  const useNavbarConfig = (): ComputedRef<ResolvedNavbarItem[]> => {
    const themeLocale = useThemeLocaleData()
    return computed(() => (themeLocale.value.navbar || []).map(resolveNavbarItem))
  }

  const navbarConfig = useNavbarConfig()
  const navbarLinks = computed(() => {
    console.log('computed navbarLinks', navbarConfig.value)
    return [
      ...navbarConfig.value
    ].reverse() // Flip it so that it doesn't accidentally match introduction -> /
  })

  const route = useRoute()
  const site = useSiteData()

  const hasHttpProtocol = (item) => isLinkHttp(item.link)
  const hasNonHttpProtocol = (item) => isLinkMailto(item.link) || isLinkTel(item.link)
  const linkTarget = (item) => {
    if (hasNonHttpProtocol(item)) return undefined
    if (item.target) return item.target
    if (hasHttpProtocol(item)) return '_blank'
    return undefined
  }
  const isBlankTarget = (item) => linkTarget(item) === '_blank'

  const isRouterLink = (child) => !hasHttpProtocol(child) && !hasNonHttpProtocol(child) && !isBlankTarget(child)
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
    if (!isRouterLink(child)) {
      return false
    }
    if (child.activeMatch) {
      return new RegExp(child.activeMatch).test(route.path)
    }
    return isActiveInSubpath(child)
  }

  // navbar item that has active children
  const activeItem = computed(() => {
    for (const item of navbarLinks.value) {
      if (!item.children) {
        continue
      }
      // active child page
      for (const child of item.children) {
        console.log('item', item)
        if (isActive(child)) {
          return item
        }
        if (!isRouterLink(child)) {
          continue
        }
        if (item.activeMatch) {
          if (new RegExp(item.activeMatch).test(child.path)) {
            return item
          }
          continue
        }
        if (isActiveInSubpath(child)) {
          return item
        }
      }
      // active parent page
      if (item.children && isActive(item)) {
        return item
      }
    }
    return null
  })
</script>

<template>
  <aside class="sidebar">
    <ul v-if="activeItem" class="sidebar-items">
      <li
          v-for="child in activeItem.children"
          :key="child.text"
          class="navbar-dropdown-item"
      >
        <template v-if="child.children">
          <div class="subtitle">
            <span>{{ child.text }}</span>
          </div>

          <ul class="navbar-dropdown-subitem-wrapper">
            <li
                v-for="grandchild in child.children"
                :key="grandchild.link"
                class="navbar-dropdown-subitem"
            >
              <AutoLink
                  :item="grandchild"
              />
            </li>
          </ul>
        </template>

        <template v-else>
          <AutoLink
              :item="child"
          />
        </template>
      </li>
    </ul>
  </aside>
</template>
