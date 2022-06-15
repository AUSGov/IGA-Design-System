<script setup lang="ts">
  import Navbar from '@theme/Navbar.vue'
  import Page from '@theme/Page.vue'
  import SidebarSubMenu from '@theme/SidebarSubMenu.vue'
  import { usePageData, usePageFrontmatter } from '@vuepress/client'
  import { computed, onMounted, onUnmounted, ref } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import type { DefaultThemePageFrontmatter } from '@vuepress/theme-default/lib/shared'
  import {
    useScrollPromise,
    useSidebarItems,
    useThemeLocaleData,
  } from '@vuepress/theme-default/lib/client/composables'
  import PageHeader from '../components/PageHeader.vue'
  import PageFooter from '../components/PageFooter.vue'

  const page = usePageData()
  const frontmatter = usePageFrontmatter<DefaultThemePageFrontmatter>()
  const themeLocale = useThemeLocaleData()
  const route = useRoute()

  // navbar
  const shouldShowNavbar = computed(
    () => frontmatter.value.navbar !== false && themeLocale.value.navbar !== false
  )

  // sidebar
  const sidebarItems = useSidebarItems()
  const isSidebarOpen = ref(false)
  const toggleSidebar = (to?: boolean): void => {
    isSidebarOpen.value = typeof to === 'boolean' ? to : !isSidebarOpen.value
  }
  const touchStart = { x: 0, y: 0 }
  const onTouchStart = (e): void => {
    touchStart.x = e.changedTouches[0].clientX
    touchStart.y = e.changedTouches[0].clientY
  }
  const onTouchEnd = (e): void => {
    const dx = e.changedTouches[0].clientX - touchStart.x
    const dy = e.changedTouches[0].clientY - touchStart.y
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      if (dx > 0 && touchStart.x <= 80) {
        toggleSidebar(true)
      } else {
        toggleSidebar(false)
      }
    }
  }

  // classes
  const containerClass = computed(() => [
    {
      'no-navbar': !shouldShowNavbar.value,
      'no-sidebar': !sidebarItems.value.length,
      'sidebar-open': isSidebarOpen.value,
    },
    frontmatter.value.pageClass,
  ])

  // close sidebar after navigation
  let unregisterRouterHook
  onMounted(() => {
    const router = useRouter()
    unregisterRouterHook = router.afterEach(() => {
      toggleSidebar(false)
    })
  })
  onUnmounted(() => {
    unregisterRouterHook()
  })

  // handle scrollBehavior with transition
  const scrollPromise = useScrollPromise()
  const onBeforeEnter = scrollPromise.resolve
  const onBeforeLeave = scrollPromise.pending

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

  const activeItem = computed(() => {
    for (const item of themeLocale.value.navbar) {
      if (item.children && isActive(item)) {
        return item
      }
    }
    return null
  })
</script>

<template>
  <div class="theme-container">
    <slot name="navbar">
      <Navbar/>
    </slot>
    <div class="content-container">
      <PageHeader v-if="$frontmatter.pageHeader"/>
      <div class="row">
        <div class="col-12 col-sm-4 col-md-3 col-lg-2">
          <div id="sidebar-left">
            <SidebarSubMenu/>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-8">
          <Transition name="fade-slide-y" mode="out-in">
            <Page :key="page.path"/>
          </Transition>
        </div>
        <div class="d-none d-md-block col-md-3 col-lg-2"></div>
      </div>
    </div>
    <PageFooter/>
  </div>
</template>
