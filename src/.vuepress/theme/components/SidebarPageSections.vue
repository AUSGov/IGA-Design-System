<script setup>
import SidebarItems from '@theme/SidebarItems.vue'
import { useSidebarItems } from '@vuepress/theme-default/lib/client/composables'
const sidebarItems = useSidebarItems()
</script>
<template>
  <aside class="sidebar" v-if="sidebarItems[0]?.children?.length > 0">
    <div class="subtitle">On This Page</div>
    <SidebarItems />
  </aside>
</template>
