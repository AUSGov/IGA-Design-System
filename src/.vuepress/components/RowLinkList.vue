<template>
  <div class="c-row-link-list">
    <ul>
      <li v-for="item in list">
        <div class="text">{{ item.text }}</div>
        <a :href="item.linkUrl" :class="{ 'link-external': list.linkExternal, 'link-internal': !list.linkExternal }">
          <span class="text">{{ item.linkText }}</span>
          <span class="icon" v-html="item.linkExternal ? LinkExternal : LinkArrowRight"></span>
        </a>
      </li>
    </ul>
  </div>
</template>
<script setup>
import LinkArrowRight from '../public/icons/link-arrow-right.svg?raw'
import LinkExternal from '../public/icons/link-external.svg?raw'

const { list } = defineProps({ list: Array })
</script>
