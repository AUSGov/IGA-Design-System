<template>
  <nav class="filters">
    <div class="title-wrapper-container">
      <span class="title-container border-end border-2 lead">{{ title }}</span>
    </div>
    <div class="nav-group">
      <ul class="nav nav-tabs heading-extra-small">
        <li v-for="content in contents" class="nav-item">
          <a aria-current="page" href="#">{{ content }}</a>
        </li>
      </ul>
    </div>
    <div class="icon-container">
      <span class="icon" v-html="chevronForward"></span>
    </div>
  </nav>
</template>
<script setup>
  import chevronForward from '../../../public/icons/chevron-forward.svg?raw'

  const props = defineProps({
    title: {
      type: String,
      required: true,
    },
    contents: {
      type: Array,
      required: true
    },
  })
</script>