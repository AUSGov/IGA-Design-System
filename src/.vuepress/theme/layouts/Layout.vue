<script setup lang="ts">
  import Home from '@theme/Home.vue'
  import Navbar from '@theme/Navbar.vue'
  import Page from '@theme/Page.vue'
  import SidebarPageSections from '@theme/SidebarPageSections.vue'
  import SidebarSubMenu from '@theme/SidebarSubMenu.vue'
  import { usePageData, usePageFrontmatter } from '@vuepress/client'
  import { computed, onMounted, onUnmounted, ref, Transition } from 'vue'
  import { useRouter } from 'vue-router'
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
</script>

<template>
  <div class="theme-container">
    <slot name="navbar">
      <Navbar>
        <template #before>
          <slot name="navbar-before" />
        </template>
        <template #after>
          <slot name="navbar-after" />
        </template>
      </Navbar>
      <PageHeader v-if="$frontmatter.pageHeader"/>
    </slot>
    <slot name="sidebar">
      <div id="sidebar-left">
        <SidebarSubMenu/>
      </div>
      <div id="sidebar-right">
        <SidebarPageSections/>
      </div>
    </slot>
    <slot name="page">
      <Home v-if="frontmatter.home" />
      <Transition v-else name="fade-slide-y" mode="out-in">
        <Page :key="page.path">
          <template #top>
            <slot name="page-top" />
          </template>
          <template #bottom>
          </template>
        </Page>
      </Transition>
    </slot>
    <PageFooter/>
  </div>
</template>
