<script setup lang="ts">
  import AutoLink from '@theme/AutoLink.vue'
  import { useRouteLocale, useSiteData, useSiteLocaleData } from '@vuepress/client'
  import { isLinkHttp, isLinkMailto, isLinkTel, isString } from '@vuepress/shared'
  import { computed } from 'vue'
  import type { ComputedRef } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import type { NavbarGroup, NavbarItem, ResolvedNavbarItem } from '@vuepress/theme-default/lib/shared'
  import { useNavLink, useThemeLocaleData } from '@vuepress/theme-default/lib/client/composables'
  import { resolveRepoType } from '@vuepress/theme-default/lib/client/utils'

  /**
   * Get navbar config of select language dropdown
   */
  const useNavbarSelectLanguage = (): ComputedRef<ResolvedNavbarItem[]> => {
    const router = useRouter()
    const routeLocale = useRouteLocale()
    const siteLocale = useSiteLocaleData()
    const themeLocale = useThemeLocaleData()

    return computed<ResolvedNavbarItem[]>(() => {
      const localePaths = Object.keys(siteLocale.value.locales)
      // do not display language selection dropdown if there is only one language
      if (localePaths.length < 2) {
        return []
      }
      const currentPath = router.currentRoute.value.path
      const currentFullPath = router.currentRoute.value.fullPath

      const languageDropdown: ResolvedNavbarItem = {
        text: themeLocale.value.selectLanguageText ?? 'unknown language',
        ariaLabel: themeLocale.value.selectLanguageAriaLabel ?? 'unkown language',
        children: localePaths.map((targetLocalePath) => {
          // target locale config of this langauge link
          const targetSiteLocale =
            siteLocale.value.locales?.[targetLocalePath] ?? {}
          const targetThemeLocale =
            themeLocale.value.locales?.[targetLocalePath] ?? {}
          const targetLang = `${targetSiteLocale.lang}`

          const text = targetThemeLocale.selectLanguageName ?? targetLang
          let link

          if (targetLang === siteLocale.value.lang) {
            // if the target language is current language
            // stay at current link
            link = currentFullPath
          } else {
            // if the target language is not current language
            // try to link to the corresponding page of current page
            // or fallback to homepage
            const targetLocalePage = currentPath.replace(
              routeLocale.value,
              targetLocalePath
            )
            if (
              router.getRoutes().some((item) => item.path === targetLocalePage)
            ) {
              link = targetLocalePage
            } else {
              link = targetThemeLocale.home ?? targetLocalePath
            }
          }

          return {
            text,
            link,
          }
        }),
      }

      return [languageDropdown]
    })
  }

  /**
   * Get navbar config of repository link
   */
  const useNavbarRepo = (): ComputedRef<ResolvedNavbarItem[]> => {
    const themeLocale = useThemeLocaleData()

    const repo = computed(() => themeLocale.value.repo)
    const repoType = computed(() =>
      repo.value ? resolveRepoType(repo.value) : null
    )

    const repoLink = computed(() => {
      if (repo.value && !isLinkHttp(repo.value)) {
        return `https://github.com/${repo.value}`
      }

      return repo.value
    })

    const repoLabel = computed(() => {
      if (!repoLink.value) return null
      if (themeLocale.value.repoLabel) return themeLocale.value.repoLabel
      if (repoType.value === null) return 'Source'
      return repoType.value
    })

    return computed(() => {
      if (!repoLink.value || !repoLabel.value) {
        return []
      }

      return [
        {
          text: repoLabel.value,
          link: repoLink.value,
        },
      ]
    })
  }

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
  const navbarSelectLanguage = useNavbarSelectLanguage()
  const navbarRepo = useNavbarRepo()
  const navbarLinks = computed(() => [
    ...navbarConfig.value,
    ...navbarSelectLanguage.value,
    ...navbarRepo.value,
  ])

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
