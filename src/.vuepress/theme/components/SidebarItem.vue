<script setup lang="ts">
import AutoLink from '@theme/AutoLink.vue'
import DropdownTransition from '@theme/DropdownTransition.vue'
import { computed, ref, toRefs } from 'vue'
import type { PropType } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { ResolvedSidebarItem } from '@vuepress/theme-default/lib/shared'
import { isActiveSidebarItem } from '@vuepress/theme-default/lib/client/utils'

const props = defineProps({
  item: {
    type: Object as PropType<ResolvedSidebarItem>,
    required: true,
  },
  depth: {
    type: Number,
    required: false,
    default: 0,
  },
})

const { item, depth } = toRefs(props)
const route = useRoute()
const router = useRouter()

const isActive = computed(() => isActiveSidebarItem(item.value, route))
const itemClass = computed(() => ({
  'sidebar-item': true,
  'sidebar-heading': depth.value === 0,
  'active': isActive.value,
  'collapsible': item.value.collapsible,
}))

const isOpen = ref(true)
const onClick = ref<(() => void) | undefined>(undefined)

if (item.value.collapsible) {
  // active item is open by default
  isOpen.value = isActive.value
  // toggle open status on click
  onClick.value = () => {
    isOpen.value = !isOpen.value
  }
  // reset open status after navigation
  router.afterEach(() => {
    isOpen.value = isActive.value
  })
}
</script>

<template>
  <li>
    <AutoLink v-if="item.link" :class="itemClass" :item="item" />

    <DropdownTransition v-if="item.children?.length">
      <ul v-show="isOpen" class="sidebar-item-children">
        <SidebarItem
          v-for="child in item.children"
          :key="`${depth}${child.text}${child.link}`"
          :item="child"
          :depth="depth + 1"
        />
      </ul>
    </DropdownTransition>
  </li>
</template>
