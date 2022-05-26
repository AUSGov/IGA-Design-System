<script setup lang="ts">
import PageMeta from '@theme/PageMeta.vue'
import PageNav from '@theme/PageNav.vue'
</script>

<template>
  <main class="page">
    <slot name="top" />

    <div class="page-content">
      <Content />

      <PageMeta />
    </div>

    <PageNav />

    <slot name="bottom" />
  </main>
</template>
